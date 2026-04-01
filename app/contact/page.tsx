"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Phone, Mail, MapPin, Clock, CheckCircle2, Globe } from "lucide-react";
import PageWrapper from "@/components/PageWrapper";

const products = ["Agro Products", "Ready-to-Eat Food", "Packaging Materials", "Multiple Products", "Other / Custom"];
const shippingTermsList = ["FOB", "CIF", "CFR", "DDP", "Not Sure – Need Guidance"];
const quantities = ["1–5 MT", "5–20 MT", "20–50 MT", "50–100 MT", "100+ MT", "As agreed"];

type FormData = {
    name: string; company: string; email: string; phone: string;
    country: string; product: string; quantity: string; shippingTerm: string; message: string;
};

export default function ContactPage() {
    const [form, setForm] = useState<FormData>({
        name: "", company: "", email: "", phone: "",
        country: "", product: "", quantity: "", shippingTerm: "", message: "",
    });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        await new Promise((r) => setTimeout(r, 1200));
        setLoading(false);
        setSubmitted(true);
    };

    return (
        <PageWrapper>
            {/* Hero */}
            <section className="relative py-16 sm:py-28 overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=1920&q=80')" }}
                />
                <div className="absolute inset-0 bg-navy/85" />
                <div className="container-custom relative z-10 text-center">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <p className="text-teal text-sm uppercase tracking-widest font-semibold mb-4">Get in Touch</p>
                        <h1 className="font-poppins text-3xl lg:text-5xl font-bold text-white mb-6">
                            Request a Quotation
                        </h1>
                        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                            Fill the form below with your product requirements and our export specialists will respond
                            within one business day with a detailed quotation.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main */}
            <section className="section-padding bg-gray-light">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-3 gap-10">
                        {/* Form */}
                        <div className="lg:col-span-2">
                            {submitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="bg-white rounded-2xl p-12 text-center shadow-card"
                                >
                                    <div className="w-20 h-20 rounded-full bg-emerald-100 mx-auto flex items-center justify-center mb-6">
                                        <CheckCircle2 className="w-10 h-10 text-emerald-600" />
                                    </div>
                                    <h2 className="font-poppins text-2xl font-bold text-navy mb-3">
                                        Enquiry Submitted Successfully!
                                    </h2>
                                    <p className="text-gray-500">
                                        Thank you, <strong>{form.name}</strong>. Our export team will review your requirements
                                        and get back to you at <strong className="text-teal">{form.email}</strong> within one business day.
                                    </p>
                                    <p className="text-gray-400 text-sm mt-4">
                                        Reference: RFQ-{Date.now().toString().slice(-6)}
                                    </p>
                                </motion.div>
                            ) : (
                                <form
                                    onSubmit={handleSubmit}
                                    className="bg-white rounded-2xl p-8 shadow-card"
                                    data-aos="fade-up"
                                >
                                    <h2 className="font-poppins text-xl font-bold text-navy mb-6">Buyer Information</h2>

                                    <div className="grid sm:grid-cols-2 gap-5 mb-6">
                                        {[
                                            { label: "Full Name *", name: "name", placeholder: "Your full name", type: "text" },
                                            { label: "Company Name *", name: "company", placeholder: "Company / Organization", type: "text" },
                                            { label: "Business Email *", name: "email", placeholder: "email@company.com", type: "email" },
                                            { label: "Phone / WhatsApp", name: "phone", placeholder: "+1 234 567 8900", type: "tel" },
                                            { label: "Country / Destination *", name: "country", placeholder: "e.g. United States", type: "text" },
                                        ].map((field) => (
                                            <div key={field.name} className={field.name === "country" ? "sm:col-span-2" : ""}>
                                                <label className="block text-navy font-semibold text-sm mb-2">{field.label}</label>
                                                <input
                                                    type={field.type}
                                                    name={field.name}
                                                    value={form[field.name as keyof FormData]}
                                                    onChange={handleChange}
                                                    placeholder={field.placeholder}
                                                    required={field.label.endsWith("*")}
                                                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-navy placeholder-gray-400 focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/10 transition-all"
                                                />
                                            </div>
                                        ))}
                                    </div>

                                    <div className="border-t border-gray-100 pt-6 mb-6">
                                        <h3 className="font-poppins text-lg font-bold text-navy mb-5">Product Requirements</h3>
                                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                                            <div>
                                                <label className="block text-navy font-semibold text-sm mb-2">Product Category *</label>
                                                <select
                                                    name="product"
                                                    value={form.product}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-navy focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/10 transition-all bg-white"
                                                >
                                                    <option value="">Select product...</option>
                                                    {products.map((p) => <option key={p} value={p}>{p}</option>)}
                                                </select>
                                            </div>
                                            <div>
                                                <label className="block text-navy font-semibold text-sm mb-2">Quantity Required</label>
                                                <select
                                                    name="quantity"
                                                    value={form.quantity}
                                                    onChange={handleChange}
                                                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-navy focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/10 transition-all bg-white"
                                                >
                                                    <option value="">Select quantity...</option>
                                                    {quantities.map((q) => <option key={q} value={q}>{q}</option>)}
                                                </select>
                                            </div>
                                            <div>
                                                <label className="block text-navy font-semibold text-sm mb-2">Preferred Shipping Term</label>
                                                <select
                                                    name="shippingTerm"
                                                    value={form.shippingTerm}
                                                    onChange={handleChange}
                                                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-navy focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/10 transition-all bg-white"
                                                >
                                                    <option value="">Select term...</option>
                                                    {shippingTermsList.map((t) => <option key={t} value={t}>{t}</option>)}
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mb-6">
                                        <label className="block text-navy font-semibold text-sm mb-2">
                                            Additional Details / Product Specifications
                                        </label>
                                        <textarea
                                            name="message"
                                            value={form.message}
                                            onChange={handleChange}
                                            rows={4}
                                            placeholder="Please describe your specific product requirements, quality standards, packaging preferences, target price range, or any other relevant details..."
                                            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-navy placeholder-gray-400 focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/10 transition-all resize-none"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="btn-gold w-full py-4 rounded-xl font-bold text-base flex items-center justify-center gap-2 disabled:opacity-70"
                                    >
                                        {loading ? (
                                            <span className="flex items-center gap-2">
                                                <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                                                </svg>
                                                Submitting...
                                            </span>
                                        ) : (
                                            <><Send className="w-5 h-5" /> Submit Quote Request</>
                                        )}
                                    </button>
                                    <p className="text-center text-gray-400 text-xs mt-4">
                                        We typically respond within 1 business day. All enquiries are strictly confidential.
                                    </p>
                                </form>
                            )}
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-5" data-aos="fade-left">
                            {/* Contact info */}
                            <div className="bg-navy rounded-2xl p-6 text-white">
                                <h3 className="font-poppins font-bold text-lg text-gold mb-5">Contact Details</h3>
                                <ul className="space-y-4">
                                    {[
                                        { icon: MapPin, label: "Address", value: "Global Mantra Group Ltd.\nAhmedabad, Gujarat, India" },
                                        { icon: Phone, label: "Phone / WhatsApp", value: "+91 91043 34361" },
                                        { icon: Mail, label: "Email", value: "work@globalmantragroupltd.com" },
                                        { icon: Globe, label: "Website", value: "www.globalmantra.in" },
                                        { icon: Clock, label: "Business Hours", value: "Mon–Sat: 9:00 AM – 9:00 PM IST" },
                                    ].map((item, i) => (
                                        <li key={i} className="flex gap-3">
                                            <item.icon className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                                            <div>
                                                <div className="text-gray-400 text-xs">{item.label}</div>
                                                <div className="text-gray-200 text-sm whitespace-pre-line">{item.value}</div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Key certifications */}
                            <div className="bg-white rounded-2xl p-5 shadow-card">
                                <h4 className="font-semibold text-navy text-sm mb-4">Our Certifications</h4>
                                <div className="flex flex-wrap gap-2">
                                    {["IEC", "FSSAI", "APEDA", "SBR", "ISO 22000", "HACCP", "COA", "MSDS", "GST"].map((c) => (
                                        <span key={c} className="px-3 py-1 bg-navy text-teal text-xs rounded-full font-medium border border-teal/30">
                                            {c}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Response promise */}
                            <div className="bg-teal/10 border border-teal/30 rounded-2xl p-5">
                                <CheckCircle2 className="w-6 h-6 text-teal mb-3" />
                                <h4 className="font-semibold text-navy text-sm mb-2">Our Response Promise</h4>
                                <ul className="space-y-2 text-xs text-gray-600">
                                    <li className="flex gap-2"><span className="text-teal">✓</span> Response within 1 business day</li>
                                    <li className="flex gap-2"><span className="text-teal">✓</span> Detailed quotation with pricing</li>
                                    <li className="flex gap-2"><span className="text-teal">✓</span> Dedicated export manager assigned</li>
                                    <li className="flex gap-2"><span className="text-teal">✓</span> Sample available upon request</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </PageWrapper>
    );
}
