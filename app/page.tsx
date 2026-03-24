"use client";

import React, { useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import createGlobe from "cobe";
import { ArrowRight, Anchor, Award, Globe, ShieldCheck, Truck, Package, Leaf, UtensilsCrossed, CheckCircle2, ChevronRight, Star, BookOpen, FlaskConical, SlidersHorizontal, BadgeCheck, Quote } from "lucide-react";
import PageWrapper from "@/components/PageWrapper";

// Mumbai as origin, key export destinations
const INDIA: [number, number] = [18.97, 72.83];
const MARKETS = [
  { id: "india",     location: INDIA,                          size: 0.05  },
  { id: "uae",       location: [25.2,   55.27]  as [number, number], size: 0.03  },
  { id: "london",    location: [51.51,  -0.13]  as [number, number], size: 0.028 },
  { id: "berlin",    location: [52.52,  13.4]   as [number, number], size: 0.025 },
  { id: "sf",        location: [37.78, -122.44] as [number, number], size: 0.028 },
  { id: "sydney",    location: [-33.87, 151.21] as [number, number], size: 0.028 },
  { id: "singapore", location: [1.35,   103.82] as [number, number], size: 0.028 },
  { id: "joburg",    location: [-26.2,   28.04] as [number, number], size: 0.025 },
];

function InteractiveGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const globeRef  = useRef<ReturnType<typeof createGlobe> | null>(null);
  // phi = horizontal rotation, theta = vertical tilt
  const stateRef  = useRef({ phi: 1.8, theta: 0.2, dragging: false, lastX: 0, lastY: 0 });
  const rafRef    = useRef<number>(0);

  const init = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const size = canvas.offsetWidth;
    canvas.width  = size * 2;
    canvas.height = size * 2;

    globeRef.current = createGlobe(canvas, {
  devicePixelRatio: 2,
  width:  size * 2,
  height: size * 2,
  phi:   stateRef.current.phi,
  theta: stateRef.current.theta,
  dark: 0,
  diffuse: 2.2,
  mapSamples: 20000,           // fewer dots = land clearly visible, ocean stays clean
  mapBrightness: 12,          // bright land dots so they pop against white
  mapBaseBrightness: 0,       // 0 = no base fill, ocean renders as pure white canvas
  baseColor:   [1, 1, 1],     // white ocean
  markerColor: [0.13, 0.22, 0.38],
  glowColor:   [0.88, 0.94, 0.96],
  markers: MARKETS,
  arcs: MARKETS.slice(1).map((m) => ({
    from: INDIA,
    to:   m.location as [number, number],
  })),
  arcColor: [0.13, 0.22, 0.38],
  arcWidth:  0.35,
  arcHeight: 0.28,
  opacity: 1,
});

    function frame() {
      const s = stateRef.current;
      if (!s.dragging) s.phi += 0.003;
      globeRef.current?.update({ phi: s.phi, theta: s.theta });
      rafRef.current = requestAnimationFrame(frame);
    }
    frame();
  }, []);

  useEffect(() => {
    init();
    return () => { cancelAnimationFrame(rafRef.current); globeRef.current?.destroy(); };
  }, [init]);

  // Correct drag: right → phi increases (globe rotates right)
  //               down  → theta increases (globe tilts down, as expected)
  const onPointerDown = (e: React.PointerEvent) => {
    stateRef.current.dragging = true;
    stateRef.current.lastX = e.clientX;
    stateRef.current.lastY = e.clientY;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    const s = stateRef.current;
    if (!s.dragging) return;
    const dx = e.clientX - s.lastX;
    const dy = e.clientY - s.lastY;
    s.phi  += dx * 0.007;
    // dy positive = dragging down = globe tilts down → theta increases
    s.theta = Math.max(-Math.PI / 2.2, Math.min(Math.PI / 2.2, s.theta + dy * 0.005));
    s.lastX = e.clientX;
    s.lastY = e.clientY;
  };
  const onPointerUp = () => { stateRef.current.dragging = false; };

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full cursor-grab active:cursor-grabbing select-none"
      style={{ background: "transparent" }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerLeave={onPointerUp}
    />
  );
}

