"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Leaf, UtensilsCrossed, Package, ArrowRight, CheckCircle2, Clock, FileText, Ship, Star, ChevronRight } from "lucide-react";
import PageWrapper from "@/components/PageWrapper";

/* ─── Data ─────────────────────────────────────────────────────────────── */

const categories = [
    {
        id: "agro",
        icon: Leaf,
        title: "Agro Products",
        subtitle: "Farm-to-Port Excellence",
        tag: "APEDA Registered",
        tagColor: "emerald",
        description:
            "Premium quality spices, aromatic herbs, staple grains, and protein-rich pulses sourced from certified farms across India. Cleaned, graded, and packaged according to international export standards.",
        products: [
            { name: "Turmeric", origin: "Erode, Tamil Nadu", spec: "3–5% curcumin content", popular: true },
            { name: "Cumin Seeds", origin: "Rajasthan / Gujarat", spec: "99% purity, machine cleaned", popular: true },
            { name: "Coriander", origin: "Madhya Pradesh", spec: "Eagle / Scooter grade", popular: false },
            { name: "Basmati Rice", origin: "Punjab / Haryana", spec: "1121 Extra Long grain", popular: true },
            { name: "Red Lentils", origin: "Madhya Pradesh", spec: "Split & whole, 99.5% purity", popular: false },
            { name: "Chickpeas", origin: "Maharashtra / Karnataka", spec: "Kabuli & Desi varieties", popular: false },
            { name: "Black Pepper", origin: "Kerala", spec: "500–630 g/L bulk density", popular: false },
            { name: "Sesame Seeds", origin: "Gujarat", spec: "Natural / Hulled / Toasted", popular: false },
        ],
        stats: [{ label: "Countries Exported To", value: "40+" }, { label: "Certifications", value: "APEDA, FSSAI" }, { label: "Annual Volume", value: "500+ MT" }],
        color: { from: "#064e3b", to: "#0f766e", accent: "#10b981", light: "#d1fae5", text: "#065f46" },
        href: "/products/agro",
    },
    {
        id: "rte",
        icon: UtensilsCrossed,
        title: "Ready-to-Eat Food",
        subtitle: "Authentic Indian Cuisine, Globally Shelf-Stable",
        tag: "HACCP Certified",
        tagColor: "blue",
        description:
            "Shelf-stable ready-to-eat Indian meals and processed foods designed for international retail and institutional supply. Products follow FSSAI and HACCP standards with 12–24 month shelf life.",
        products: [
            { name: "Dal Makhani", origin: "North Indian Recipe", spec: "Retort pouch / 300g", popular: true },
            { name: "Biryani Kits", origin: "Hyderabadi / Lucknowi", spec: "Complete spice + rice kits", popular: true },
            { name: "Curry Pastes", origin: "Pan-India Varieties", spec: "Butter Chicken, Vindaloo, Korma", popular: false },
            { name: "Papad", origin: "Rajasthan", spec: "Urad / Moong / Masala variants", popular: false },
            { name: "Pickles", origin: "Andhra / North Indian", spec: "Mango, Lime, Mixed — 200g/500g", popular: true },
            { name: "Indian Snacks", origin: "Pan-India", spec: "Namkeen, Mathri, Chakli", popular: false },
            { name: "Ghee", origin: "Rajasthan", spec: "A2 / Regular, 500ml–15kg", popular: false },
            { name: "Masala Blends", origin: "Proprietary Blends", spec: "Garam Masala, Chaat, Sambar", popular: false },
        ],
        stats: [{ label: "Shelf Life", value: "12–24 mo" }, { label: "Standards", value: "FSSAI, HACCP" }, { label: "Pack Sizes", value: "Retail & Bulk" }],
        color: { from: "#1e3a5f", to: "#0e7490", accent: "#0ea5e9", light: "#e0f2fe", text: "#0c4a6e" },
        href: "/products/rte",
    },
    {
        id: "packaging",
        icon: Package,
        title: "Packaging Materials",
        subtitle: "Industrial-Grade Export Packaging",
        tag: "BIS Certified",
        tagColor: "amber",
        description:
            "Durable export-grade packaging materials engineered for heavy loads, moisture protection, and long-haul international shipping. Custom printing, sizing, and lamination available.",
        products: [
            { name: "PP Woven Sacks", origin: "Gujarat Manufacturing", spec: "25–100 kg capacity", popular: true },
            { name: "HDPE Bags", origin: "Pan-India", spec: "Food-grade & industrial grades", popular: false },
            { name: "Laminated Pouches", origin: "Gujarat / Maharashtra", spec: "BOPP / PET / Foil laminates", popular: true },
            { name: "Kraft Paper Bags", origin: "South India", spec: "3-ply, moisture resistant", popular: false },
            { name: "Jute Bags", origin: "West Bengal", spec: "Custom weave, eco-certified", popular: false },
            { name: "FIBC / Jumbo Bags", origin: "Pan-India", spec: "500–2000 kg SWL rated", popular: true },
            { name: "Vacuum Pouches", origin: "Gujarat", spec: "PA/PE, food safe", popular: false },
            { name: "Corrugated Boxes", origin: "Pan-India", spec: "3–7 ply, custom print", popular: false },
        ],
        stats: [{ label: "MOQ", value: "500 pcs" }, { label: "Certifications", value: "BIS, ISO 9001" }, { label: "Lead Time", value: "7–14 days" }],
        color: { from: "#78350f", to: "#d97706", accent: "#f59e0b", light: "#fef3c7", text: "#78350f" },
        href: "/products/packaging",
    },
];

