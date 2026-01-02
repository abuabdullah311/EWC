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

// ✅ Updated: use local logo from /public
export const EWC_LOGO = "/assets/logos/EWC_Dark_Grey.png";

export const VALUE_PROPOSITI_
