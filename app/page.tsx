"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Anchor, Award, Globe, ShieldCheck, Truck, Package, Leaf, UtensilsCrossed, CheckCircle2, ChevronRight, Star, BookOpen, FlaskConical, SlidersHorizontal, BadgeCheck, Quote } from "lucide-react";
import PageWrapper from "@/components/PageWrapper";

const stats = [
  { value: "3", label: "Core Export Segments" },
  { value: "20+", label: "Verified Suppliers" },
  { value: "50+", label: "Export-Ready Products" },
  { value: "100%", label: "Pre-Shipment Inspection" },
];

const categories = [
  {
    icon: Leaf,
    title: "Agro Products",
    description: "Premium spices, grains, and pulses sourced from certified Indian farms and graded to international export standards.",
    items: ["Turmeric", "Cumin", "Basmati Rice", "Red Lentils", "Chickpeas"],
    href: "/products/agro",
    color: "from-emerald-500 to-teal",
  },
  {
    icon: UtensilsCrossed,
    title: "Ready-to-Eat Food",
    description: "Shelf-stable packed Indian meals and processed foods for international retail and institutional supply chains.",
    items: ["Dal Makhani", "Biryani Kits", "Curry Pastes", "Papad", "Pickles"],
    href: "/products/rte",
    color: "from-teal to-teal-dark",
  },
  {
    icon: Package,
    title: "Packaging Materials",
    description: "Export-grade industrial packaging — PP woven sacks, HDPE bags, FIBC jumbo bags, and laminated pouches.",
    items: ["PP Woven Sacks", "HDPE Bags", "FIBC Bags", "Kraft Bags", "Jute Bags"],
    href: "/products/packaging",
    color: "from-gold-dark to-gold",
  },
];

const markets = [
  { region: "Middle East & GCC", countries: "UAE, Saudi Arabia, Qatar, Kuwait" },
  { region: "Europe", countries: "UK, Germany, Netherlands, France" },
  { region: "North America", countries: "USA, Canada, Mexico" },
  { region: "Southeast Asia", countries: "Singapore, Malaysia, Indonesia" },
  { region: "Africa", countries: "South Africa, Kenya, Nigeria" },
  { region: "Oceania", countries: "Australia, New Zealand" },
];

const processSteps = [
  { step: 1, icon: Leaf, title: "Sourcing", desc: "Farm-to-warehouse sourcing from certified agricultural belts across India." },
  { step: 2, icon: ShieldCheck, title: "Quality Inspection", desc: "Multi-stage QC: grading, moisture testing, lab analysis, and third-party verification." },
  { step: 3, icon: Package, title: "Packaging", desc: "Export-compliant packaging with proper labeling for each destination market." },
  { step: 4, icon: Anchor, title: "Freight & Customs", desc: "Complete documentation, customs clearance, and freight forwarding handled in-house." },
  { step: 5, icon: Truck, title: "Last-Mile Delivery", desc: "On-time delivery to destination ports with real-time shipment tracking." },
];

const features = [
  { icon: Award, title: "Verified Supplier Network", desc: "Trusted farms, processors, and packaging manufacturers carefully selected across India." },
  { icon: Globe, title: "International Export Standards", desc: "Products prepared according to global quality, food safety, and packaging requirements." },
  { icon: ShieldCheck, title: "Quality Inspection & Documentation", desc: "Pre-shipment verification and documentation to ensure product consistency and compliance." },
  { icon: Truck, title: "Efficient Export Logistics", desc: "Coordinated sourcing, packaging, and freight support for smooth international delivery." },
];

