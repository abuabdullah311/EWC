import { 
  Users, Globe, Trophy, Award, Rocket, Target, Zap, 
  Briefcase, TrendingUp, Handshake, Plane, MapPin, 
  GraduationCap, Cpu, Factory, Droplets, Gamepad2
} from 'lucide-react';
import { BenefitCard, PrizeTier, StatItem, SubTrackPrize, TimelineEvent } from './types';

export const HERO_CONTENT = {
  headline: "Empowering entrepreneurs. Increasing innovation.",
  subheadline: "Join the world's most ambitious entrepreneurial competition.",
  stats: [
    { value: "+420,000", label: "Participants", icon: Users },
    { value: "191", label: "Countries", icon: Globe },
    { value: "$150M+", label: "In-kind Support", icon: Handshake },
  ] as StatItem[]
};

export const EWC_LOGO = "https://genglobal.org/sites/default/files/programs/logos/ewc-logo-color.png";

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
      { position: "2nd Place", amount: "$100,000" },
    ]
  },
  {
    stage: "Idea Stage",
    prizes: [
      { position: "1st Place", amount: "$30,000" },
      { position: "2nd Place", amount: "$20,000" },
    ]
  }
];

export const AI_TRACK_PRIZES: SubTrackPrize[] = [
  { name: "AI Infrastructure & Platforms", amount: "$50,000", icon: Cpu },
  { name: "Smart Manufacturing & Mobility", amount: "$50,000", icon: Factory },
  { name: "Energy, Water & Sustainable Systems", amount: "$50,000", icon: Droplets },
  { name: "Gaming & Immersive Tech", amount: "$50,000", icon: Gamepad2 },
];

export const TIMELINE: TimelineEvent[] = [
  {
    date: "Nov 2025 – May 2026",
    title: "Applications + Global Pool",
    description: "Startups answer the global call for participation and submit applications to compete in EWC 2026."
  },
  {
    date: "July 2026",
    title: "EWC 250 Selection",
    description: "The 250 highest-scoring startups advance and receive an invitation to the EWC Virtual Bootcamp."
  },
  {
    date: "August 2026",
    title: "EWC Virtual Bootcamp",
    description: "Contestants participate in virtual training sessions and direct, one-to-one mentorship."
  },
  {
    date: "September 2026",
    title: "EWC 100 Selection",
    description: "The top 100 startups are selected to receive free travel to Riyadh for the Global Finals."
  },
  {
    date: "November 2026",
    title: "EWC Global Finals",
    description: "The EWC 100 compete on stage for a share of US$1 million in total prizes plus additional opportunities."
  }
];

export const GLOBAL_FINALS_BENEFITS = [
  {
    title: "Trip to Riyadh",
    description: "Free travel to Riyadh to compete on the global stage against promising startups.",
    icon: Plane
  },
  {
    title: "Pre-Finals Bootcamp",
    description: "Access to an intensive bootcamp to prepare for success at the finals.",
    icon: Briefcase
  },
  {
    title: "Global Connections",
    description: "Instant access to a global network of peers, collaborators, and mentors.",
    icon: Globe
  },
  {
    title: "Market Access",
    description: "Potential new business opportunities and soft-landing support to enter the Saudi market.",
    icon: MapPin
  }
];

export const HOSTS = {
  global: [
    { 
      name: "Global Entrepreneurship Network (GEN)", 
      logo: "https://genglobal.org/sites/default/files/GEN_Logo_Full_Color.png" 
    },
    { 
      name: "Monsha'at", 
      logo: "https://www.monshaat.gov.sa/themes/custom/monshaat/logo.svg" 
    }
  ],
  founding: { 
    name: "Misk Foundation", 
    logo: "https://misk.org.sa/wp-content/themes/misk/assets/img/logo.svg" 
  },
  partners: "Strategic & Ecosystem Partners"
};