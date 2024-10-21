import coach from "@/public/images/coach.jpg";
import groupTraining from "@/public/images/groupTraining.jpg";
import pool from "@/public/images/pool.jpg";
import weightRoom from "@/public/images/weightRoom.jpg";


export const slidesContent = [
  {
    image: coach,
    alt: "Coach",
    title: "Personal Training",
    description:
      "A personal coach will guide you to reach your fitness goals with tailored support"
  },
  {
    image: groupTraining,
    alt: "Group Training",
    title: "Group Training",
    description:
       "Diverse sessions like aerobics, Zumba, and muscle strengthening are available for you to join as per your preference"
  },
  {
    image: pool,
    alt: "Pool",
    title: "Swimming Pool",
    description:
       "Access to a full-size indoor swimming pool, perfect for both relaxation and fitness"
  },
  {
    image: weightRoom,
    alt: "Weight Room",
    title: "Fitness Room",
    description:
      "A fully equipped weight room with various machines for all your training needs"
  }
];

export const navItems = [
  { name: "spaces", href: "/spaces" },
  { name: "activities", href: "/activities" },
  { name: "room(s)", href: "/rooms" },
  { name: "recruitment", href: "/recruitment" },
  { name: "contact", href: "/contact" },
];

export const contacts = [
  "+212 6 22 22 22 22",
  "+212 6 44 44 44 44",
  "+212 6 66 66 66 66"
];

export const sports = [
  "Running",
  "Cycling",
  "Swimming",
  "Rowing",
  "Kickboxing",
  "Spinning",
  "Aerobics",
  "Dancing",
  "Boxing"
];

export const pricing = [
  {
    bestDeal: false,
    title: "Fitness Pass",
    monthPrice: "150",
    yearPrice: "2990",
    description: "Access to fitness facilities and group activities, including specialized zones.",
    features: [
      "From 6 a.m. to 11 p.m.",
      "Mixed and 100% women's fitness area",
      "Additional activities by reservation",
      "Fight area"
    ]
  },
  {
    bestDeal: true,
    title: "Total Pass",
    monthPrice: "200",
    yearPrice: "3590",
    description: "Unlimited access to all gym facilities, including pool, sauna, and group classes.",
    features: [
      "24/7 access",
      "Includes pool and sauna access",
      "All group classes included",
      "Free personal training session"
    ]
  },
  {
    bestDeal: false,
    title: "Kids Pass",
    monthPrice: "100",
    yearPrice: "1990",
    description: "A pass for kids with supervised activities and access to safe, kid-friendly areas.",
    features: [
      "From 8 a.m. to 8 p.m.",
      "Supervised children's area",
      "Fitness classes designed for kids",
      "Access to kid-friendly sports activities"
    ]
  }
];
