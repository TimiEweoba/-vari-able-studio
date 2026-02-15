import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ImageSliderProps {
    images: string[];
}

export function ImageSlider({ images }: ImageSliderProps) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
    const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
    const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
        setPrevBtnEnabled(emblaApi.canScrollPrev());
        setNextBtnEnabled(emblaApi.canScrollNext());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        emblaApi.on("select", onSelect);
        emblaApi.on("reInit", onSelect);
    }, [emblaApi, onSelect]);

    return (
        <div className="relative group w-full aspect-video mb-8 md:mb-12 rounded-2xl overflow-hidden border border-white/5">
            <div className="overflow-hidden h-full" ref={emblaRef}>
                <div className="flex h-full">
                    {images.map((src, index) => (
                        <div className="flex-[0_0_100%] min-w-0 relative h-full" key={index}>
                            <img
                                src={src}
                                alt={`Slide ${index + 1}`}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation Buttons */}
            <div className="absolute inset-x-2 md:inset-x-4 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none">
                <button
                    onClick={scrollPrev}
                    className={`w-10 h-10 md:w-12 md:h-12 rounded-full min-h-0 bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center text-white transition-all pointer-events-auto hover:bg-primary hover:border-primary group/btn ${!prevBtnEnabled && 'opacity-0'}`}
                >
                    <ChevronLeft className="w-4 h-4 md:w-6 md:h-6 group-hover/btn:-translate-x-1 transition-transform" />
                </button>
                <button
                    onClick={scrollNext}
                    className={`w-10 h-10 md:w-12 md:h-12 rounded-full min-h-0 bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center text-white transition-all pointer-events-auto hover:bg-primary hover:border-primary group/btn ${!nextBtnEnabled && 'opacity-0'}`}
                >
                    <ChevronRight className="w-4 h-4 md:w-6 md:h-6 group-hover/btn:translate-x-1 transition-transform" />
                </button>
            </div>

            {/* Pagination Grid */}
            <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5 md:gap-2 p-1.5 md:p-2 bg-black/20 backdrop-blur-sm rounded-full">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => emblaApi?.scrollTo(index)}
                        className={`w-1 h-1 md:w-1.5 md:h-1.5 rounded-full min-h-0 transition-all duration-300 ${index === selectedIndex ? 'bg-primary w-3 md:w-4' : 'bg-white/40'}`}
                    />
                ))}
            </div>

            {/* Progress Indicator */}
            <div className="absolute top-4 md:top-6 right-4 md:right-6 px-3 md:px-4 py-1.5 md:py-2 bg-black/50 backdrop-blur-md rounded-lg border border-white/10 text-[8px] md:text-[10px] font-black uppercase tracking-widest text-white/60">
                {selectedIndex + 1} / {images.length}
            </div>
        </div>
    );
}
