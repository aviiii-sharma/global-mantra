"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Award, Globe, ShieldCheck, Users, TrendingUp, CheckCircle2, ArrowRight } from "lucide-react";
import PageWrapper from "@/components/PageWrapper";

const milestones = [
    { year: "2026", label: "Company Established", desc: "Global Mantra founded to connect international buyers with trusted Indian suppliers." },
    { year: "2026", label: "Supplier Network", desc: "Developed partnerships with farms, processors, and packaging manufacturers across India." },
    { year: "2026", label: "Product Portfolio", desc: "Launched export categories including agro products, ready-to-make foods, and packaging materials." },
    { year: "2026", label: "Quality Framework", desc: "Implemented sourcing verification, inspection processes, and export documentation systems." },
    { year: "2026", label: "Global Trade Ready", desc: "Prepared logistics and compliance systems for international shipments and buyer partnerships." },
];

const team = [
    { name: "Gaurang Jadiya", role: "Founder", exp: "Global trade rewards those who deliver consistently. That’s the standard we operate by." },
    { name: "Vraj Parmar", role: "Co-Founder", exp: "Long-term partnerships are built on one thing: dependable supply." },
];

const certificationsList = [
    { code: "IEC", name: "Importer Exporter Code issued by DGFT for international trade", color: "bg-teal-100 text-teal-800" },
    { code: "FSSAI", name: "Food Safety and Standards Authority of India – Food Safety Compliance", color: "bg-blue-100 text-blue-800" },
    { code: "APEDA RCMC", name: "APEDA Registration Cum Membership Certificate for export of agricultural products", color: "bg-emerald-100 text-emerald-800" },
    { code: "SBR", name: "Spice Board Registration for export of spices and spice products", color: "bg-yellow-100 text-yellow-800" },
    { code: "ISO 22000 / ISO 9001", name: "International standard for food safety management systems", color: "bg-purple-100 text-purple-800" },
    { code: "HACCP", name: "Hazard Analysis and Critical Control Points food safety certification", color: "bg-orange-100 text-orange-800" },
    { code: "COA", name: "Certificate of Analysis verifying quality and composition of products", color: "bg-indigo-100 text-indigo-800" },
    { code: "MSDS", name: "Material Safety Data Sheet for safe handling and transport of oils", color: "bg-gray-100 text-gray-800" },
    { code: "GST", name: "Goods and Services Tax Registration issued by the Government of India", color: "bg-green-100 text-green-800" },
];

