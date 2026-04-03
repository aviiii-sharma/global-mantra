"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Leaf, UtensilsCrossed, Package, ArrowRight, ChevronRight, Star } from "lucide-react";
import PageWrapper from "@/components/PageWrapper";
import { products as rteProducts } from "@/app/data/rte-products";
import { products as packProducts } from "@/app/data/packaging-products";

/* ─── Data ─────────────────────────────────────────────────────────────── */

const featuredRte = rteProducts.slice(0, 4);
const featuredPack = packProducts.slice(0, 4);
const featuredAgro = [
    { name: "Turmeric", origin: "Erode, Tamil Nadu", spec: "3–5% curcumin content", slug: null, image: "https://images.unsplash.com/photo-1615485925600-97237c4fc1ec?w=600&q=80" },
    { name: "Cumin Seeds", origin: "Rajasthan / Gujarat", spec: "99% purity", slug: null, image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&q=80" },
    { name: "Basmati Rice", origin: "Punjab / Haryana", spec: "1121 Extra Long grain", slug: null, image: "https://images.unsplash.com/photo-1586201375761-83865001e8ac?w=600&q=80" },
    { name: "Red Lentils", origin: "Madhya Pradesh", spec: "Split & whole", slug: null, image: "https://plus.unsplash.com/premium_photo-1671379041530-05eac5f308b4?w=600&q=80" },
];

const categorySections = [
    {
        id: "packaging",
        title: "Packaging Materials",
        subtitle: "Industrial-Grade Export Packaging",
        desc: "Durable export-grade packaging materials engineered for heavy loads, moisture protection, and long-haul international shipping. Custom printing, sizing, and lamination available.",
        icon: Package,
        href: "/products/packaging",
        theme: {
            bg: "bg-blue-50/20",
            iconBg: "bg-blue-100",
            iconText: "text-blue-600",
            button: "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/20"
            
        },
        products: featuredPack.map(p => ({
            name: p.name,
            desc: p.shortSpec,
            image: p.image,
            href: `/products/packaging/${p.slug}`
        }))
    },
    {
        id: "rte",
        title: "Ready-to-Eat Food",
        subtitle: "Authentic Indian Cuisine, Globally Shelf-Stable",
        desc: "Shelf-stable ready-to-eat Indian meals and processed foods designed for international retail and institutional supply. Products follow FSSAI and HACCP standards with 12–24 month shelf life.",
        icon: UtensilsCrossed,
        href: "/products/rte",
        theme: {
            bg: "bg-amber-50/20",
            iconBg: "bg-amber-100",
            iconText: "text-amber-600",
            button: "bg-amber-600 hover:bg-amber-700 text-white shadow-lg shadow-amber-600/20"
        },
        products: featuredRte.map(p => ({
            name: p.name,
            desc: p.subtitle,
            image: p.image,
            href: `/products/rte/${p.slug}`
        }))
    },

    {
        id: "agro",
        title: "Agro Products",
        subtitle: "Farm-to-Port Excellence",
        desc: "Premium quality spices, aromatic herbs, staple grains, and protein-rich pulses sourced from certified farms across India. Cleaned, graded, and packaged according to international export standards.",
        icon: Leaf,
        href: "/products/agro",
        theme: {
            bg: "bg-emerald-50/20",
            iconBg: "bg-emerald-100",
            iconText: "text-emerald-600",
            button: "bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-600/20"
        },
        products: featuredAgro.map(p => ({
            name: p.name,
            desc: p.spec,
            image: p.image,
            href: p.slug ? `/products/agro/${p.slug}` : "/products/agro"
        }))
    }
];

export default function ProductsPage() {
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
                                { n: "3", label: "Core Segments" },
                                { n: "40+", label: "Countries" },
                                { n: "50+", label: "Export Ready Products" },
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

            {/* ── Block By Block Layout ──────────────────────────────────── */}
            <div className="bg-white">
                {categorySections.map((cat, index) => (
                    <section key={cat.id} className={`py-16 sm:py-24 border-b border-gray-100 last:border-0 ${cat.theme.bg}`}>
                        <div className="container-custom">
                            <div className="flex flex-col xl:flex-row gap-12 xl:gap-20 items-center">
                                {/* Left side text */}
                                <motion.div 
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6 }}
                                    className="xl:w-1/3 flex flex-col items-start text-left w-full"
                                >
                                    <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-6 shadow-sm ${cat.theme.iconBg}`}>
                                        <cat.icon className={`w-7 h-7 ${cat.theme.iconText}`} />
                                    </div>
                                    <h2 className="font-poppins text-3xl sm:text-4xl font-black text-navy mb-3">{cat.title}</h2>
                                    <p className="text-gray-900 font-semibold mb-4 text-sm uppercase tracking-wide">{cat.subtitle}</p>
                                    <p className="text-gray-600 text-sm leading-relaxed mb-8">{cat.desc}</p>
                                    
                                    <Link href={cat.href} className={`inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold transition-all hover:-translate-y-0.5 ${cat.theme.button}`}>
                                        Explore {cat.title} <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </motion.div>
                                
                                {/* Right side products grid */}
                                <div className="xl:w-2/3 w-full">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                        {cat.products.map((prod, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.4, delay: i * 0.1 }}
                                            >
                                                <Link 
                                                    href={prod.href} 
                                                    className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-gray-300 hover:shadow-xl transition-all h-full"
                                                >
                                                    <div className="relative h-48 sm:h-56 overflow-hidden bg-white">
                                                        <img 
                                                            src={prod.image} 
                                                            alt={prod.name} 
                                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                                                            onError={(e) => {
                                                                const el = e.target as HTMLImageElement;
                                                                el.style.display = "none";
                                                                (el.parentElement as HTMLElement).innerHTML += `<div class="w-full h-full flex items-center justify-center text-5xl absolute inset-0 bg-gray-50"></div>`;
                                                            }}
                                                        />
                                                    </div>
                                                    <div className="p-5 flex-1 flex flex-col pt-4">
                                                        <h3 className="font-semibold text-navy text-base mb-1 group-hover:text-teal transition-colors font-poppins">{prod.name}</h3>
                                                        <p className="text-sm text-gray-500 line-clamp-2 mt-auto">{prod.desc}</p>
                                                    </div>
                                                </Link>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                ))}
            </div>

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
                            <div key={item.title} className="rounded-2xl bg-gray-50 border border-gray-100 p-5 hover:bg-teal/5 transition-colors">
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