// Reusable dot-grid overlay — drop inside any `relative` section
const DOTS_LIGHT = {
  backgroundImage: "radial-gradient(circle, #c8d3e0 1.2px, transparent 1.2px)",
  backgroundSize: "26px 26px",
  opacity: 0.45,
} as React.CSSProperties;

// White dots for dark (navy/teal) section backgrounds
const DOTS_DARK = {
  backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.12) 1.2px, transparent 1.2px)",
  backgroundSize: "26px 26px",
  opacity: 1,
} as React.CSSProperties;

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
      <section className="relative bg-white overflow-hidden min-h-[70vh] lg:min-h-[92vh]">

        {/* Dot-grid — same navy brand color, very faint */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, #c8d3e0 1.2px, transparent 1.2px)",
            backgroundSize: "26px 26px",
            opacity: 0.5,
          }}
        />

        {/* Single soft teal glow top-right — where the globe lives */}
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none hidden sm:block"
          style={{ background: "radial-gradient(circle at 70% 30%, rgba(13,148,136,0.06) 0%, transparent 65%)" }}
        />

        <div
          className="container-custom relative z-10 grid lg:grid-cols-[1fr_1fr] items-center gap-8 xl:gap-4"
          style={{ minHeight: "inherit", paddingTop: "3rem", paddingBottom: "3rem" }}
        >

          {/* ── LEFT: Copy ── */}
          <div className="flex flex-col justify-center xl:pr-12 max-w-full lg:max-w-[540px]">

            {/* Eyebrow — teal pill, same pattern as rest of site */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 mb-7 w-fit bg-teal/8 border border-teal/25 rounded-full px-3.5 py-1.5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-teal" />
              <span className="text-teal text-[11px] font-bold tracking-[0.16em] uppercase">
                India's Trusted B2B Export Partner
              </span>
            </motion.div>

            {/* Headline — navy only, single accent colour (gold underline) */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="font-poppins font-bold text-navy leading-[1.1] mb-5"
              style={{ fontSize: "clamp(1.75rem, 5vw, 3.1rem)" }}
            >
              Taking Indian Exports
              <br />
              <span className="relative inline-block">
                to Global Markets
                {/* Gold underline accent — matches btn-gold / gold brand colour */}
                <span
                  className="absolute left-0 -bottom-1 h-[3px] w-full rounded-full bg-gold opacity-80"
                />
              </span>
            </motion.h1>

            {/* Sub-copy */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.48, delay: 0.17 }}
              className="text-gray-500 text-[0.95rem] leading-relaxed mb-8 max-w-[420px]"
            >
              Global Mantra connects international buyers with trusted suppliers across India.
              We source agro products, ready-to-make foods, and packaging materials with quality and export compliance.
            </motion.p>

            {/* Product category pills — teal for all, no colour mixing */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.42, delay: 0.25 }}
              className="flex flex-wrap gap-2 mb-9"
            >
              {[
                { icon: Leaf,             label: "Agro & Spices"       },
                { icon: UtensilsCrossed,  label: "Ready-to-Eat Foods"  },
                { icon: Package,          label: "Industrial Packaging" },
              ].map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 text-[11px] font-semibold border border-teal/25 bg-teal/6 text-teal rounded-full px-3.5 py-1.5"
                >
                  <Icon className="w-3 h-3" />
                  {label}
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.42, delay: 0.32 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              <Link
                href="/contact"
                className="btn-gold px-7 py-3.5 rounded-xl text-sm font-bold inline-flex items-center gap-2 shadow-md"
                style={{ boxShadow: "0 4px 16px rgba(202,138,4,0.22)" }}
              >
                Request a Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/products"
                className="border border-navy/20 text-navy hover:border-teal/50 hover:text-teal transition-colors px-7 py-3.5 rounded-xl text-sm font-semibold inline-flex items-center gap-2"
              >
                View Products
                <ChevronRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Trust bar — navy numbers, gray labels, cert badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.45, delay: 0.42 }}
              className="flex items-center gap-6 pt-6 border-t border-gray-100"
            >
              {[
                { value: "50+",  label: "Products"         },
                { value: "20+",  label: "Suppliers"        },
                { value: "100%", label: "Pre-Shipment QC"  },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-poppins font-bold text-navy text-xl leading-none">{s.value}</div>
                  <div className="text-gray-400 text-[10px] mt-0.5 font-medium">{s.label}</div>
                </div>
              ))}
              <div className="w-px h-8 bg-gray-200" />
              <div className="flex gap-1.5 flex-wrap">
                {["APEDA", "FSSAI", "HACCP"].map((c) => (
                  <span
                    key={c}
                    className="text-[9px] font-bold text-gray-500 bg-gray-100 rounded px-1.5 py-0.5 tracking-wide uppercase"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ── RIGHT: Globe ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.93 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
            className="relative flex items-center justify-center"
          >
            {/* Subtle dashed orbit ring */}
            <div
              className="absolute rounded-full border border-dashed border-teal/18 pointer-events-none hidden sm:block"
              style={{ width: "calc(100% + 56px)", height: "calc(100% + 56px)", top: "-28px", left: "-28px" }}
            />

            {/* Globe canvas wrapper */}
            <div
              className="relative mx-auto"
              style={{ width: "min(460px, 72vw)", height: "min(460px, 72vw)" }}
            >
              <InteractiveGlobe />

              {/* "Drag to explore" hint */}
              <p className="absolute -top-8 right-0 text-[9px] font-medium text-gray-400 tracking-[0.14em] uppercase select-none flex items-center gap-1.5">
                <span className="w-4 h-px bg-gray-300 inline-block" />
                Drag to explore
              </p>

              {/* Mumbai origin badge */}
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.4 }}
                className="absolute top-6 left-2 bg-white border border-gray-200 shadow-sm rounded-xl px-3.5 py-2.5 flex items-center gap-2.5"
              >
                <div className="w-2 h-2 rounded-full bg-teal animate-pulse flex-shrink-0" />
                <div>
                  <div className="text-navy text-[11px] font-bold leading-none">Gujarat, India</div>
                  <div className="text-gray-400 text-[9px] mt-0.5">Origin Hub</div>
                </div>
              </motion.div>

              {/* Destinations badge */}
              
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity }}
            className="w-5 h-8 border border-gray-300 rounded-full flex justify-center pt-1.5"
          >
            <div className="w-0.5 h-1.5 bg-teal rounded-full" />
          </motion.div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="bg-navy-800 py-16">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            {stats.map((s, i) => (
              <div
                key={i}
                className="text-center"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <div className="text-2xl sm:text-3xl lg:text-4xl font-poppins font-bold text-gradient-gold mb-2">
                  {s.value}
                </div>
                <div className="text-gray-400 text-sm font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPANY OVERVIEW ── */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={DOTS_LIGHT} />
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
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

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" data-aos="fade-left">
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
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
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={DOTS_LIGHT} />
        <div className="container-custom relative z-10">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={DOTS_LIGHT} />
        <div className="container-custom relative z-10">
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
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" data-aos="fade-left">
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
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={DOTS_LIGHT} />
        <div className="container-custom relative z-10">
          <div className="text-center mb-12" data-aos="fade-up">
            <div className="inline-flex items-center gap-2 text-teal text-sm font-semibold uppercase tracking-wider mb-3">
              <div className="w-8 h-0.5 bg-teal" /> Trusted Buyers <div className="w-8 h-0.5 bg-teal" />
            </div>
            <h2 className="font-poppins text-3xl lg:text-4xl font-bold text-navy">
              What Our Buyers Say
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
      <section className="py-20 bg-gradient-to-r from-teal-dark via-teal to-teal-light relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={DOTS_DARK} />
        <div className="container-custom text-center relative z-10" data-aos="fade-up">
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