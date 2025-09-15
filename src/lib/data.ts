import { FaDumbbell, FaHeartbeat, FaLeaf } from "react-icons/fa";
import { MdOutlineSecurity, MdOutlineAccessTime } from "react-icons/md";

import { FaChartLine } from "react-icons/fa";
import { GiTargetArrows } from "react-icons/gi";

export const faqs = [
  {
    value: "item-1",
    title: "Quality Training",
    icon: FaDumbbell,
    content:
      "Our trainers are highly experienced and dedicated to helping you achieve your fitness goals with personalized guidance.",
  },
  {
    value: "item-2",
    title: "Modern Equipment",
    icon: FaHeartbeat,
    content:
      "State-of-the-art facilities and equipment designed to maximize your training efficiency and comfort.",
  },

  {
    value: "item-4",
    title: "Community Support",
    icon: FaLeaf,
    content:
      "Be a part of a supportive community that motivates and inspires you every step of the way.",
  },

  {
    value: "item-6",
    title: "Extended Working Hours",
    icon: MdOutlineAccessTime,
    content:
      "We’re open early mornings and late evenings so you can train at your convenience.",
  },
  {
    value: "item-8",
    title: "Guaranteed Progress",
    icon: FaChartLine,
    content:
      "Track your performance with regular assessments and goal-based training programs.",
  },
  {
    value: "item-10",
    title: "Safety & Hygiene",
    icon: MdOutlineSecurity,
    content:
      "We maintain strict hygiene protocols and provide a safe, sanitized environment for your workouts.",
  },
  {
    value: "item-12",
    title: "Beginner-Friendly Programs",
    icon: GiTargetArrows,
    content:
      "New to the gym? We offer guided beginner programs to help you start with confidence.",
  },
];

export const features = [
  {
    alignment: "left",
    bg: "bg-[#111111]", // dark gray
    imageSrc: "/images/strong-foundation.jpg",
    heading: "Strong Foundation",
    paragraph:
      "Build strength with our expert-designed training programs and personalized coaching. Whether you're a beginner or experienced, we focus on mastering the basics, improving form, and ensuring long-term progress you can rely on.",
  },
  {
    alignment: "right",
    bg: "bg-neutral-950", // darker section
    imageSrc: "/images/peak-performance.jpg",
    heading: "Peak Performance",
    paragraph:
      "Unlock your full potential with performance-focused routines and nutrition. Our science-backed methods help you increase stamina, gain power, and reach new levels of fitness while keeping your body in peak condition.",
  },
  {
    alignment: "left",
    bg: "bg-[#111111]",
    imageSrc: "/images/injury-prevention.jpg",
    heading: "Injury Prevention",
    paragraph:
      "Train safely and effectively with guidance tailored to your needs. We emphasize proper technique, mobility, and recovery strategies so you can push harder without setbacks and maintain a sustainable training journey.",
  },
  {
    alignment: "right",
    bg: "bg-neutral-950",
    imageSrc: "/images/community-support.jpg",
    heading: "Community Support",
    paragraph:
      "Stay motivated with a supportive community and regular progress tracking. Share your journey, celebrate milestones, and surround yourself with like-minded individuals who inspire you to keep going.",
  },
];
