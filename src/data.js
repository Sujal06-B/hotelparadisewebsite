import { Wifi, Utensils, Car, User, Coffee, MapPin, CheckCircle, Star, Phone, Mail, Clock, ShieldCheck, Monitor, Wind, Lock } from 'lucide-react';

export const HOTEL_INFO = {
  name: "Hotel Paradise",
  subtitle: "Escape to the Heights of Luxury",
  address: "Plot No. 207 Near Vasantdada Patil Hospital, Amboli Ghat, Sulgaon, 416505 Ajra, India",
  distance: "3.5 km from center",
  ratings: {
    overall: 9.2,
    label: "Exceptional",
    count: 124,
    categories: {
      staff: 9.5,
      facilities: 9.0,
      cleanliness: 9.8,
      comfort: 9.6,
      value: 9.4,
      location: 9.2
    }
  },
  highlights: [
    { text: "#1 Luxury Stay in Amboli Ghat", icon: Star },
    { text: "Panoramic Mountain Views", icon: Wind },
    { text: "24/7 Concierge Service", icon: Clock },
    { text: "Pristine Hygiene Standards", icon: ShieldCheck },
  ],
  description: "Nestled in the mist-covered peaks of Amboli Ghat, Hotel Paradise isn't just a stay—it's your gateway to serenity. Where nature meets elegance, every moment is crafted for your absolute comfort. Experience the perfect blend of modern luxury and raw natural beauty."
};

export const GALLERY_IMAGES = [
  { src: "images/792820376.jpg", category: "Exterior" },
  { src: "images/792820391.jpg", category: "Exterior" },
  { src: "images/792820417.jpg", category: "Common Area" },
  { src: "images/792820418.jpg", category: "Room" },
  { src: "images/792820421.jpg", category: "Room" },
  { src: "images/792820425.jpg", category: "Room" },
  { src: "images/792820429.jpg", category: "Dining" },
  { src: "images/792820431.jpg", category: "Common Area" },
  { src: "images/792820438.jpg", category: "Room" },
  { src: "images/792820451.jpg", category: "Bathroom" },
  { src: "images/792820462.jpg", category: "Room" },
  { src: "images/792820463.jpg", category: "Bathroom" }
];

export const BOOKING_URL = "https://www.booking.com/hotel/in/oyo-73079-paradise.en-gb.html?aid=2127562&label=metagha-link-MRIN-hotel-15330350_dev-desktop_los-1_bw-7_dow-Thursday_defdate-1_room-0_gstadt-2_rateid-dg_aud-0_gacid-_mcid-10_ppa-0_clrid-0_ad-0_gstkid-0_checkin-20260122_ppt-GBd&sid=00e67883849ba1932122fd822070391c&all_sr_blocks=1533035001_424836970_2_2_0&checkin=2026-01-22&checkout=2026-01-23&dest_id=15330350&dest_type=hotel&dist=0&group_adults=2&group_children=0&hapos=1&highlighted_blocks=1533035001_424836970_2_2_0&hpos=1&map=1&matching_block_id=1533035001_424836970_2_2_0&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&sr_pri_blocks=1533035001_424836970_2_2_0__105875&srepoch=1768477851&srpvid=dab55345b8b40813&type=total&ucfs=1&#map_opened";

export const ROOMS = [
  {
    id: "classic-triple",
    name: "Skyline Glass Suite",
    size: "35 m²",
    occupancy: 3,
    bed: "1 King + 1 Single",
    price: 3500,
    originalPrice: 5000,
    discount: "Premium Offer",
    image: "images/792820418.jpg",
    amenities: ["Panoramic View", "Climate Control", "Smart TV", "High-Speed WiFi", "Rain Shower", "Premium Toiletries"],
    rates: [
      { id: 1, price: 3500, plan: "Suite Only", breakfast: "Add Gourmet Breakfast ₹150", guests: 2 },
      { id: 2, price: 3800, plan: "Bed & Breakfast", breakfast: "Inclusive", guests: 2 },
    ]
  },
  {
    id: "premium-double",
    name: "Mountain View Deluxe",
    size: "28 m²",
    occupancy: 2,
    bed: "1 Large Double",
    price: 3000,
    originalPrice: 4200,
    discount: "Best Value",
    image: "images/792820421.jpg",
    amenities: ["Mountain View", "Private Balcony", "Work Desk", "WiFi", "Ensuite Bathroom"],
    rates: [
      { id: 1, price: 3000, plan: "Room Only", breakfast: "Add Breakfast ₹150", guests: 2 },
      { id: 2, price: 3300, plan: "Bed & Breakfast", breakfast: "Inclusive", guests: 2 },
    ]
  },
    {
    id: "standard-twin",
    name: "Cozy Twin Room",
    size: "24 m²",
    occupancy: 2,
    bed: "2 Single Beds",
    price: 2500,
    originalPrice: 3500,
    discount: "Saver",
    image: "images/792820425.jpg",
    amenities: ["Quiet Location", "Flat Screen TV", "Tea/Coffee Maker", "Shower"],
    rates: [
      { id: 1, price: 2500, plan: "Room Only", breakfast: "Available", guests: 2 },
    ]
  }
];

