// breadcrumbs config
export const breadCrumbs = [
  {
    id: 1,
    label: 'Home',
    href: '/'
  },
  {
    id: 2,
    label: 'Hotels',
    href: null
  }
]

// city dropdown config
export const POPULAR_CITIES = [
  { name: "New Delhi", region: "Delhi, India", hotels: 2269 },
  { name: "Bangalore", region: "Karnataka, India", hotels: 2277 },
  { name: "Mumbai", region: "Maharashtra, India", hotels: 1265 },
  { name: "Pune", region: "Maharashtra, India", hotels: 969 },
  { name: "Jaipur", region: "Rajasthan, India", hotels: 1209 },
  { name: "Goa", region: "Goa, India", hotels: 2838 },
  { name: "Kolkata", region: "West Bengal, India", hotels: 1255 },
  { name: "Hyderabad", region: "Telangana, India", hotels: 1897 },
  { name: "Chennai", region: "Tamil Nadu, India", hotels: 1536 },
];

export const RECENTLY_VIEWED = [
  { dates: "25 Apr - 26 Apr", details: "1 Rooms 2 Guest", city: "Goa" },
  { dates: "-", details: "0 Rooms 0 Guest", city: "" },
  { dates: "24 Apr - 27 Apr", details: "1 Rooms 2 Guest", city: "Goa" },
];

export const DAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

// sort options config
export const SORT_OPTIONS = ["Recommended", "Price (Low to High)", "Price (High to Low)", "User Rating (High to Low)","User Rating (Low to High)", "Star Rating (High to Low)"];


