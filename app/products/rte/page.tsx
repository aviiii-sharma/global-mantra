"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, SlidersHorizontal } from "lucide-react";
import PageWrapper from "@/components/PageWrapper";
import { products } from "@/app/data/rte-products";

const categories = ["All", ...Array.from(new Set(products.map((p) => p.category)))];

// Collect all unique image URLs to preload
const allImageUrls: string[] = (() => {
    const urls = new Set<string>();
    urls.add("/images/producthero/hero-rte.png");
    products.forEach((p) => {
        urls.add(p.image);
        if (p.images) p.images.forEach((img) => urls.add(img));
    });
    return Array.from(urls);
})();

export default function RTEProductsPage() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [sortOpen, setSortOpen] = useState(false);
    const [filterOpen, setFilterOpen] = useState(false);
    const [sort, setSort] = useState("Featured");
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const [loadProgress, setLoadProgress] = useState(0);

    const preloadImages = useCallback(() => {
        let loaded = 0;
        const total = allImageUrls.length;

        if (total === 0) { setImagesLoaded(true); return; }

        allImageUrls.forEach((src) => {
            const img = new Image();
            const onDone = () => {
                loaded++;
                setLoadProgress(Math.round((loaded / total) * 100));
                if (loaded >= total) setImagesLoaded(true);
            };
            img.onload = onDone;
            img.onerror = onDone; // don't block on broken images
            img.src = src;
        });
    }, []);

    useEffect(() => {
        preloadImages();
    }, [preloadImages]);

    const filtered = [...products]
        .filter((p) => activeCategory === "All" || p.category === activeCategory)
        .sort((a, b) => {
            if (sort === "Name: A to Z") return a.name.localeCompare(b.name);
            if (sort === "Name: Z to A") return b.name.localeCompare(a.name);
            if (sort === "Newest") return b.id - a.id;
            return 0; 
        });

    /* ── Loading screen while images preload ── */
    if (!imagesLoaded) {
        return (
            <PageWrapper>
                <div className="flex flex-col items-center justify-center min-h-[80vh] bg-white gap-6">
                    {/* Spinner */}
                    <div className="relative w-16 h-16">
                        <div className="absolute inset-0 rounded-full border-4 border-gray-200" />
                        <div
                            className="absolute inset-0 rounded-full border-4 border-transparent border-t-gray-900 animate-spin"
                        />
                    </div>

                    {/* Progress text */}
                    <div className="flex flex-col items-center gap-2">
                        <p className="text-sm font-medium text-gray-700">
                            Loading products…
                        </p>

                        {/* Progress bar */}
                        <div className="w-48 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-gray-900 rounded-full transition-all duration-300 ease-out"
                                style={{ width: `${loadProgress}%` }}
                            />
                        </div>
                        <p className="text-xs text-gray-400">{loadProgress}%</p>
                    </div>
                </div>
            </PageWrapper>
        );
    }

    return (
        <PageWrapper>
            {/* ── Hero Section ── */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full"
            >
                <img 
                    src="/images/producthero/hero-rte.png" 
                    alt="Ready to Eat Hero" 
                    className="w-full h-auto object-cover max-h-[92vh]"
                />
            </motion.div>

            {/* ── Top filter bar ── */}
            <div className="border-b border-gray-200 bg-white sticky top-16 lg:top-20 z-30 shadow-sm">
                <div className="container-custom">
                    <div className="flex items-center justify-between py-3 gap-4">
                        {/* Left: Filter label + category pills */}
                        <div className="flex items-center gap-3">
                            <div className="hidden md:flex items-center gap-1.5 text-sm font-medium text-gray-700 flex-shrink-0">
                                <SlidersHorizontal className="w-4 h-4" />
                                Filter:
                            </div>
                            
                            {/* Desktop Category Pills */}
                            <div className="hidden md:flex gap-2 overflow-x-auto scrollbar-hide pb-0.5">
                                {categories.map((cat) => (
                                    <button
                                        key={cat}
                                        onClick={() => setActiveCategory(cat)}
                                        className={`flex-shrink-0 text-sm px-4 py-1.5 rounded-full border transition-all duration-200 font-medium ${
                                            activeCategory === cat
                                                ? "bg-gray-900 text-white border-gray-900"
                                                : "bg-white text-gray-600 border-gray-300 hover:border-gray-500"
                                        }`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>

                            {/* Mobile Category Dropdown */}
                            <div className="relative md:hidden">
                                <button
                                    onClick={() => setFilterOpen(!filterOpen)}
                                    className="flex items-center gap-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg px-3 py-1.5 hover:border-gray-500 transition-colors"
                                >
                                    <SlidersHorizontal className="w-4 h-4" />
                                    {activeCategory}
                                    <ChevronDown className={`w-4 h-4 transition-transform ${filterOpen ? "rotate-180" : ""}`} />
                                </button>
                                <AnimatePresence>
                                    {filterOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 4 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 4 }}
                                            className="absolute left-0 top-full mt-1 bg-white border border-gray-200 rounded-xl shadow-lg py-1 w-48 z-50"
                                        >
                                            {categories.map((cat) => (
                                                <button
                                                    key={cat}
                                                    onClick={() => { setActiveCategory(cat); setFilterOpen(false); }}
                                                    className={`w-full text-left px-4 py-2 text-sm transition-colors hover:bg-gray-50 ${activeCategory === cat ? "font-semibold text-gray-900" : "text-gray-600"}`}
                                                >
                                                    {cat}
                                                </button>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>

                        {/* Right: Sort + count */}
                        <div className="flex items-center gap-4 flex-shrink-0">
                            <span className="text-sm text-gray-500 hidden sm:block">
                                {filtered.length} products
                            </span>
                            <div className="relative">
                                <button
                                    onClick={() => setSortOpen(!sortOpen)}
                                    className="flex items-center gap-1.5 text-sm text-gray-700 border border-gray-300 rounded-lg px-3 py-1.5 hover:border-gray-500 transition-colors"
                                >
                                    Sort by: <span className="font-medium">{sort}</span>
                                    <ChevronDown className={`w-4 h-4 transition-transform ${sortOpen ? "rotate-180" : ""}`} />
                                </button>
                                <AnimatePresence>
                                    {sortOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 4 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 4 }}
                                            className="absolute right-0 top-full mt-1 bg-white border border-gray-200 rounded-xl shadow-lg py-1 w-44 z-50"
                                        >
                                            {["Featured", "Name: A to Z", "Name: Z to A", "Newest"].map((s) => (
                                                <button
                                                    key={s}
                                                    onClick={() => { setSort(s); setSortOpen(false); }}
                                                    className={`w-full text-left px-4 py-2 text-sm transition-colors hover:bg-gray-50 ${sort === s ? "font-semibold text-gray-900" : "text-gray-600"}`}
                                                >
                                                    {s}
                                                </button>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Products Grid ── */}
            <div className="bg-gray-50 min-h-screen">
                <div className="container-custom py-6 sm:py-8 lg:py-10">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeCategory}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5"
                        >
                            {filtered.map((product, i) => (
                                <motion.div
                                    key={product.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: i * 0.05 }}
                                >
                                    <Link href={`/products/rte/${product.slug}`} className="group block">
                                        <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-300">
                                            {/* Image container */}
                                            <div className="relative aspect-square overflow-hidden bg-gray-50">
                                                {product.badge && (
                                                    <div className="absolute top-3 left-3 z-10 bg-gray-900 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full">
                                                        {product.badge}
                                                    </div>
                                                )}
                                                
                                                {/* Primary Image */}
                                                <img
                                                    src={product.image}
                                                    alt={product.name}
                                                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                                                    onError={(e) => {
                                                        const el = e.target as HTMLImageElement;
                                                        el.style.display = "none";
                                                        (el.parentElement as HTMLElement).innerHTML += `<div class="w-full h-full flex items-center justify-center text-7xl absolute inset-0"></div>`;
                                                    }}
                                                />

                                                {/* Hover Image (Third image) */}
                                                {product.images && product.images.length > 2 && (
                                                    <img
                                                        src={product.images[2]}
                                                        alt={`${product.name} hover`}
                                                        className="absolute inset-0 w-full h-full object-cover opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:scale-105"
                                                        onError={(e) => {
                                                            const el = e.target as HTMLImageElement;
                                                            el.style.display = "none";
                                                        }}
                                                    />
                                                )}
                                            </div>

                                            {/* Card info */}
                                            <div className="p-4">
                                                <div className="text-[11px] text-gray-400 uppercase tracking-wider mb-1">{product.category}</div>
                                                <h3 className="font-semibold text-gray-900 text-sm leading-snug mb-1">
                                                    {product.name}
                                                </h3>
                                                <p className="text-xs text-gray-500 mb-3 line-clamp-1">{product.subtitle}</p>
                                                <motion.button
                                                    whileTap={{ scale: 0.97 }}
                                                    className="w-full border border-gray-300 text-gray-700 text-sm font-medium py-2 rounded-full hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-200"
                                                >
                                                    View Details
                                                </motion.button>
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </PageWrapper>
    );
}