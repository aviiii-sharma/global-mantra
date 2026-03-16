export interface ProductCategory {
    id: string;
    slug: string;
    title: string;
    description: string;
    longDescription: string;
    icon: string;
    items: string[];
    packagingOptions: string[];
    moq: string;
    shippingTerms: string[];
    qualityNotes: string[];
    certifications: string[];
    heroImage: string;
}

export const productCategories: ProductCategory[] = [
    {
        id: "agro",
        slug: "agro",
        title: "Agro Products",
        description:
            "Premium quality spices, aromatic herbs, staple grains, and protein-rich pulses sourced from certified farms across India.",
        longDescription:
            "Our Agro Products division sources directly from certified farms across major agricultural belts of India. Each batch is cleaned, graded, and packaged according to international export standards. We handle full traceability from farm to port, ensuring consistent quality and compliance with importing country regulations.",
        icon: "Leaf",
        items: ["Turmeric", "Cumin", "Coriander", "Basmati Rice", "Red Lentils", "Chickpeas"],
        packagingOptions: ["25 kg PP Woven Bags", "50 kg Jute Bags", "Custom Bulk FIBC (1000 kg)", "Vacuum-Sealed Retail Packs (500g–5kg)"],
        moq: "5 Metric Tons per SKU",
        shippingTerms: ["FOB Nhava Sheva / JNPT", "CIF Major Ports", "CFR as Negotiated"],
        qualityNotes: [
            "Moisture content tested per AGMARK standards",
            "Third-party laboratory certificates available on request",
            "Phytosanitary certificates issued for all consignments",
            "Custom fumigation and heat treatment services",
        ],
        certifications: ["APEDA Registered", "AGMARK Certified", "FSSAI Licensed", "ISO 22000"],
        heroImage: "/images/agro-hero.jpg",
    },
    {
        id: "rte",
        slug: "rte",
        title: "Ready-to-Eat Food",
        description:
            "Shelf-stable ready-to-eat Indian meals and processed foods designed for international retail and institutional supply.",
        longDescription:
            "Our Ready-to-Eat category covers shelf-stable Indian cuisine products manufactured in HACCP-certified facilities. Products are designed for international palates and retail-ready packaging. We supply to importers, supermarket chains, restaurant groups, and institutional buyers in North America, Europe, the Middle East, and Southeast Asia.",
        icon: "UtensilsCrossed",
        items: ["Dal Makhani", "Biryani Kits", "Curry Pastes", "Papad", "Pickles"],
        packagingOptions: [
            "Retort Pouches (250g–500g)",
            "Aseptic Tetra Packs",
            "Glass Jars (200ml–1L)",
            "Bulk Institutional Tins (2–5 kg)",
        ],
        moq: "500 Cartons per SKU",
        shippingTerms: ["FOB Mumbai / Chennai", "CIF Destination Port", "DDP as negotiated"],
        qualityNotes: [
            "HACCP-certified manufacturing facility",
            "Shelf life: 12–24 months depending on product",
            "Halal and Kosher certification available",
            "Nutritional labeling per destination country norms",
        ],
        certifications: ["FSSAI Export License", "HACCP Certified", "Halal Certified", "US FDA Registered"],
        heroImage: "/images/rte-hero.jpg",
    },
    {
        id: "packaging",
        slug: "packaging",
        title: "Packaging Materials",
        description:
            "Durable export-grade packaging materials designed for industrial storage and international shipping.",
        longDescription:
            "We manufacture and supply high-strength industrial packaging solutions engineered for long-haul international freight. Our packaging products meet BIS, ISO, and importing-country standards. We serve food processing companies, chemical exporters, agricultural exporters, and warehousing & logistics firms worldwide.",
        icon: "Package",
        items: ["PP Woven Sacks", "HDPE Bags", "Laminated Pouches", "Kraft Bags", "Jute Bags", "FIBC Bags"],
        packagingOptions: [
            "Custom print (1–8 color flexo printing)",
            "Laminated / Non-laminated variants",
            "UV-stabilized options for outdoor storage",
            "Anti-static liners for sensitive cargo",
        ],
        moq: "10,000 pieces per SKU",
        shippingTerms: ["FOB Mundra / JNPT", "CIF Major Ports", "EXW Factory as negotiated"],
        qualityNotes: [
            "GSM and tensile strength tested per batch",
            "BIS IS 9755 & IS 1786 compliant",
            "Food-grade options available with FDA compliance",
            "Third-party inspection (SGS / Bureau Veritas) facilitated",
        ],
        certifications: ["BIS Certified", "ISO 9001:2015", "REACH Compliant", "Food-Grade FDA"],
        heroImage: "/images/packaging-hero.jpg",
    },
];

export function getProductBySlug(slug: string): ProductCategory | undefined {
    return productCategories.find((p) => p.slug === slug);
}
