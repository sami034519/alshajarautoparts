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
import product30 from "../images/product22.jfif"
import product31 from '../images/product23.jfif'
import product32 from '../images/product24.jfif'
import product33 from '../images/product25.jfif'
import product34 from '../images/product26.jfif'
import product35 from '../images/product27.jfif'
import product36 from '../images/product28.jfif'

const oilproducts = [

  {
    id: "TC CVT Fluid",
    title: "Toyota TC CVT Fluid",
    brand: "Toyota",
    category: "Oil & Lubricants",
    image: product13,
  },
  {
    id: "KQ800-22104",
    title: "Nissan Engine Coolant Premixed",
    brand: "Nissan",
    category: "Oil & Lubricants",
    image: product15,
  },
 
  {
    id: "KQ301-34004-01",
    title: "Nissan Blue Super Long Life Coolant",
    brand: "Nissan",
    category: "Oil & Lubricants",
    image: product17,
  },
  {
    id: "KE907-99932",
    title: "Nissan Differential Fluid",
    brand: "Nissan",
    category: "Oil & Lubricants",
    image: product18,
  },


  // Nissan Oils
  {
    id: "TOY-20W50-4L",
    title: "Toyota 20W-50 SL Motor Oil",
    brand: "Toyota",
    category: "Oil & Lubricants",
    image: product30,
  },
  {
    id: "CAS-MAG-5W30-4L",
    title: "Castrol Magnatec 5W-30 Full Synthetic",
    brand: "Castrol",
    category: "Oil & Lubricants",
    image: product31,
  },
  {
    id: "CAS-EDGE-5W30-4L",
    title: "Castrol EDGE 5W-30 Advanced Full Synthetic",
    brand: "Castrol",
    category: "Oil & Lubricants",
    image: product32,
  },
  {
    id: "TOY-5W30-SN-4L",
    title: "Toyota 5W-30 SN Motor Oil Synthetic",
    brand: "Toyota",
    category: "Oil & Lubricants",
    image: product33,
  },
  {
    id: "LEX-5W40-SN-4L",
    title: "Lexus 5W-40 SN Fully Synthetic Motor Oil",
    brand: "Lexus",
    category: "Oil & Lubricants",
    image: product34,
  },
  {
    id: "NIS-5W30-SN-4L-G",
    title: "Nissan 5W-30 Fully Synthetic Motor Oil (4L)",
    brand: "Nissan",
    category: "Oil & Lubricants",
    image: product35,
  },
  {
    id: "NIS-5W30-SN-1L",
    title: "Nissan 5W-30 Fully Synthetic Motor Oil (1L)",
    brand: "Nissan",
    category: "Oil & Lubricants",
    image: product36,
  },
  {
    id: "KLE53-00004",
    title: "Nissan CVT Fluid NS-3",
    brand: "Nissan",
    category: "Oil & Lubricants",
    image: product2,
  },
  {
    id: "KLE52-00004",
    title: "Nissan CVT Fluid NS-2",
    brand: "Nissan",
    category: "Oil & Lubricants",
    image: product3,
  },
 
  {
    id: "KLD22-00001",
    title: "Nissan Differential Oil GL-5 80W-90",
    brand: "Nissan",
    category: "Oil & Lubricants",
    image: product5,
  },
  {
    id: "KLF51-00001",
    title: "Nissan Power Steering Fluid",
    brand: "Nissan",
    category: "Oil & Lubricants",
    image: product6,
  },
  {
    id: "KE903-99932",
    title: "Nissan Brake Fluid DOT 4",
    brand: "Nissan",
    category: "Oil & Lubricants",
    image: product7,
  },
  {
    id: "KE902-99935",
    title: "Nissan Coolant L248",
    brand: "Nissan",
    category: "Oil & Lubricants",
    image: product8,
  },
  {
    id: "KLE22-00004",
    title: "Nissan ATF Matic Fluid D",
    brand: "Nissan",
    category: "Oil & Lubricants",
    image: product9,
  },
  {
    id: "KLE23-00004",
    title: "Nissan ATF Matic Fluid J",
    brand: "Nissan",
    category: "Oil & Lubricants",
    image: product10,
  },
  {
    id: "KLE24-00004",
    title: "Nissan ATF Matic Fluid S",
    brand: "Nissan",
    category: "Oil & Lubricants",
    image: product11,
  },
  {
    id: "LM-2522",
    title: "Liqui Moly Injection Cleaner",
    brand: "Nissan",
    category: "Oil & Lubricants",
    image: product20,
  },
  {
    id: "LM-7110",
    title: "Liqui Moly Catalytic-System Cleaner",
    brand: "Nissan",
    category: "Oil & Lubricants",
    image: product21,
  },
  {
    id: "WURTH-0893",
    title: "Wurth Petrol Injection Cleaner",
    brand: "Nissan",
    category: "Oil & Lubricants",
    image: product22,
  },
  {
    id: "ACD-X66A",
    title: "AC Delco Carburetor Tune-Up Conditioner",
    brand: "Nissan",
    category: "Oil & Lubricants",
    image: product23,
  },
  {
    id: "WURTH-BRK",
    title: "Wurth Bremsenreiniger Brake Cleaner",
    brand: "Nissan",
    category: "Oil & Lubricants",
    image: product24,
  },
  {
    id: "WD40-MULTI",
    title: "WD-40 Multi-Use Product",
    brand: "Nissan",
    category: "Oil & Lubricants",
    image: product25,
  },
  
];

export default oilproducts;
 // WD-40 Multi-Use