const featuredProducts = [
  {
    category: "Agro",
    name: "Turmeric Fingers",
    grade: "Premium Export Grade",
    spec: "4–5% curcumin | Erode origin | Moisture ≤10%",
    tag: "Best Seller",
    tagColor: "bg-emerald-500",
    image: "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=400&q=70",
    href: "/products/agro",
  },
  {
    category: "Packaging",
    name: "Planter & Garden Waste Bag",
    grade: "UN Rated / Heavy Duty",
    spec: "UV stabilized | Non-woven or woven PP | Eco-certified",
    tag: "High Demand",
    tagColor: "bg-blue-500",
    image: "/images/packagingmaterials/garden-wastebag.png",
    href: "/products/packaging",
  },
  {
    category: "Ready-to-Eat",
    name: "Dal Makhani",
    grade: "Retort / Glass Jar",
    spec: "18-month shelf life | HACCP certified | 450g–1kg",
    tag: "HACCP",
    tagColor: "bg-teal",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&q=70",
    href: "/products/rte",
  },
  {
    category: "Packaging",
    name: "PP Gusseted Bags",
    grade: "UN Rated / Heavy Duty",
    spec: "Side gusset | Expanded base | 5–50 kg capacity",
    tag: "Industrial",
    tagColor: "bg-gold-dark",
    image: "/images/packagingmaterials/gusseted-bags.png",
    href: "/products/packaging",
  },
];

const qaSteps = [
  { icon: FlaskConical, title: "Lab Testing", desc: "Moisture, purity, aflatoxin, and heavy-metal analysis by accredited third-party labs." },
  { icon: BadgeCheck,   title: "Batch Certification", desc: "Certificate of Analysis (COA) and phytosanitary certificates for every shipment." },
  { icon: ShieldCheck,  title: "Pre-Shipment Inspection", desc: "SGS / Bureau Veritas inspection facilitated on request before loading." },
  { icon: Award,        title: "Compliance Docs", desc: "Full export documentation — BL, COO, health cert, fumigation cert — prepared in-house." },
];

const exportGrades = [
  { label: "FAQ Grade",      desc: "Fair Average Quality — standard export specification" },
  { label: "Premium Grade",  desc: "Machine-cleaned, sortex-processed, retail-ready" },
  { label: "Organic",        desc: "Third-party organic certified on select SKUs" },
  { label: "Custom Spec",    desc: "Moisture, size, and purity tailored to buyer requirements" },
];

const testimonials = [
  {
    name: "Ahmed Al-Rashidi",
    company: "Al Rashidi Trading Co.",
    country: "UAE",
    flag: "🇦🇪",
    quote: "Global Mantra has been supplying us Basmati and spices for two seasons. Documentation is always clean, shipments on time, and quality consistent. Exactly what you need in an export partner.",
    rating: 5,
  },
  {
    name: "Priya Nair",
    company: "Nair Foods Distribution",
    country: "UK",
    flag: "🇬🇧",
    quote: "We switched to Global Mantra for our RTE product range. HACCP certification, halal options, and retail-ready packaging — they handled everything without us having to chase.",
    rating: 5,
  },
  {
    name: "Marcus Weber",
    company: "Weber Packaging GmbH",
    country: "Germany",
    flag: "🇩🇪",
    quote: "We source PP woven sacks and Garden Waste bags from them quarterly. Quality is consistent, the team responds fast, and pricing stays competitive even with large volumes.",
    rating: 5,
  },
];

const blogPosts = [
  {
    tag: "Agro Export",
    title: "How India's Spice Belt is Changing Global Supply Chains",
    summary: "From Erode turmeric to Rajasthan cumin — why Indian spice origins are commanding a premium in European retail.",
    readTime: "4 min read",
    href: "/blog/india-spice-belt",
  },
  {
    tag: "Compliance",
    title: "EU Pesticide Limits for Agro Imports: What Exporters Must Know in 2025",
    summary: "A practical guide to MRL compliance, lab testing requirements, and documentation for EU-bound agricultural shipments.",
    readTime: "6 min read",
    href: "/blog/eu-pesticide-limits",
  },
  {
    tag: "Packaging",
    title: "FIBC vs PP Woven Sacks: Choosing the Right Bulk Packaging",
    summary: "A side-by-side comparison of FIBC jumbo bags and PP woven sacks for grain, spice, and chemical bulk exports.",
    readTime: "5 min read",
    href: "/blog/fibc-vs-pp-woven",
  },
];