export default function AboutPage() {
    return (
        <PageWrapper>
            {/* Hero */}
            <section className="relative py-28 overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=80')" }}
                />
                <div className="absolute inset-0 bg-navy/80" />
                <div className="container-custom relative z-10 text-center">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <p className="text-teal text-sm uppercase tracking-widest font-semibold mb-4">Our Company</p>
                        <h1 className="font-poppins text-4xl lg:text-5xl font-bold text-white mb-6">
                            About Global Mantra
                        </h1>
                        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                            A modern export company connecting global buyers with reliable Indian suppliers across
                            agro products, ready-to-make foods, and industrial packaging materials.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Company Story */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div data-aos="fade-right">
                            <p className="text-teal text-sm uppercase tracking-wider font-semibold mb-3">Our Story</p>
                            <h2 className="font-poppins text-3xl font-bold text-navy mb-6">
                                A Modern Export Company from India
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Established in 2026, Global Mantra was created to simplify international sourcing by
                                connecting global buyers with reliable producers across India’s agricultural and
                                manufacturing sectors.
                            </p>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                We work with carefully selected farms, food processors, and packaging manufacturers
                                to deliver products that meet international quality, safety, and packaging standards.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                Our focus is straightforward: consistent sourcing, transparent communication,
                                proper export documentation, and dependable logistics coordination for every shipment.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4" data-aos="fade-left">
                            {[
                                { icon: Globe, title: "3 Categories", sub: "Agro, Food & Packaging" },
                                { icon: Users, title: "Supplier Network", sub: "Across India" },
                                { icon: TrendingUp, title: "Export Ready", sub: "Logistics & documentation" },
                                { icon: Award, title: "Quality Focus", sub: "Inspection before shipment" },
                            ].map((item, i) => (
                                <div key={i} className="bg-gray-light rounded-2xl p-6 text-center card-hover">
                                    <div className="w-12 h-12 rounded-xl bg-navy mx-auto flex items-center justify-center mb-3">
                                        <item.icon className="w-6 h-6 text-gold" />
                                    </div>
                                    <div className="font-poppins font-bold text-navy text-xl mb-1">{item.title}</div>
                                    <div className="text-gray-500 text-xs">{item.sub}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="section-padding bg-gray-light">
                <div className="container-custom">
                    <div className="text-center mb-14" data-aos="fade-up">
                        <p className="text-teal text-sm uppercase tracking-wider font-semibold mb-3">Our Journey</p>
                        <h2 className="font-poppins text-3xl font-bold text-navy">Company Development</h2>
                    </div>
                    <div className="relative max-w-4xl mx-auto">
                        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold to-teal hidden sm:block" />
                        <div className="space-y-10">
                            {milestones.map((m, i) => (
                                <div key={i} className="flex gap-6 items-start" data-aos="fade-up" data-aos-delay={i * 80}>
                                    <div className="hidden sm:flex flex-shrink-0 w-16 h-16 rounded-full bg-navy border-4 border-gold items-center justify-center z-10">
                                        <span className="text-gold font-bold text-xs">{m.year}</span>
                                    </div>
                                    <div className="bg-white rounded-xl p-5 shadow-card flex-1">
                                        <div className="sm:hidden text-teal text-xs font-bold mb-1">{m.year}</div>
                                        <div className="font-semibold text-navy mb-1">{m.label}</div>
                                        <div className="text-gray-500 text-sm">{m.desc}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Certifications */}
            <section className="section-padding bg-navy">
                <div className="container-custom">
                    <div className="text-center mb-12" data-aos="fade-up">
                        <p className="text-teal text-sm uppercase tracking-wider font-semibold mb-3">Compliance</p>
                        <h2 className="font-poppins text-3xl font-bold text-white mb-4">Certifications & Registrations</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto text-sm">
                            Global Mantra works with certified suppliers and maintains the necessary government
                            registrations required for international trade and food export compliance.
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {certificationsList.map((cert, i) => (
                            <div
                                key={i}
                                className="bg-navy-light border border-teal/20 rounded-xl p-5 card-hover"
                                data-aos="fade-up"
                                data-aos-delay={i * 80}
                            >
                                <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-3 ${cert.color}`}>
                                    {cert.code}
                                </span>
                                <p className="text-gray-400 text-sm leading-relaxed">{cert.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-12" data-aos="fade-up">
                        <p className="text-teal text-sm uppercase tracking-wider font-semibold mb-3">Our Team</p>
                        <h2 className="font-poppins text-3xl font-bold text-navy">Export Operations Team</h2>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
                        {team.map((member, i) => (
                            <div
                                key={i}
                                className="text-center bg-gray-light rounded-2xl p-6 card-hover"
                                data-aos="fade-up"
                                data-aos-delay={i * 80}
                            >
                                <div className="w-16 h-16 rounded-full bg-navy mx-auto flex items-center justify-center mb-4">
                                    <span className="text-gold font-bold text-xl">{member.name[0]}</span>
                                </div>
                                <div className="font-semibold text-navy">{member.name}</div>
                                <div className="text-teal text-sm mt-1">{member.role}</div>
                                <div className="text-gray-500 text-xs mt-1">{member.exp}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-gray-light py-16">
                <div className="container-custom text-center" data-aos="fade-up">
                    <h2 className="font-poppins text-2xl lg:text-3xl font-bold text-navy mb-4">
                        Start Your Sourcing with Global Mantra
                    </h2>
                    <p className="text-gray-500 mb-8 max-w-xl mx-auto">
                        Share your product requirements and our team will respond with sourcing options and export details.
                    </p>
                    <Link href="/contact" className="btn-gold px-8 py-3.5 rounded-xl inline-flex items-center gap-2 font-bold">
                        Request a Quote <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </section>
        </PageWrapper>
    );
}