import { 
  Users, Globe, Trophy, Award, Rocket, Target, Zap, 
  Briefcase, TrendingUp, Handshake, Plane, MapPin, 
  GraduationCap, Cpu, Factory, Droplets, Gamepad2
} from 'lucide-react';

import { 
  BenefitCard, 
  PrizeTier, 
  StatItem, 
  SubTrackPrize, 
  TimelineEvent 
} from './types';

/* ======================================================
   HERO
====================================================== */

export const HERO_CONTENT = {
  headline: "Empowering entrepreneurs. Increasing innovation.",
  subheadline: "Join the world's most ambitious entrepreneurial competition.",
  stats: [
    { value: "+420,000", label: "Participants", icon: Users },
    { value: "191", label: "Countries", icon: Globe },
    { value: "$150M+", label: "In-kind Support", icon: Handshake },
  ] as StatItem[]
};

/* ======================================================
   LOGOS
====================================================== */

/** Main EWC Logo (Top of page) */
export const EWC_LOGO = "/assets/logos/EWC_Dark_Grey.png";

/* ======================================================
   VALUE PROPOSITION
====================================================== */

export const VALUE_PROPOSITION: BenefitCard[] = [
  {
    title: "Global Reach",
    description: "Join a network of over 420,000 entrepreneurs from 191 countries.",
    icon: Globe
  },
  {
    title: "World-Class Training",
    description: "Access mentorship and resources to sharpen your skills at every stage.",
    icon: GraduationCap
  },
  {
    title: "Life-Changing Prizes",
    description: "Compete for a share of $1 million in cash prizes and investment opportunities.",
    icon: Trophy
  },
  {
    title: "Investor Access",
    description: "Connect directly with potential investors and global decision makers.",
    icon: TrendingUp
  },
  {
    title: "Media Exposure",
    description: "Showcase your innovation on a global stage.",
    icon: Zap
  },
  {
    title: "Community Support",
    description: "Become part of a supportive ecosystem that accelerates growth.",
    icon: Users
  }
];

/* ======================================================
   ELIGIBILITY
====================================================== */

export const ELIGIBILITY = [
  {
    title: "Idea Stage",
    criteria: [
      "Entrepreneurs with a concept or prototype",
      "Looking to validate and build"
    ],
    icon: Rocket
  },
  {
    title: "Early Stage",
    criteria: [
      "Startups with a product in market",
      "Generating early revenue",
      "Seeking traction"
    ],
    icon: Target
  },
  {
    title: "Growth Stage",
    criteria: [
      "Established companies",
      "Scaling operations",
      "Expanding into new markets"
    ],
    icon: TrendingUp
  }
];

/* ======================================================
   PRIZES
====================================================== */

export const PRIZE_POOL_TOTAL = "$1,000,000";

export const PRIZE_TIERS: PrizeTier[] = [
  {
    stage: "Early Stage",
    prizes: [
      { position: "1st Place", amount: "$200,000" },
      { position: "2nd Place", amount: "$150,000" },
      { position: "3rd Place", amount: "$90,000" },
      { position: "4th Place", amount: "$50,000" },
    ]
  },
  {
    stage: "Growth Stage",
    prizes: [
      { position: "1st Place", amount: "$160,000" },
      { po
