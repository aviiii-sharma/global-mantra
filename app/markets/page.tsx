"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Globe, ArrowRight } from "lucide-react";
import PageWrapper from "@/components/PageWrapper";
import { regions, stats } from "@/data/markets";

export default function MarketsPage() {
  return (
    <PageWrapper>
      {/* Hero */}
      <section className="relative py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1521295121783-8a321d551ad2?w=1920&q=80')" }}
        />
        <div className="absolute inset-0 bg-navy/85" />
        <div className="container-custom relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-teal text-sm uppercase tracking-widest font-semibold mb-4">Our Reach</p>
            <h1 className="font-poppins text-4xl lg:text-5xl font-bold text-white mb-6">
              Global Markets We Serve
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Active trade partnerships across 45+ countries in 6 regions, with established freight
              corridors and in-depth compliance knowledge for each market.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="bg-navy-800 py-12">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <div key={i} className="text-center" data-aos="fade-up" data-aos-delay={i * 80}>
                <div className="text-3xl font-poppins font-bold text-gradient-gold mb-1">{s.value}</div>
                <div className="text-gray-400 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Region Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12" data-aos="fade-up">
            <p className="text-teal text-sm uppercase tracking-wider font-semibold mb-3">Region by Region</p>
            <h2 className="font-poppins text-3xl font-bold text-navy">
              Where Our Products Are Exported
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regions.map((region, i) => (
              <div
                key={i}
                className="group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                data-aos="fade-up"
                data-aos-delay={i * 80}
              >
                {/* Header */}
                <div className={`bg-gradient-to-br ${region.color} px-5 py-4 flex items-center justify-between`}>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{region.icon}</span>
                    <h3 className="font-poppins font-bold text-white text-base">{region.name}</h3>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white/70">
                    {region.countries.length} markets
                  </span>
                </div>

                {/* Countries */}
                <div className="px-5 py-4">
                  <div className="flex flex-wrap gap-x-0 gap-y-0 divide-y divide-gray-100">
                    {region.countries.map((country, j) => (
                      <div
                        key={country}
                        className="w-full flex items-center gap-2.5 py-2"
                      >
                        <span className="w-1 h-1 rounded-full bg-teal flex-shrink-0" />
                        <span className="text-navy text-sm font-medium">{country}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trade Lanes */}
      <section className="section-padding bg-navy">
        <div className="container-custom">
          <div className="text-center mb-12" data-aos="fade-up">
            <p className="text-teal text-sm uppercase tracking-wider font-semibold mb-3">Logistics</p>
            <h2 className="font-poppins text-3xl font-bold text-white mb-4">
              Active Freight Corridors
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm">
              We maintain established trade lanes from Indian ports to major gateway ports worldwide.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { from: "JNPT / Nhava Sheva", to: "Dubai, Jebel Ali (UAE)", type: "Sea Freight" },
              { from: "Chennai / Tuticorin", to: "Singapore, Port Klang", type: "Sea Freight" },
              { from: "Mumbai", to: "Rotterdam, Hamburg (Europe)", type: "Sea Freight" },
              { from: "JNPT", to: "Los Angeles, New York (USA)", type: "Sea Freight" },
              { from: "Mundra", to: "Durban (S. Africa), Mombasa", type: "Sea Freight" },
              { from: "Delhi ICD", to: "Global (All Routes)", type: "Air Freight / Express" },
            ].map((lane, i) => (
              <div
                key={i}
                className="bg-navy-light border border-teal/20 rounded-xl p-4"
                data-aos="fade-up"
                data-aos-delay={i * 60}
              >
                <div className="flex items-center gap-2 mb-3">
                  <Globe className="w-4 h-4 text-teal" />
                  <span className="text-teal text-xs font-semibold uppercase tracking-wider">{lane.type}</span>
                </div>
                <div className="text-white font-medium text-sm">{lane.from}</div>
                <div className="text-gray-500 text-xs my-1">→</div>
                <div className="text-gray-300 text-sm">{lane.to}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-light py-16">
        <div className="container-custom text-center" data-aos="fade-up">
          <h2 className="font-poppins text-2xl font-bold text-navy mb-4">
            Don't See Your Country Listed?
          </h2>
          <p className="text-gray-500 mb-8">
            We export to virtually any compliant destination. Contact us to discuss your specific market requirements.
          </p>
          <Link href="/contact" className="btn-gold px-8 py-3.5 rounded-xl font-bold inline-flex items-center gap-2">
            Enquire Now <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </PageWrapper>
  );
}