// hotels config
export const hotels = [
  {
    id: 1,
    name: "The Taj Mahal Palace",
    location: "Apollo Bandar, Colaba",
    gridLocation: "Colaba, Mumbai",
    stars: 4  ,
    reviews: "2,450 Reviews",
    sponsored: true,
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
    badge: "Free Cancellation",
    amenities: ["Free Wi-Fi", "Swimming Pool", "Breakfast Included"],
    highlight: "Lowest price in 30 days",
    room: "Standard Room, Non-Refundable",
    distanceFromCenter: "1.2 km from city center",
    bankOffer: "Best bank offer: Save up to 20% with ICICI cards",
    oldPrice: "₹25,000",
    price: "₹18,500",
    taxes: "+ ₹3,330 taxes & fees",
  },
  {
    id: 2,
    name: "Trident Nariman Point",
    location: "Nariman Point, Marine Drive",
    gridLocation: "Marine Drive, Mumbai",
    stars: 4,
    reviews: "1,820 Reviews",
    image:
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200&q=80",
    highlight: "Limited Time Deal!",
    room: "Superior Room with City View",
    distanceFromCenter: "2.1 km from city center",
    bankOffer: "Best bank offer: Flat ₹1,250 off with HDFC cards",
    oldPrice: "₹12,000",
    price: "₹9,999",
    taxes: "+ ₹1,800 taxes & fees",
  },
  {
    id: 3,
    name: "JW Marriott Juhu",
    location: "Juhu Tara Road, Juhu",
    gridLocation: "Juhu, Mumbai",
    stars: 5,
    reviews: "1,340 Reviews",
    sponsored: true,
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
    highlight: "Breakfast Included",
    room: "Deluxe King Room",
    distanceFromCenter: "9.3 km from city center",
    bankOffer: "Best bank offer: Extra 10% off with Axis cards",
    oldPrice: "₹20,500",
    price: "₹16,200",
    taxes: "+ ₹2,720 taxes & fees",
  },
  {
    id: 4,
    name: "ITC Maratha",
    location: "Near Mumbai Airport, Andheri East",
    gridLocation: "Andheri East, Mumbai",
    stars: 5,
    reviews: "1,125 Reviews",
    image:
      "https://images.unsplash.com/photo-1455587734955-081b22074882?auto=format&fit=crop&w=1200&q=80",
    highlight: "Airport Favorite",
    room: "Executive Club Room",
    distanceFromCenter: "5.8 km from city center",
    bankOffer: "Best bank offer: No-cost EMI on select cards",
    price: "₹13,400",
    taxes: "+ ₹2,150 taxes & fees",
  },
  {
    id: 5,
    name: "Sofitel Mumbai BKC",
    location: "Bandra Kurla Complex",
    gridLocation: "BKC, Mumbai",
    stars: 5,
    reviews: "980 Reviews",
    sponsored: true,
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    highlight: "Business Traveller Pick",
    room: "Luxury Room, Queen Bed",
    distanceFromCenter: "6.5 km from city center",
    bankOffer: "Best bank offer: Save ₹1,000 on prepaid bookings",
    price: "₹11,900",
    taxes: "+ ₹1,960 taxes & fees",
  },
  {
    id: 6,
    name: "The Oberoi Mumbai",
    location: "Marine Drive",
    gridLocation: "Marine Drive, Mumbai",
    stars: 5,
    reviews: "1,540 Reviews",
    image:
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1200&q=80",
    highlight: "Top Rated Luxury Hotel",
    room: "Ocean View Premier Room",
    distanceFromCenter: "1.5 km from city center",
    bankOffer: "Best bank offer: 15% instant discount with SBI cards",
    oldPrice: "₹24,400",
    price: "₹19,850",
    taxes: "+ ₹3,500 taxes & fees",
  },
  {
    id: 7,
    name: "Lemon Tree Premier",
    location: "Andheri East",
    gridLocation: "Andheri East, Mumbai",
    stars: 4,
    reviews: "820 Reviews",
    image:
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200&q=80",
    highlight: "Good Value Stay",
    room: "Business Room",
    distanceFromCenter: "7.2 km from city center",
    bankOffer: "Best bank offer: Up to ₹750 cashback on wallets",
    price: "₹7,499",
    taxes: "+ ₹1,050 taxes & fees",
  },
  {
    id: 8,
    name: "The Orchid Hotel",
    location: "Vile Parle East",
    gridLocation: "Vile Parle East, Mumbai",
    stars: 4,
    reviews: "730 Reviews",
    image:
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1200&q=80",
    highlight: "Close to Airport",
    room: "Club Room",
    distanceFromCenter: "6.1 km from city center",
    bankOffer: "Best bank offer: 12% off with Kotak cards",
    price: "₹8,950",
    taxes: "+ ₹1,250 taxes & fees",
  },
  {
    id: 9,
    name: "Ramada Plaza Palm Grove",
    location: "Juhu Beach",
    gridLocation: "Juhu Beach, Mumbai",
    stars: 4,
    reviews: "640 Reviews",
    image:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80",
    highlight: "Beach Side Stay",
    room: "Garden View Room",
    distanceFromCenter: "8.4 km from city center",
    bankOffer: "Best bank offer: Flat ₹900 discount on selected cards",
    price: "₹9,400",
    taxes: "+ ₹1,320 taxes & fees",
  },
  {
    id: 10,
    name: "Novotel Mumbai Juhu Beach",
    location: "Juhu",
    gridLocation: "Juhu, Mumbai",
    stars: 4,
    reviews: "1,020 Reviews",
    image:
      "https://images.unsplash.com/photo-1455587734955-081b22074882?auto=format&fit=crop&w=1200&q=80",
    highlight: "Popular Couple Stay",
    room: "Sea View Room",
    distanceFromCenter: "8.9 km from city center",
    bankOffer: "Best bank offer: 10% cashback with AU Bank cards",
    oldPrice: "₹13,200",
    price: "₹10,850",
    taxes: "+ ₹1,780 taxes & fees",
  },
];

export const tableRows = [
  {
    area: "Colaba / South Mumbai",
    idealFor: "Luxury & sightseeing",
    type: "Heritage 5-star hotels",
    price: "₹9,000 - ₹22,000",
    distance: "25-30 km",
  },
  {
    area: "Andheri East",
    idealFor: "Business & transit",
    type: "Airport business hotels",
    price: "₹4,500 - ₹12,000",
    distance: "2-7 km",
  },
  {
    area: "Bandra / BKC",
    idealFor: "Corporate & lifestyle",
    type: "Upscale business hotels",
    price: "₹6,000 - ₹16,000",
    distance: "8-12 km",
  },
  {
    area: "Juhu / Vile Parle",
    idealFor: "Family & leisure",
    type: "Resort-style & family hotels",
    price: "₹5,500 - ₹14,000",
    distance: "4-8 km",
  },
];

