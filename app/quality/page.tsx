"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ShieldCheck, FlaskConical, Star, CheckCircle2, ArrowRight, BarChart3, Microscope, Package2 } from "lucide-react";
import PageWrapper from "@/components/PageWrapper";

const qaSteps = [
  {
    step: 1,
    icon: FlaskConical,
    title: "Raw Material Inspection",
    desc: "Every incoming shipment undergoes physical and laboratory inspection before acceptance. Parameters include moisture content, purity, foreign matter, and sensory attributes.",
    checks: ["Moisture & water activity", "Physical purity grade", "Organoleptic evaluation", "Foreign matter detection"],
  },
  {
    step: 2,
    icon: BarChart3,
    title: "Grading & Sorting",
    desc: "Products are machine-sorted and graded to buyer specification. We operate optical color sorters, gravity separators, and vibro-cleaners in our processing facilities.",
    checks: ["Optical color sorting", "Gravity separation", "Screen grading by size", "Destoning & destemming"],
  },
  {
    step: 3,
    icon: Package2,
    title: "Packaging & Labeling",
    desc: "Export-compliant packaging with destination-market labeling — including net weight, country of origin, lot number, best-before date, and regulatory declarations.",
    checks: ["Net weight verification", "Country of origin marking", "Lot traceability coding", "Destination label compliance"],
  },
  {
    step: 4,
    icon: Microscope,
    title: "Pre-Shipment Testing",
    desc: "Third-party lab testing by accredited laboratories (SGS, Intertek, Bureau Veritas). Reports cover pesticide residues, heavy metals, microbiological compliance, and aflatoxins.",
    checks: ["Pesticide residue analysis", "Heavy metal screening", "Microbiological testing", "Aflatoxin & mycotoxin analysis"],
  },
];

const certifications = [
  { logo: "APEDA", name: "Agricultural Processed Food Export Development Authority", scope: "Agro Products" },
  { logo: "FSSAI", name: "Food Safety and Standards Authority of India", scope: "Food Products" },
  { logo: "ISO 22000", name: "Food Safety Management System", scope: "All Food Products" },
  { logo: "HACCP", name: "Hazard Analysis Critical Control Points", scope: "RTE Food Manufacturing" },
  { logo: "BIS", name: "Bureau of Indian Standards", scope: "Packaging Materials" },
  { logo: "AGMARK", name: "Agricultural Marketing Standard", scope: "Spices & Grains" },
];

export default function QualityPage() {
  return (
    <PageWrapper>
      {/* Hero */}
      <section className="relative py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?w=1920&q=80')" }}
        />
        <div className="absolute inset-0 bg-navy/85" />
        <div className="container-custom relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-teal text-sm uppercase tracking-widest font-semibold mb-4">Our Standards</p>
            <h1 className="font-poppins text-4xl lg:text-5xl font-bold text-white mb-6">
              Quality Assurance
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Multi-stage quality control from raw material inspection through to pre-shipment testing
              — ensuring every consignment meets your specification and import requirements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* QA Process */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-14" data-aos="fade-up">
            <p className="text-teal text-sm uppercase tracking-wider font-semibold mb-3">Our Process</p>
            <h2 className="font-poppins text-3xl font-bold text-navy">4-Stage Quality Control</h2>
          </div>

          <div className="space-y-8">
            {qaSteps.map((step, i) => (
              <div
                key={i}
                className="bg-gray-light rounded-2xl p-8 card-hover"
                data-aos="fade-up"
                data-aos-delay={i * 80}
              >
                <div className="grid sm:grid-cols-3 gap-6">
                  <div className="sm:col-span-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="step-number">{step.step}</div>
                      <div className="w-10 h-10 rounded-xl bg-navy flex items-center justify-center">
                        <step.icon className="w-5 h-5 text-teal" />
                      </div>
                    </div>
                    <h3 className="font-poppins font-bold text-navy text-xl">{step.title}</h3>
                  </div>
                  <div className="sm:col-span-2">
                    <p className="text-gray-600 leading-relaxed mb-5">{step.desc}</p>
                    <div className="grid grid-cols-2 gap-2">
                      {step.checks.map((check, j) => (
                        <div key={j} className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                          <span className="text-gray-600 text-sm">{check}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding bg-navy">
        <div className="container-custom">
          <div className="text-center mb-12" data-aos="fade-up">
            <p className="text-teal text-sm uppercase tracking-wider font-semibold mb-3">Compliance</p>
            <h2 className="font-poppins text-3xl font-bold text-white">Certifications & Accreditations</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {certifications.map((cert, i) => (
              <div
                key={i}
                className="bg-navy-light border border-teal/20 rounded-xl p-5 flex gap-4 items-start card-hover"
                data-aos="fade-up"
                data-aos-delay={i * 60}
              >
                <div className="w-14 h-14 rounded-xl bg-teal/10 border border-teal/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-teal font-bold text-xs text-center leading-tight">{cert.logo}</span>
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{cert.name}</div>
                  <div className="text-teal text-xs mt-1">{cert.scope}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Third Party */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <p className="text-teal text-sm uppercase tracking-wider font-semibold mb-3">Transparency</p>
              <h2 className="font-poppins text-3xl font-bold text-navy mb-6">
                Third-Party Inspection
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                We actively facilitate third-party inspection by globally recognized agencies. Buyers
                can nominate their preferred inspection company or we can arrange pre-shipment
                inspection through our established relationships with SGS, Intertek, and Bureau Veritas.
              </p>
              <ul className="space-y-3">
                {[
                  "SGS India – Pre-shipment inspection & lab testing",
                  "Bureau Veritas – Container stuffing & quantity verification",
                  "Intertek – Pesticide residue & heavy metal analysis",
                  "NABL-accredited local labs for microbiological testing",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Star className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-light rounded-2xl p-8" data-aos="fade-left">
              <ShieldCheck className="w-12 h-12 text-teal mb-4" />
              <h3 className="font-poppins font-bold text-navy text-xl mb-4">
                All Documents Provided
              </h3>
              <ul className="space-y-3">
                {[
                  "Certificate of Origin (CoO)",
                  "Phytosanitary Certificate",
                  "Health Certificate",
                  "Certificate of Analysis (CoA)",
                  "Packing List & Commercial Invoice",
                  "Bill of Lading / Airway Bill",
                  "Fumigation Certificate (where applicable)",
                ].map((doc, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-gray-600">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" /> {doc}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-teal py-14">
        <div className="container-custom text-center" data-aos="fade-up">
          <h2 className="font-poppins text-2xl font-bold text-white mb-4">
            Quality You Can Count On, Every Shipment
          </h2>
          <Link href="/contact" className="bg-white text-teal-dark font-bold py-3 px-8 rounded-xl inline-flex items-center gap-2 hover:bg-gray-100 transition-colors">
            Request a Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </PageWrapper>
  );
}
