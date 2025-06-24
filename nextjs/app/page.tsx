"use client";

import VirtualScrollList from "../components/VirtualScrollList";

export default function Home() {
    const data = Array.from({ length: 10000 }, (_, i) => `아이템 #${i + 1}`);

    return (
        <main className="p-5">
            <h1 className="p-3 text-xl font-semibold">
                Next.js + 가상 스크롤 예시
            </h1>
            <VirtualScrollList
                items={data}
                itemHeight={40}
                height={400}
                overscan={5}
            />
        </main>
    );
}
