"use client";

import { use, useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Truck, Package, ShieldCheck, Eye, Layers, Grid3X3, Palette, Ruler, Zap, Box, FileText } from "lucide-react";
import PageWrapper from "@/components/PageWrapper";
import { products } from "@/app/data/packaging-products";

export default function PackagingProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = use(params);
    const product = products.find((p) => p.slug === resolvedParams.slug);
    if (!product) notFound();

    const related = products.find((p) => p.id === product.relatedId);
    const [activeImageIndex, setActiveImageIndex] = useState(0);

    const productImages = product.images || [product.image];

    return (
        <PageWrapper>
            {/* ── Breadcrumb ── */}
            <div className="bg-white border-b border-gray-200 mt-2 sm:mt-4">
                <div className="container-custom py-5 lg:py-6 px-4 sm:px-6 lg:px-8">
                    <nav className="flex items-center gap-1.5 text-sm text-gray-500">
                        <Link href="/products" className="hover:text-gray-900 transition-colors">Products</Link>
                        <ChevronRight className="w-4 h-4" />
                        <Link href="/products/packaging" className="hover:text-gray-900 transition-colors">Packaging Materials</Link>
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
                            <div className="relative aspect-square rounded-2xl overflow-hidden bg-navy border border-gray-100 mb-3 flex items-center justify-center">
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
                                <div className="absolute top-4 left-4 z-10 hidden lg:block">
                                   <span className="px-3 py-1 bg-teal text-white text-xs font-bold rounded-full shadow">
                                      {product.category}
                                   </span>
                                </div>
                            </div>

                            {/* Thumbnail strip */}
                            {productImages.length > 1 && (
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
                                            />
                                        </button>
                                    ))}
                                </div>
                            )}
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
                                <span className="inline-flex lg:hidden items-center px-2.5 py-0.5 bg-teal text-white text-[10px] font-bold rounded-full tracking-wide mb-2">
                                    {product.category}
                                </span>
                                <h1 className="text-3xl font-bold text-gray-900 leading-tight mb-1">{product.name}</h1>
                                <p className="text-sm text-gray-500">{product.shortSpec}</p>
                            </div>

                            {/* Description */}
                            <div className="text-sm text-gray-700 leading-relaxed border-b border-gray-100 pb-5">
                                {product.description}
                            </div>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2">
                                {product.tags.map((tag) => (
                                    <span key={tag} className="text-xs font-medium px-3 py-1 bg-teal/10 text-teal rounded-full border border-teal/20">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* MOQ Summary */}
                            <div className="bg-gray-50 rounded-xl p-4 flex items-center justify-between border border-gray-100">
                                <span className="text-xs text-gray-500 uppercase font-semibold">Min. Order Qty</span>
                                <span className="text-base font-bold text-gray-900">{product.moq}</span>
                            </div>

                            {/* Details 6 items */}
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                {([
                                    { icon: Layers,  label: "Material",     key: "material"     },
                                    { icon: Grid3X3, label: "Mesh",          key: "mesh"         },
                                    { icon: Palette, label: "Fabric Colour", key: "fabricColour" },
                                    { icon: Ruler,   label: "Size",          key: "size"         },
                                    { icon: Zap,     label: "Strength",      key: "strength"     },
                                    { icon: Box,     label: "Packing",       key: "packing"      },
                                ] as const).map(({ icon: Icon, label, key }) => (
                                    <div
                                        key={key}
                                        className="relative bg-white border border-gray-200 rounded-xl p-3 flex flex-col items-center text-center gap-1.5 overflow-hidden"
                                    >
                                        <Icon className="w-5 h-5 text-teal mt-0.5 flex-shrink-0" />
                                        <div className="text-[10px] font-bold text-gray-900 uppercase tracking-wide leading-tight">
                                            {label}
                                        </div>
                                        <div className="text-xs text-gray-500 leading-snug">
                                            {product.specs[key as keyof typeof product.specs]}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Also Check This (related product) */}
                            {related && (
                                <div className="border border-gray-200 rounded-2xl overflow-hidden mt-2">
                                    <button className="w-full flex items-center justify-between px-4 py-3 bg-gray-50 hover:bg-gray-100 transition-colors pointer-events-none">
                                        <div className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                                            <Eye className="w-4 h-4 text-gray-500" />
                                            Also Check This
                                        </div>
                                        <ChevronRight className="w-4 h-4 text-gray-400 rotate-90" />
                                    </button>
                                    <Link
                                        href={`/products/packaging/${related.slug}`}
                                        className="flex items-center justify-between px-4 py-3 hover:bg-gray-50 transition-colors border-t border-gray-200"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="w-12 h-12 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0 flex items-center justify-center">
                                                <img
                                                    src={related.image}
                                                    alt={related.name}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <div>
                                                <p className="text-sm font-semibold text-gray-900">{related.name}</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            )}

                            {/* CTA */}
                            <div className="flex gap-3 mt-2">
                                <Link
                                    href={`/contact?product=${encodeURIComponent(product.name)}`}
                                    className="flex-1 bg-navy text-white text-sm font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 hover:bg-teal transition-colors"
                                >
                                    Request a Quote
                                </Link>
                                <Link
                                    href="/contact"
                                    className="px-5 border border-gray-200 rounded-xl text-sm font-semibold text-gray-700 hover:border-teal hover:text-teal transition-colors flex items-center gap-2"
                                >
                                    <FileText className="w-4 h-4" /> Spec Sheet
                                </Link>
                            </div>
                        </motion.div>
                    </div>

                    {/* ── Technical Specs Table ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="mt-12 lg:mt-16 max-w-2xl"
                    >
                        <h2 className="text-lg font-bold text-gray-900 mb-4 uppercase tracking-wide">Product Specifications</h2>
                        <div className="border border-gray-200 rounded-2xl overflow-hidden">
                            {[
                                { label: "Material", value: product.specs.material },
                                { label: "Mesh", value: product.specs.mesh },
                                { label: "Fabric Colour", value: product.specs.fabricColour },
                                { label: "Size", value: product.specs.size },
                                { label: "Strength", value: product.specs.strength },
                                { label: "Packing", value: product.specs.packing },
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