export const faqs = [
  {
    question: "What is the best area to stay in Mumbai for first-time visitors?",
    answer:
      "Colaba, Marine Drive, and Bandra are popular choices for first-time visitors because they offer easy access to sightseeing, food, and local transport.",
    open: true,
  },
  {
    question: "Which are the best hotels near Mumbai Airport?",
    answer:
      "The Orchid, Sahara Star, and JW Marriott Mumbai Sahar are among the most booked hotels near Mumbai Airport.",
    open: true,
  },
  {
    question: "How can I find budget hotels in Mumbai?",
    answer:
      "Use the price filter and sort by low to high. Areas like Andheri East, Powai, and Goregaon usually have more budget-friendly stays.",
    open: true,
  },
  {
    question: "Do Mumbai hotels offer free cancellation?",
    answer:
      "Yes, many Mumbai hotels on Yatra offer free cancellation. Look for the free cancellation badge on hotel cards before booking.",
    open: true,
  },
  {
    question: "Are unmarried couples allowed in Mumbai hotels?",
    answer:
      "Many hotels in Mumbai are couple-friendly. Check the hotel policy and accepted ID requirements before confirming your booking.",
    open: true,
  },
  {
    question: "What documents are required at hotel check-in in Mumbai?",
    answer:
      "Guests usually need a valid government-issued photo ID at check-in. International guests may also need passport and visa details.",
    open: true,
  },
  {
    question: "How far in advance should I book Mumbai hotels for the best price?",
    answer:
      "Booking 2-4 weeks in advance often gives better prices, while peak holiday and festival periods may require earlier bookings.",
    open: true,
  },
];

export const seoFooterSections = [
  {
    title: "Popular Hotels in Mumbai",
    links: [
      "Hotels in Colaba",
      "Hotels in Bandra",
      "Hotels in Andheri East",
      "Hotels in Juhu",
      "Hotels in Powai",
      "Hotels in Goregaon",
      "Hotels in BKC",
      "Hotels in Navi Mumbai",
      "Hotels near Mumbai Airport",
      "Hotels near Marine Drive",
      "Hotels near Juhu Beach",
      "Hotels near Gateway of India",
    ],
  },
  {
    title: "Top Hotel Types in Mumbai",
    links: [
      "Luxury Hotels in Mumbai",
      "Budget Hotels in Mumbai",
      "Business Hotels in Mumbai",
      "Family Hotels in Mumbai",
      "Couple Friendly Hotels in Mumbai",
      "Boutique Hotels in Mumbai",
      "Beach Hotels in Mumbai",
      "Airport Hotels in Mumbai",
      "5 Star Hotels in Mumbai",
      "4 Star Hotels in Mumbai",
      "3 Star Hotels in Mumbai",
      "Serviced Apartments in Mumbai",
    ],
  },
  {
    title: "Popular Hotel Routes",
    links: [
      "Hotels in Delhi",
      "Hotels in Bengaluru",
      "Hotels in Hyderabad",
      "Hotels in Chennai",
      "Hotels in Kolkata",
      "Hotels in Pune",
      "Hotels in Jaipur",
      "Hotels in Ahmedabad",
      "Hotels in Goa",
      "Hotels in Udaipur",
      "Hotels in Varanasi",
      "Hotels in Rishikesh",
    ],
  },
  {
    title: "Top Weekend Staycations",
    links: [
      "Resorts near Mumbai",
      "Hotels in Lonavala",
      "Hotels in Alibaug",
      "Hotels in Mahabaleshwar",
      "Hotels in Matheran",
      "Hotels in Igatpuri",
      "Hotels in Karjat",
      "Hotels in Nashik",
      "Beach Resorts in Alibaug",
      "Villas in Lonavala",
      "Pool Villas near Mumbai",
      "Pet Friendly Resorts near Mumbai",
    ],
  },
];

export const yatraProducts = [
  "Flights",
  "MICE",
  "International Airlines",
  "Domestic Airlines",
  "Hotels",
  "Trains",
  "Bus Booking",
  "Holidays",
  "International Holiday Packages",
  "India Holiday Packages",
  "Outstation Cabs",
  "Yatra for Business",
];

export const companyUsefulLinks = [
  "Company Information",
  "Investor Relations",
  "Partner With Yatra",
  "Yatra for Business",
  "Customer Care",
  "Product Offerings",
  "Careers",
  "Cautionary Notice",
  "More",
];

export const companySubLinks = [
  "More About us",
  "Leadership Team",
  "Our Products",
  "Awards Won",
  "Customers Testimonials",
];

export const socialMediaLinks = [
  { label: "facebook", href: "https://www.facebook.com/Yatra" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/yatra-online-ltd" },
  { label: "YouTube", href: "https://www.youtube.com/user/yatratravel" },
  { label: "Instagram", href: "https://www.instagram.com/yatradotcom/" },
  { label: "X", href: "https://x.com/YatraOfficial" },
];

export const paymentPartners = [
  "PCI DSS",
  "Norton",
  "DigiCert",
  "VISA",
  "Mastercard",
  "RuPay",
  "UPI",
  "American Express",
];