const shippingInfo = [
    { icon: Ship, label: "Shipping Terms", value: "FOB / CIF / CFR / EXW" },
    { icon: FileText, label: "Documentation", value: "COO, Phyto, Bill of Lading, COA" },
    { icon: Clock, label: "Lead Time", value: "10–21 business days" },
    { icon: CheckCircle2, label: "Quality Checks", value: "Pre-shipment inspection included" },
];

/* ─── Component ─────────────────────────────────────────────────────────── */

export default function ProductsPage() {
    const [activeTab, setActiveTab] = useState(0);
    const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

    const cat = categories[activeTab];

    return (
        <PageWrapper>
            {/* ── Hero ────────────────────────────────────────────────────── */}
            <section className="relative py-16 sm:py-28 overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center scale-105"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1553413077-190dd305871c?w=1920&q=80')" }}
                />
                <div className="absolute inset-0 bg-navy/85" />

                {/* Decorative grid lines */}
                <div className="absolute inset-0 opacity-10"
                    style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

                <div className="container-custom relative z-10 text-center">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                        <p className="text-teal text-xs uppercase tracking-[0.25em] font-bold mb-4">Export Portfolio</p>
                        <h1 className="font-poppins text-3xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                            Products We<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-300">Export Globally</span>
                        </h1>
                        <p className="text-gray-300 max-w-xl mx-auto text-base leading-relaxed mb-10">
                            Three specialized verticals. End-to-end sourcing, quality assurance,
                            and full international trade documentation.
                        </p>

                        {/* Stats bar */}
                        <div className="inline-grid grid-cols-3 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10">
                            {[
                                { n: "40+", label: "Countries" },
                                { n: "500+", label: "MT Monthly" },
                                { n: "12+", label: "Years Export" },
                            ].map((s) => (
                                <div key={s.label} className="bg-white/5 backdrop-blur px-4 sm:px-8 py-4">
                                    <div className="text-2xl font-black text-white">{s.n}</div>
                                    <div className="text-gray-400 text-xs mt-0.5">{s.label}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ── Product Explorer ────────────────────────────────────────── */}
            <section className="bg-gray-light min-h-screen">
                {/* Tab bar */}
                <div className="bg-white border-b border-gray-200 sticky top-0 z-30 shadow-sm">
                    <div className="container-custom">
                        <div className="flex gap-0 overflow-x-auto" style={{ WebkitOverflowScrolling: "touch" }}>
                            {categories.map((c, i) => {
                                const Icon = c.icon;
                                const active = activeTab === i;
                                return (
                                    <button
                                        key={c.id}
                                        onClick={() => setActiveTab(i)}
                                        className="relative flex items-center gap-2.5 px-6 py-5 text-sm font-semibold whitespace-nowrap transition-colors"
                                        style={{ color: active ? c.color.accent : "#6b7280" }}
                                    >
                                        <Icon className="w-4 h-4" />
                                        {c.title}
                                        {active && (
                                            <motion.div
                                                layoutId="tab-indicator"
                                                className="absolute bottom-0 left-0 right-0 h-0.5 rounded-t-full"
                                                style={{ background: c.color.accent }}
                                            />
                                        )}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>

                <div className="container-custom py-12">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={cat.id}
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.35 }}
                        >
                            {/* Category header */}
                            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
                                <div>
                                    <div className="flex items-center gap-3 mb-2">
                                        <span
                                            className="text-xs font-bold px-3 py-1 rounded-full"
                                            style={{ background: cat.color.light, color: cat.color.text }}
                                        >
                                            ✓ {cat.tag}
                                        </span>
                                    </div>
                                    <h2 className="font-poppins text-3xl font-black text-navy">{cat.title}</h2>
                                    <p className="text-gray-500 mt-1 text-sm">{cat.subtitle}</p>
                                </div>

                                {/* Stat chips */}
                                <div className="flex flex-wrap gap-3">
                                    {cat.stats.map((s) => (
                                        <div key={s.label} className="bg-white rounded-xl px-4 py-2.5 shadow-sm border border-gray-100">
                                            <div className="text-xs text-gray-400">{s.label}</div>
                                            <div className="text-sm font-bold text-navy">{s.value}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Two-column layout: product grid + sidebar */}
                            <div className="grid lg:grid-cols-3 gap-6">

                                {/* Product grid — takes 2 cols */}
                                <div className="lg:col-span-2">
                                    <div className="grid sm:grid-cols-2 gap-3">
                                        {cat.products.map((p, j) => (
                                            <motion.div
                                                key={p.name}
                                                initial={{ opacity: 0, scale: 0.96 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: j * 0.04 }}
                                                onMouseEnter={() => setHoveredProduct(j)}
                                                onMouseLeave={() => setHoveredProduct(null)}
                                                className="group bg-white rounded-xl p-4 border border-gray-100 cursor-default transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
                                                style={hoveredProduct === j ? { borderColor: cat.color.accent } : {}}
                                            >
                                                <div className="flex items-start justify-between mb-2">
                                                    <div
                                                        className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-black transition-colors"
                                                        style={{
                                                            background: hoveredProduct === j ? cat.color.accent : cat.color.light,
                                                            color: hoveredProduct === j ? "white" : cat.color.text,
                                                        }}
                                                    >
                                                        {p.name[0]}
                                                    </div>
                                                    {p.popular && (
                                                        <span className="flex items-center gap-1 text-amber-600 text-[10px] font-bold bg-amber-50 px-2 py-0.5 rounded-full">
                                                            <Star className="w-2.5 h-2.5 fill-amber-500 text-amber-500" /> Popular
                                                        </span>
                                                    )}
                                                </div>
                                                <h3 className="font-semibold text-navy text-sm">{p.name}</h3>
                                                <p className="text-gray-400 text-xs mt-0.5">{p.origin}</p>
                                                <div
                                                    className="mt-2 text-xs font-medium px-2 py-1 rounded-md w-fit transition-colors"
                                                    style={{ background: cat.color.light, color: cat.color.text }}
                                                >
                                                    {p.spec}
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>

                                    <div className="mt-4 flex gap-3">
                                        <Link
                                            href={cat.href}
                                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white transition-opacity hover:opacity-90"
                                            style={{ background: `linear-gradient(135deg, ${cat.color.from}, ${cat.color.to})` }}
                                        >
                                            Full Specifications & MOQ <ArrowRight className="w-4 h-4" />
                                        </Link>
                                        <Link
                                            href="/contact"
                                            className="btn-gold inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold"
                                        >
                                            Request Quote <ChevronRight className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </div>

                                {/* Sidebar */}
                                <div className="flex flex-col gap-4">
                                    {/* Description card */}
                                    <div
                                        className="rounded-2xl p-6 text-white"
                                        style={{ background: `linear-gradient(135deg, ${cat.color.from}, ${cat.color.to})` }}
                                    >
                                        <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                                            <cat.icon className="w-5 h-5 text-white" />
                                        </div>
                                        <p className="text-white/90 text-sm leading-relaxed">{cat.description}</p>
                                    </div>

                                    {/* Shipping info */}
                                    <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
                                        <h4 className="text-navy font-semibold text-xs uppercase tracking-wider mb-4">Trade Details</h4>
                                        <div className="flex flex-col gap-3">
                                            {shippingInfo.map((info) => (
                                                <div key={info.label} className="flex items-start gap-3">
                                                    <div
                                                        className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                                                        style={{ background: cat.color.light }}
                                                    >
                                                        <info.icon className="w-3.5 h-3.5" style={{ color: cat.color.text }} />
                                                    </div>
                                                    <div>
                                                        <div className="text-gray-400 text-[11px]">{info.label}</div>
                                                        <div className="text-navy font-semibold text-xs">{info.value}</div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Quick quote nudge */}
                                    <div className="bg-navy rounded-2xl p-5 text-center">
                                        <p className="text-white font-semibold text-sm mb-1">Need a Custom Quote?</p>
                                        <p className="text-gray-400 text-xs mb-4">MOQ, custom labeling, and private label available</p>
                                        <Link
                                            href="/contact"
                                            className="block text-center btn-gold py-2.5 rounded-xl text-xs font-bold"
                                        >
                                            Talk to Export Team →
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </section>

            {/* ── Why Us trust strip ───────────────────────────────────────── */}
            <section className="bg-white py-14 border-t border-gray-100">
                <div className="container-custom">
                    <p className="text-center text-xs uppercase tracking-widest text-gray-400 font-semibold mb-8">Why Buyers Choose Us</p>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: "🧪", title: "Pre-Shipment Testing", desc: "Independent lab reports provided for every shipment on request." },
                            { icon: "📦", title: "Custom Packaging", desc: "Private-label, custom print, and retail-ready packaging for any market." },
                            { icon: "🌐", title: "Destination Compliance", desc: "Products prepared per EU, US, GCC, and ASEAN import regulations." },
                            { icon: "🤝", title: "Dedicated Account Manager", desc: "Single point of contact from quote to delivery and after-sales." },
                        ].map((item) => (
                            <div key={item.title} className="rounded-2xl bg-gray-light p-5 hover:bg-teal/5 transition-colors">
                                <div className="text-2xl mb-3">{item.icon}</div>
                                <h3 className="font-semibold text-navy text-sm mb-1">{item.title}</h3>
                                <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA ─────────────────────────────────────────────────────── */}
            <section className="bg-navy py-16 relative overflow-hidden">
                <div className="absolute inset-0 opacity-5"
                    style={{ backgroundImage: "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 50%, white 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
                <div className="container-custom text-center relative z-10" data-aos="fade-up">
                    <h2 className="font-poppins text-3xl lg:text-4xl font-black text-white mb-4">
                        Ready to Start Importing?
                    </h2>
                    <p className="text-gray-400 mb-8 max-w-lg mx-auto text-sm leading-relaxed">
                        Share your target market, required quantities, and certification needs —
                        we'll send a detailed quote within 24 hours.
                    </p>
                    <div className="flex flex-wrap gap-3 justify-center">
                        <Link href="/contact" className="btn-gold px-8 py-3.5 rounded-xl font-bold inline-flex items-center gap-2">
                            Get a Free Quote <ArrowRight className="w-4 h-4" />
                        </Link>
                        <Link href="/about" className="px-8 py-3.5 rounded-xl font-semibold inline-flex items-center gap-2 border border-white/20 text-white hover:bg-white/5 transition text-sm">
                            Learn About Us
                        </Link>
                    </div>
                </div>
            </section>
        </PageWrapper>
    );
}