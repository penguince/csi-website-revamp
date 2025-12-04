import { cva } from "class-variance-authority";
import clsx from "clsx";
import {
    type ComponentProps,
    type ElementType,
    type KeyboardEvent,
    type ReactNode,
    createContext,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useRef,
    useState,
} from "react";
import { useEventCallback } from "usehooks-ts";

const defaultRootElement = "div" as const;
const defaultItemElement = "div" as const;
const defaultTriggerElement = "button" as const;
const defaultContentElement = "div" as const;

namespace Accordion {
	export interface BaseRootElementProps {
		className?: undefined | string;
		children?: ReactNode;
	}

	export type BaseRootElementType = ElementType<BaseRootElementProps>;

	export interface OwnProps {
		/**
		 * Whether multiple items can be expanded at once
		 */
		allowMultiple?: boolean;

		/**
		 * Whether to allow all items to be collapsed
		 */
		allowToggle?: boolean;

		/**
		 * Default expanded items (uncontrolled)
		 */
		defaultExpandedItems?: string[];

		/**
		 * Controlled expanded items
		 */
		expandedItems?: string[];

		/**
		 * Callback when expanded items change
		 */
		onExpandedChange?: (expandedItems: string[]) => void;

		/**
		 * Accordion variant
		 */
		variant?: "default" | "bordered" | "shadow" | "splitted";

		/**
		 * Whether to disable animations
		 */
		disableAnimation?: boolean;

		/**
		 * Whether to show dividers between items
		 */
		showDivider?: boolean;

		/**
		 * Override the default root element
		 */
		component?: BaseRootElementType;
	}

	export type Props<
		TRootElement extends BaseRootElementType = typeof defaultRootElement,
	> = Overwrite<ComponentProps<TRootElement>, OwnProps>;

	export interface Type {
		<TRootElement extends BaseRootElementType = typeof defaultRootElement>(
			props: Overwrite<Props<TRootElement>, { component: TRootElement }>,
		): ReactNode;
		(props: DistributiveOmit<Props, "component">): ReactNode;
	}
}

namespace AccordionItem {
	export interface BaseItemElementProps {
		className?: undefined | string;
		children?: ReactNode;
	}

	export interface BaseTriggerElementProps {
		className?: undefined | string;
		onClick?: React.MouseEventHandler<HTMLButtonElement>;
		onKeyDown?: React.KeyboardEventHandler<HTMLButtonElement>;
		"aria-expanded"?: boolean;
		"aria-controls"?: string;
		id?: string;
	}

	export interface BaseContentElementProps {
		className?: undefined | string;
		children?: ReactNode;
		id?: string;
		"aria-labelledby"?: string;
		role?: string;
	}

	export type BaseItemElementType = ElementType<BaseItemElementProps>;
	export type BaseTriggerElementType = ElementType<BaseTriggerElementProps>;
	export type BaseContentElementType = ElementType<BaseContentElementProps>;

	export interface OwnProps {
		/**
		 * Unique identifier for this item
		 */
		value: string;

		/**
		 * The trigger content (header)
		 */
		trigger: ReactNode;

		/**
		 * Whether this item is disabled
		 */
		disabled?: boolean;

		/**
		 * Custom indicator icon
		 */
		indicator?: ReactNode | ((isExpanded: boolean) => ReactNode);

		/**
		 * Override default elements
		 */
		itemComponent?: BaseItemElementType;
		triggerComponent?: BaseTriggerElementType;
		contentComponent?: BaseContentElementType;
	}

	export type Props<
		TItemElement extends BaseItemElementType = typeof defaultItemElement,
		TTriggerElement extends
			BaseTriggerElementType = typeof defaultTriggerElement,
		TContentElement extends
			BaseContentElementType = typeof defaultContentElement,
	> = Overwrite<BaseItemElementProps, OwnProps> & {
		itemComponent?: TItemElement;
		triggerComponent?: TTriggerElement;
		contentComponent?: TContentElement;
	};

	export type Type = <
		TItemElement extends BaseItemElementType = typeof defaultItemElement,
		TTriggerElement extends
			BaseTriggerElementType = typeof defaultTriggerElement,
		TContentElement extends
			BaseContentElementType = typeof defaultContentElement,
	>(
		props: Props<TItemElement, TTriggerElement, TContentElement>,
	) => ReactNode;
}

// Accordion Context
interface AccordionContextValue {
	expandedItems: Set<string>;
	toggleItem: (value: string) => void;
	allowMultiple: boolean;
	allowToggle: boolean;
	variant: Accordion.OwnProps["variant"];
	disableAnimation: boolean;
	showDivider: boolean;
}

