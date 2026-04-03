"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
    Leaf,
    ArrowRight,
    FileText,
    Search,
    Tag,
    X,
    ChevronRight,
    Sprout,
    MapPin,
    ShieldCheck,
    Weight,
    Package,
    BadgeCheck,
} from "lucide-react";
import PageWrapper from "@/components/PageWrapper";

// ─── Product Data ─────────────────────────────────────────────────────────────

const categories = ["All", "Spices", "Grains & Rice", "Pulses & Lentils", "Seeds"];

const products = [
    {
        id: 1,
        name: "Turmeric",
        category: "Spices",
        image: "/images/agroproducts/turmeric.jpg",
        shortSpec: "3–5% curcumin | Erode / Salem origin | Polished & unpolished variants",
        tags: ["AGMARK", "Organic Option"],
        moq: "5 MT",
        description:
            "Premium Erode and Salem turmeric with 3–5% curcumin content. Available as whole fingers, polished, and unpolished. Tested for moisture, ash content, and foreign matter per AGMARK standards.",
        specs: {
            origin:      "Erode / Salem, Tamil Nadu",
            purity:      "98–99%",
            moisture:    "Max 10%",
            packSize:    "25 kg / 50 kg bags",
            packaging:   "PP Woven / Jute Bags",
            certification: "AGMARK / APEDA / FSSAI",
        },
    },
    {
        id: 2,
        name: "Cumin (Jeera)",
        category: "Spices",
        image: "/images/agroproducts/cumin.jpg",
        shortSpec: "98% purity | Gujarat / Rajasthan origin | Machine-cleaned",
        tags: ["AGMARK", "Machine Cleaned"],
        moq: "5 MT",
        description:
            "Aromatic cumin sourced from Gujarat and Rajasthan — India's prime cumin belt. Machine-cleaned and double-sorted for 98% purity. Available in whole and splits.",
        specs: {
            origin:      "Gujarat / Rajasthan",
            purity:      "98–99%",
            moisture:    "Max 9%",
            packSize:    "25 kg / 50 kg bags",
            packaging:   "PP Woven / Jute Bags",
            certification: "AGMARK / APEDA / FSSAI",
        },
    },
    {
        id: 3,
        name: "Coriander",
        category: "Spices",
        image: "/images/agroproducts/coriander.jpg",
        shortSpec: "Eagle / Scooter grade | Split and whole | Rajasthan origin",
        tags: ["AGMARK", "Export Grade"],
        moq: "5 MT",
        description:
            "Export-grade coriander seeds in Eagle and Scooter varieties. Available as whole seeds or split (dhania). Sourced from Rajasthan and Madhya Pradesh farms.",
        specs: {
            origin:      "Rajasthan / Madhya Pradesh",
            purity:      "98–99%",
            moisture:    "Max 9%",
            packSize:    "25 kg / 50 kg bags",
            packaging:   "PP Woven / Jute Bags",
            certification: "AGMARK / APEDA / FSSAI",
        },
    },
    {
        id: 4,
        name: "Basmati Rice",
        category: "Grains & Rice",
        image: "/images/agroproducts/basmati-rice.jpg",
        shortSpec: "1121 / Pusa / Sharbati | Aged & steam-processed | Punjab / Haryana",
        tags: ["GI Tagged", "Aged"],
        moq: "10 MT",
        description:
            "Premium Basmati rice in 1121, Pusa, and Sharbati varieties. Aged for minimum 12 months for extra elongation and aroma. Steam-processed options available for European and Middle East markets.",
        specs: {
            origin:      "Punjab / Haryana / UP",
            purity:      "98–100%",
            moisture:    "Max 12.5%",
            packSize:    "5 kg / 25 kg / 50 kg",
            packaging:   "PP Woven / Vacuum Pack",
            certification: "APEDA / FSSAI / ISO 22000",
        },
    },
    {
        id: 5,
        name: "Red Lentils (Masoor)",
        category: "Pulses & Lentils",
        image: "/images/agroproducts/red-lentils.jpg",
        shortSpec: "Bold & medium size | 99% purity | Split and whole | MP / Rajasthan",
        tags: ["High Protein", "Vegan"],
        moq: "5 MT",
        description:
            "Bold and medium red lentils sourced from Madhya Pradesh and Rajasthan. Available as whole (Sabut Masoor) and split (Masoor Dal). 99% purity, free from moisture damage and insect infestation.",
        specs: {
            origin:      "Madhya Pradesh / Rajasthan",
            purity:      "99%",
            moisture:    "Max 12%",
            packSize:    "25 kg / 50 kg bags",
            packaging:   "PP Woven / Jute Bags",
            certification: "APEDA / FSSAI / Halal",
        },
    },
    {
        id: 6,
        name: "Chickpeas (Kabuli Chana)",
        category: "Pulses & Lentils",
        image: "/images/agroproducts/chickpeas.jpg",
        shortSpec: "7 mm – 12 mm grade | Desi and Kabuli varieties | MP / Rajasthan",
        tags: ["High Protein", "Vegan"],
        moq: "5 MT",
        description:
            "Export-quality Kabuli and Desi chickpeas machine-graded from 7 mm to 12 mm. Sourced from Madhya Pradesh and Rajasthan. Ideal for Middle East, Mediterranean, and European markets.",
        specs: {
            origin:      "Madhya Pradesh / Rajasthan",
            purity:      "99%",
            moisture:    "Max 12%",
            packSize:    "25 kg / 50 kg bags",
            packaging:   "PP Woven / Jute Bags",
            certification: "APEDA / FSSAI / Kosher",
        },
    },
    {
        id: 7,
        name: "Sesame Seeds",
        category: "Seeds",
        image: "/images/agroproducts/sesame-seeds.jpg",
        shortSpec: "Natural / Hulled / Black | 99.95% purity | Gujarat origin",
        tags: ["99.95% Purity", "Hulled Option"],
        moq: "5 MT",
        description:
            "High-purity sesame seeds in natural, hulled, and black varieties from Gujarat. Tested for oil content, moisture, and aflatoxin. Meets EU, Japanese, and US food safety standards.",
        specs: {
            origin:      "Gujarat / Rajasthan",
            purity:      "99.95%",
            moisture:    "Max 6%",
            packSize:    "25 kg / 50 kg bags",
            packaging:   "PP Woven / Vacuum Pack",
            certification: "APEDA / FSSAI / EU Compliant",
        },
    },
    {
        id: 8,
        name: "Mustard Seeds",
        category: "Seeds",
        image: "/images/agroproducts/mustard-seeds.jpg",
        shortSpec: "Yellow / Black / Brown | 98% purity | Rajasthan / MP origin",
        tags: ["AGMARK", "Export Grade"],
        moq: "5 MT",
        description:
            "Yellow, black, and brown mustard seeds cleaned and sorted for export. High oil-yield varieties sourced from Rajasthan and Madhya Pradesh. Phytosanitary certificates available for all consignments.",
        specs: {
            origin:      "Rajasthan / Madhya Pradesh",
            purity:      "98–99%",
            moisture:    "Max 8%",
            packSize:    "25 kg / 50 kg bags",
            packaging:   "PP Woven / Jute Bags",
            certification: "AGMARK / APEDA / FSSAI",
        },
    },
];

