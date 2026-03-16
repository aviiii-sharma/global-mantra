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
        color: "from-amber-600 to-amber-800",
    },
    {
        name: "Europe",
        countries: ["United Kingdom", "Germany", "Netherlands", "France", "Belgium", "Spain", "Italy"],
        icon: "🌍",
        color: "from-blue-600 to-blue-800",
    },
    {
        name: "North America",
        countries: ["United States", "Canada", "Mexico"],
        icon: "🌎",
        color: "from-indigo-600 to-indigo-800",
    },
    {
        name: "Southeast Asia",
        countries: ["Singapore", "Malaysia", "Indonesia", "Thailand", "Vietnam", "Philippines"],
        icon: "🌏",
        color: "from-teal-600 to-teal-800",
    },
    {
        name: "Africa",
        countries: ["South Africa", "Kenya", "Nigeria", "Ethiopia", "Tanzania", "Egypt"],
        icon: "🌍",
        color: "from-orange-600 to-orange-800",
    },
    {
        name: "Oceania & Pacific",
        countries: ["Australia", "New Zealand", "Fiji"],
        icon: "🌏",
        color: "from-cyan-600 to-cyan-800",
    },
];

export const stats = [
    { label: "Countries Served", value: "45+" },
    { label: "Years of Export Experience", value: "15+" },
    { label: "Metric Tons Exported", value: "50,000+" },
    { label: "Global Partners", value: "200+" },
];
