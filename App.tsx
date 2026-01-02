import React from "react";
import { ArrowRight, CheckCircle2, MapPin, Trophy, ExternalLink } from "lucide-react";
import { Button } from "./components/ui/Button";
import { Section } from "./components/ui/Section";
import { Ident } from "./components/Ident";
import {
  HERO_CONTENT,
  VALUE_PROPOSITION,
  ELIGIBILITY,
  PRIZE_POOL_TOTAL,
  PRIZE_TIERS,
  AI_TRACK_PRIZES,
  TIMELINE,
  GLOBAL_FINALS_BENEFITS,
  HOSTS,
  EWC_LOGO,
  RIYADH_FINALS_IMAGE,
} from "./constants";


const App = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans text-[#161616] bg-white selection:bg-[#1292B7] selection:text-white">
      
      {/* 0. Sticky Header for Conversion */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 py-4">
        <div className="container mx-auto px-6 max-w-6xl flex justify-between items-center">
          <img src={EWC_LOGO} alt="EWC" className="h-8 md:h-10 w-auto" />
          <a href="https://entrepreneurshipworldcup.typeform.com/EWC2026" target="_blank" rel="noreferrer">
            <Button className="px-6 py-2 text-sm md:text-base">Apply Now</Button>
          </a>
        </div>
      </nav>

      {/* 1. HERO SECTION (Split Layout) */}
      <section className="relative pt-32 pb-16 md:pt-48 md:pb-32 overflow-hidden">
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-3/5 text-left">
              <h1 className="text-[2.25rem] leading-[1.1] md:text-6xl font-extrabold font-heading tracking-tight mb-6 text-gray-900">
                {HERO_CONTENT.headline}
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-xl font-light leading-relaxed">
                {HERO_CONTENT.subheadline}
              </p>
              
              <div className="flex flex-wrap gap-4 mb-12">
                <a href="https://entrepreneurshipworldcup.typeform.com/EWC2026" target="_blank" rel="noreferrer" className="w-full sm:w-auto">
                  <Button className="w-full sm:w-auto shadow-2xl">Start Application <ArrowRight className="ml-2 h-5 w-5"/></Button>
                </a>
              </div>

              {/* Stats - Horizontal Row for better scanning */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-100">
                {HERO_CONTENT.stats.map((stat, idx) => (
                  <div key={idx} className="flex flex-col">
                    <span className="text-2xl md:text-4xl font-black text-[#1292B7]">{stat.value}</span>
                    <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-gray-400 mt-1">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Balance on the Right */}
            <div className="hidden lg:block lg:w-2/5 relative">
              <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                <img src={RIYADH_FINALS_IMAGE} alt="Riyadh Finals" className="w-full h-auto" />
              </div>
              <Ident className="absolute -right-20 -bottom-20 w-80 h-80 opacity-20" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. LOGO CLOUD (Social Proof) */}
      <div className="bg-gray-50 py-10 border-y border-gray-100">
        <div className="container mx-auto px-6 max-w-6xl text-center">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-8">Global Strategic Partners</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all">
             {/* منطق عرض الشعارات من constants */}
             {HOSTS.global.map((h, i) => <img key={i} src={h.logo} alt={h.name} className="h-8 md:h-12 w-auto" />)}
             <img src={HOSTS.founding.logo} alt="Misk" className="h-10 md:h-14 w-auto" />
          </div>
        </div>
      </div>

      {/* 3. PRIZES (Featured Card Pattern) */}
      <Section background="gray" id="prizes">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">The Global Prize Pool</h2>
          <div className="text-5xl md:text-7xl font-black brand-gradient-text mb-6">{PRIZE_POOL_TOTAL}</div>
          <p className="text-gray-600">100% Equity Free Cash Prizes</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PRIZE_TIERS.map((tier, idx) => (
            <div key={idx} className={`bg-white rounded-3xl p-8 border ${idx === 0 ? 'border-[#1292B7] shadow-2xl scale-105 z-10' : 'border-gray-100 shadow-sm'} transition-all`}>
              {idx === 0 && <span className="bg-[#1292B7] text-white px-4 py-1 rounded-full text-xs font-bold mb-4 inline-block">Featured Category</span>}
              <h3 className="text-2xl font-bold mb-8">{tier.stage}</h3>
              <div className="space-y-6">
                {tier.prizes.map((p, pi) => (
                  <div key={pi} className="flex justify-between items-center border-b border-gray-50 pb-4">
                    <span className="text-gray-500 font-medium flex items-center gap-2">
                       {pi === 0 && <Trophy size={16} className="text-yellow-500"/>} {p.position}
                    </span>
                    <span className="text-xl font-bold text-gray-900">{p.amount}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* باقي الأقسام مع الحفاظ على التباين والمسافات الجديدة */}
      {/* ... */}

    </div>
  );
};

export default App;
