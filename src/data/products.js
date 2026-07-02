// import sd501 from "../assets/SD501_banner3.jpg";

// import ukon from "../assets/Super-501-3-1.jpg";

// import anespa from "../assets/Platinum-3.jpg";
// import k8 from "../assets/K8.jpg";

// export const products = [
//   {
//     id: 1,
//     name: "Leveluk K8",
//     description: "Premium Water Ionizer",
//     price: "₹2,40,000",
//     image: k8,

//     specifications: [
//       { title: "Electrode Plates", value: "8 Plates" },
//       { title: "Plate Size", value: "135 × 75 mm" },
//       { title: "Water Types", value: "7 Types" },
//       { title: "pH Range", value: "2.5 - 11.5" },
//       { title: "Power Consumption", value: "230W" },
//       { title: "Warranty", value: "5 Years" },
//     ],
//   },

//   {
//     id: 2,
//     name: "SD501",
//     description: "Advanced Water Ionizer",
//     price: "₹1,90,000",
//     image: sd501,

//     specifications: [
//       { title: "Electrode Plates", value: "7 Plates" },
//       { title: "Plate Size", value: "125 × 70 mm" },
//       { title: "Water Types", value: "7 Types" },
//       { title: "pH Range", value: "3.0 - 11.0" },
//       { title: "Power Consumption", value: "220W" },
//       { title: "Warranty", value: "5 Years" },
//     ],
//   },

//   {
//     id: 3,
//     name: "Anespa DX",
//     description: "Luxury Spa System",
//     price: "₹1,40,000",
//     image: anespa,

//     specifications: [
//       { title: "Water Type", value: "Hot / Cold" },
//       { title: "Mineral Stone", value: "Natural" },
//       { title: "Installation", value: "Bathroom" },
//       { title: "Warranty", value: "3 Years" },
//     ],
//   },

//   {
//     id: 4,
//     name: "Ukon Sigma",
//     description: "Health Supplement",
//     price: "₹40,000",
//     image: ukon,

//     specifications: [
//       { title: "Type", value: "Supplement" },
//       { title: "Quantity", value: "60 Sachets" },
//       { title: "Usage", value: "Daily" },
//       { title: "Made In", value: "Japan" },
//     ],
//   },
// ];



// src/data/products.js

import k8 from "../assets/The Mighty 8-Plate Anti-Oxidizer.jpg";
import powerfulModel from "../assets/Enagic’s Most Powerful Model.jpg";
import sd501dx from "../assets/Leveluk SD501DX.png";
import jriv from "../assets/The New Leveluk JRIV!.jpg";
import anespa from "../assets/newbanner_anespadx-04.png";
import ionSpa from "../assets/Ion Water Spa.jpg";
import jr2 from "../assets/jr2.png";