export default function HomePage() {
  return (
    <PageWrapper>
      {/* ── HERO ── */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1920&q=80')",
          }}
        />
        <div className="hero-overlay absolute inset-0" />

        {/* Floating abstract shapes */}
        <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-teal/5 blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-gold/5 blur-3xl" />

        <div className="container-custom relative z-10 py-20">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-teal/10 border border-teal/30 text-teal px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <Globe className="w-4 h-4" />
              India's Trusted B2B Export Partner
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="font-poppins text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            >
              Connecting{" "}
              <span className="text-gradient-teal">Global Markets</span>
              <br />
              Through Reliable
              <br />
              <span className="text-gradient-gold">Export Solutions</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-300 text-lg leading-relaxed mb-10 max-w-2xl"
            >
              Global Mantra is a modern export company connecting international buyers 
              with trusted suppliers across India. We specialize in sourcing agro products, 
              ready-to-make foods, and industrial packaging materials while ensuring quality, 
              compliance, and efficient export coordination.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/contact" className="btn-gold px-8 py-4 rounded-xl text-base font-bold inline-flex items-center gap-2">
                Request a Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/products"
                className="border border-white/30 text-white hover:bg-white/10 transition-colors px-8 py-4 rounded-xl text-base font-semibold inline-flex items-center gap-2"
              >
                View Products
                <ChevronRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
          >
            <div className="w-1 h-2 bg-gold rounded-full" />
          </motion.div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="bg-navy-800 py-16">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <div
                key={i}
                className="text-center"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <div className="text-3xl lg:text-4xl font-poppins font-bold text-gradient-gold mb-2">
                  {s.value}
                </div>
                <div className="text-gray-400 text-sm font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPANY OVERVIEW ── */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div data-aos="fade-right">
              <div className="inline-flex items-center gap-2 text-teal text-sm font-semibold uppercase tracking-wider mb-4">
                <div className="w-8 h-0.5 bg-teal" /> Who We Are
              </div>
              <h2 className="font-poppins text-3xl lg:text-4xl font-bold text-navy mb-6 leading-tight">
                Global Export Partner from India
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Global Mantra is a modern export company based in India, focused on connecting global buyers with
                reliable suppliers across the country’s agricultural and manufacturing ecosystems. Established in 2026, we
                specialize in sourcing high-quality agro products, ready-to-make foods, and industrial packaging materials
                for international markets.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Our sourcing network spans India's key agricultural regions and production clusters, allowing us to deliver
                products that meet international quality and packaging standards. We work closely with farmers, processors,
                and manufacturers to ensure consistent supply and dependable export logistics.
              </p>
              <Link href="/about" className="btn-teal px-6 py-3 rounded-lg inline-flex items-center gap-2 text-sm font-semibold">
                Learn About Us <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4" data-aos="fade-left">
              {features.map((f, i) => (
                <div key={i} className="bg-gray-light rounded-2xl p-5 card-hover">
                  <div className="w-10 h-10 rounded-lg bg-navy flex items-center justify-center mb-4">
                    <f.icon className="w-5 h-5 text-gold" />
                  </div>
                  <h4 className="text-navy font-semibold text-sm mb-1">{f.title}</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── EXPORT CATEGORIES ── */}
      <section className="section-padding bg-gray-light">
        <div className="container-custom">
          <div className="text-center mb-14" data-aos="fade-up">
            <div className="inline-flex items-center gap-2 text-teal text-sm font-semibold uppercase tracking-wider mb-4">
              <div className="w-8 h-0.5 bg-teal" /> Export Categories <div className="w-8 h-0.5 bg-teal" />
            </div>
            <h2 className="font-poppins text-3xl lg:text-4xl font-bold text-navy mb-4">
              Our Core Export Products
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Three specialized product verticals, each with dedicated sourcing networks, quality
              protocols, and international trade documentation support.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {categories.map((cat, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl overflow-hidden shadow-card card-hover group"
                data-aos="fade-up"
                data-aos-delay={i * 120}
              >
                {/* Card header */}
                <div className={`bg-gradient-to-br ${cat.color} p-8`}>
                  <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                    <cat.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-poppins text-xl font-bold text-white mb-2">{cat.title}</h3>
                  <p className="text-white/80 text-sm leading-relaxed">{cat.description}</p>
                </div>

                {/* Card body */}
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {cat.items.map((item) => (
                      <span key={item} className="product-tag text-xs">
                        {item}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={cat.href}
                    className="text-navy hover:text-teal font-semibold text-sm flex items-center gap-1 transition-colors group-hover:gap-2"
                  >
                    View Products & Specifications
                    <ArrowRight className="w-4 h-4 transition-all" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED PRODUCTS ── */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10" data-aos="fade-up">
            <div>
              <div className="inline-flex items-center gap-2 text-teal text-sm font-semibold uppercase tracking-wider mb-3">
                <div className="w-8 h-0.5 bg-teal" /> Featured Products
              </div>
              <h2 className="font-poppins text-3xl lg:text-4xl font-bold text-navy">
                Bulk &amp; Premium Grades
              </h2>
            </div>
            <Link href="/products" className="text-teal font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all whitespace-nowrap">
              View All Products <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {featuredProducts.map((p, i) => (
              <Link
                key={i}
                href={p.href}
                className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-teal/40 hover:shadow-lg transition-all"
                data-aos="fade-up"
                data-aos-delay={i * 80}
              >
                <div className="relative h-44 overflow-hidden bg-gray-100">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <span className={`absolute top-3 left-3 ${p.tagColor} text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full`}>
                    {p.tag}
                  </span>
                  <span className="absolute top-3 right-3 bg-navy/75 text-white text-[10px] font-semibold px-2 py-0.5 rounded-full backdrop-blur-sm">
                    {p.category}
                  </span>
                </div>
                <div className="p-4">
                  <p className="text-[10px] text-teal font-bold uppercase tracking-wider mb-0.5">{p.grade}</p>
                  <h4 className="font-poppins font-bold text-navy text-sm mb-1 group-hover:text-teal transition-colors">{p.name}</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">{p.spec}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── GLOBAL MARKETS ── */}
      <section className="section-padding bg-navy-800">
        <div className="container-custom">
          <div className="text-center mb-14" data-aos="fade-up">
            <div className="inline-flex items-center gap-2 text-teal text-sm font-semibold uppercase tracking-wider mb-4">
              <div className="w-8 h-0.5 bg-teal" /> Global Reach <div className="w-8 h-0.5 bg-teal" />
            </div>
            <h2 className="font-poppins text-3xl lg:text-4xl font-bold text-white mb-4">
              Markets We Serve
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Active trade relationships across 6 continents with established freight routes and
              local compliance knowledge in every key market.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {markets.map((m, i) => (
              <div
                key={i}
                className="border border-teal/20 rounded-xl p-5 bg-navy hover:border-teal/50 hover:bg-navy-light transition-all group"
                data-aos="fade-up"
                data-aos-delay={i * 80}
              >
                <div className="text-2xl mb-3">🌐</div>
                <h4 className="text-white font-semibold mb-1 text-sm">{m.region}</h4>
                <p className="text-gray-500 text-xs">{m.countries}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10" data-aos="fade-up">
            <Link href="/markets" className="btn-teal px-8 py-3 rounded-xl inline-flex items-center gap-2 text-sm font-semibold">
              View All Markets <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── EXPORT PROCESS ── */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-14" data-aos="fade-up">
            <div className="inline-flex items-center gap-2 text-teal text-sm font-semibold uppercase tracking-wider mb-4">
              <div className="w-8 h-0.5 bg-teal" /> How We Work <div className="w-8 h-0.5 bg-teal" />
            </div>
            <h2 className="font-poppins text-3xl lg:text-4xl font-bold text-navy mb-4">
              Our Export Process
            </h2>
          </div>

          <div className="relative">
            {/* Connector line */}
            <div className="hidden lg:block absolute top-6 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-gold via-teal to-gold" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
              {processSteps.map((step, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center text-center relative"
                  data-aos="fade-up"
                  data-aos-delay={i * 100}
                >
                  <div className="step-number mb-4">{step.step}</div>
                  <div className="w-12 h-12 rounded-xl bg-navy flex items-center justify-center mb-4">
                    <step.icon className="w-6 h-6 text-teal" />
                  </div>
                  <h4 className="font-poppins font-bold text-navy mb-2 text-sm">{step.title}</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY GLOBAL MANTRA ── */}
      <section className="section-padding bg-navy">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <div className="inline-flex items-center gap-2 text-teal text-sm font-semibold uppercase tracking-wider mb-4">
                <div className="w-8 h-0.5 bg-teal" /> Why Choose Us
              </div>
              <h2 className="font-poppins text-3xl lg:text-4xl font-bold text-white mb-6">
                Built for International Buyers
              </h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                We understand the demands of international procurement: compliance documentation,
                consistent quality, timely shipments, and responsive communication. Our team of export
                specialists manages every step from purchase order to port of destination.
              </p>
              <ul className="space-y-4">
                {[
                  "Dedicated export manager for every account",
                  "Pre-shipment inspection & phytosanitary certificates",
                  "Flexible payment terms: LC, TT, & DP",
                  "Real-time shipment tracking & status updates",
                  "Competitive pricing with volume discounts",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="relative rounded-2xl overflow-hidden h-80 lg:h-[420px]"
              data-aos="fade-left"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800&q=80')",
                }}
              />
              <div className="absolute inset-0 bg-navy/40" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-navy/80 backdrop-blur-sm border border-teal/30 rounded-xl p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gold flex items-center justify-center">
                      <Award className="w-5 h-5 text-navy" />
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm">APEDA Certified Exporter</div>
                      <div className="text-gray-400 text-xs">Agricultural & Processed Food Products Export Development Authority</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── QUALITY ASSURANCE ── */}
      <section className="section-padding bg-gray-light">
        <div className="container-custom">
          <div className="text-center mb-12" data-aos="fade-up">
            <div className="inline-flex items-center gap-2 text-teal text-sm font-semibold uppercase tracking-wider mb-3">
              <div className="w-8 h-0.5 bg-teal" /> Quality First <div className="w-8 h-0.5 bg-teal" />
            </div>
            <h2 className="font-poppins text-3xl lg:text-4xl font-bold text-navy mb-3">
              Quality Assurance &amp; Batch Certification
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
              Every shipment goes through a documented quality chain — from farm intake to port loading — so buyers receive exactly what they ordered.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {qaSteps.map((q, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-teal/30 hover:shadow-md transition-all"
                data-aos="fade-up"
                data-aos-delay={i * 80}
              >
                <div className="w-11 h-11 rounded-xl bg-navy flex items-center justify-center mb-4">
                  <q.icon className="w-5 h-5 text-teal" />
                </div>
                <h4 className="font-poppins font-bold text-navy text-sm mb-2">{q.title}</h4>
                <p className="text-gray-500 text-xs leading-relaxed">{q.desc}</p>
              </div>
            ))}
          </div>

          {/* Certification logos strip */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3" data-aos="fade-up">
            {["APEDA Registered", "AGMARK Certified", "FSSAI Licensed", "ISO 22000", "HACCP Certified", "Halal Ready"].map((c) => (
              <span key={c} className="px-3 py-1.5 bg-white border border-gray-200 text-navy text-xs font-semibold rounded-full shadow-sm">
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPORT GRADES / FLEXIBLE SPEC ── */}
      <section className="py-14 bg-navy">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <div className="inline-flex items-center gap-2 text-teal text-sm font-semibold uppercase tracking-wider mb-3">
                <div className="w-8 h-0.5 bg-teal" /> Flexible Specifications
              </div>
              <h2 className="font-poppins text-3xl font-bold text-white mb-4">
                We Match Your<br />Export Grade Requirements
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Whether you need standard FAQ-grade commodity or a tightly-spec'd retail-ready product, our sourcing team can match your exact moisture, purity, size, and packaging requirements.
              </p>
              <Link href="/contact" className="btn-gold inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm">
                Discuss Your Specification <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4" data-aos="fade-left">
              {exportGrades.map((g, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4 hover:border-teal/40 hover:bg-white/10 transition-all">
                  <SlidersHorizontal className="w-5 h-5 text-teal mb-3" />
                  <div className="text-white font-semibold text-sm mb-1">{g.label}</div>
                  <div className="text-gray-400 text-xs leading-relaxed">{g.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12" data-aos="fade-up">
            <div className="inline-flex items-center gap-2 text-teal text-sm font-semibold uppercase tracking-wider mb-3">
              <div className="w-8 h-0.5 bg-teal" /> Trusted Buyers <div className="w-8 h-0.5 bg-teal" />
            </div>
            <h2 className="font-poppins text-3xl lg:text-4xl font-bold text-navy">
              What Our Buyers Say
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-gray-light rounded-2xl p-6 flex flex-col gap-4 border border-gray-200 hover:border-teal/30 hover:shadow-md transition-all"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                {/* Stars */}
                <div className="flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-gold fill-gold" />
                  ))}
                </div>
                {/* Quote */}
                <div className="relative">
                  <Quote className="w-6 h-6 text-teal/20 absolute -top-1 -left-1" />
                  <p className="text-gray-600 text-sm leading-relaxed pl-4 italic">"{t.quote}"</p>
                </div>
                {/* Author */}
                <div className="flex items-center gap-3 pt-2 border-t border-gray-200">
                  <div className="w-9 h-9 rounded-full bg-navy flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-navy font-semibold text-sm">{t.name}</div>
                    <div className="text-gray-400 text-xs">{t.company} &middot; {t.flag} {t.country}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── KNOWLEDGE HUB ── */}
      <section className="section-padding bg-gray-light">
        <div className="container-custom">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10" data-aos="fade-up">
            <div>
              <div className="inline-flex items-center gap-2 text-teal text-sm font-semibold uppercase tracking-wider mb-3">
                <div className="w-8 h-0.5 bg-teal" /> Knowledge Hub
              </div>
              <h2 className="font-poppins text-3xl font-bold text-navy">Blog &amp; Export Insights</h2>
            </div>
            <Link href="/blog" className="text-teal font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all whitespace-nowrap">
              All Articles <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {blogPosts.map((post, i) => (
              <Link
                key={i}
                href={post.href}
                className="group bg-white rounded-2xl p-6 border border-gray-200 hover:border-teal/40 hover:shadow-md transition-all flex flex-col gap-3"
                data-aos="fade-up"
                data-aos-delay={i * 80}
              >
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 bg-teal/10 text-teal border border-teal/20 text-[10px] font-bold rounded-full">
                    {post.tag}
                  </span>
                  <span className="text-gray-400 text-[10px] flex items-center gap-1">
                    <BookOpen className="w-3 h-3" /> {post.readTime}
                  </span>
                </div>
                <h4 className="font-poppins font-bold text-navy text-sm leading-snug group-hover:text-teal transition-colors">
                  {post.title}
                </h4>
                <p className="text-gray-500 text-xs leading-relaxed flex-1">{post.summary}</p>
                <div className="flex items-center gap-1 text-teal text-xs font-semibold pt-1 group-hover:gap-2 transition-all">
                  Read Article <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA STRIP ── */}
      <section className="py-20 bg-gradient-to-r from-teal-dark via-teal to-teal-light">
        <div className="container-custom text-center" data-aos="fade-up">
          <h2 className="font-poppins text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Source from India?
          </h2>
          <p className="text-teal-100 text-lg mb-8 max-w-xl mx-auto">
            Submit your product requirements and our export specialists will respond within 24 hours
            with a detailed quotation.
          </p>
          <Link
            href="/contact"
            className="bg-white text-teal-dark font-bold py-4 px-10 rounded-xl inline-flex items-center gap-2 hover:bg-gray-100 transition-colors shadow-xl"
          >
            Request a Free Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </PageWrapper>
  );
}