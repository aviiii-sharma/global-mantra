"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
    Package,
    ArrowRight,
    FileText,
    Search,
    Tag,
    X,
    ChevronRight,
    ChevronDown,
    SlidersHorizontal,
    Layers,
    Grid3X3,
    Palette,
    Ruler,
    Zap,
    Box,
} from "lucide-react";
import PageWrapper from "@/components/PageWrapper";

import { products } from "@/app/data/packaging-products";

const categories = ["All", "PP Woven", "HDPE / LDPE", "FIBC / Jumbo", "Specialty"];

const shippingTerms = ["FOB Mundra / JNPT", "CIF Major Ports Worldwide", "EXW Factory as negotiated"];

// ─── Component ───────────────────────────────────────────────────────────────

export default function PackagingProductsPage() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [filterOpen, setFilterOpen] = useState(false);
    const [search, setSearch] = useState("");
    const [selectedCert, setSelectedCert] = useState<{ file: string; label: string } | null>(null);

    const filtered = products.filter((p) => {
        const matchCat = activeCategory === "All" || p.category === activeCategory;
        const matchSearch =
            p.name.toLowerCase().includes(search.toLowerCase()) ||
            p.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));
        return matchCat && matchSearch;
    });

    return (
        <PageWrapper>
            {/* ── Hero ── */}
            <section className="relative py-16 sm:py-28 overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage:
                            "url('/images/producthero/hero-package.jpg')",
                    }}
                />
                <div className="absolute inset-0 bg-navy/80" />
                <div className="container-custom relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <nav className="flex items-center gap-2 text-gray-400 text-sm mb-6">
                            <Link href="/products" className="hover:text-teal transition-colors">
                                Products
                            </Link>
                            <span>/</span>
                            <span className="text-white">Packaging Materials</span>
                        </nav>

                        <div className="flex items-center gap-3 sm:gap-4 mb-4 flex-wrap">
                            <div className="w-12 h-12 rounded-xl bg-teal/20 border border-teal/40 flex items-center justify-center">
                                <Package className="w-6 h-6 text-teal" />
                            </div>
                            <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 text-xs font-bold rounded-full border border-yellow-500/30">
                                BIS Certified
                            </span>
                            <span className="px-3 py-1 bg-teal/20 text-teal text-xs font-bold rounded-full border border-teal/30">
                                {products.length} Products
                            </span>
                        </div>

                        <h1 className="font-poppins text-3xl lg:text-5xl font-bold text-white mb-4">
                            Packaging Materials
                        </h1>
                        <p className="text-gray-300 text-lg max-w-2xl">
                            Export-grade industrial packaging engineered for global supply chains — PP woven, HDPE,
                            LDPE, FIBC, and specialty solutions.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ── Filter Bar ── */}
            <div className="sticky top-16 lg:top-20 z-30 bg-white border-b border-gray-200 shadow-sm py-3">
                <div className="container-custom flex flex-col sm:flex-row items-start sm:items-center gap-3">
                    {/* Filter (Mobile) & Category pills (Desktop) */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 flex-1 w-full sm:w-auto">
                        <div className="hidden md:flex items-center gap-1.5 text-sm font-medium text-gray-700 flex-shrink-0">
                            <SlidersHorizontal className="w-4 h-4" />
                            Filter:
                        </div>
                        
                        {/* Desktop Category Pills */}
                        <div className="hidden md:flex items-center gap-2 flex-wrap flex-1">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all border ${activeCategory === cat
                                        ? "bg-navy text-white border-navy"
                                        : "bg-white text-navy border-gray-200 hover:border-teal hover:text-teal"
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>

                        {/* Mobile Category Dropdown */}
                        <div className="relative md:hidden w-full sm:w-auto">
                            <button
                                onClick={() => setFilterOpen(!filterOpen)}
                                className="w-full sm:w-48 flex justify-between items-center gap-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg px-3 py-2 hover:border-gray-500 transition-colors"
                            >
                                <div className="flex items-center gap-2">
                                    <SlidersHorizontal className="w-4 h-4" />
                                    {activeCategory}
                                </div>
                                <ChevronDown className={`w-4 h-4 transition-transform ${filterOpen ? "rotate-180" : ""}`} />
                            </button>
                            <AnimatePresence>
                                {filterOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 4 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 4 }}
                                        className="absolute left-0 top-full mt-1 bg-white border border-gray-200 rounded-xl shadow-lg py-1 w-full sm:w-48 z-50"
                                    >
                                        {categories.map((cat) => (
                                            <button
                                                key={cat}
                                                onClick={() => { setActiveCategory(cat); setFilterOpen(false); }}
                                                className={`w-full text-left px-4 py-2 text-sm transition-colors hover:bg-gray-50 ${activeCategory === cat ? "font-semibold text-navy" : "text-gray-600"}`}
                                            >
                                                {cat}
                                            </button>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Search */}
                    <div className="relative w-full sm:w-56">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search products…"
                            className="w-full pl-9 pr-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-teal transition-colors"
                        />
                    </div>
                </div>
            </div>

            {/* ── Product Grid ── */}
            <div className="bg-gray-50 min-h-screen">
                <div className="container-custom py-6 sm:py-8 lg:py-10">
                    {/* Results count */}
                    <p className="text-sm text-gray-500 mb-6">
                        Showing <span className="font-semibold text-navy">{filtered.length}</span> of{" "}
                        {products.length} products
                    </p>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        <AnimatePresence mode="popLayout">
                            {filtered.map((item, i) => (
                                <motion.div
                                    key={item.id}
                                    layout
                                    initial={{ opacity: 0, y: 16 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.3, delay: i * 0.04 }}
                                    className="h-full"
                                >
                                    <Link
                                        href={`/products/packaging/${item.slug}`}
                                        className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-teal/50 hover:shadow-lg transition-all group cursor-pointer flex flex-col h-full block"
                                    >
                                        {/* Product Image */}
                                        <div className="relative h-48 bg-gray-100 overflow-hidden">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                onError={(e) => {
                                                    (e.target as HTMLImageElement).src =
                                                        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=60";
                                                }}
                                            />
                                            {/* Category badge */}
                                            <span className="absolute top-3 left-3 px-2 py-0.5 bg-navy/80 text-white text-[10px] font-bold rounded-full backdrop-blur-sm">
                                                {item.category}
                                            </span>
                                        </div>

                                        {/* Card body */}
                                        <div className="p-4 flex flex-col flex-1">
                                            <h3 className="font-poppins font-bold text-navy text-sm leading-snug mb-1 group-hover:text-teal transition-colors">
                                                {item.name}
                                            </h3>
                                            <p className="text-gray-500 text-xs leading-relaxed mb-3 flex-1">
                                                {item.shortSpec}
                                            </p>

                                            {/* Tags */}
                                            <div className="flex flex-wrap gap-1 mb-4">
                                                {item.tags.map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className="flex items-center gap-1 px-2 py-0.5 bg-teal/10 text-teal border border-teal/20 text-[10px] font-semibold rounded-full"
                                                    >
                                                        <Tag className="w-2.5 h-2.5" />
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>

                                            {/* Footer row */}
                                            <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                                                <div>
                                                    <div className="text-[10px] text-gray-400 uppercase tracking-wider">
                                                        MOQ
                                                    </div>
                                                    <div className="text-xs font-semibold text-navy">{item.moq}</div>
                                                </div>
                                                <span className="text-teal text-xs font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                                                    Details <ChevronRight className="w-3.5 h-3.5" />
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    {filtered.length === 0 && (
                        <div className="text-center py-20 text-gray-400">
                            <Package className="w-12 h-12 mx-auto mb-3 opacity-30" />
                            <p className="font-semibold">No products match your search.</p>
                        </div>
                    )}
                </div>
            </div>



            {/* ── Certifications & CTA ── */}
            <section className="bg-navy py-14">
                <div className="container-custom">
                    <div className="flex flex-col lg:flex-row gap-12 items-start">

                        {/* Left: heading + certificate images */}
                        <div className="flex-1">
                            <div className="text-gray-400 text-xs uppercase tracking-widest mb-1">Verified &amp; Compliant</div>
                            <h2 className="font-poppins text-white text-2xl font-bold mb-6">
                                Our Certifications
                            </h2>
                            <div className="grid grid-cols-3 sm:grid-cols-5 gap-4">
                                {[
                                    { file: "GST.png", label: "GST Certified" },
                                    { file: "ISO9001.png", label: "ISO 9001:2015" },
                                    { file: "MSME.png", label: "MSME (Udyam)" },
                                    { file: "IEC.png", label: "Import Export Code (IEC)" },
                                    { file: "PWM.png", label: "Plastic Waste Management (EPR)" },
                                ].map(({ file, label }) => (
                                    <div
                                        key={file}
                                        className="flex flex-col items-center gap-2 group cursor-pointer"
                                        onClick={() => setSelectedCert({ file, label })}
                                    >
                                        <div className="w-full aspect-square bg-white/5 border border-white/10 rounded-xl flex items-center justify-center p-2 group-hover:border-teal/40 group-hover:bg-white/10 group-hover:scale-105 transition-all duration-200 overflow-hidden">
                                            <img
                                                src={`/images/mbcertificates/${file}`}
                                                alt={label}
                                                className="w-full h-full object-contain"
                                                onError={(e) => {
                                                    const el = e.target as HTMLImageElement;
                                                    el.style.display = "none";
                                                    const parent = el.parentElement;
                                                    if (parent) {
                                                        parent.innerHTML = `<span class="text-teal text-[10px] font-bold text-center leading-tight px-1">${label}</span>`;
                                                    }
                                                }}
                                            />
                                        </div>
                                        <span className="text-gray-400 text-[10px] text-center leading-tight">{label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="hidden lg:block w-px bg-white/10 self-stretch" />

                        {/* Right: shipping + CTA */}
                        <div className="lg:w-64 flex flex-col gap-6">
                            <div>
                                <div className="text-gray-400 text-xs uppercase tracking-widest mb-3">Shipping Terms</div>
                                <ul className="space-y-2">
                                    {shippingTerms.map((t) => (
                                        <li key={t} className="text-sm text-gray-300 flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-teal flex-shrink-0" />
                                            {t}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="pt-2 border-t border-white/10">
                                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                                    Need a custom spec or bulk pricing?
                                </p>
                                <Link
                                    href="/contact"
                                    className="btn-gold inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm w-full justify-center"
                                >
                                    Request a Quote <ArrowRight className="w-4 h-4" />
                                </Link>
                                <Link
                                    href="/products"
                                    className="mt-3 text-gray-400 hover:text-teal text-xs font-medium flex items-center gap-1.5 transition-colors justify-center"
                                >
                                    ← Back to All Products
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ── Certificate Lightbox ── */}
            <AnimatePresence>
                {selectedCert && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60]"
                            onClick={() => setSelectedCert(null)}
                        />
                        <div className="fixed inset-0 z-[60] flex items-center justify-center pointer-events-none p-6">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.85 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.85 }}
                                transition={{ type: "spring", damping: 20, stiffness: 300 }}
                                className="pointer-events-auto relative bg-white rounded-2xl shadow-2xl overflow-hidden max-w-lg w-full"
                            >
                                {/* Header */}
                                <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
                                    <div>
                                        <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-0.5">Certificate</p>
                                        <h3 className="font-poppins font-bold text-navy text-sm">{selectedCert.label}</h3>
                                    </div>
                                    <button
                                        onClick={() => setSelectedCert(null)}
                                        className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors flex-shrink-0"
                                    >
                                        <X className="w-4 h-4 text-gray-500" />
                                    </button>
                                </div>

                                {/* Image */}
                                <div className="bg-gray-50 flex items-center justify-center p-6 min-h-[320px]">
                                    <img
                                        src={`/images/mbcertificates/${selectedCert.file}`}
                                        alt={selectedCert.label}
                                        className="max-w-full max-h-[60vh] object-contain rounded-lg shadow-sm"
                                        onError={(e) => {
                                            const el = e.target as HTMLImageElement;
                                            el.style.display = "none";
                                            const parent = el.parentElement;
                                            if (parent) {
                                                parent.innerHTML = `<div class="text-center text-gray-400"><div class="text-4xl mb-3">📄</div><p class="text-sm font-medium">${selectedCert.label}</p><p class="text-xs mt-1">Image not available</p></div>`;
                                            }
                                        }}
                                    />
                                </div>

                                {/* Footer */}
                                <div className="px-5 py-3 bg-white border-t border-gray-100 flex items-center justify-between">
                                    <span className="text-xs text-gray-400">Click outside to close</span>
                                    <a
                                        href={`/images/mbcertificates/${selectedCert.file}`}
                                        download
                                        className="flex items-center gap-1.5 text-xs font-semibold text-teal hover:text-teal/80 transition-colors"
                                    >
                                        <FileText className="w-3.5 h-3.5" /> Download
                                    </a>
                                </div>
                            </motion.div>
                        </div>
                    </>
                )}
            </AnimatePresence>
        </PageWrapper>
    );
}