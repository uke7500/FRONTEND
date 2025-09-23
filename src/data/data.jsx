import {
  FiAlertCircle,
  FiBriefcase,
  FiCamera,
  FiHome,
  FiLock,
  FiMonitor,
  FiSmartphone,
} from "react-icons/fi";
import { MdFingerprint } from "react-icons/md";
import AboutUS_Card_Image from "../assets/about_us_card_image.png";
import Why_Choose_Image from "../assets/Why_Choose_Us_Card_Image.png";

export const features = [
  {
    id: "feature_01",
    icon: <FiHome />,
    number: "01",
    title: "Home Security",
    description:
      "Protect what matters most with smart home surveillance. Our advanced cameras work 24/7 to keep your family and property secure—day or night, indoors or out.",
  },
  {
    id: "feature_02",
    icon: <FiLock />,
    number: "02",
    title: "Access Control",
    description:
      "Manage who enters your space with intelligent access. Authorize, monitor, and log entry in real time—only trusted individuals get in.",
  },
  {
    id: "feature_03",
    icon: <FiMonitor />,
    number: "03",
    title: "24/7 Monitoring",
    description:
      "Get round-the-clock peace of mind. Our system offers live alerts, remote access, and non-stop monitoring wherever you are.",
  },
];

export const AboutUs = {
  image: AboutUS_Card_Image,
  title: "About Us",
  description:
    "At [ Brand Name], we provide cutting-edge CCTV camera solutions designed for real protection—crystal-clear footage, smart features, and around-the-clock reliability. Trusted by homes and businesses worldwide, our systems are easy to install, built to endure, and engineered to keep you in control from anywhere. Because when it comes to your safety, nothing less than complete security will do.",
  stats: [
    { icon: "👥", value: "1234", label: "Happy Customers" },
    { icon: "📦", value: "1234", label: "Products Sold" },
  ],
  buttonText: "Explore More",
  reverse: false,
};

export const WhyUS = {
  image: Why_Choose_Image,
  title: "Why Choose Us",
  description: `At [Brand Name], we go beyond just surveillance — we deliver confidence. Our CCTV solutions are built for those who demand reliability, smart control, and unmatched video clarity. Whether you’re securing a home or scaling protection for a business, we make it simple, powerful, and proven. Join thousands who trust us to keep what matters most safe.
  
  - HD Visual Quality – Capture every detail with crystal-clear clarity, day or night.
  
  -  Quick & Easy Setup – Plug-and-play systems get you protected in minutes.
  
  -  24/7 Monitoring – Non-stop security that never takes a break.
  `,
  reverse: true,
};

export const Services = [
  {
    id: "1",
    icon: <FiBriefcase />,
    link: "/",
    title: "Commercial CCTV System",
    description: "Advanced surveillance tailored for business protection.",
  },
  {
    id: "2",
    icon: <MdFingerprint />,
    link: "/",
    title: "Fingerprint Access",
    description: "Secure, biometric entry for modern access control.",
  },
  {
    id: "3",
    icon: <FiAlertCircle />,
    link: "/",
    title: "Fire Detection & Safety",
    description: "Smart systems that detect fire early and save lives.",
  },
  {
    id: "4",
    icon: <FiSmartphone />,
    link: "/",
    title: "Smart Home System",
    description: "Control your home with one touch, from anywhere.",
  },
];

export const Testimonials = [
  {
    id: 1,
    name: "James Pattinson",
    rating: 4,
    testimonial:
      "As a small business owner, security is crucial to me. These cameras have exceeded my expectations and that is the reason i choose this camera",
    profileImage:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 2,
    name: "James Pattinson",
    rating: 3,
    testimonial:
      "As a small business owner, security is crucial to me. These cameras have exceeded my expectations and that is the reason i choose this camera",
    profileImage:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 3,
    name: "James Pattinson",
    rating: 3,
    testimonial:
      "As a small business owner, security is crucial to me. These cameras have exceeded my expectations and that is the reason i choose this camera",
    profileImage:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
  },
];