const AccordionContext = createContext<AccordionContextValue | null>(null);

const useAccordionContext = () => {
	const context = useContext(AccordionContext);
	if (!context) {
		throw new Error("AccordionItem must be used within an Accordion");
	}
	return context;
};

// Define the accordion variants using CVA
const accordionVariants = cva("w-full", {
	variants: {
		variant: {
			default: "divide-y divide-border",
			bordered: "divide-y divide-border rounded-lg border border-border",
			shadow: "divide-y divide-border rounded-lg shadow-sm",
			splitted: "space-y-2",
		},
		disableAnimation: {
			true: "",
			false: "",
		},
		showDivider: {
			true: "",
			false: "divide-y-0",
		},
	},
	defaultVariants: {
		variant: "default",
		disableAnimation: false,
		showDivider: true,
	},
});

// Define the accordion item variants
const accordionItemVariants = cva("", {
	variants: {
		variant: {
			default: "",
			bordered: "first:rounded-t-lg last:rounded-b-lg",
			shadow: "first:rounded-t-lg last:rounded-b-lg",
			splitted: "rounded-lg border border-border bg-card",
		},
		isExpanded: {
			true: "",
			false: "",
		},
		disabled: {
			true: "opacity-50 cursor-not-allowed",
			false: "",
		},
	},
	defaultVariants: {
		variant: "default",
		isExpanded: false,
		disabled: false,
	},
});

// Define the accordion trigger variants
const accordionTriggerVariants = cva(
	"flex w-full items-center justify-between px-4 py-3 text-left text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
	{
		variants: {
			isExpanded: {
				true: "bg-accent text-accent-foreground",
				false: "bg-background text-foreground",
			},
			disabled: {
				true: "cursor-not-allowed opacity-50",
				false: "",
			},
		},
		defaultVariants: {
			isExpanded: false,
			disabled: false,
		},
	},
);

// Define the accordion content variants
const accordionContentVariants = cva("overflow-hidden text-sm", {
	variants: {
		isExpanded: {
			true: "",
			false: "",
		},
		disableAnimation: {
			true: "",
			false: "transition-all duration-200 ease-in-out",
		},
	},
	defaultVariants: {
		isExpanded: false,
		disableAnimation: false,
	},
});

const AccordionInternal: Accordion.Type = ({
	component: Component = defaultRootElement,
	allowMultiple = false,
	allowToggle = true,
	defaultExpandedItems = [],
	expandedItems: controlledExpandedItems,
	onExpandedChange,
	variant = "default",
	disableAnimation = false,
	showDivider = true,
	children,
	...props
}: Overwrite<Accordion.BaseRootElementProps, Accordion.OwnProps>) => {
	const isControlled = controlledExpandedItems !== undefined;

	const [internalExpandedItems, setInternalExpandedItems] = useState<string[]>(
		() => (isControlled ? controlledExpandedItems : defaultExpandedItems),
	);

	const expandedItems = isControlled
		? controlledExpandedItems
		: internalExpandedItems;
	const expandedSet = useMemo(() => new Set(expandedItems), [expandedItems]);

	const toggleItem = useCallback(
		(value: string) => {
			const newExpandedItems = [...expandedItems];
			const index = newExpandedItems.indexOf(value);

			if (index >= 0) {
				// Item is currently expanded
				if (allowToggle || (!allowToggle && newExpandedItems.length > 1)) {
					newExpandedItems.splice(index, 1);
				}
			} else {
				// Item is currently collapsed
				if (allowMultiple) {
					newExpandedItems.push(value);
				} else {
					newExpandedItems.splice(0, newExpandedItems.length, value);
				}
			}

			if (!isControlled) {
				setInternalExpandedItems(newExpandedItems);
			}
			onExpandedChange?.(newExpandedItems);
		},
		[expandedItems, allowMultiple, allowToggle, isControlled, onExpandedChange],
	);

	const className = useMemo<Accordion.BaseRootElementProps["className"]>(
		() =>
			accordionVariants({
				variant,
				disableAnimation,
				showDivider,
				className: props.className,
			}),
		[props.className, variant, disableAnimation, showDivider],
	);

	const contextValue = useMemo<AccordionContextValue>(
		() => ({
			expandedItems: expandedSet,
			toggleItem,
			allowMultiple,
			allowToggle,
			variant,
			disableAnimation,
			showDivider,
		}),
		[
			expandedSet,
			toggleItem,
			allowMultiple,
			allowToggle,
			variant,
			disableAnimation,
			showDivider,
		],
	);

	return (
		<AccordionContext.Provider value={contextValue}>
			<Component {...props} className={className} role="tablist">
				{children}
			</Component>
		</AccordionContext.Provider>
	);
};

