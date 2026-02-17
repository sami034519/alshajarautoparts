import product2 from "../images/nissan p2.png";
import product3 from "../images/nissan p3.png";

import product5 from "../images/nissan p5.png";
import product6 from "../images/nissan p6.png";
import product7 from "../images/nissan p7.png";
import product8 from "../images/nissan p8.png";
import product9 from "../images/nissan p9.png";
import product10 from "../images/nissan p10.png";
import product11 from "../images/nissan p11.png";

import product13 from "../images/nissan p13.png";
import product15 from "../images/nissan p18.png";

import product17 from "../images/nissan p16.png";
import product18 from "../images/nissan p17.png";


import product20 from "../images/nissan p20.png"; // Liqui Moly Injection Cleaner
import product21 from "../images/nissan p21.png"; // Liqui Moly Catalytic System Cleaner
import product22 from "../images/nissan p22.png"; // Wurth Petrol Injection Cleaner
import product23 from "../images/nissan p23.png"; // AC Delco Carburetor Tune-Up
import product24 from "../images/nissan p24.png"; // Wurth Brake Cleaner
import product25 from "../images/nissan p25.png";
import product30 from "../images/product23..png"
import product31 from '../images/product22..png'
import product32 from '../images/product24..png'
import product33 from '../images/product25..png'
import product34 from '../images/product26..png'
import product35 from '../images/product27..png'
import product36 from '../images/product28..png'

