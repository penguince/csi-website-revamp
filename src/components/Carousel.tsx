"use client";

import { Pause, Play } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Picture } from "./Picture";

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
	const [isPlaying, setIsPlaying] = useState(true);
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

	const togglePlayPause = useCallback(() => {
		setIsPlaying((prev) => !prev);
	}, []);

	// Auto-play functionality - controlled by isPlaying state
	useEffect(() => {
		if (autoPlayInterval > 0 && isPlaying) {
			autoPlayRef.current = setInterval(goToNext, autoPlayInterval);
		}
		return () => {
			if (autoPlayRef.current) {
				clearInterval(autoPlayRef.current);
			}
		};
	}, [autoPlayInterval, goToNext, isPlaying]);

	// Keyboard navigation
	const handleKeyDown = useCallback(
		(e: React.KeyboardEvent) => {
			if (e.key === "ArrowLeft") {
				e.preventDefault();
				goToPrevious();
			} else if (e.key === "ArrowRight") {
				e.preventDefault();
				goToNext();
			} else if (e.key === " " || e.key === "Spacebar") {
				e.preventDefault();
				togglePlayPause();
			}
		},
		[goToNext, goToPrevious, togglePlayPause]
	);

	return (
		<div
			className={`relative w-full h-full group ${className}`}
			style={{ minHeight: "100%" }}
			role="region"
			aria-roledescription="carousel"
			aria-label="Image carousel"
			onKeyDown={handleKeyDown}
			tabIndex={0}
		>
			{/* Screen reader announcement */}
			<div aria-live="polite" aria-atomic="true" className="sr-only">
				Slide {currentIndex + 1} of {slides.length}: {slides[currentIndex].alt}
			</div>

			{/* All slides - current one visible, others hidden */}
			{slides.map((slide, index) => (
				<Picture
					key={index}
					src={slide.src}
					alt={slide.alt}
					className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
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

			{/* Bottom controls: Dots + Play/Pause */}
			<div 
				className="absolute left-1/2 flex gap-3 items-center"
				style={{ position: "absolute", bottom: "24px", transform: "translateX(-50%)", zIndex: 2 }}
			>
				{/* Dot indicators */}
				{slides.map((_, index) => (
					<button
						key={index}
						onClick={() => goToSlide(index)}
						aria-label={`Go to slide ${index + 1}`}
						aria-current={index === currentIndex}
						className={`w-3 h-3 rounded-full transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-white ${
							index === currentIndex
								? "bg-white scale-110"
								: "bg-white/50 hover:bg-white/75"
						}`}
					/>
				))}
				
				{/* Pause/Play button */}
				<button
					onClick={togglePlayPause}
					aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
					className="ml-2 p-1.5 bg-white/20 hover:bg-white/30 text-white rounded-full transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-white"
				>
					{isPlaying ? (
						<Pause className="w-3 h-3" />
					) : (
						<Play className="w-3 h-3" />
					)}
				</button>
			</div>
		</div>
	);
};

export default Carousel;
