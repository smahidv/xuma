import coach from "@/public/images/coach.jpg";
import groupTraining from "@/public/images/groupTraining.jpg";
import pool from "@/public/images/pool.jpg";
import weightRoom from "@/public/images/weightRoom.jpg";
import BodyBuilding from "@/public/images/BodyBuilding.jpg";
import Cardio from "@/public/images/Cardio.jpg";
import Classrooms from "@/public/images/Classrooms.jpg"
import CrossTraining from "@/public/images/CrossTraining.jpg"
import Weights from "@/public/images/Weights.jpg"
import womenSpaces from "@/public/images/womenSpace.jpg"
import trainingImage from "@/public/images/training.jpg";
import weightliftingImage from "@/public/images/weightlifting.jpg";
import fitnessTrainingImage from "@/public/images/fitnessTraining.jpg";
import groupClassesImage from "@/public/images/groupClasses.jpg";
import kickboxingImage from "@/public/images/kickboxing.jpg";
import MmaImage from "@/public/images/Mma.jpg";
import kidsFightingImage from "@/public/images/kidsFighting.jpg";
import padelImage from "@/public/images/padel.jpg";
import symbol from "@/public/images/symbol.png"
import { title } from "process";


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
       "Diverse sessions like aerobics, Zumba, and muscle strengthening are available for you "
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
    isLeft:true,
    title: "Fitness Pass",
    monthPrice: "150",
    yearPrice: "2990",
    description: "Access to fitness facilities and group activities, including specialized zones.",
    features: [
      "From 6 a.m. to 11 p.m.",
      "100% women's fitness area",
      "Additional activities ",
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
    isLeft:false,
    title: "Kids Pass",
    monthPrice: "100",
    yearPrice: "1990",
    description: "A pass for kids with supervised activities and access to safe, kid-friendly areas.",
    features: [
      "From 8 a.m. to 8 p.m.",
      "Supervised children's area",
      "Fitness classes designed for kids",
      "kid-friendly sports activities"
    ]
  }
];

export const gymSpaces = [

  {
    title: "Guided Bodybuilding",
    description: "For those focused on muscle growth, our guided bodybuilding section offers state-of-the-art machines that provide precise support for varied and effective muscle work. Each piece of equipment has been carefully selected to enhance your training experience and help you achieve your bodybuilding aspirations.",
    alt: "Guided bodybuilding area",
    image:BodyBuilding
  },
  {
    title: "Cardio",
    description: "Our cardio area is designed to offer a unique and invigorating training experience. Equipped with the latest connected cardio machines, including treadmills, ellipticals, bikes, and stair climbers, you'll find everything you need to improve your cardiovascular fitness and achieve your health goals, all while enjoying a motivating atmosphere.",
    alt: "Cardio area",
    image:Cardio
  },
  
  {
    title: "Only for women",
    description: "Dedicated space designed specifically to meet the needs of women who want to train in a supportive and empowering environment. Here, you'll find a variety of equipment and classes tailored to help you reach your fitness goals while connecting with a community of like-minded individuals.",
    alt: "Women-only training area",
    image:womenSpaces
  },
  {
    title: "Classrooms",
    description: "Join our diverse group classes in our mixed and 100% women-specific classrooms. With a musical atmosphere that encourages community and support, you'll be motivated to push your limits, have fun, and make lasting connections with fellow fitness enthusiasts.",
    alt: "Group classes area",
    image:Classrooms
  },
  {
    title: "Strength and Free Weights",
    description: "Our fitness area features an extensive selection of guided machines and free weights to facilitate effective muscle development for your entire body. Whether you're a beginner or an experienced lifter, our knowledgeable staff is here to assist you in perfecting your form and maximizing your workouts.",
    alt: "Strength and free weights area",
    image:Weights
  },
  {
    title: "Cross Training",
    description: "This area is designed for versatile workouts that combine strength, endurance, and agility. Our cross training space offers a variety of equipment and stations to challenge your body in new ways, ensuring you stay motivated and engaged in your fitness journey.",
    alt: "Cross training area",
    image:CrossTraining
  },

];
export const gymActivities = [
  {
    title: "Cross Training",
    whatWeOffer: "High-energy WODs for a full-body workout that boosts endurance and strength.",
    bestFor: "Those looking for a versatile workout with cardio and strength components.",
    alt: "Cross Training",
    image: trainingImage
  },
  {
    title: "Weightlifting",
    whatWeOffer: "Personalized sessions focusing on strength, balance, and safety techniques.",
    bestFor: "Individuals aiming to build muscle and increase power.",
    alt: "Weightlifting",
    image: weightliftingImage
  },
  {
    title: "Kickboxing",
    whatWeOffer: "Practice striking techniques with classes and solo training options.",
    bestFor: "Individuals focused on improving combat skills and agility.",
    alt: "Kickboxing",
    image: kickboxingImage
  },

  {
    title: "Group Classes",
    whatWeOffer: "Engaging group sessions in cardio, endurance, dance, and relaxation.",
    bestFor: "Those who enjoy a social workout with guided exercises.",
    alt: "Group Classes",
    image: groupClassesImage
  },
  {
    title: "Fitness",
    whatWeOffer: "Comprehensive cardio and strength equipment to help reach fitness goals.",
    bestFor: "Anyone aiming to improve overall health and stay active.",
    alt: "Fitness",
    image: fitnessTrainingImage
  },
  {
    title: "MMA",
    whatWeOffer: "Complete training that combines stand-up and ground fighting skills.",
    bestFor: "Fighters looking to expand their skill set with mixed martial arts.",
    alt: "MMA",
    image: MmaImage
  },
  {
    title: "Kids Fighting",
    whatWeOffer: "A safe program that teaches discipline, respect, and self-control.",
    bestFor: "Children developing confidence, coordination, and self-discipline.",
    alt: "Kids Fighting",
    image: kidsFightingImage
  },
  {
    title: "Padel",
    whatWeOffer: "Fun, dynamic sport with accessible gameplay for all ages.",
    bestFor: "Beginners and casual players seeking a social, active experience.",
    alt: "Padel",
    image: padelImage
  }
]

export const xumaLocations = [
{
  symbolImage:symbol,
  title:"casablanca",
  address:"58 rue California",
  phone:"+212 6 22 22 22 22",
  image:CrossTraining,
  
},
{
  symbolImage:symbol,
  title:"benslimane",
  address:"20 rue Zerktouni",
  phone:"+212 6 22 22 22 22",
  image:Classrooms
},
{
  symbolImage:symbol,
  title:"agadir",
  address:"54 rue lina",
  phone:"+212 6 22 22 22 22",
  image:Cardio
}
]