const oilproducts = [
  {
    id: "TC CVT Fluid",
    title: "Toyota TC CVT Fluid",
    brand: "Toyota",
    category: "Oil & Lubricants",
    image: product13,
    price: "AED 120.00",
    description: "High-quality CVT fluid designed for Toyota transmissions."
  },
  {
    id: "KQ800-22104",
    title: "Nissan Engine Coolant Premixed",
    brand: "Nissan",
    category: "Oil & Lubricants",
    image: product15,
    price: "AED 95.00",
    description: "Pre-mixed coolant for Nissan vehicles, long-lasting protection."
  },
  {
    id: "KQ301-34004-01",
    title: "Nissan Blue Super Long Life Coolant",
    brand: "Nissan",
    category: "Oil & Lubricants",
    image: product17,
    price: "AED 105.00",
    description: "Extended life coolant for superior engine performance."
  },
  {
    id: "KE907-99932",
    title: "Nissan Differential Fluid",
    brand: "Nissan",
    category: "Oil & Lubricants",
    image: product18,
    price: "AED 88.00",
    description: "Premium differential fluid for smooth operation."
  },
  {
    id: "TOY-20W50-4L",
    title: "Toyota 20W-50 SL Motor Oil",
    brand: "Toyota",
    category: "Oil & Lubricants",
    image: product30,
    price: "AED 110.00",
    description: "Durable motor oil suitable for high-mileage Toyota engines."
  },
  {
    id: "CAS-MAG-5W30-4L",
    title: "Castrol Magnatec 5W-30 Full Synthetic",
    brand: "Castrol",
    category: "Oil & Lubricants",
    image: product31,
    price: "AED 145.00",
    description: "Full synthetic engine oil with intelligent molecules."
  },
  {
    id: "CAS-EDGE-5W30-4L",
    title: "Castrol EDGE 5W-30 Advanced Full Synthetic",
    brand: "Castrol",
    category: "Oil & Lubricants",
    image: product32,
    price: "AED 160.00",
    description: "Advanced full synthetic oil for maximum performance."
  },
  {
    id: "TOY-5W30-SN-4L",
    title: "Toyota 5W-30 SN Motor Oil Synthetic",
    brand: "Toyota",
    category: "Oil & Lubricants",
    image: product33,
    price: "AED 140.00",
    description: "Synthetic motor oil for Toyota engines with superior protection."
  },
  {
    id: "LEX-5W40-SN-4L",
    title: "Lexus 5W-40 SN Fully Synthetic Motor Oil",
    brand: "Lexus",
    category: "Oil & Lubricants",
    image: product34,
    price: "AED 155.00",
    description: "Fully synthetic motor oil designed for Lexus vehicles."
  },
  {
    id: "NIS-5W30-SN-4L-G",
    title: "Nissan 5W-30 Fully Synthetic Motor Oil (4L)",
    brand: "Nissan",
    category: "Oil & Lubricants",
    image: product35,
    price: "AED 138.00",
    description: "High-quality Nissan motor oil for optimal engine performance."
  },
  {
    id: "NIS-5W30-SN-1L",
    title: "Nissan 5W-30 Fully Synthetic Motor Oil (1L)",
    brand: "Nissan",
    category: "Oil & Lubricants",
    image: product36,
    price: "AED 38.00",
    description: "Single-liter pack of Nissan fully synthetic motor oil."
  },
  {
    id: "KLE53-00004",
    title: "Nissan CVT Fluid NS-3",
    brand: "Nissan",
    category: "Oil & Lubricants",
    image: product2,
    price: "AED 75.00",
    description: "CVT transmission fluid for smooth Nissan gear shifts."
  },
  {
    id: "KLE52-00004",
    title: "Nissan CVT Fluid NS-2",
    brand: "Nissan",
    category: "Oil & Lubricants",
    image: product3,
    price: "AED 72.00",
    description: "Reliable CVT fluid for Nissan automatic transmissions."
  },
  {
    id: "KLD22-00001",
    title: "Nissan Differential Oil GL-5 80W-90",
    brand: "Nissan",
    category: "Oil & Lubricants",
    image: product5,
    price: "AED 82.00",
    description: "Durable differential oil for Nissan vehicles."
  },
  {
    id: "KLF51-00001",
    title: "Nissan Power Steering Fluid",
    brand: "Nissan",
    category: "Oil & Lubricants",
    image: product6,
    price: "AED 68.00",
    description: "Premium power steering fluid for smooth steering."
  },
  {
    id: "KE903-99932",
    title: "Nissan Brake Fluid DOT 4",
    brand: "Nissan",
    category: "Oil & Lubricants",
    image: product7,
    price: "AED 48.00",
    description: "High-performance brake fluid for Nissan braking systems."
  },
  {
    id: "KE902-99935",
    title: "Nissan Coolant L248",
    brand: "Nissan",
    category: "Oil & Lubricants",
    image: product8,
    price: "AED 90.00",
    description: "Long-life engine coolant for Nissan vehicles."
  },
  {
    id: "KLE22-00004",
    title: "Nissan ATF Matic Fluid D",
    brand: "Nissan",
    category: "Oil & Lubricants",
    image: product9,
    price: "AED 85.00",
    description: "Automatic transmission fluid for Nissan vehicles."
  },
  {
    id: "KLE23-00004",
    title: "Nissan ATF Matic Fluid J",
    brand: "Nissan",
    category: "Oil & Lubricants",
    image: product10,
    price: "AED 85.00",
    description: "Automatic transmission fluid for Nissan vehicles."
  },
  {
    id: "KLE24-00004",
    title: "Nissan ATF Matic Fluid S",
    brand: "Nissan",
    category: "Oil & Lubricants",
    image: product11,
    price: "AED 85.00",
    description: "Automatic transmission fluid for Nissan vehicles."
  },
  {
    id: "LM-2522",
    title: "Liqui Moly Injection Cleaner",
    brand: "Liqui Moly",
    category: "Oil & Lubricants",
    image: product20,
    price: "AED 75.00",
    description: "Cleans fuel injectors for better engine performance."
  },
  {
    id: "LM-7110",
    title: "Liqui Moly Catalytic-System Cleaner",
    brand: "Liqui Moly",
    category: "Oil & Lubricants",
    image: product21,
    price: "AED 80.00",
    description: "Maintains catalytic system efficiency."
  },
  {
    id: "WURTH-0893",
    title: "Wurth Petrol Injection Cleaner",
    brand: "Wurth",
    category: "Oil & Lubricants",
    image: product22,
    price: "AED 70.00",
    description: "Cleans petrol injection systems for smooth running."
  },
  {
    id: "ACD-X66A",
    title: "AC Delco Carburetor Tune-Up Conditioner",
    brand: "AC Delco",
    category: "Oil & Lubricants",
    image: product23,
    price: "AED 65.00",
    description: "Optimizes carburetor performance for efficient engine operation."
  },
  {
    id: "WURTH-BRK",
    title: "Wurth Bremsenreiniger Brake Cleaner",
    brand: "Wurth",
    category: "Oil & Lubricants",
    image: product24,
    price: "AED 55.00",
    description: "Fast-evaporating brake cleaner for safety and efficiency."
  },
  {
    id: "WD40-MULTI",
    title: "WD-40 Multi-Use Product",
    brand: "WD-40",
    category: "Oil & Lubricants",
    image: product25,
    price: "AED 35.00",
    description: "Multi-purpose lubricant for general maintenance."
  },
];

export default oilproducts;
 // WD-40 Multi-Use

