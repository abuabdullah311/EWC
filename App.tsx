import React from 'react';
import {
  ArrowRight,
  CheckCircle2,
  MapPin,
  Trophy
} from 'lucide-react';

import { Button } from './components/ui/Button';
import { Section } from './components/ui/Section';
import { Ident } from './components/Ident';

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
  RIYADH_FINALS_IMAGE
} from './constants';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans text-[#161616] overflow-x-hidden selection:bg-[#1292B7] selection:text-white text-center">

      {/* ================= HERO ================= */}
      <section className="relative min-h-[90vh] flex items-center pt-32 pb-24 bg-white overflow-hidden">
        <Ident className="absolute -right-64 -top-64 w-[800px] h-[800px] opacity-[0.03]" />

        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="max-w-4xl mx-auto">

            {/* ✅ EWC LOGO – LEFT ALIGNED */}
            <div className="mb-10 flex justify-start">
              <img
                src={EWC_LOGO}
                alt="Entrepreneurship World Cup"
                className="h-16 md:h-20 w-auto object-contain"
              />
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold font-heading mb-8">
              {HERO_CONTENT.headline}
            </h1>

            <p className="text-xl md:text-2xl text-gray-500 mb-12 max-w-2xl mx-auto">
              {HERO_CONTENT.subheadline}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-14 py-8 border-y border-gray-100">
              {HERO_CONTENT.stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <span className="text-4xl md:text-5xl font-black brand-gradient-text mb-2">
                    {stat.value}
                  </span>
                  <div className="flex items-center gap-2 text-gray-500">
                    <stat.icon size={16} className="text-[#1292B7]" />
                    <span className="text-sm font-bold uppercase tracking-widest">
                      {stat.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="https://entrepreneurshipworldcup.typeform.com/EWC2026"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="px-10 py-4 text-lg">
                Apply Now for EWC 2026
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* ================= VALUE ================= */}
      <Section background="gray">
        <h2 className="text-3xl md:text-5xl font-bold mb-16">
          Why Participate?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {VALUE_PROPOSITION.map((card, idx) => (
            <div key={idx} className="bg-white p-10 rounded-3xl shadow">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-blue-50 flex items-center justify-center">
                <card.icon className="text-[#1292B7]" />
              </div>
              <h3 className="text-xl font-bold mb-4">{card.title}</h3>
              <p className="text-gray-600">{card.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ================= ELIGIBILITY ================= */}
      <Section>
        <h2 className="text-3xl md:text-5xl font-bold mb-16">
          Who Can Apply?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ELIGIBILITY.map((item, idx) => (
            <div key={idx} className="bg-white p-10 rounded-3xl border shadow-sm text-left">
              <div className="w-14 h-14 mb-6 rounded-full bg-blue-50 flex items-center justify-center text-[#1292B7]">
                <item.icon size={28} />
              </div>

              <h3 className="text-xl font-bold mb-4">{item.title}</h3>

              {/* ✅ LIST – LEFT ALIGNED */}
              <ul className="space-y-3">
                {item.criteria.map((c, i) => (
                  <li key={i} className="text-gray-600 leading-relaxed">
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* ================= PRIZES ================= */}
      <Section background="gray">
        <h2 className="text-6xl font-black brand-gradient-text mb-6">
          {PRIZE_POOL_TOTAL}
        </h2>
        <p className="text-xl mb-16">Total Cash Prize Pool</p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {PRIZE_TIERS.map((tier, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-8 shadow">
              <h3 className="text-xl font-bold mb-6">{tier.stage}</h3>
              {tier.prizes.map((p, i) => (
                <div key={i} className="flex justify-between py-2">
                  <span>{p.position}</span>
                  <span className="font-bold">{p.amount}</span>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {AI_TRACK_PRIZES.map((track, idx) => (
            <div key={idx} className="bg-[#1292B7] text-white p-6 rounded-2xl">
              <track.icon className="mx-auto mb-4" />
              <p className="font-bold">{track.name}</p>
              <p className="text-2xl mt-2">{track.amount}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ================= RIYADH ================= */}
      <Section background="gray">
        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          The Road to Riyadh
        </h2>

        <img
          src={RIYADH_FINALS_IMAGE}
          alt="Riyadh Finals"
          className="rounded-3xl shadow-2xl mx-auto mb-10"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {GLOBAL_FINALS_BENEFITS.map((b, i) => (
            <div key={i}>
              <h4 className="font-bold">{b.title}</h4>
              <p className="text-gray-600">{b.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-white pt-20 pb-12 border-t">
        <div className="container mx-auto px-6 max-w-6xl text-center">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">

            {/* Global Hosts */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-8 text-gray-400">
                Global Hosts
              </h4>
              <div className="flex justify-center items-center gap-10">
                {HOSTS.global.map((h, i) => (
                  <img key={i} src={h.logo} alt={h.name} className="h-12 object-contain" />
                ))}
              </div>
            </div>

            {/* Founding Partner */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-8 text-gray-400">
                Founding Partner
              </h4>
              <img
                src={HOSTS.founding.logo}
                alt={HOSTS.founding.name}
                className="h-14 mx-auto object-contain"
              />
            </div>

          </div>

          <p className="text-sm text-gray-400">
            &copy; Entrepreneurship World Cup. All rights reserved.
          </p>
        </div>
      </footer>

    </div>
  );
};

export default App;
