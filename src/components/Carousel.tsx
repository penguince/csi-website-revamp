"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

interface CarouselSlide {
	src: string;
	alt: string;
}

interface CarouselProps {
	slides: CarouselSlide[];
	autoPlayInterval?: number;
	className?: string;
}

const Carousel = ({
	slides,
	autoPlayInterval = 5000,
	className = "",
}: CarouselProps) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isPaused, setIsPaused] = useState(false);
	const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);

	const goToNext = useCallback(() => {
		setCurrentIndex((prev) => (prev + 1) % slides.length);
	}, [slides.length]);

	const goToPrevious = useCallback(() => {
		setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
	}, [slides.length]);

	const goToSlide = useCallback((index: number) => {
		setCurrentIndex(index);
	}, []);

	// Auto-play functionality
	useEffect(() => {
		if (!isPaused && autoPlayInterval > 0) {
			autoPlayRef.current = setInterval(goToNext, autoPlayInterval);
		}
		return () => {
			if (autoPlayRef.current) {
				clearInterval(autoPlayRef.current);
			}
		};
	}, [isPaused, autoPlayInterval, goToNext]);

	// Keyboard navigation
	const handleKeyDown = useCallback(
		(e: React.KeyboardEvent) => {
			if (e.key === "ArrowLeft") {
				e.preventDefault();
				goToPrevious();
			} else if (e.key === "ArrowRight") {
				e.preventDefault();
				goToNext();
			}
		},
		[goToNext, goToPrevious]
	);

	return (
		<div
			className={`relative w-full h-full ${className}`}
			style={{ minHeight: "100%" }}
			role="region"
			aria-roledescription="carousel"
			aria-label="Image carousel"
			onMouseEnter={() => setIsPaused(true)}
			onMouseLeave={() => setIsPaused(false)}
			onKeyDown={handleKeyDown}
			tabIndex={0}
		>
			{/* Screen reader announcement */}
			<div aria-live="polite" aria-atomic="true" className="sr-only">
				Slide {currentIndex + 1} of {slides.length}: {slides[currentIndex].alt}
			</div>

			{/* All slides - current one visible, others hidden */}
			{slides.map((slide, index) => (
				<img
					key={index}
					src={slide.src}
					alt={slide.alt}
					className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out ${
						index === currentIndex ? "opacity-100" : "opacity-0"
					}`}
					style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
					aria-hidden={index !== currentIndex}
					loading={index === 0 ? "eager" : "lazy"}
				/>
			))}

			{/* Dark overlay */}
			<div 
				className="absolute inset-0 bg-black/40 pointer-events-none"
				style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 1 }}
			/>

			{/* Navigation - Previous */}
			<button
				onClick={goToPrevious}
				className="absolute left-4 p-3 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-white cursor-pointer"
				style={{ position: "absolute", top: "50%", transform: "translateY(-50%)", zIndex: 2 }}
				aria-label="Previous slide"
				type="button"
			>
				<ChevronLeft className="w-6 h-6" />
			</button>

			{/* Navigation - Next */}
			<button
				onClick={goToNext}
				className="absolute right-4 p-3 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-white cursor-pointer"
				style={{ position: "absolute", top: "50%", transform: "translateY(-50%)", zIndex: 2 }}
				aria-label="Next slide"
				type="button"
			>
				<ChevronRight className="w-6 h-6" />
			</button>

			{/* Dot indicators */}
			<div 
				className="absolute left-1/2 flex gap-3"
				style={{ position: "absolute", bottom: "24px", transform: "translateX(-50%)", zIndex: 2 }}
			>
				{slides.map((_, index) => (
					<button
						key={index}
						onClick={() => goToSlide(index)}
						aria-label={`Go to slide ${index + 1}`}
						className={`w-3 h-3 rounded-full transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-white ${
							index === currentIndex
								? "bg-white"
								: "bg-white/50 hover:bg-white/75"
						}`}
					/>
				))}
			</div>
		</div>
	);
};

export default Carousel;
