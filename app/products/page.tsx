"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Leaf, UtensilsCrossed, Package, ArrowRight, ChevronRight } from "lucide-react";
import PageWrapper from "@/components/PageWrapper";

const categories = [
    {
        icon: Leaf,
        title: "Agro Products",
        description:
            "Premium quality spices, aromatic herbs, staple grains, and protein-rich pulses sourced from certified farms across India. Cleaned, graded, and packaged according to international export standards.",
        items: ["Turmeric", "Cumin", "Coriander", "Basmati Rice", "Red Lentils", "Chickpeas"],
        href: "/products/agro",
        gradient: "from-emerald-700 to-teal-700",
        accent: "bg-emerald-100 text-emerald-800",
        tag: "APEDA Registered",
    },
    {
        icon: UtensilsCrossed,
        title: "Ready-to-Eat Food",
        description:
            "Shelf-stable ready-to-eat Indian meals and processed foods designed for international retail and institutional supply. Products follow FSSAI and HACCP standards.",
        items: ["Dal Makhani", "Biryani Kits", "Curry Pastes", "Papad", "Pickles", "Snacks"],
        href: "/products/rte",
        gradient: "from-teal-700 to-navy-700",
        accent: "bg-blue-100 text-blue-800",
        tag: "HACCP Certified",
    },
    {
        icon: Package,
        title: "Packaging Materials",
        description:
            "Durable export-grade packaging materials designed for industrial storage and international shipping.",
        items: ["PP Woven Sacks", "HDPE Bags", "Laminated Pouches", "Kraft Bags", "Jute Bags", "FIBC Bags"],
        href: "/products/packaging",
        gradient: "from-yellow-700 to-orange-700",
        accent: "bg-yellow-100 text-yellow-800",
        tag: "BIS Certified",
    },
];

export default function ProductsPage() {
    return (
        <PageWrapper>
            {/* Hero */}
            <section className="relative py-28 overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1553413077-190dd305871c?w=1920&q=80')" }}
                />
                <div className="absolute inset-0 bg-navy/80" />
                <div className="container-custom relative z-10 text-center">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <p className="text-teal text-sm uppercase tracking-widest font-semibold mb-4">Export Portfolio</p>
                        <h1 className="font-poppins text-4xl lg:text-5xl font-bold text-white mb-6">
                            Our Export Products
                        </h1>
                        <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                            Three specialized product verticals with end-to-end sourcing, quality assurance, and
                            international trade documentation support.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Category Grid */}
            <section className="section-padding bg-gray-light">
                <div className="container-custom">
                    <div className="grid gap-10">
                        {categories.map((cat, i) => (
                            <div
                                key={i}
                                className="bg-white rounded-2xl overflow-hidden shadow-card card-hover"
                                data-aos="fade-up"
                                data-aos-delay={i * 100}
                            >
                                <div className="grid lg:grid-cols-5">
                                    {/* Left gradient panel */}
                                    <div className={`bg-gradient-to-br ${cat.gradient} p-8 lg:col-span-2 flex flex-col justify-center`}>
                                        <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center mb-5">
                                            <cat.icon className="w-7 h-7 text-white" />
                                        </div>
                                        <span className={`inline-block ${cat.accent} text-xs font-bold px-3 py-1 rounded-full mb-4 w-fit`}>
                                            {cat.tag}
                                        </span>
                                        <h2 className="font-poppins text-2xl font-bold text-white mb-3">{cat.title}</h2>
                                        <p className="text-white/80 text-sm leading-relaxed">{cat.description}</p>
                                    </div>

                                    {/* Right content */}
                                    <div className="p-8 lg:col-span-3 flex flex-col justify-between">
                                        <div>
                                            <h3 className="text-navy font-semibold text-sm uppercase tracking-wider mb-4">
                                                Key Products
                                            </h3>
                                            <div className="flex flex-wrap gap-2 mb-8">
                                                {cat.items.map((item) => (
                                                    <span key={item} className="product-tag">
                                                        {item}
                                                    </span>
                                                ))}
                                            </div>

                                            <div className="grid sm:grid-cols-3 gap-4 mb-8">
                                                {[
                                                    { label: "Shipping Terms", value: "FOB / CIF / CFR" },
                                                    { label: "Documentation", value: "Full export docs" },
                                                    { label: "Lead Time", value: "10–21 days" },
                                                ].map((info, j) => (
                                                    <div key={j} className="bg-gray-light rounded-xl p-4">
                                                        <div className="text-gray-400 text-xs mb-1">{info.label}</div>
                                                        <div className="text-navy font-semibold text-sm">{info.value}</div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="flex gap-3">
                                            <Link href={cat.href} className="btn-teal px-6 py-3 rounded-lg text-sm font-semibold inline-flex items-center gap-2">
                                                View Full Specifications <ArrowRight className="w-4 h-4" />
                                            </Link>
                                            <Link href="/contact" className="btn-gold px-6 py-3 rounded-lg text-sm font-bold inline-flex items-center gap-2">
                                                Request Quote <ChevronRight className="w-4 h-4" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="bg-navy py-16">
                <div className="container-custom text-center" data-aos="fade-up">
                    <h2 className="font-poppins text-2xl lg:text-3xl font-bold text-white mb-4">
                        Need Custom Product Specifications?
                    </h2>
                    <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                        Our export team can accommodate custom packaging, labeling, and quality
                        certifications for virtually any destination market.
                    </p>
                    <Link href="/contact" className="btn-gold px-8 py-3.5 rounded-xl font-bold inline-flex items-center gap-2">
                        Contact Our Export Team <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </section>
        </PageWrapper>
    );
}
