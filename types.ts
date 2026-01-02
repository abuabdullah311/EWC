import { LucideIcon } from 'lucide-react';

export interface StatItem {
  value: string;
  label: string;
  icon: LucideIcon;
}

export interface BenefitCard {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface TimelineEvent {
  date: string;
  title: string;
  description: string;
}

export interface PrizeTier {
  stage: string;
  prizes: { position: string; amount: string }[];
  total?: string;
}

export interface SubTrackPrize {
  name: string;
  amount: string;
  icon: LucideIcon;
}