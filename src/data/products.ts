
import { Product, ProductCategory } from "@/types";

const products: Product[] = [
  // Superbikes - 20 products
  {
    id: "sb-001",
    name: "Kawasaki Ninja ZX-10R",
    description: "A superbike with incredible performance and aerodynamic design for professional racers and enthusiasts alike.",
    category: "superbike",
    price: 1600000, // ₹16,00,000
    images: ["/placeholder.svg"],
    brand: "Kawasaki",
    specifications: {
      engine: "998cc Liquid-cooled, 4-stroke, DOHC, 4-valve, Inline-Four",
      power: "203 HP",
      torque: "114.9 Nm",
      weight: "207 kg",
      topSpeed: "299 km/h"
    },
    featured: true,
    inStock: true,
    rating: 4.9
  },
  {
    id: "sb-002",
    name: "Ducati Panigale V4",
    description: "The Panigale V4 is the closest thing to a MotoGP bike available for public roads.",
    category: "superbike",
    price: 2200000, // ₹22,00,000
    images: ["/placeholder.svg"],
    brand: "Ducati",
    specifications: {
      engine: "1103cc Desmosedici Stradale V4",
      power: "214 HP",
      torque: "124 Nm",
      weight: "198 kg",
      topSpeed: "305 km/h"
    },
    featured: true,
    inStock: true,
    rating: 4.8
  },
  {
    id: "sb-003",
    name: "BMW S 1000 RR",
    description: "A high-performance superbike with advanced electronics and aggressive styling.",
    category: "superbike",
    price: 1900000, // ₹19,00,000
    images: ["/placeholder.svg"],
    brand: "BMW",
    specifications: {
      engine: "999cc Water/Oil-cooled inline 4-cylinder",
      power: "207 HP",
      torque: "113 Nm",
      weight: "197 kg",
      topSpeed: "299 km/h"
    },
    inStock: true,
    rating: 4.7
  },
  {
    id: "sb-004",
    name: "Yamaha YZF-R1",
    description: "The R1 represents the pinnacle of Yamaha supersport performance with MotoGP technology.",
    category: "superbike",
    price: 1950000, // ₹19,50,000
    images: ["/placeholder.svg"],
    brand: "Yamaha",
    specifications: {
      engine: "998cc inline 4-cylinder, DOHC",
      power: "200 HP",
      torque: "112.4 Nm",
      weight: "201 kg",
      topSpeed: "299 km/h"
    },
    inStock: true,
    rating: 4.6
  },
  {
    id: "sb-005",
    name: "Honda CBR1000RR-R Fireblade SP",
    description: "The ultimate Honda sports motorcycle, designed with MotoGP technology and aerodynamics.",
    category: "superbike",
    price: 2350000, // ₹23,50,000
    images: ["/placeholder.svg"],
    brand: "Honda",
    specifications: {
      engine: "1000cc liquid-cooled DOHC inline-four",
      power: "217 HP",
      torque: "113 Nm",
      weight: "201 kg",
      topSpeed: "299 km/h"
    },
    featured: true,
    inStock: true,
    rating: 4.9
  },
  {
    id: "sb-006",
    name: "Suzuki GSX-R1000R",
    description: "A balanced superbike with track-focused performance and heritage.",
    category: "superbike",
    price: 1800000, // ₹18,00,000
    images: ["/placeholder.svg"],
    brand: "Suzuki",
    specifications: {
      engine: "999.8cc liquid-cooled DOHC",
      power: "202 HP",
      torque: "117.6 Nm",
      weight: "203 kg",
      topSpeed: "299 km/h"
    },
    inStock: true,
    rating: 4.6
  },
  {
    id: "sb-007",
    name: "Aprilia RSV4 Factory",
    description: "Italian craftsmanship meets racing technology in this high-end superbike.",
    category: "superbike",
    price: 2400000, // ₹24,00,000
    images: ["/placeholder.svg"],
    brand: "Aprilia",
    specifications: {
      engine: "1099cc V4 65° liquid-cooled",
      power: "217 HP",
      torque: "125 Nm",
      weight: "204 kg",
      topSpeed: "305 km/h"
    },
    inStock: true,
    rating: 4.7
  },
  {
    id: "sb-008",
    name: "MV Agusta F4 RC",
    description: "Limited edition superbike with exceptional performance and Italian craftsmanship.",
    category: "superbike",
    price: 4000000, // ₹40,00,000
    images: ["/placeholder.svg"],
    brand: "MV Agusta",
    specifications: {
      engine: "998cc inline-four",
      power: "212 HP",
      torque: "115 Nm",
      weight: "175 kg",
      topSpeed: "302 km/h"
    },
    inStock: false,
    rating: 4.9
  },
  {
    id: "sb-009",
    name: "Triumph Daytona Moto2 765",
    description: "Limited edition motorcycle inspired by Moto2 racing with exclusive features.",
    category: "superbike",
    price: 1700000, // ₹17,00,000
    images: ["/placeholder.svg"],
    brand: "Triumph",
    specifications: {
      engine: "765cc liquid-cooled inline 3-cylinder",
      power: "130 HP",
      torque: "80 Nm",
      weight: "189 kg",
      topSpeed: "265 km/h"
    },
    inStock: true,
    rating: 4.5
  },
  {
    id: "sb-010",
    name: "KTM RC 8C",
    description: "Track-focused superbike with limited production and advanced features.",
    category: "superbike",
    price: 2800000, // ₹28,00,000
    images: ["/placeholder.svg"],
    brand: "KTM",
    specifications: {
      engine: "889cc LC8c parallel-twin",
      power: "128 HP",
      torque: "101 Nm",
      weight: "159 kg",
      topSpeed: "280 km/h"
    },
    inStock: false,
    rating: 4.7
  },
  {
    id: "sb-011",
    name: "Benelli Tornado 1130",
    description: "Italian exotic superbike with unique styling and powerful performance.",
    category: "superbike",
    price: 1500000, // ₹15,00,000
    images: ["/placeholder.svg"],
    brand: "Benelli",
    specifications: {
      engine: "1131cc inline triple",
      power: "160 HP",
      torque: "120 Nm",
      weight: "208 kg",
      topSpeed: "270 km/h"
    },
    inStock: true,
    rating: 4.3
  },
  {
    id: "sb-012",
    name: "Bimota Tesi H2",
    description: "Revolutionary superbike with unique hub-center steering and Kawasaki H2 supercharged engine.",
    category: "superbike",
    price: 7200000, // ₹72,00,000
    images: ["/placeholder.svg"],
    brand: "Bimota",
    specifications: {
      engine: "998cc supercharged inline-four",
      power: "242 HP",
      torque: "142 Nm",
      weight: "214 kg",
      topSpeed: "300+ km/h"
    },
    inStock: false,
    rating: 4.9
  },
  {
    id: "sb-013",
    name: "Kawasaki Ninja H2R",
    description: "The ultimate track-only hyperbike with supercharged engine and unprecedented power.",
    category: "superbike",
    price: 7500000, // ₹75,00,000
    images: ["/placeholder.svg"],
    brand: "Kawasaki",
    specifications: {
      engine: "998cc supercharged inline-four",
      power: "310 HP",
      torque: "165 Nm",
      weight: "216 kg",
      topSpeed: "400 km/h"
    },
    featured: true,
    inStock: false,
    rating: 5.0
  },
  {
    id: "sb-014",
    name: "Ducati Streetfighter V4 SP",
    description: "The most extreme naked bike with V4 power and premium components.",
    category: "superbike",
    price: 2900000, // ₹29,00,000
    images: ["/placeholder.svg"],
    brand: "Ducati",
    specifications: {
      engine: "1103cc Desmosedici Stradale V4",
      power: "208 HP",
      torque: "123 Nm",
      weight: "196 kg",
      topSpeed: "280 km/h"
    },
    inStock: true,
    rating: 4.8
  },
  {
    id: "sb-015",
    name: "Norton V4SS",
    description: "Limited production British superbike with carbon fiber and titanium components.",
    category: "superbike",
    price: 4400000, // ₹44,00,000
    images: ["/placeholder.svg"],
    brand: "Norton",
    specifications: {
      engine: "1200cc V4",
      power: "200 HP",
      torque: "130 Nm",
      weight: "179 kg",
      topSpeed: "300 km/h"
    },
    inStock: false,
    rating: 4.6
  },
  {
    id: "sb-016",
    name: "BMW M 1000 RR",
    description: "The first BMW M motorcycle with exclusive racing technology and powerful engine.",
    category: "superbike",
    price: 4200000, // ₹42,00,000
    images: ["/placeholder.svg"],
    brand: "BMW",
    specifications: {
      engine: "999cc inline-four",
      power: "212 HP",
      torque: "113 Nm",
      weight: "192 kg",
      topSpeed: "306 km/h"
    },
    featured: true,
    inStock: true,
    rating: 4.9
  },
  {
    id: "sb-017",
    name: "Yamaha YZF-R1M",
    description: "The premium version of R1 with carbon fiber bodywork and electronic racing suspension.",
    category: "superbike",
    price: 2700000, // ₹27,00,000
    images: ["/placeholder.svg"],
    brand: "Yamaha",
    specifications: {
      engine: "998cc inline-four",
      power: "200 HP",
      torque: "112.4 Nm",
      weight: "202 kg",
      topSpeed: "299 km/h"
    },
    inStock: true,
    rating: 4.8
  },
  {
    id: "sb-018",
    name: "Ducati Superleggera V4",
    description: "The most powerful and technologically advanced production Ducati ever produced.",
    category: "superbike",
    price: 12000000, // ₹1,20,00,000
    images: ["/placeholder.svg"],
    brand: "Ducati",
    specifications: {
      engine: "998cc Desmosedici Stradale R V4",
      power: "234 HP",
      torque: "119 Nm",
      weight: "159 kg",
      topSpeed: "310 km/h"
    },
    inStock: false,
    rating: 5.0
  },
  {
    id: "sb-019",
    name: "Honda CBR600RR",
    description: "Middleweight supersport with exceptional handling and racing pedigree.",
    category: "superbike",
    price: 1400000, // ₹14,00,000
    images: ["/placeholder.svg"],
    brand: "Honda",
    specifications: {
      engine: "599cc liquid-cooled inline-four",
      power: "120 HP",
      torque: "69 Nm",
      weight: "188 kg",
      topSpeed: "262 km/h"
    },
    inStock: true,
    rating: 4.5
  },
  {
    id: "sb-020",
    name: "Suzuki Hayabusa",
    description: "Legendary hyperbike known for ultimate speed and unique aerodynamic styling.",
    category: "superbike",
    price: 1680000, // ₹16,80,000
    images: ["/placeholder.svg"],
    brand: "Suzuki",
    specifications: {
      engine: "1340cc inline-four",
      power: "188 HP",
      torque: "150 Nm",
      weight: "266 kg",
      topSpeed: "299 km/h"
    },
    featured: true,
    inStock: true,
    rating: 4.8
  },
  
  // Luxury Cars - 15 products
  {
    id: "lc-001",
    name: "Rolls-Royce Phantom",
    description: "The pinnacle of luxury motoring, crafted with the finest materials and attention to detail.",
    category: "luxury-car",
    price: 95000000, // ₹9,50,00,000
    images: ["/placeholder.svg"],
    brand: "Rolls-Royce",
    specifications: {
      engine: "6.75L V12 Twin-Turbo",
      power: "563 HP",
      torque: "900 Nm",
      acceleration: "0-100 km/h in 5.3 seconds",
      transmission: "8-speed automatic"
    },
    featured: true,
    inStock: true,
    rating: 4.9
  },
  {
    id: "lc-002",
    name: "Bentley Continental GT",
    description: "A grand touring luxury coupe that combines performance with handcrafted luxury.",
    category: "luxury-car",
    price: 35000000, // ₹3,50,00,000
    images: ["/placeholder.svg"],
    brand: "Bentley",
    specifications: {
      engine: "6.0L W12 Twin-Turbo",
      power: "626 HP",
      torque: "900 Nm",
      acceleration: "0-100 km/h in 3.7 seconds",
      transmission: "8-speed dual-clutch"
    },
    featured: true,
    inStock: true,
    rating: 4.7
  },
  {
    id: "lc-003",
    name: "Mercedes-Maybach S-Class",
    description: "The ultimate luxury sedan with extended wheelbase and executive rear seats.",
    category: "luxury-car",
    price: 25000000, // ₹2,50,00,000
    images: ["/placeholder.svg"],
    brand: "Mercedes-Benz",
    specifications: {
      engine: "4.0L V8 Twin-Turbo",
      power: "503 HP",
      torque: "700 Nm",
      acceleration: "0-100 km/h in 4.8 seconds",
      transmission: "9-speed automatic"
    },
    inStock: true,
    rating: 4.8
  },
  {
    id: "lc-004",
    name: "Aston Martin DBS Superleggera",
    description: "A luxurious grand tourer with the power and aggression of a supercar.",
    category: "luxury-car",
    price: 52000000, // ₹5,20,00,000
    images: ["/placeholder.svg"],
    brand: "Aston Martin",
    specifications: {
      engine: "5.2L V12 Twin-Turbo",
      power: "725 HP",
      torque: "900 Nm",
      acceleration: "0-100 km/h in 3.4 seconds",
      transmission: "8-speed automatic"
    },
    inStock: true,
    rating: 4.7
  },
  {
    id: "lc-005",
    name: "Maserati Quattroporte",
    description: "Italian luxury sports sedan combining performance with comfort.",
    category: "luxury-car",
    price: 17000000, // ₹1,70,00,000
    images: ["/placeholder.svg"],
    brand: "Maserati",
    specifications: {
      engine: "3.8L V8 Twin-Turbo",
      power: "580 HP",
      torque: "730 Nm",
      acceleration: "0-100 km/h in 4.5 seconds",
      transmission: "8-speed automatic"
    },
    inStock: true,
    rating: 4.5
  },
  {
    id: "lc-006",
    name: "Lexus LS 500h",
    description: "Japanese luxury sedan with hybrid technology and meticulous craftsmanship.",
    category: "luxury-car",
    price: 19000000, // ₹1,90,00,000
    images: ["/placeholder.svg"],
    brand: "Lexus",
    specifications: {
      engine: "3.5L V6 Hybrid",
      power: "354 HP (combined)",
      torque: "350 Nm",
      acceleration: "0-100 km/h in 5.4 seconds",
      transmission: "Multi-stage hybrid"
    },
    inStock: true,
    rating: 4.6
  },
  {
    id: "lc-007",
    name: "BMW 7 Series",
    description: "Flagship German luxury sedan with cutting-edge technology and comfort.",
    category: "luxury-car",
    price: 16500000, // ₹1,65,00,000
    images: ["/placeholder.svg"],
    brand: "BMW",
    specifications: {
      engine: "4.4L V8 Twin-Turbo",
      power: "523 HP",
      torque: "750 Nm",
      acceleration: "0-100 km/h in 4.1 seconds",
      transmission: "8-speed automatic"
    },
    featured: true,
    inStock: true,
    rating: 4.7
  },
  {
    id: "lc-008",
    name: "Audi A8 L",
    description: "Sophisticated luxury sedan with advanced technology and refined design.",
    category: "luxury-car",
    price: 15800000, // ₹1,58,00,000
    images: ["/placeholder.svg"],
    brand: "Audi",
    specifications: {
      engine: "4.0L V8 TFSI",
      power: "460 HP",
      torque: "660 Nm",
      acceleration: "0-100 km/h in 4.5 seconds",
      transmission: "8-speed Tiptronic"
    },
    inStock: true,
    rating: 4.6
  },
  {
    id: "lc-009",
    name: "Land Rover Range Rover Autobiography",
    description: "The ultimate luxury SUV with off-road capability and premium features.",
    category: "luxury-car",
    price: 28000000, // ₹2,80,00,000
    images: ["/placeholder.svg"],
    brand: "Land Rover",
    specifications: {
      engine: "5.0L V8 Supercharged",
      power: "557 HP",
      torque: "700 Nm",
      acceleration: "0-100 km/h in 5.1 seconds",
      transmission: "8-speed automatic"
    },
    inStock: true,
    rating: 4.8
  },
  {
    id: "lc-010",
    name: "Porsche Panamera Turbo S E-Hybrid",
    description: "Performance-focused luxury sedan with hybrid technology.",
    category: "luxury-car",
    price: 24500000, // ₹2,45,00,000
    images: ["/placeholder.svg"],
    brand: "Porsche",
    specifications: {
      engine: "4.0L V8 Twin-Turbo Hybrid",
      power: "689 HP (combined)",
      torque: "870 Nm",
      acceleration: "0-100 km/h in 3.2 seconds",
      transmission: "8-speed PDK"
    },
    inStock: true,
    rating: 4.8
  },
  {
    id: "lc-011",
    name: "Jaguar XJ",
    description: "British luxury sedan combining elegance with sporting dynamics.",
    category: "luxury-car",
    price: 12500000, // ₹1,25,00,000
    images: ["/placeholder.svg"],
    brand: "Jaguar",
    specifications: {
      engine: "5.0L V8 Supercharged",
      power: "575 HP",
      torque: "700 Nm",
      acceleration: "0-100 km/h in 4.4 seconds",
      transmission: "8-speed automatic"
    },
    inStock: false,
    rating: 4.5
  },
  {
    id: "lc-012",
    name: "Bentley Bentayga",
    description: "Ultra-luxury SUV with exceptional craftsmanship and powerful performance.",
    category: "luxury-car",
    price: 45000000, // ₹4,50,00,000
    images: ["/placeholder.svg"],
    brand: "Bentley",
    specifications: {
      engine: "6.0L W12 Twin-Turbo",
      power: "626 HP",
      torque: "900 Nm",
      acceleration: "0-100 km/h in 3.9 seconds",
      transmission: "8-speed automatic"
    },
    featured: true,
    inStock: true,
    rating: 4.8
  },
  {
    id: "lc-013",
    name: "Rolls-Royce Cullinan",
    description: "The first SUV from Rolls-Royce, offering ultimate luxury in all terrains.",
    category: "luxury-car",
    price: 69000000, // ₹6,90,00,000
    images: ["/placeholder.svg"],
    brand: "Rolls-Royce",
    specifications: {
      engine: "6.75L V12 Twin-Turbo",
      power: "563 HP",
      torque: "850 Nm",
      acceleration: "0-100 km/h in 5.2 seconds",
      transmission: "8-speed automatic"
    },
    inStock: true,
    rating: 4.9
  },
  {
    id: "lc-014",
    name: "Mercedes-Benz S-Class",
    description: "The benchmark luxury sedan with innovative technology and comfort.",
    category: "luxury-car",
    price: 16000000, // ₹1,60,00,000
    images: ["/placeholder.svg"],
    brand: "Mercedes-Benz",
    specifications: {
      engine: "3.0L Inline-6 Mild Hybrid",
      power: "429 HP",
      torque: "520 Nm",
      acceleration: "0-100 km/h in 4.9 seconds",
      transmission: "9-speed automatic"
    },
    inStock: true,
    rating: 4.7
  },
  {
    id: "lc-015",
    name: "Genesis G90",
    description: "Korean luxury flagship sedan with exceptional value and features.",
    category: "luxury-car",
    price: 8900000, // ₹89,00,000
    images: ["/placeholder.svg"],
    brand: "Genesis",
    specifications: {
      engine: "3.5L V6 Twin-Turbo",
      power: "375 HP",
      torque: "530 Nm",
      acceleration: "0-100 km/h in 5.1 seconds",
      transmission: "8-speed automatic"
    },
    inStock: true,
    rating: 4.6
  },
  
  // Sports Cars - 20 products
  {
    id: "sc-001",
    name: "Ferrari SF90 Stradale",
    description: "Hybrid hypercar with Formula 1 technology and breathtaking performance.",
    category: "sports-car",
    price: 75000000, // ₹7,50,00,000
    images: ["/placeholder.svg"],
    brand: "Ferrari",
    specifications: {
      engine: "4.0L V8 Twin-Turbo + 3 Electric Motors",
      power: "986 HP (combined)",
      torque: "800 Nm",
      acceleration: "0-100 km/h in 2.5 seconds",
      transmission: "8-speed dual-clutch"
    },
    featured: true,
    inStock: true,
    rating: 5.0
  },
  {
    id: "sc-002",
    name: "Lamborghini Aventador SVJ",
    description: "Limited-edition flagship V12 supercar with aggressive aerodynamics.",
    category: "sports-car",
    price: 85000000, // ₹8,50,00,000
    images: ["/placeholder.svg"],
    brand: "Lamborghini",
    specifications: {
      engine: "6.5L V12",
      power: "770 HP",
      torque: "720 Nm",
      acceleration: "0-100 km/h in 2.8 seconds",
      transmission: "7-speed automated manual"
    },
    featured: true,
    inStock: false,
    rating: 4.9
  },
  {
    id: "sc-003",
    name: "McLaren 720S",
    description: "British supercar with innovative aerodynamics and lightweight construction.",
    category: "sports-car",
    price: 48000000, // ₹4,80,00,000
    images: ["/placeholder.svg"],
    brand: "McLaren",
    specifications: {
      engine: "4.0L V8 Twin-Turbo",
      power: "710 HP",
      torque: "770 Nm",
      acceleration: "0-100 km/h in 2.9 seconds",
      transmission: "7-speed dual-clutch"
    },
    inStock: true,
    rating: 4.8
  },
  {
    id: "sc-004",
    name: "Porsche 911 GT3 RS",
    description: "Track-focused version of the iconic 911 with motorsport DNA.",
    category: "sports-car",
    price: 30000000, // ₹3,00,00,000
    images: ["/placeholder.svg"],
    brand: "Porsche",
    specifications: {
      engine: "4.0L Flat-6",
      power: "518 HP",
      torque: "465 Nm",
      acceleration: "0-100 km/h in 3.2 seconds",
      transmission: "7-speed PDK"
    },
    featured: true,
    inStock: true,
    rating: 4.9
  },
  {
    id: "sc-005",
    name: "Bugatti Chiron",
    description: "One of the world's fastest and most exclusive hypercars.",
    category: "sports-car",
    price: 230000000, // ₹23,00,00,000
    images: ["/placeholder.svg"],
    brand: "Bugatti",
    specifications: {
      engine: "8.0L W16 Quad-Turbo",
      power: "1500 HP",
      torque: "1600 Nm",
      acceleration: "0-100 km/h in 2.4 seconds",
      transmission: "7-speed dual-clutch"
    },
    inStock: false,
    rating: 5.0
  },
  {
    id: "sc-006",
    name: "Aston Martin Valkyrie",
    description: "Formula 1 inspired hypercar developed with Red Bull Racing.",
    category: "sports-car",
    price: 260000000, // ₹26,00,00,000
    images: ["/placeholder.svg"],
    brand: "Aston Martin",
    specifications: {
      engine: "6.5L V12 + Electric Motor",
      power: "1140 HP (combined)",
      torque: "900 Nm",
      acceleration: "0-100 km/h in 2.5 seconds",
      transmission: "7-speed single-clutch automated manual"
    },
    inStock: false,
    rating: 5.0
  },
  {
    id: "sc-007",
    name: "Ferrari 812 Superfast",
    description: "High-performance grand tourer with the most powerful naturally-aspirated V12.",
    category: "sports-car",
    price: 52000000, // ₹5,20,00,000
    images: ["/placeholder.svg"],
    brand: "Ferrari",
    specifications: {
      engine: "6.5L V12",
      power: "789 HP",
      torque: "718 Nm",
      acceleration: "0-100 km/h in 2.9 seconds",
      transmission: "7-speed dual-clutch"
    },
    inStock: true,
    rating: 4.8
  },
  {
    id: "sc-008",
    name: "Porsche Taycan Turbo S",
    description: "All-electric sports car with incredible performance and Porsche DNA.",
    category: "sports-car",
    price: 23500000, // ₹2,35,00,000
    images: ["/placeholder.svg"],
    brand: "Porsche",
    specifications: {
      engine: "Dual Electric Motors",
      power: "750 HP",
      torque: "1050 Nm",
      acceleration: "0-100 km/h in 2.8 seconds",
      transmission: "2-speed automatic"
    },
    featured: true,
    inStock: true,
    rating: 4.7
  },
  {
    id: "sc-009",
    name: "Koenigsegg Jesko",
    description: "Swedish hypercar with record-breaking performance potential.",
    category: "sports-car",
    price: 190000000, // ₹19,00,00,000
    images: ["/placeholder.svg"],
    brand: "Koenigsegg",
    specifications: {
      engine: "5.0L V8 Twin-Turbo",
      power: "1600 HP (on E85)",
      torque: "1500 Nm",
      acceleration: "0-100 km/h in 2.5 seconds",
      transmission: "9-speed Light Speed Transmission"
    },
    inStock: false,
    rating: 5.0
  },
  {
    id: "sc-010",
    name: "Ford GT",
    description: "American supercar with racing heritage and innovative aerodynamics.",
    category: "sports-car",
    price: 37500000, // ₹3,75,00,000
    images: ["/placeholder.svg"],
    brand: "Ford",
    specifications: {
      engine: "3.5L V6 Twin-Turbo EcoBoost",
      power: "660 HP",
      torque: "746 Nm",
      acceleration: "0-100 km/h in 3.0 seconds",
      transmission: "7-speed dual-clutch"
    },
    inStock: false,
    rating: 4.7
  },
  {
    id: "sc-011",
    name: "Mercedes-AMG GT Black Series",
    description: "The most powerful AMG V8 production car ever made.",
    category: "sports-car",
    price: 42000000, // ₹4,20,00,000
    images: ["/placeholder.svg"],
    brand: "Mercedes-Benz",
    specifications: {
      engine: "4.0L V8 Twin-Turbo",
      power: "730 HP",
      torque: "800 Nm",
      acceleration: "0-100 km/h in 3.2 seconds",
      transmission: "7-speed dual-clutch"
    },
    inStock: true,
    rating: 4.8
  },
  {
    id: "sc-012",
    name: "Chevrolet Corvette C8 Z06",
    description: "American supercar with mid-engine layout and track-focused performance.",
    category: "sports-car",
    price: 15000000, // ₹1,50,00,000
    images: ["/placeholder.svg"],
    brand: "Chevrolet",
    specifications: {
      engine: "5.5L Flat-plane Crank V8",
      power: "670 HP",
      torque: "624 Nm",
      acceleration: "0-100 km/h in 2.8 seconds",
      transmission: "8-speed dual-clutch"
    },
    inStock: true,
    rating: 4.7
  },
  {
    id: "sc-013",
    name: "Rimac Nevera",
    description: "All-electric hypercar with extraordinary performance figures.",
    category: "sports-car",
    price: 175000000, // ₹17,50,00,000
    images: ["/placeholder.svg"],
    brand: "Rimac",
    specifications: {
      engine: "Four Electric Motors",
      power: "1914 HP",
      torque: "2360 Nm",
      acceleration: "0-100 km/h in 1.97 seconds",
      transmission: "Single-speed direct drive"
    },
    featured: true,
    inStock: false,
    rating: 5.0
  },
  {
    id: "sc-014",
    name: "Pagani Huayra BC",
    description: "Limited edition Italian hypercar with artistic design and engineering.",
    category: "sports-car",
    price: 210000000, // ₹21,00,00,000
    images: ["/placeholder.svg"],
    brand: "Pagani",
    specifications: {
      engine: "6.0L V12 Twin-Turbo",
      power: "800 HP",
      torque: "1100 Nm",
      acceleration: "0-100 km/h in 2.8 seconds",
      transmission: "7-speed automated manual"
    },
    inStock: false,
    rating: 4.9
  },
  {
    id: "sc-015",
    name: "McLaren Senna",
    description: "Ultimate track-focused hypercar named after the legendary F1 driver.",
    category: "sports-car",
    price: 90000000, // ₹9,00,00,000
    images: ["/placeholder.svg"],
    brand: "McLaren",
    specifications: {
      engine: "4.0L V8 Twin-Turbo",
      power: "789 HP",
      torque: "800 Nm",
      acceleration: "0-100 km/h in 2.8 seconds",
      transmission: "7-speed dual-clutch"
    },
    inStock: false,
    rating: 4.9
  },
  {
    id: "sc-016",
    name: "Lamborghini Huracán STO",
    description: "Street-legal super sports car with racing technology and aerodynamics.",
    category: "sports-car",
    price: 56000000, // ₹5,60,00,000
    images: ["/placeholder.svg"],
    brand: "Lamborghini",
    specifications: {
      engine: "5.2L V10",
      power: "640 HP",
      torque: "565 Nm",
      acceleration: "0-100 km/h in 3.0 seconds",
      transmission: "7-speed dual-clutch"
    },
    inStock: true,
    rating: 4.8
  },
  {
    id: "sc-017",
    name: "Lotus Evija",
    description: "British all-electric hypercar with striking design and performance.",
    category: "sports-car",
    price: 160000000, // ₹16,00,00,000
    images: ["/placeholder.svg"],
    brand: "Lotus",
    specifications: {
      engine: "Four Electric Motors",
      power: "1973 HP",
      torque: "1700 Nm",
      acceleration: "0-100 km/h in under 3 seconds",
      transmission: "Single-speed"
    },
    inStock: false,
    rating: 4.8
  },
  {
    id: "sc-018",
    name: "Ferrari Roma",
    description: "Elegant grand touring sports car with timeless Italian styling.",
    category: "sports-car",
    price: 38000000, // ₹3,80,00,000
    images: ["/placeholder.svg"],
    brand: "Ferrari",
    specifications: {
      engine: "3.9L V8 Twin-Turbo",
      power: "612 HP",
      torque: "760 Nm",
      acceleration: "0-100 km/h in 3.4 seconds",
      transmission: "8-speed dual-clutch"
    },
    inStock: true,
    rating: 4.7
  },
  {
    id: "sc-019",
    name: "Audi R8 V10 Performance",
    description: "German everyday supercar with quattro all-wheel drive and V10 power.",
    category: "sports-car",
    price: 25000000, // ₹2,50,00,000
    images: ["/placeholder.svg"],
    brand: "Audi",
    specifications: {
      engine: "5.2L V10",
      power: "612 HP",
      torque: "580 Nm",
      acceleration: "0-100 km/h in 3.1 seconds",
      transmission: "7-speed dual-clutch"
    },
    inStock: true,
    rating: 4.7
  },
  {
    id: "sc-020",
    name: "Nissan GT-R Nismo",
    description: "Japanese high-performance sports car with advanced technology.",
    category: "sports-car",
    price: 21000000, // ₹2,10,00,000
    images: ["/placeholder.svg"],
    brand: "Nissan",
    specifications: {
      engine: "3.8L V6 Twin-Turbo",
      power: "600 HP",
      torque: "652 Nm",
      acceleration: "0-100 km/h in 2.5 seconds",
      transmission: "6-speed dual-clutch"
    },
    inStock: true,
    rating: 4.6
  }
];

export default products;