const AccordionItemInternal: AccordionItem.Type = <
	TItemElement extends
		AccordionItem.BaseItemElementType = typeof defaultItemElement,
	TTriggerElement extends
		AccordionItem.BaseTriggerElementType = typeof defaultTriggerElement,
	TContentElement extends
		AccordionItem.BaseContentElementType = typeof defaultContentElement,
>({
	value,
	trigger,
	disabled = false,
	indicator,
	children,
	itemComponent: ItemComponent = defaultItemElement as TItemElement,
	triggerComponent: TriggerComponent = defaultTriggerElement as TTriggerElement,
	contentComponent: ContentComponent = defaultContentElement as TContentElement,
	...props
}: AccordionItem.Props<TItemElement, TTriggerElement, TContentElement>) => {
	const context = useAccordionContext();
	const isExpanded = context.expandedItems.has(value);
	const contentRef = useRef<HTMLDivElement>(null);
	const [contentHeight, setContentHeight] = useState<number | undefined>(
		undefined,
	);

	const triggerId = `accordion-trigger-${value}`;
	const contentId = `accordion-content-${value}`;

	// Update content height when expanded/collapsed
	useEffect(() => {
		if (contentRef.current && !context.disableAnimation) {
			if (isExpanded) {
				setContentHeight(contentRef.current.scrollHeight);
			} else {
				setContentHeight(0);
			}
		}
	}, [isExpanded, context.disableAnimation, children]);

	const handleTriggerClick = useEventCallback(() => {
		if (!disabled) {
			context.toggleItem(value);
		}
	});

	const handleTriggerKeyDown = useEventCallback(
		(e: KeyboardEvent<HTMLButtonElement>) => {
			if (disabled) return;

			// Handle Enter and Space keys
			if (e.key === "Enter" || e.key === " ") {
				e.preventDefault();
				context.toggleItem(value);
			}
		},
	);

	const itemClassName = useMemo(
		() =>
			accordionItemVariants({
				variant: context.variant,
				isExpanded,
				disabled,
				className: props.className,
			}),
		[props.className, isExpanded, disabled, context.variant],
	);

	const triggerClassName = useMemo(
		() => accordionTriggerVariants({ isExpanded, disabled }),
		[isExpanded, disabled],
	);

	const contentClassName = useMemo(
		() =>
			accordionContentVariants({
				isExpanded,
				disableAnimation: context.disableAnimation,
			}),
		[isExpanded, context.disableAnimation],
	);

	const renderIndicator = () => {
		if (typeof indicator === "function") {
			return indicator(isExpanded);
		}
		if (indicator) {
			return indicator;
		}
		// Default chevron indicator
		return (
			<span
				className={clsx(
					"h-4 w-4 shrink-0 transition-transform duration-200",
					isExpanded ? "rotate-180" : "",
				)}
				aria-hidden="true"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="h-4 w-4"
				>
					<path d="m6 9 6 6 6-6" />
				</svg>
			</span>
		);
	};

	const contentStyle = useMemo(() => {
		if (context.disableAnimation) {
			return isExpanded ? {} : { display: "none" };
		}
		return {
			height: isExpanded ? contentHeight : 0,
			overflow: "hidden",
			transition: "height 0.2s ease-in-out",
		};
	}, [isExpanded, contentHeight, context.disableAnimation]);

	const ItemElement = ItemComponent as React.ElementType;
	const TriggerElement = TriggerComponent as React.ElementType;
	const ContentElement = ContentComponent as React.ElementType;

	return (
		<ItemElement className={itemClassName}>
			<TriggerElement
				className={triggerClassName}
				onClick={handleTriggerClick}
				onKeyDown={handleTriggerKeyDown}
				disabled={disabled}
				aria-expanded={isExpanded}
				aria-controls={contentId}
				id={triggerId}
				role="tab"
			>
				<span className="flex-1">{trigger}</span>
				{renderIndicator()}
			</TriggerElement>

			<ContentElement
				ref={contentRef}
				className={contentClassName}
				style={contentStyle}
				id={contentId}
				aria-labelledby={triggerId}
				role="tabpanel"
				aria-hidden={!isExpanded}
			>
				{isExpanded && <div className="p-4 pt-0">{children}</div>}
			</ContentElement>

			{context.showDivider && context.variant !== "splitted" && (
				<div className="h-px bg-border" aria-hidden="true" />
			)}
		</ItemElement>
	);
};

export const Accordion = AccordionInternal;
export const AccordionItem = AccordionItemInternal;

// Type exports for external usage
export type AccordionProps = Accordion.Props;
export type AccordionItemProps = AccordionItem.Props;
