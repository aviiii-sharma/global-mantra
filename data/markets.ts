export interface Region {
    name: string;
    countries: string[];
    icon: string;
    color: string;
}

export const regions: Region[] = [
    {
        name: "Middle East & GCC",
        countries: ["UAE", "Saudi Arabia", "Qatar", "Kuwait", "Bahrain", "Oman", "Jordan"],
        icon: "🌍",
        color: "bg-gradient-to-br from-emerald-500 to-teal-700",
    },
    {
        name: "Europe",
        countries: ["United Kingdom", "Germany", "Netherlands", "France", "Belgium", "Spain", "Italy"],
        icon: "🌍",
        color: "bg-gradient-to-br from-emerald-500 to-teal-700",
    },
    {
        name: "North America",
        countries: ["United States", "Canada", "Mexico"],
        icon: "🌎",
        color: "bg-gradient-to-br from-emerald-500 to-teal-700",
    },
    {
        name: "Southeast Asia",
        countries: ["Singapore", "Malaysia", "Indonesia", "Thailand", "Vietnam", "Philippines"],
        icon: "🌏",
        color: "bg-gradient-to-br from-emerald-500 to-teal-700",
    },
    {
        name: "Africa",
        countries: ["South Africa", "Kenya", "Nigeria", "Ethiopia", "Tanzania", "Egypt"],
        icon: "🌍",
        color: "bg-gradient-to-br from-emerald-500 to-teal-700",
    },
    {
        name: "Oceania & Pacific",
        countries: ["Australia", "New Zealand", "Fiji"],
        icon: "🌏",
        color: "bg-gradient-to-br from-emerald-500 to-teal-700",
    },
];

export const stats = [
    { value: "3", label: "Core Export Segments" },
    { value: "20+", label: "Verified Suppliers" },
    { value: "50+", label: "Export-Ready Products" },
    { value: "100%", label: "Pre-Shipment Inspection" },
];