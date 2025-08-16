"use client";

import { useCallback, useEffect, useRef, useState } from "react";

interface VirtualScrollListProps {
    items: string[];
    itemHeight?: number;
    height?: number;
    overscan?: number;
}

export default function VirtualScrollList({
    items,
    itemHeight = 50,
    height = 500,
    overscan = 5,
}: VirtualScrollListProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [scrollTop, setScrollTop] = useState(0);

    const onScroll = useCallback(() => {
        if (!containerRef.current) return;
        const top = containerRef.current.scrollTop;
        window.requestAnimationFrame(() => setScrollTop(top));
    }, []);

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;
        el.addEventListener("scroll", onScroll);
        return () => el.removeEventListener("scroll", onScroll);
    }, [onScroll]);

    const totalCount = items.length;
    const startIndex = Math.max(
        0,
        Math.floor(scrollTop / itemHeight) - overscan,
    );
    const endIndex = Math.min(
        totalCount,
        Math.ceil((scrollTop + height) / itemHeight) + overscan,
    );
    const visibleItems = items.slice(startIndex, endIndex);
    const spacerBefore = startIndex * itemHeight;
    const spacerAfter = (totalCount - endIndex) * itemHeight;

    useEffect(() => {
        const el = containerRef.current;
        console.log(
            `[VirtualScroll] startIndex=${startIndex} `,
            `endIndex=${endIndex} `,
            `visibleItems=${visibleItems.length} `,
            `DOM nodes=${el?.childElementCount} `,
        );
    }, [startIndex, endIndex, visibleItems.length]);

    return (
        <div
            ref={containerRef}
            className="relative w-full overflow-y-auto border border-gray-200"
            style={{ height: `${height}px` }}
        >
            <div style={{ height: spacerBefore }} />

            {visibleItems.map((item, idx) => (
                <div
                    key={startIndex + idx}
                    className="box-border flex items-center border-b border-gray-100 px-3"
                    style={{ height: `${itemHeight}px` }}
                >
                    {item}
                </div>
            ))}

            <div style={{ height: spacerAfter }} />
        </div>
    );
}