const shippingTerms = ["FOB Nhava Sheva / JNPT", "CIF Major Ports Worldwide", "CFR as Negotiated"];

// ─── Component ────────────────────────────────────────────────────────────────

export default function AgroProductsPage() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [search, setSearch] = useState("");
    const [selectedProduct, setSelectedProduct] = useState<(typeof products)[0] | null>(null);
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
                            "url('https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=1920&q=80')",
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
                            <span className="text-white">Agro Products</span>
                        </nav>

                        <div className="flex items-center gap-3 sm:gap-4 mb-4 flex-wrap">
                            <div className="w-12 h-12 rounded-xl bg-teal/20 border border-teal/40 flex items-center justify-center">
                                <Leaf className="w-6 h-6 text-teal" />
                            </div>
                            <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-bold rounded-full border border-emerald-500/30">
                                APEDA Registered
                            </span>
                            <span className="px-3 py-1 bg-teal/20 text-teal text-xs font-bold rounded-full border border-teal/30">
                                {products.length} Products
                            </span>
                        </div>

                        <h1 className="font-poppins text-3xl lg:text-5xl font-bold text-white mb-4">
                            Agro Products
                        </h1>
                        <p className="text-gray-300 text-lg max-w-2xl">
                            Farm-to-port export of premium spices, grains, pulses, and seeds — AGMARK certified,
                            fully traceable, and compliant with importing country regulations.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ── Filter Bar ── */}
            <div className="sticky top-0 z-30 bg-white border-b border-gray-200 shadow-sm py-3">
                <div className="container-custom flex flex-col sm:flex-row items-start sm:items-center gap-3">
                    {/* Category pills */}
                    <div className="flex items-center gap-2 flex-wrap flex-1">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all border ${
                                    activeCategory === cat
                                        ? "bg-navy text-white border-navy"
                                        : "bg-white text-navy border-gray-200 hover:border-teal hover:text-teal"
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
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
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
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
                                    className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-teal/50 hover:shadow-lg transition-all group cursor-pointer flex flex-col"
                                    onClick={() => setSelectedProduct(item)}
                                >
                                    {/* Product Image */}
                                    <div className="relative h-48 bg-gray-100 overflow-hidden">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            onError={(e) => {
                                                (e.target as HTMLImageElement).src =
                                                    "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&q=60";
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
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    {filtered.length === 0 && (
                        <div className="text-center py-20 text-gray-400">
                            <Leaf className="w-12 h-12 mx-auto mb-3 opacity-30" />
                            <p className="font-semibold">No products match your search.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* ── Product Detail Modal ── */}
            <AnimatePresence>
                {selectedProduct && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/65 backdrop-blur-sm z-50"
                            onClick={() => setSelectedProduct(null)}
                        />

                        {/* Centered wrapper */}
                        <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none p-4 sm:p-6">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                                transition={{ type: "spring", damping: 28, stiffness: 340 }}
                                className="pointer-events-auto w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row"
                                style={{ maxHeight: "88vh" }}
                            >
                                {/* ══ LEFT — Image panel ══ */}
                                <div className="relative md:w-[40%] flex-shrink-0 min-h-[220px] md:min-h-0 bg-navy">
                                    <img
                                        src={selectedProduct.image}
                                        alt={selectedProduct.name}
                                        className="absolute inset-0 w-full h-full object-cover"
                                        onError={(e) => {
                                            (e.target as HTMLImageElement).src =
                                                "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800&q=70";
                                        }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />

                                    {/* Close */}
                                    <button
                                        onClick={() => setSelectedProduct(null)}
                                        className="absolute top-3 right-3 z-10 w-8 h-8 bg-black/30 hover:bg-black/55 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-colors"
                                    >
                                        <X className="w-4 h-4" />
                                    </button>

                                    {/* Name + meta pinned bottom */}
                                    <div className="absolute bottom-0 left-0 right-0 p-5">
                                        <span className="inline-flex items-center px-2.5 py-0.5 bg-teal text-white text-[10px] font-bold rounded-full tracking-wide mb-2">
                                            {selectedProduct.category}
                                        </span>
                                        <h2 className="font-poppins text-xl font-bold text-white leading-snug drop-shadow">
                                            {selectedProduct.name}
                                        </h2>
                                        <div className="mt-2.5 inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-2.5 py-1">
                                            <span className="text-gray-300 text-[10px] uppercase tracking-wider">MOQ</span>
                                            <span className="text-white text-xs font-bold">{selectedProduct.moq}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* ══ RIGHT — Details panel ══ */}
                                <div className="flex flex-col flex-1 min-w-0 overflow-hidden">

                                    {/* Scrollable content */}
                                    <div className="flex-1 overflow-y-auto">

                                        {/* Description + tags */}
                                        <div className="px-6 pt-6 pb-4 border-b border-gray-100">
                                            <p className="text-gray-500 text-sm leading-relaxed">
                                                {selectedProduct.description}
                                            </p>
                                            <div className="flex flex-wrap gap-1.5 mt-3">
                                                {selectedProduct.tags.map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className="px-2.5 py-0.5 bg-teal/10 text-teal border border-teal/20 text-[11px] font-semibold rounded-full"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Spec summary + MOQ row */}
                                        <div className="px-6 py-4 grid grid-cols-2 gap-3 border-b border-gray-100">
                                            <div className="bg-gray-50 rounded-xl p-3">
                                                <div className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">Specification</div>
                                                <div className="text-xs font-medium text-navy leading-relaxed">{selectedProduct.shortSpec}</div>
                                            </div>
                                            <div className="bg-gray-50 rounded-xl p-3">
                                                <div className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">Min. Order Qty</div>
                                                <div className="text-xs font-semibold text-navy">{selectedProduct.moq}</div>
                                            </div>
                                        </div>

                                        {/* 6-card specs grid */}
                                        {selectedProduct.specs && (
                                            <div className="px-6 py-4">
                                                <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-3">Product Details</p>
                                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                                                    {([
                                                        { icon: MapPin,      label: "Origin",        key: "origin"        },
                                                        { icon: Sprout,      label: "Purity",        key: "purity"        },
                                                        { icon: Weight,      label: "Moisture",      key: "moisture"      },
                                                        { icon: Package,     label: "Pack Size",     key: "packSize"      },
                                                        { icon: ShieldCheck, label: "Packaging",     key: "packaging"     },
                                                        { icon: BadgeCheck,  label: "Certification", key: "certification" },
                                                    ] as const).map(({ icon: Icon, label, key }) => (
                                                        <div
                                                            key={key}
                                                            className="relative bg-gray-50 border border-gray-200 rounded-xl p-2.5 flex flex-col items-center text-center gap-1 overflow-hidden"
                                                        >
                                                            {/* corner ticks */}
                                                            <span className="absolute top-[3px] left-[3px] w-2 h-2 border-t border-l border-gray-400" />
                                                            <span className="absolute top-[3px] right-[3px] w-2 h-2 border-t border-r border-gray-400" />
                                                            <span className="absolute bottom-[3px] left-[3px] w-2 h-2 border-b border-l border-gray-400" />
                                                            <span className="absolute bottom-[3px] right-[3px] w-2 h-2 border-b border-r border-gray-400" />
                                                            <Icon className="w-4 h-4 text-teal mt-0.5 flex-shrink-0" />
                                                            <div className="text-[9px] font-bold text-navy uppercase tracking-wide leading-tight">
                                                                {label}
                                                            </div>
                                                            <div className="text-[9px] text-gray-500 leading-snug">
                                                                {selectedProduct.specs[key as keyof typeof selectedProduct.specs]}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {/* CTA — sticky footer */}
                                    <div className="px-6 py-4 border-t border-gray-100 bg-white flex gap-3 flex-shrink-0">
                                        <Link
                                            href={`/contact?product=${encodeURIComponent(selectedProduct.name)}`}
                                            className="btn-gold flex-1 text-center py-3 px-4 rounded-xl font-bold text-sm"
                                        >
                                            Request a Quote
                                        </Link>
                                        <Link
                                            href="/contact"
                                            className="flex items-center gap-1.5 px-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-600 hover:border-teal hover:text-teal transition-colors font-medium whitespace-nowrap"
                                        >
                                            <FileText className="w-4 h-4" /> Spec Sheet
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </>
                )}
            </AnimatePresence>

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
                                    { file: "GST.png",     label: "GST Certified"              },
                                    { file: "apeda.png",   label: "APEDA Registered"            },
                                    { file: "agmark.png",  label: "AGMARK Certified"            },
                                    { file: "IEC.png",     label: "Import Export Code (IEC)"    },
                                    { file: "fssai.png",   label: "FSSAI Licensed"              },
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