export const FACILITIES_CATEGORIES = [
  {
    name: "Bathroom",
    image: "images/792820463.jpg",
    items: ["Towels", "Bath or shower", "Private bathroom", "Toilet", "Free toiletries"]
  },
  {
    name: "Bedroom",
    image: "images/792820418.jpg",
    items: ["Linen", "Wardrobe or closet"]
  },
  {
    name: "View",
    image: "images/792820391.jpg",
    items: ["View", "Mountain View", "Landmark View"]
  },
  {
    name: "Outdoors",
    image: "images/792820376.jpg",
    items: ["Garden", "Terrace", "Balcony"]
  },
  {
    name: "Kitchen",
    image: "images/792820429.jpg",
    items: ["Shared kitchen", "Cleaning products"]
  },
  {
    name: "Living Area",
    image: "images/792820417.jpg",
    items: ["Seating area", "Desk"]
  },
  {
    name: "Media & Technology",
    image: "images/792820421.jpg",
    items: ["Flat-screen TV", "Telephone", "Satellite channels", "Cable channels"]
  },
  {
    name: "Food & Drink",
    image: "images/792820429.jpg",
    items: ["Restaurant", "Breakfast in the room", "Room service"]
  },
  {
    name: "Internet",
    image: "images/792820431.jpg",
    items: ["WiFi is available in all areas and is free of charge."]
  },
  {
    name: "Parking",
    image: "images/792820376.jpg",
    items: ["Free public parking is possible on site.", "Street parking"]
  },
  {
    name: "Services",
    image: "images/792820431.jpg",
    items: ["Daily housekeeping", "Luggage storage", "Wake-up service", "24-hour front desk"]
  },
  {
    name: "Safety & Security",
    image: "images/792820391.jpg",
    items: ["Fire extinguishers", "CCTV in common areas", "Key card access", "Key access"]
  }
];

export const FACILITIES = [
  { name: "Secure Parking", icon: Car },
  { name: "In-Room Dining", icon: Utensils },
  { name: "Gourmet Restaurant", icon: Coffee },
  { name: "Gigabit WiFi", icon: Wifi },
  { name: "Family Suites", icon: User },
  { name: "Concierge", icon: Phone }
];

export const REVIEWS = [
  { 
    name: "Suresh", 
    role: "Verified Guest",
    score: 10.0, 
    date: "December 2025", 
    room: "Skyline Glass Suite", 
    headline: "A Masterpiece of Comfort",
    text: "An absolute gem in Amboli. The level of luxury provided essentially redefines the standard for the region. From the glass-walled rooms to the impeccable service, Hotel Paradise is truly a paradise found." 
  },
  { 
    name: "Priya", 
    role: "Travel Enthusiast",
    score: 9.0, 
    date: "November 2025", 
    room: "Classic Suite", 
    headline: "Serene & Beautiful",
    text: "The views are unmatched. Waking up to the mist rolling over the hills was a magical experience." 
  },
   { 
    name: "Rahul", 
    role: "Business Traveler",
    score: 9.5, 
    date: "January 2026", 
    room: "Executive Room", 
    headline: "Efficient Luxury",
    text: "Perfect for work and leisure. The wifi is blazing fast and the silence is golden." 
  }
];

export const FAQ_ITEMS = [
  { question: "What makes Hotel Paradise unique?", answer: "Our signature glass-walled architecture offers unobstructed views of Amboli Ghat from every room, blending modern luxury with nature." },
  { question: "Is breakfast included?", answer: "Yes, we offer a comprehensive gourmet continental spread to start your day perfectly." },
  { question: "Is the location couple-friendly?", answer: "Absolutely. We are the highest-rated property for couples in the region, offering privacy and romantic settings." },
  { question: "Do you have parking facilities?", answer: "Yes, we provide complimentary secure private parking for all our guests." },
  { question: "How close are the main attractions?", answer: "We are situated perfectly to offer both seclusion and easy access, just minutes from the main viewpoints." }
];

export const FEATURED_SNIPPET = "Hotel Paradise offers a premier luxury experience in Amboli Ghat, featuring modern amenities, glass-walled suites with panoramic views, and world-class dining. Located just 3.5km from the city center, it is the top-rated choice for travellers seeking a serene mountain retreat.";
