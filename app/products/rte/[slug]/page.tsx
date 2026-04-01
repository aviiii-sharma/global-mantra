"use client";

import { useState, use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Minus, Plus, ChevronRight, Truck, Package, ShieldCheck, Eye } from "lucide-react";
import PageWrapper from "@/components/PageWrapper";
import { products } from "@/app/data/rte-products";

export default function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = use(params);
    const product = products.find((p) => p.slug === resolvedParams.slug);
    if (!product) notFound();

    const related = products.find((p) => p.id === product.relatedId);
    const [qty, setQty] = useState(1);
    const [selectedSize, setSelectedSize] = useState(product.specs.packSize.split(" / ")[0]);
    const [activeImageIndex, setActiveImageIndex] = useState(0);

    const extIndex = product.image.lastIndexOf(".");
    const basePath = product.image.substring(0, extIndex);
    const ext = product.image.substring(extIndex);
    const productImages = product.images || [
        product.image,
        `${basePath}2${ext}`,
        `${basePath}3${ext}`
    ];

    const sizes = product.specs.packSize.split(" / ");

    return (
        <PageWrapper>
            {/* ── Breadcrumb ── */}
            <div className="bg-white border-b border-gray-200 mt-2 sm:mt-4">
                <div className="container-custom py-5 lg:py-6 px-4 sm:px-6 lg:px-8">
                    <nav className="flex items-center gap-1.5 text-sm text-gray-500">
                        <Link href="/products" className="hover:text-gray-900 transition-colors">Products</Link>
                        <ChevronRight className="w-4 h-4" />
                        <Link href="/products/rte" className="hover:text-gray-900 transition-colors">Ready-to-Eat Food</Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-gray-900 font-medium">{product.name}</span>
                    </nav>
                </div>
            </div>

            {/* ── Main Content ── */}
            <div className="bg-white min-h-screen">
                <div className="container-custom py-8 lg:py-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">

                        {/* ── Left: Product image ── */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            {/* Main image */}
                            <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-50 border border-gray-100 mb-3">
                                <AnimatePresence mode="wait">
                                    <motion.img
                                        key={activeImageIndex}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        src={productImages[activeImageIndex]}
                                        alt={`${product.name} image ${activeImageIndex + 1}`}
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            const el = e.target as HTMLImageElement;
                                            el.style.display = "none";
                                            (el.parentElement as HTMLElement).innerHTML += `<div class="w-full h-full flex items-center justify-center text-8xl absolute inset-0 bg-gray-50"></div>`;
                                        }}
                                    />
                                </AnimatePresence>
                            </div>

                            {/* Thumbnail strip */}
                            <div className="flex gap-2">
                                {productImages.map((imgSrc, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setActiveImageIndex(i)}
                                        className={`w-16 h-16 rounded-xl overflow-hidden border-2 transition-all ${activeImageIndex === i ? "border-gray-900" : "border-gray-200 hover:border-gray-400"}`}
                                    >
                                        <img
                                            src={imgSrc}
                                            alt=""
                                            className="w-full h-full object-cover"
                                            onError={(e) => {
                                                const el = e.target as HTMLImageElement;
                                                el.style.display = "none";
                                                (el.parentElement as HTMLElement).innerHTML = `<div class="w-full h-full flex items-center justify-center text-xl bg-gray-50"></div>`;
                                            }}
                                        />
                                    </button>
                                ))}
                            </div>
                        </motion.div>

                        {/* ── Right: Product info ── */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="flex flex-col gap-5"
                        >
                            {/* Title */}
                            <div>
                                <h1 className="text-3xl font-bold text-gray-900 leading-tight mb-1">{product.name}</h1>
                                <p className="text-sm text-gray-500">{product.subtitle}</p>
                            </div>

                            {/* Ingredients */}
                            <div className="text-sm text-gray-700 leading-relaxed border-b border-gray-100 pb-5">
                                <span className="font-semibold uppercase text-xs tracking-wider text-gray-500">
                                    INGREDIENTS{product.allergens.length > 0 ? " (ALLERGIC INGREDIENTS ARE HIGHLIGHTED)" : ""}
                                    {" "}:
                                </span>{" "}
                                {product.ingredients}
                                {product.allergens.length > 0 && (
                                    <p className="mt-1.5 text-xs text-amber-700 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2">
                                        ⚠ Contains: {product.allergens.join(", ")}
                                    </p>
                                )}
                            </div>

                            {/* Price */}
                            <div className="border-b border-gray-100 pb-5">
                                <p className="text-xs text-gray-400 underline cursor-pointer">Shipping calculated at checkout.</p>
                            </div>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2">
                                {product.tags.map((tag) => (
                                    <span key={tag} className="text-xs font-medium px-3 py-1 bg-gray-100 text-gray-600 rounded-full">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Pack size selector */}
                            {sizes.length > 1 && (
                                <div>
                                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Pack Size</p>
                                    <div className="flex gap-2">
                                        {sizes.map((size) => (
                                            <button
                                                key={size}
                                                onClick={() => setSelectedSize(size)}
                                                className={`px-4 py-2 text-sm font-medium rounded-lg border transition-all ${
                                                    selectedSize === size
                                                        ? "border-gray-900 bg-gray-900 text-white"
                                                        : "border-gray-300 text-gray-600 hover:border-gray-500"
                                                }`}
                                            >
                                                {size}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Also Check This (related product) */}
                            {related && (
                                <div className="border border-gray-200 rounded-2xl overflow-hidden">
                                    <button className="w-full flex items-center justify-between px-4 py-3 bg-gray-50 hover:bg-gray-100 transition-colors">
                                        <div className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                                            <Eye className="w-4 h-4 text-gray-500" />
                                            Also Check This
                                        </div>
                                        <ChevronRight className="w-4 h-4 text-gray-400 rotate-90" />
                                    </button>
                                    <Link
                                        href={`/products/rte/${related.slug}`}
                                        className="flex items-center justify-between px-4 py-3 hover:bg-gray-50 transition-colors"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="w-12 h-12 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0">
                                                <img
                                                    src={related.image}
                                                    alt={related.name}
                                                    className="w-full h-full object-cover"
                                                    onError={(e) => {
                                                        const el = e.target as HTMLImageElement;
                                                        el.style.display = "none";
                                                        (el.parentElement as HTMLElement).innerHTML = `<div class="w-full h-full flex items-center justify-center text-2xl"></div>`;
                                                    }}
                                                />
                                            </div>
                                            <div>
                                                <p className="text-sm font-semibold text-gray-900">{related.name}</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            )}

                            {/* Quantity */}
                           {/* <div>
                                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Quantity</p>
                                <div className="flex items-center gap-3">
                                    <div className="flex items-center border border-gray-300 rounded-full overflow-hidden">
                                        <button
                                            onClick={() => setQty(Math.max(1, qty - 1))}
                                            className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 transition-colors text-gray-700"
                                        >
                                            <Minus className="w-4 h-4" />
                                        </button>
                                        <span className="w-10 text-center text-sm font-semibold text-gray-900">{qty}</span>
                                        <button
                                            onClick={() => setQty(qty + 1)}
                                            className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 transition-colors text-gray-700"
                                        >
                                            <Plus className="w-4 h-4" />
                                        </button>
                                    </div>
                                    <motion.button
                                        whileTap={{ scale: 0.97 }}
                                        className="flex-1 bg-white border-2 border-gray-900 text-gray-900 text-sm font-semibold py-2.5 rounded-full hover:bg-gray-900 hover:text-white transition-all duration-200"
                                    >
                                        Request a Quote
                                    </motion.button>
                                </div>
                            </div>*/}

                            {/* CTA */}
                            <Link
                                href="/contact"
                                className="w-full bg-gray-900 text-white text-sm font-semibold py-3 rounded-full text-center hover:bg-gray-700 transition-colors block"
                            >
                                Contact for Bulk Orders
                            </Link>

                            {/* Watchers */}
                            <p className="text-xs text-gray-500 flex items-center gap-1.5">
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse inline-block" />
                                {Math.floor(Math.random() * 60) + 40} people viewing this product now
                            </p>

                            {/* Delivery timeline */}
                            <div className="border border-gray-200 rounded-2xl p-4 bg-gray-50">
                                <div className="flex items-center justify-between text-xs text-gray-600 relative">
                                    {[
                                        { icon: <Package className="w-4 h-4" />, label: "Ordered", date: "Today" },
                                        { icon: <Truck className="w-4 h-4" />, label: "Shipped", date: "+1–2 days" },
                                        { icon: <ShieldCheck className="w-4 h-4" />, label: "Delivered", date: "+3–5 days" },
                                    ].map((step, i) => (
                                        <div key={i} className="flex flex-col items-center gap-1.5 flex-1">
                                            <div className="w-9 h-9 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-700 shadow-sm">
                                                {step.icon}
                                            </div>
                                            <span className="font-semibold text-gray-900">{step.label}</span>
                                            <span className="text-gray-400">{step.date}</span>
                                        </div>
                                    ))}
                                    {/* Connector lines */}
                                    <div className="absolute top-[18px] left-[calc(16.7%+4px)] right-[calc(16.7%+4px)] h-px bg-gray-200 -z-0" />
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* ── Nutrition Facts ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="mt-12 lg:mt-16 max-w-2xl"
                    >
                        <h2 className="text-lg font-bold text-gray-900 mb-4 uppercase tracking-wide">Nutrition Facts</h2>
                        <div className="border-t-8 border-gray-900">
                            <div className="border-b-4 border-gray-900 py-1.5 px-0">
                                <p className="text-xs text-gray-600">
                                    Serving Size: <span className="font-semibold text-gray-900">{product.nutrition.servingSize}</span>
                                </p>
                            </div>
                            <div className="py-2 border-b border-gray-300 flex items-end justify-between">
                                <div>
                                    <p className="text-xs text-gray-500 font-medium">Calories</p>
                                    <p className="text-5xl font-black text-gray-900 leading-none">{product.nutrition.calories}</p>
                                </div>
                                <p className="text-xs text-gray-500 text-right leading-relaxed">Per serving<br/>{product.nutrition.servingSize}</p>
                            </div>
                            {/* Table header */}
                            <div className="border-b-4 border-gray-900">
                                <table className="w-full text-sm">
                                    <thead>
                                        <tr className="border-b border-gray-200">
                                            <th className="text-left py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">Nutrient</th>
                                            <th className="text-right py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">Per Serving</th>
                                            <th className="text-right py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">Per 100g</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {product.nutrition.rows.map((row, i) => (
                                            <tr key={i} className={`border-b ${i % 2 === 0 ? "border-gray-100" : "border-gray-200"}`}>
                                                <td className="py-2.5 text-gray-700 font-medium">{row.nutrient}</td>
                                                <td className="py-2.5 text-right text-gray-900 font-semibold">{row.perServing}</td>
                                                <td className="py-2.5 text-right text-gray-600">{row.per100g}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <p className="text-xs text-gray-400 mt-3 leading-relaxed">
                                * Nutritional values are approximate and may vary slightly due to natural variation in ingredients.
                            </p>
                        </div>
                    </motion.div>

                    {/* ── How to Serve ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="mt-10 max-w-2xl"
                    >
                        <h2 className="text-lg font-bold text-gray-900 mb-4 uppercase tracking-wide">How to Serve</h2>
                        <ol className="space-y-3">
                            {product.howToServe.map((step, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-900 text-white text-xs font-bold flex items-center justify-center mt-0.5">
                                        {i + 1}
                                    </span>
                                    {step}
                                </li>
                            ))}
                        </ol>
                    </motion.div>

                    {/* ── Technical Specs ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="mt-10 max-w-2xl"
                    >
                        <h2 className="text-lg font-bold text-gray-900 mb-4 uppercase tracking-wide">Product Specifications</h2>
                        <div className="border border-gray-200 rounded-2xl overflow-hidden">
                            {[
                                { label: "Shelf Life", value: product.specs.shelfLife },
                                { label: "Dietary", value: product.specs.dietary },
                                { label: "Pack Sizes", value: product.specs.packSize },
                                { label: "Packaging", value: product.specs.packaging },
                                { label: "Certifications", value: product.specs.certification },
                                { label: "Country of Origin", value: product.specs.origin },
                                { label: "Storage", value: product.specs.storage },
                            ].map((spec, i) => (
                                <div
                                    key={spec.label}
                                    className={`flex justify-between items-start gap-4 px-5 py-3.5 text-sm ${i % 2 === 0 ? "bg-white" : "bg-gray-50"} ${i !== 0 ? "border-t border-gray-100" : ""}`}
                                >
                                    <span className="text-gray-500 font-medium flex-shrink-0 w-36">{spec.label}</span>
                                    <span className="text-gray-900 text-right">{spec.value}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </PageWrapper>
    );
}