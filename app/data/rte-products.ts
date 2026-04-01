export type Product = {
id: number;
slug: string;
name: string;
subtitle: string;
category: string;
image: string;
images?: string[];
weight: string;
tags: string[];
moq: string;
ingredients: string;
allergens: string[];
description: string;
badge?: string;
relatedId: number;
nutrition: {
servingSize: string;
calories: string;
rows: { nutrient: string; perServing: string; per100g: string }[];
};
specs: {
shelfLife: string;
dietary: string;
packSize: string;
packaging: string;
certification: string;
origin: string;
storage: string;
};
howToServe: string[];
};

export const products: Product[] = [

/* ---------------- Paneer Tikka (unchanged) ---------------- */

{
id: 1,
slug: "paneer-tikka-masala",
name: "Paneer (Tofu) Tikka Masala",
subtitle: "Ready-to-Eat Curry",
category: "Paneer",
image: "/images/rte/paneertikka.png",
images: [
"/images/rte/paneertikka.png",
"/images/rte/paneertikka2.jpeg",
"/images/rte/paneertikka3.png"
],
weight: "300g",
tags: ["100% Vegetarian", "No Trans Fat", "Ready to Heat", "Microwaveable", "No Artificial Colours"],
moq: "500 cartons",
ingredients: "As per packaging",
allergens: ["Contains soy", "May contain peanuts"],
description: "Rich tikka-style curry made with tofu. Recipe inspired by Ramdev Restaurant, Dhandhuka.",
badge: "Best Seller",
relatedId: 2,
nutrition: {
servingSize: "150g",
calories: "1170 kJ",
rows: [
{ nutrient: "Protein", perServing: "7.5g", per100g: "5.0g" },
{ nutrient: "Total Fat", perServing: "34.9g", per100g: "23.3g" },
{ nutrient: "Saturated", perServing: "7.1g", per100g: "4.7g" },
{ nutrient: "Carbohydrate", perServing: "18.8g", per100g: "12.5g" },
{ nutrient: "Sugars", perServing: "3.5g", per100g: "2.3g" },
{ nutrient: "Sodium", perServing: "654mg", per100g: "436mg" },
],
},
specs: {
shelfLife: "12 months",
dietary: "Vegetarian",
packSize: "300g",
packaging: "Retort Pouch",
certification: "FSSAI",
origin: "India",
storage: "Store in a cool, dry place. Refrigerate after opening.",
},
howToServe: ["Heat and serve hot"],
},

/* ---------------- MUTTER PANEER ---------------- */
{
id: 2,
slug: "mutter-paneer",
name: "Mutter Paneer (Tofu)",
subtitle: "Peas & Tofu Curry",
category: "Paneer",
image: "/images/rte/mutterpaneer.png",
images: [
    "/images/rte/mutterpaneer.png",
    "/images/rte/mutterpaneer2.jpeg",
    "/images/rte/mutterpaneer3.png"
],
weight: "300g",
tags: ["100% Vegetarian", "No Trans Fat", "Ready to Heat", "Microwaveable", "No Artificial Colours"],
moq: "500 cartons",
ingredients: "As per packaging",
allergens: ["Contains soy", "May contain peanuts"],
description: "Classic peas and tofu curry.",
relatedId: 1,
nutrition: {
servingSize: "150g",
calories: "1391 kJ",
rows: [
{ nutrient: "Protein", perServing: "7.2g", per100g: "4.8g" },
{ nutrient: "Total Fat", perServing: "26.9g", per100g: "17.9g" },
{ nutrient: "Saturated", perServing: "4.3g", per100g: "2.9g" },
{ nutrient: "Carbohydrate", perServing: "15.3g", per100g: "10.2g" },
{ nutrient: "Sugars", perServing: "2.2g", per100g: "1.5g" },
{ nutrient: "Sodium", perServing: "625mg", per100g: "417mg" },
],
},
specs: {
shelfLife: "12 months",
dietary: "Vegetarian",
packSize: "300g",
packaging: "Retort Pouch",
certification: "FSSAI",
origin: "India",
storage: "Store in a cool, dry place. Refrigerate after opening.",
},
howToServe: ["Heat and serve"],
},

/* ---------------- ALOO MUTTER ---------------- */
{
id: 6,
slug: "aloo-mutter",
name: "Aloo Mutter",
subtitle: "Potato & Peas Curry",
category: "Curries",
image: "/images/rte/aloomutter.png",
images: [
"/images/rte/aloomutter.png",
"/images/rte/aloomutter2.jpeg",
"/images/rte/aloomutter3.png"
],
weight: "300g",
tags: ["100% Vegetarian", "Ready to Heat", "Microwaveable"],
moq: "500 cartons",
ingredients: "As per packaging",
allergens: ["May contain tree nuts"],
description: "Potato peas curry.",
relatedId: 5,
nutrition: {
servingSize: "150g",
calories: "1679 kJ",
rows: [
{ nutrient: "Protein", perServing: "5.8g", per100g: "3.9g" },
{ nutrient: "Total Fat", perServing: "34.2g", per100g: "22.8g" },
{ nutrient: "Saturated", perServing: "5.6g", per100g: "3.7g" },
{ nutrient: "Carbohydrate", perServing: "17.4g", per100g: "11.6g" },
{ nutrient: "Sugars", perServing: "3.1g", per100g: "2.1g" },
{ nutrient: "Sodium", perServing: "615mg", per100g: "410mg" },
],
},
specs: {
shelfLife: "12 months",
dietary: "Vegetarian",
packSize: "300g",
packaging: "Retort Pouch",
certification: "FSSAI",
origin: "India",
storage: "Store in a cool, dry place. Refrigerate after opening.",
},
howToServe: ["Serve hot"],
},

/* ---------------- CHANA MASALA ---------------- */

{
id: 5,
slug: "chana-masala",
name: "Chana Masala",
subtitle: "Chickpea Curry",
category: "Lentils",
image: "/images/rte/chanamasala.png",
images: [
"/images/rte/chanamasala.png",
"/images/rte/chanamasala2.jpeg",
"/images/rte/chanamasala3.png"
],
weight: "300g",
tags: ["100% Vegetarian", "Ready to Heat", "Microwaveable"],
moq: "500 cartons",
ingredients: "As per packaging",
allergens: ["May contain tree nuts"],
description: "Spiced chickpeas.",
relatedId: 6,
nutrition: {
servingSize: "150g",
calories: "2123 kJ",
rows: [
{ nutrient: "Protein", perServing: "5.9g", per100g: "3.9g" },
{ nutrient: "Total Fat", perServing: "45.2g", per100g: "30.1g" },
{ nutrient: "Saturated", perServing: "8.7g", per100g: "5.8g" },
{ nutrient: "Carbohydrate", perServing: "19.3g", per100g: "12.9g" },
{ nutrient: "Sugars", perServing: "6.2g", per100g: "4.1g" },
{ nutrient: "Sodium", perServing: "774mg", per100g: "516mg" },
],
},
specs: {
shelfLife: "12 months",
dietary: "Vegetarian",
packSize: "300g",
packaging: "Retort Pouch",
certification: "FSSAI",
origin: "India",
storage: "Store in a cool, dry place. Refrigerate after opening.",
},
howToServe: ["Serve hot"],
},

/* ---------------- DAL MAKHNI ---------------- */

{
id: 7,
slug: "dal-makhni",
name: "Dal Makhni",
subtitle: "Creamy Lentils",
category: "Lentils",
image: "/images/rte/dalmakhni.png",
images: [
"/images/rte/dalmakhni.png",
"/images/rte/dalmakhni2.jpeg",
"/images/rte/dalmakhni3.png"
],
weight: "300g",
tags: ["100% Vegetarian", "Ready to Heat", "Microwaveable"],
moq: "500 cartons",
badge: "",
ingredients: "As per packaging",
allergens: ["Dairy"],
description: "Rich dal makhni.",
relatedId: 4,
nutrition: {
servingSize: "150g",
calories: "1036 kJ",
rows: [
{ nutrient: "Protein", perServing: "7.1g", per100g: "4.7g" },
{ nutrient: "Total Fat", perServing: "15.4g", per100g: "10.3g" },
{ nutrient: "Saturated", perServing: "2.6g", per100g: "1.7g" },
{ nutrient: "Carbohydrate", perServing: "20.1g", per100g: "13.4g" },
{ nutrient: "Sugars", perServing: "1.8g", per100g: "1.2g" },
{ nutrient: "Sodium", perServing: "298mg", per100g: "198mg" },
],
},
specs: {
shelfLife: "12 months",
dietary: "Vegetarian",
packSize: "300g",
packaging: "Retort Pouch",
certification: "FSSAI",
origin: "India",
storage: "Store in a cool, dry place. Refrigerate after opening.",
},
howToServe: ["Serve hot"],
},

/* ---------------- DAL TADKA ---------------- */

{
id: 4,
slug: "dal-tadka",
name: "Dal Tadka",
subtitle: "Tempered Lentils",
category: "Lentils",
image: "/images/rte/daltadka.png",
images: [
"/images/rte/daltadka.png",
"/images/rte/daltadka2.jpeg",
"/images/rte/daltadka3.png"
],
weight: "300g",
tags: ["100% Vegetarian", "Ready to Heat", "Microwaveable"],
moq: "500 cartons",
ingredients: "As per packaging",
allergens: ["May contain peanuts"],
description: "Classic dal tadka.",
relatedId: 7,
nutrition: {
servingSize: "150g",
calories: "891 kJ",
rows: [
{ nutrient: "Protein", perServing: "6.2g", per100g: "4.1g" },
{ nutrient: "Total Fat", perServing: "11.1g", per100g: "7.4g" },
{ nutrient: "Saturated", perServing: "2.0g", per100g: "1.3g" },
{ nutrient: "Carbohydrate", perServing: "22.2g", per100g: "14.8g" },
{ nutrient: "Sugars", perServing: "8.4g", per100g: "5.6g" },
{ nutrient: "Sodium", perServing: "1335mg", per100g: "890mg" },
],
},
specs: {
shelfLife: "12 months",
dietary: "Vegetarian",
packSize: "300g",
packaging: "Retort Pouch",
certification: "FSSAI",
origin: "India",
storage: "Store in a cool, dry place. Refrigerate after opening.",
},
howToServe: ["Serve hot"],
},

/* ---------------- KAJU MASALA ---------------- */

{
id: 3,
slug: "kaju-masala",
name: "Kaju Masala",
subtitle: "Cashew Curry",
category: "Curries",
image: "/images/rte/kajumasala.png",
images: [
"/images/rte/kajumasala.png",
"/images/rte/kajumasala2.jpeg",
"/images/rte/kajumasala3.png"
],
weight: "300g",
tags: ["100% Vegetarian", "No Trans Fat", "Ready to Heat", "Microwaveable"],
moq: "300 cartons",
badge: "Premium",
ingredients: "As per packaging",
allergens: ["Cashew Nuts", "Peanuts"],
description: "Rich cashew gravy.",
relatedId: 8,
nutrition: {
servingSize: "150g",
calories: "1961 kJ",
rows: [
{ nutrient: "Protein", perServing: "11.9g", per100g: "8.0g" },
{ nutrient: "Total Fat", perServing: "38.3g", per100g: "25.5g" },
{ nutrient: "Saturated", perServing: "6.5g", per100g: "4.3g" },
{ nutrient: "Carbohydrate", perServing: "19.1g", per100g: "12.7g" },
{ nutrient: "Sugars", perServing: "1.9g", per100g: "1.3g" },
{ nutrient: "Sodium", perServing: "648mg", per100g: "432mg" },
],
},
specs: {
shelfLife: "12 months",
dietary: "Vegetarian",
packSize: "300g",
packaging: "Retort Pouch",
certification: "FSSAI",
origin: "India",
storage: "Store in a cool, dry place. Refrigerate after opening.",
},
howToServe: ["Heat and serve"],
},

/* ---------------- SHAHI BIRYANI ---------------- */

{
id: 8,
slug: "shahi-biryani",
name: "Shahi Biryani",
subtitle: "Royal Rice Dish",
category: "Rice",
image: "/images/rte/shahibiryani.png",
images: [
"/images/rte/shahibiryani.png",
"/images/rte/shahibiryani2.jpeg",
"/images/rte/shahibiryani3.png"
],
weight: "300g",
tags: ["100% Vegetarian", "Ready to Heat", "Microwaveable"],
moq: "300 cartons",
badge: "Premium",
ingredients: "As per packaging",
allergens: ["May contain nuts"],
description: "Aromatic biryani.",
relatedId: 3,
nutrition: {
servingSize: "150g",
calories: "1196 kJ",
rows: [
{ nutrient: "Protein", perServing: "13.1g", per100g: "8.7g" },
{ nutrient: "Total Fat", perServing: "17.4g", per100g: "11.6g" },
{ nutrient: "Saturated", perServing: "3.0g", per100g: "2.0g" },
{ nutrient: "Carbohydrate", perServing: "19.3g", per100g: "12.9g" },
{ nutrient: "Sugars", perServing: "4.0g", per100g: "2.7g" },
{ nutrient: "Sodium", perServing: "507mg", per100g: "338mg" },
],
},
specs: {
shelfLife: "12 months",
dietary: "Vegetarian",
packSize: "300g",
packaging: "Retort Pouch",
certification: "FSSAI",
origin: "India",
storage: "Store in a cool, dry place. Refrigerate after opening.",
},
howToServe: ["Heat and serve"],
},

];