export const products = [
  {
    id: 1,
    name: "Kangen K8",
    image: k8,
    price: "₹3,28,000",
    description: "The Mighty 8-Plate Anti-Oxidizer",

    longDescription:
      "T8 Platinum-Dipped Titanium Plates: Delivers superior water ionization and ultimate antioxidant potential.Global Compatibility: Features a worldwide multi-voltage power supply and interchangeable plug capability (sold separately)—perfect for any country.Smart 8-Language Interface: Voice and display support in English, Japanese, French, German, Chinese, Italian, Spanish, and Portuguese.",

  specifications: [
    { title: "Electrode plates:", value: "8 " },
      { title: "Plate size (mm):", value: "135 x 75" },
      { title: "Negative ORP (mV):", value: "-850 mV" },
      { title: "pH Range", value: "2.5 – 11.5" },
      { title: "Generates:", value: "5 water types" },
      { title: "Wattage (W):", value: "230" },
      { title: "Total weight (kg):", value: "	5" },
      { title: "Dimensions WHD (mm):", value: "345 x 279 x 147" },
      { title: "Production rate (L/min):", value: "Kangen Water®: 4.5 – 7.6 Acidic Water: 1.5 – 2.6 Strong Acidic water: 0.6 – 1.1" },
      { title: "Ease of Use:", value: "	Fully automatic, very simple to operate" },
      { title: "Languages:", value: "	8" },
      { title: "Warranty (years):", value: "5" }
    ]
  },

  {
    id: 2,
    name: "Leveluk SD501DX",
    image: sd501dx,
    price: "₹2,64,000",
    description: "7 Plate Water Ionizer",

    longDescription:
      "With 7 titanium plates and audio notifications in 8 languages, the SD501DX delivers powerful performance and convenience. The SD501DX generates a continuous stream of 5 types of water using a high-quality built-in electrolysis chamber. This Kangen Water® filtration machine produces: Strong Kangen Water, Kangen Water®, Neutral Water, Beauty Water, and Strong Acidic Water.",

  specifications: [
    { title: "Electrode plates:", value: "7 " },
      { title: "Plate size (mm):", value: "135 x 75" },
      { title: "Negative ORP (mV):", value: "-631 mV" },
      { title: "pH Range", value: "3.5 – 10.5" },
      { title: "Generates:", value: "5 water types" },
      { title: "Wattage (W):", value: "230" },
      { title: "Total weight (kg):", value: "	5.4" },
      { title: "Dimensions WHD (mm):", value: "	264 x 338 x 171" },
      { title: "Production rate (L/min):", value: "	Kangen Water®: 4.5 – 7.6 Acidic Water: 1.5 – 2.6 Strong Acidic Water: 0.6 – 1.1" },
      { title: "Ease of Use:", value: "Fully automatic, very simple to operate" },
      { title: "Languages:", value: "	8" },
      { title: "Warranty (years):", value: "5" }
    ]
  },

  {
    id: 3,
    name: "Leveluk JRIV",
    image: jriv,
    price: "₹1,54,000",
    description: "Introducing The New Leveluk JRIV!",

    longDescription:
      "High performance water ionizer with four electrode plates Converts tap water to five different water types at the push of a button Large LCD display Built-in electrolysis enhancer tank.",

    specifications: [
      { title: "Plate size (mm):", value: "135 x 75" },
      { title: "Electrode plates:", value: "4 " },
      { title: "Negative ORP (mV):", value: "-450 mV" },
      { title: "pH Range", value: "3.5 – 10.5" },
      { title: "Generates:", value: "4 water types" },
      { title: "Wattage (W):", value: "160" },
      { title: "Total weight (kg):", value: "	5.3" },
      { title: "Dimensions WHD (mm):", value: "264 x 338 x 171" },
      { title: "Production rate (L/min):", value: "Kangen Water®: 3.0 – 4.9 Acidic Water: 0.2 – 1.9 Strong Acidic Water: 0.3 – 0.7" },
      { title: "Ease of Use:", value: "Fully automatic unit" },
      { title: "Languages:", value: "	1" },
      { title: "Warranty (years):", value: "3" }
    ]
  },

  // {
  //   id: 4,
  //   name: "Kangen K8 Premium",
  //   image: powerfulModel,
  //   price: "₹3,45,000",
  //   description: "Enagic's Most Powerful Model",

  //   longDescription:
  //     "Experience Enagic's most powerful water ionizer with unmatched performance, advanced filtration, and premium Japanese engineering.",

  // specifications: [
  //     { title: "Plate size (mm):", value: "135 x 75" },
  //     { title: "Electrode plates:", value: "4 " },
  //     { title: "Negative ORP (mV):", value: "-450 mV" },
  //     { title: "pH Range", value: "3.5 – 10.5" },
  //     { title: "Generates:", value: "4 water types" },
  //     { title: "Wattage (W):", value: "160" },
  //     { title: "Total weight (kg):", value: "	5.3" },
  //     { title: "Dimensions WHD (mm):", value: "264 x 338 x 171" },
  //     { title: "Production rate (L/min):", value: "Kangen Water®: 3.0 – 4.9 Acidic Water: 0.2 – 1.9 Strong Acidic Water: 0.3 – 0.7" },
  //     { title: "Ease of Use:", value: "Fully automatic unit" },
  //     { title: "Languages:", value: "	1" },
  //     { title: "Warranty (years):", value: "3" }
  //   ]
  // },

  {
    id: 5,
    name: "Anespa DX",
    image: anespa,
    price: "₹1,98,000",
    description: "Luxury Home Spa System",

    longDescription:
      "Anespa DX transforms ordinary tap water into soothing mineral-rich hot spring water, giving you a luxurious spa experience at home.",
specifications: [
      { title: "Plate size (mm):", value: "135 x 75" },
      { title: "Electrode plates:", value: "4 " },
      { title: "Negative ORP (mV):", value: "-450 mV" },
      { title: "pH Range", value: "3.5 – 10.5" },
      { title: "Generates:", value: "4 water types" },
      { title: "Wattage (W):", value: "160" },
      { title: "Total weight (kg):", value: "	5.3" },
      { title: "Dimensions WHD (mm):", value: "264 x 338 x 171" },
      { title: "Production rate (L/min):", value: "Kangen Water®: 3.0 – 4.9 Acidic Water: 0.2 – 1.9 Strong Acidic Water: 0.3 – 0.7" },
      { title: "Ease of Use:", value: "Fully automatic unit" },
      { title: "Languages:", value: "	1" },
      { title: "Warranty (years):", value: "3" }
    ]
  },

  {
    id: 6,
    name: "Ion Water Spa",
    image: ionSpa,
    price: "₹1,75,000",
    description: "Mineral Ion Water Spa",

    longDescription:
      "Treat yourself to a soothing hot spring experience with the ANESPA DX! With an abundant flow of mineralized water and a relaxing massage shower head, your bathroom can instantly turn into a calming hot spring oasis. Generates: Mineral ion water for your bath or shower. Contains a blend of natural hot spring ingredients and minerals, giving you the feeling that you’re enjoying a pleasant hot spring and taking advantage of the mineral ion water. Relax and enjoy!The ANESPA DX removes chlorine from your shower and bath water. Its dual cartridge system contains therapeutic ingredients that have a relaxing hot spring effect. The water is broken down into smaller clusters which makes it easier for your body to absorb the healthy and clean ANESPA DX water.",

   specifications: [
     { title: "Electrode plates:", value: "N/A" },
      { title: "Plate size (mm):", value: "N/A" },
      { title: "Negative ORP (mV):", value: "-450 " },
      { title: "pH Range", value: "	Same as tap water" },
      { title: "Generates:", value: "Mineral ion water for your bath or shower" },
      { title: "Wattage (W):", value: "N/A" },
      { title: "Total weight (kg):", value: "2.5" },
      { title: "Dimensions WHD (mm):", value: "130 x 346" },
      { title: "Production rate (L/min):", value: "	2.6" },
      { title: "Ease of Use:", value: "Very simple to install and operate" },
      { title: "Languages:", value: "	3 " }, 
      { title: "New features for DX model:", value: "Larger ceramic cartridge containing a greater amount of ceramic balls. New, redesigned base for a more efficient filter replacement process." }
    ]
  },

  {
    id: 7,
    name: "JR II",
    image: jr2,
    price: "₹1,35,000",
    description: "Leveluk SD501DX",

    longDescription:
      "ith 7 titanium plates and audio notifications in 8 languages, the SD501DX delivers powerful performance and convenience. The SD501DX generates a continuous stream of 5 types of water using a high-quality built-in electrolysis chamber. This Kangen Water® filtration machine produces: Strong Kangen Water, Kangen Water®, Neutral Water, Beauty Water, and Strong Acidic Water." ,
specifications: [
  { title: "Electrode plates:", value: "7" },
      { title: "Plate size (mm):", value: "135 x 75" },
      { title: "Negative ORP (mV):", value: "-631 mV" },
      { title: "pH Range", value: "2.5 – 11.5" },
      { title: "Generates:", value: "5 water types" },
      { title: "Wattage (W):", value: "264 x 338 x 171" },
      { title: "Total weight (kg):", value: "	5.3" },
      { title: "Dimensions WHD (mm):", value: "264 x 338 x 171" },
      { title: "Production rate (L/min):", value: "	Kangen Water®: 4.5 – 7.6 Acidic Water: 1.5 – 2.6 Strong Acidic Water: 0.6 – 1.1" },
      { title: "Ease of Use:", value: "Fully automatic, very simple to operate" },
      { title: "Languages:", value: "	8" },
      { title: "Warranty (years):", value: "5" }
    ]
  },

  {
    id: 8,
    name: "Kangen Premium Series",
    image: powerfulModel,
    price: "₹3,60,000",
    description: "Enagic’s Most Powerful Model",

    longDescription:
      "The Premium Series combines cutting-edge Japanese technology, superior filtration, and powerful electrolysis to deliver the highest quality Kangen Water.",

   specifications: [
     { title: "Electrode plates:", value: "7 & 5" },
      { title: "Plate size (mm):", value: "135 x 75" },
      { title: "Negative ORP (mV):", value: "-800 mV" },
      { title: "pH Range", value: "2.5 – 11.5" },
      { title: "Generates:", value: "5 water types" },
      { title: "Wattage (W):", value: "200" },
      { title: "Total weight (kg):", value: "10.2" },
      { title: "Dimensions WHD (mm):", value: "	352 x 384 x 250" },
      { title: "Production rate (L/min):", value: "Kangen Water®: 4.9 – 7.9 Acidic Water: 1.9 – 3.0 Strong Acidic water: 1.1 – 3.0" },
      { title: "Ease of Use:", value: "Fully automatic, very simple to operate" },
      { title: "Languages:", value: "1" },
      { title: "Warranty (years):", value: "3" }
    ]
  }
];