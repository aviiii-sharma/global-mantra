"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Leaf, ShieldCheck, Package, Anchor, Truck, FileCheck, ArrowRight, Clock } from "lucide-react";
import PageWrapper from "@/components/PageWrapper";

const steps = [
  {
    icon: Leaf,
    title: "Farm-Level Sourcing",
    subtitle: "Origin to Warehouse",
    desc: "We source directly from certified farms, cooperatives, and processing units across India's major agricultural belts — avoiding intermediaries to ensure price competitiveness and traceability.",
    details: [
      "Direct farmer / mill relationships",
      "Season-by-season procurement planning",
      "Supplier audit & approval process",
      "Cold chain for temperature-sensitive cargo",
    ],
    duration: "Lead time: 3–7 days (local)",
    color: "from-emerald-600 to-teal-600",
  },
  {
    icon: ShieldCheck,
    title: "Quality Inspection & Lab Testing",
    subtitle: "QC Facility",
    desc: "Multi-stage quality control including physical grading, optical sorting, moisture analysis, and third-party lab testing before any cargo is approved for export.",
    details: [
      "Optical sorting & grading machines",
      "Moisture & purity testing",
      "Lab testing (pesticides, heavy metals)",
      "Third-party pre-shipment inspection",
    ],
    duration: "Lead time: 1–3 days",
    color: "from-blue-600 to-indigo-700",
  },
  {
    icon: Package,
    title: "Packaging & Labeling",
    subtitle: "Packing Facility",
    desc: "Products are packed in buyer-specified packaging with full compliance labeling — lot numbers, production dates, net weights, country of origin, and destination-market regulatory declarations.",
    details: [
      "Custom packing to buyer spec",
      "Multi-language label printing",
      "Lot traceability coding",
      "Export carton marking (per container type)",
    ],
    duration: "Lead time: 1–2 days",
    color: "from-amber-600 to-orange-700",
  },
  {
    icon: FileCheck,
    title: "Documentation & Compliance",
    subtitle: "Export Documentation",
    desc: "Full suite of export documentation prepared and verified: LC / TT payment terms, shipping bill, CoO, phytosanitary certificate, and all destination-specific regulatory documents.",
    details: [
      "Shipping bill & customs clearance",
      "Phytosanitary / health certificate",
      "Certificate of Origin (APEDA / Chamber)",
      "Fumigation certificate (if required)",
    ],
    duration: "Lead time: 1–3 days",
    color: "from-purple-600 to-violet-700",
  },
  {
    icon: Anchor,
    title: "Port Handling & Loading",
    subtitle: "Port of Origin",
    desc: "Cargo consolidated and loaded under CFS supervision. Container stuffing witnessed and certified by third-party inspector upon buyer request. Reefer containers available for temperature-sensitive shipments.",
    details: [
      "CFS booking & cargo movement",
      "Container stuffing report",
      "Seal number verification",
      "Phytosanitary final check at port",
    ],
    duration: "Lead time: 1–2 days",
    color: "from-teal-600 to-cyan-700",
  },
  {
    icon: Truck,
    title: "International Freight & Delivery",
    subtitle: "Global Transit",
    desc: "FCL / LCL sea freight or air freight depending on buyer requirements. We work with major freight forwarders and shipping lines on competitive rates across all major global trade routes.",
    details: [
      "FCL & LCL sea freight options",
      "Air freight for urgent orders",
      "Real-time B/L tracking & updates",
      "Port-to-door delivery available (DDP)",
    ],
    duration: "Transit: 10–35 days (sea) / 2–5 days (air)",
    color: "from-navy-600 to-navy-800",
  },
];

const terms = [
  { term: "FOB", desc: "Free On Board — cost & risk transfers to buyer once cargo is on vessel." },
  { term: "CIF", desc: "Cost, Insurance & Freight — seller covers freight and insurance to destination port." },
  { term: "CFR", desc: "Cost & Freight — seller pays freight, buyer covers insurance." },
  { term: "DDP", desc: "Delivered Duty Paid — seller delivers to buyer's premises, duty included." },
];

export default function LogisticsPage() {
  return (
    <PageWrapper>
      {/* Hero */}
      <section className="relative py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1920&q=80')" }}
        />
        <div className="absolute inset-0 bg-navy/85" />
        <div className="container-custom relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-teal text-sm uppercase tracking-widest font-semibold mb-4">Export Workflow</p>
            <h1 className="font-poppins text-4xl lg:text-5xl font-bold text-white mb-6">
              Our Logistics Process
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              End-to-end export management — from farm sourcing and quality inspection through to
              international freight and last-mile delivery.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-14" data-aos="fade-up">
            <p className="text-teal text-sm uppercase tracking-wider font-semibold mb-3">Step by Step</p>
            <h2 className="font-poppins text-3xl font-bold text-navy">6-Step Export Process</h2>
          </div>

          <div className="space-y-6">
            {steps.map((step, i) => (
              <div
                key={i}
                className="bg-gray-light rounded-2xl overflow-hidden card-hover"
                data-aos="fade-up"
                data-aos-delay={i * 60}
              >
                <div className="grid sm:grid-cols-4">
                  {/* Left color panel */}
                  <div className={`bg-gradient-to-br ${step.color} p-6 flex flex-col justify-center items-center text-center`}>
                    <div className="step-number mb-3">{i + 1}</div>
                    <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-3">
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-poppins font-bold text-white text-sm leading-tight">{step.title}</h3>
                    <p className="text-white/70 text-xs mt-1">{step.subtitle}</p>
                  </div>

                  {/* Right content */}
                  <div className="sm:col-span-3 p-6">
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{step.desc}</p>
                    <div className="grid sm:grid-cols-2 gap-2 mb-4">
                      {step.details.map((d, j) => (
                        <div key={j} className="flex items-center gap-2 text-xs text-gray-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-teal flex-shrink-0" /> {d}
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-teal font-semibold">
                      <Clock className="w-3.5 h-3.5" /> {step.duration}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shipping Terms */}
      <section className="section-padding bg-navy">
        <div className="container-custom">
          <div className="text-center mb-12" data-aos="fade-up">
            <p className="text-teal text-sm uppercase tracking-wider font-semibold mb-3">Incoterms</p>
            <h2 className="font-poppins text-3xl font-bold text-white">Shipping Terms We Offer</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {terms.map((t, i) => (
              <div key={i} className="bg-navy-light border border-teal/20 rounded-xl p-5" data-aos="fade-up" data-aos-delay={i * 80}>
                <div className="text-2xl font-poppins font-bold text-gold mb-3">{t.term}</div>
                <p className="text-gray-400 text-sm leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-light py-16">
        <div className="container-custom text-center" data-aos="fade-up">
          <h2 className="font-poppins text-2xl font-bold text-navy mb-4">
            Ready to Start Your First Shipment?
          </h2>
          <p className="text-gray-500 mb-8">
            Our export team will provide a detailed shipping timeline and freight estimation with your quotation.
          </p>
          <Link href="/contact" className="btn-gold px-8 py-3.5 rounded-xl font-bold inline-flex items-center gap-2">
            Request a Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </PageWrapper>
  );
}
