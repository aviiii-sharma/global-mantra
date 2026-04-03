export type PackagingProduct = {
    id: number;
    slug: string;
    name: string;
    category: string;
    image: string;
    images?: string[];
    shortSpec: string;
    tags: string[];
    moq: string;
    description: string;
    specs: {
        material: string;
        mesh: string;
        fabricColour: string;
        size: string;
        strength: string;
        packing: string;
    };
    relatedId?: number;
};

export const products: PackagingProduct[] = [
    {
        id: 1,
        slug: "pp-woven-fabric",
        name: "PP Woven Fabric",
        category: "PP Woven",
        image: "/images/packagingmaterials/pp-woven.jpg",
        shortSpec: "Roll form | 60–200 GSM | Plain & laminated | Custom width",
        tags: ["Roll Form", "Custom Width"],
        moq: "10,000 m",
        description:
            "PP woven fabric supplied in rolls for bag converting, geotextile, and industrial applications. Available plain, laminated, and tape-coated.",
        specs: {
            material: "PP (PolyPropylene)",
            mesh: "9×9 to 14×14",
            fabricColour: "White / Natural / Checks / Any Color",
            size: "12 Inches to 58 Inches",
            strength: "As per requirement",
            packing: "As per requirement",
        },
        relatedId: 2,
    },
    {
        id: 2,
        slug: "pp-fabrics-with-centre-cut",
        name: "PP Fabrics with Centre Cut",
        category: "PP Woven",
        image: "/images/packagingmaterials/centre-cut.jpg",
        shortSpec: "Centre slit fabric | Tubular or flat | Custom GSM",
        tags: ["Custom Size", "Industrial"],
        moq: "50,000 m",
        description:
            "PP woven fabric slit at the centre for specific bag-making and geotextile applications. Available in all standard GSM and widths.",
        specs: {
            material: "PP (PolyPropylene)",
            mesh: "9×9 to 14×14",
            fabricColour: "White / Natural",
            size: "12 Inches to 72 Inches",
            strength: "As per requirement",
            packing: "As per requirement",
        },
        relatedId: 1,
    },
    {
        id: 3,
        slug: "fibcs-jumbo-bags",
        name: "FIBCs (Jumbo Bags)",
        category: "FIBC / Jumbo",
        image: "/images/packagingmaterials/jumbo-bags.png",
        shortSpec: "500 kg – 2000 kg | 4-loop & baffle type | UN-rated options",
        tags: ["UN Rated", "Heavy Duty"],
        moq: "500 pcs",
        description:
            "Industrial-grade Flexible Intermediate Bulk Containers for bulk cargo. Available in standard 4-loop, baffle, form-stable, and ventilated variants.",
        specs: {
            material: "PP (PolyPropylene)",
            mesh: "9×9 to 14×14",
            fabricColour: "White / Natural / Checks / Any Color",
            size: "12 Inches to 36 Inches",
            strength: "As per requirement",
            packing: "As per requirement",
        },
        relatedId: 12,
    },
    {
        id: 4,
        slug: "ldpe-liners",
        name: "LDPE Liners",
        category: "HDPE / LDPE",
        image: "/images/packagingmaterials/ldpe-liners.png",
        shortSpec: "Inner liner bags | Food & industrial grade | Heat-sealable",
        tags: ["Food Grade", "Moisture Barrier"],
        moq: "10,000 pcs",
        description:
            "Low-density polyethylene liners for use inside woven sacks, boxes, and containers. Provides moisture and contamination barrier for bulk commodities.",
        specs: {
            material: "PP (PolyPropylene)",
            mesh: "9×9 to 14×14",
            fabricColour: "White / Natural / Checks / Any Color",
            size: "12 Inches to 36 Inches",
            strength: "As per requirement",
            packing: "As per requirement",
        },
        relatedId: 9,
    },
    {
        id: 5,
        slug: "pp-gusseted-bags",
        name: "PP Gusseted Bags",
        category: "PP Woven",
        image: "/images/packagingmaterials/gusseted-bags.png",
        shortSpec: "Side gusset | Expanded base | 5–50 kg capacity",
        tags: ["Food Grade", "Expandable"],
        moq: "10,000 pcs",
        description:
            "PP woven gusseted bags with expanded side panels for increased volume capacity. Ideal for flour, rice, and grain packaging.",
        specs: {
            material: "PP (PolyPropylene)",
            mesh: "9×9 to 14×14",
            fabricColour: "White / Natural / Checks / Any Color",
            size: "12 Inches to 36 Inches",
            strength: "As per requirement",
            packing: "As per requirement",
        },
        relatedId: 6,
    },
    {
        id: 6,
        slug: "pp-laminated-bags",
        name: "PP Laminated Bags",
        category: "PP Woven",
        image: "/images/packagingmaterials/laminated-bags.png",
        shortSpec: "BOPP / PE inner coat | High-gloss surface | Custom print",
        tags: ["Custom Print", "Moisture Barrier"],
        moq: "10,000 pcs",
        description:
            "Premium PP woven bags with BOPP or PE lamination for a high-gloss retail finish. 1–8 colour flexographic printing available.",
        specs: {
            material: "PP (PolyPropylene) + BOPP / PE Lamination",
            mesh: "9×9 to 14×14",
            fabricColour: "White / Natural / Checks / Any Color",
            size: "12 Inches to 36 Inches",
            strength: "As per requirement",
            packing: "As per requirement",
        },
        relatedId: 8,
    },
    {
        id: 7,
        slug: "pp-sand-bags",
        name: "PP Sand Bags",
        category: "PP Woven",
        image: "/images/packagingmaterials/sand-bags.jpg",
        shortSpec: "Heavy-duty | Open-top or valve fill | UV stabilized",
        tags: ["UV Stabilized", "Heavy Duty"],
        moq: "10,000 pcs",
        description:
            "Robust PP woven sand bags for flood control, construction, and erosion prevention. Available in open-top and valve-fill configurations.",
        specs: {
            material: "PP (PolyPropylene) – UV Stabilized",
            mesh: "9×9 to 14×14",
            fabricColour: "Natural / White / Tan",
            size: "12 Inches to 36 Inches",
            strength: "As per requirement",
            packing: "As per requirement",
        },
        relatedId: 11,
    },
    {
        id: 8,
        slug: "pp-unlaminated-woven-bags",
        name: "PP Unlaminated Woven Bags",
        category: "PP Woven",
        image: "/images/packagingmaterials/unlaminated-bags.jpg",
        shortSpec: "Breathable woven | 25–50 kg | Natural finish",
        tags: ["Breathable", "Agro"],
        moq: "10,000 pcs",
        description:
            "Unlaminated PP woven sacks with natural breathability. Ideal for vegetables, potatoes, and produce requiring airflow during storage.",
        specs: {
            material: "PP (PolyPropylene)",
            mesh: "9×9 to 14×14",
            fabricColour: "White / Natural / Checks / Any Color",
            size: "Customizable",
            strength: "As per requirement",
            packing: "As per requirement",
        },
        relatedId: 5,
    },
    {
        id: 9,
        slug: "pp-bags-with-liner-stitched",
        name: "PP Bags with Liner Stitched",
        category: "PP Woven",
        image: "/images/packagingmaterials/liner-stitched.png",
        shortSpec: "LDPE liner stitched inside | Double protection | 25–50 kg",
        tags: ["Moisture Barrier", "Double Layer"],
        moq: "10,000 pcs",
        description:
            "PP woven bags with an LDPE inner liner stitched or inserted for added moisture and contamination protection for hygroscopic materials.",
        specs: {
            material: "PP (PolyPropylene) + LDPE Liner",
            mesh: "9×9 to 14×14",
            fabricColour: "White / Natural / Checks / Any Color",
            size: "12 Inches to 36 Inches",
            strength: "As per requirement",
            packing: "As per requirement",
        },
        relatedId: 4,
    },
    {
        id: 10,
        slug: "planter-garden-waste-bag",
        name: "Planter & Garden Waste Bag",
        category: "Specialty",
        image: "/images/packagingmaterials/garden-wastebag.png",
        shortSpec: "UV stabilized | Non-woven or woven PP | Eco-certified",
        tags: ["Eco", "UV Stabilized"],
        moq: "10,000 pcs",
        description:
            "Durable PP planter bags and garden waste collection bags. UV-stabilized for extended outdoor use, available in various sizes for horticulture.",
        specs: {
            material: "PP (PolyPropylene)",
            mesh: "9×9 to 14×14 woven",
            fabricColour: "Black / Green / Natural",
            size: "12 Inches to 36 Inches",
            strength: "As per requirement",
            packing: "As per requirement",
        },
        relatedId: 11,
    },
    {
        id: 11,
        slug: "silt-fence",
        name: "Silt Fence",
        category: "Specialty",
        image: "/images/packagingmaterials/silt-fence.jpg",
        shortSpec: "Geotextile PP | Sediment control | Construction & civil",
        tags: ["Geotextile", "Construction"],
        moq: "5,000 m",
        description:
            "Woven PP geotextile silt fencing for sediment and erosion control on construction sites. Meets AASHTO and ASTM standards.",
        specs: {
            material: "PP (PolyPropylene) Geotextile",
            mesh: "9×9 to 14×14",
            fabricColour: "Black / Orange (hi-vis)",
            size: "36\" – 48\" height; custom length",
            strength: "As per requirement",
            packing: "Roll form – as per requirement",
        },
        relatedId: 7,
    },
    {
        id: 12,
        slug: "pp-box-type-square-bags",
        name: "PP Box Type Square Bags",
        category: "PP Woven",
        image: "/images/packagingmaterials/boxtype-square.jpg",
        shortSpec: "Square base | Form-stable | 500 kg – 1500 kg | Pallet-friendly",
        tags: ["Heavy Duty", "Pallet Friendly"],
        moq: "500 pcs",
        description:
            "Square/cubic PP woven bags with baffle construction for form-stable stacking. Ideal for automated warehouse and palletized logistics.",
        specs: {
            material: "PP (PolyPropylene)",
            mesh: "9×9 to 14×14",
            fabricColour: "White / Natural / Checks / Any Color",
            size: "12 Inches to 36 Inches",
            strength: "As per requirement",
            packing: "As per requirement",
        },
        relatedId: 3,
    },
    {
        id: 13,
        slug: "bopp-bags",
        name: "BOPP Bags",
        category: "Specialty",
        image: "/images/packagingmaterials/bopp-bags.png",
        shortSpec: "Side gusset | Expanded base | 5–50 kg capacity",
        tags: ["Food Grade", "Expandable"],
        moq: "10,000 pcs",
        description:
            "BOPP Bags with expanded side panels for increased volume capacity. Ideal for flour, cement, and grain packaging.",
        specs: {
            material: "PP (PolyPropylene)",
            mesh: "9×9 to 14×14",
            fabricColour: "White / Natural / Checks / Any Color",
            size: "12 Inches to 36 Inches",
            strength: "As per requirement",
            packing: "As per requirement",
        },
        relatedId: 6,
    },
];
