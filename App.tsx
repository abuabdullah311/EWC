import React from "react";
import { ArrowRight, CheckCircle2, MapPin, Trophy } from "lucide-react";

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
    <div className="min-h-screen flex flex-col font-sans text-[#161616] overflow-x-hidden selection:bg-[#1292B7] selection:text-white">
      {/* SECTION 1: HERO */}
      <section className="relative min-h-[80vh] md:min-h-[90vh] flex items-center pt-20 md:pt-32 pb-16 md:pb-24 overflow-hidden bg-white">
        {/* Background blobs */}
        <div className="absolute top-0 right-0 w-[55vw] h-[55vw] bg-blue-50/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[45vw] h-[45vw] bg-teal-50/30 rounded-full blur-3xl translate-y-1/4 -translate-x-1/4 pointer-events-none" />

        <Ident className="absolute -right-64 -top-64 w-[800px] h-[800px] opacity-[0.03]" />

        <div className="container mx-auto px-5 sm:px-6 max-w-6xl relative z-10">
          <div className="max-w-4xl">
            {/* Logo (LEFT) */}
            <div className="mb-8 md:mb-10">
              <img
                src={EWC_LOGO}
                alt="Entrepreneurship World Cup"
                className="h-12 sm:h-14 md:h-20 w-auto object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  const span = document.createElement("span");
                  span.className =
                    "inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-blue-100 shadow-sm backdrop-blur-sm";
                  span.innerHTML =
                    '<span class="brand-gradient-text font-bold text-sm tracking-wide uppercase">Entrepreneurship World Cup</span>';
                  e.currentTarget.parentElement?.appendChild(span);
                }}
              />
            </div>

            {/* Headline (LEFT) */}
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold font-heading leading-[1.08] mb-5 md:mb-8 tracking-tight text-gray-900">
              {HERO_CONTENT.headline}
            </h1>

            <p className="text-base sm:text-lg md:text-2xl text-gray-500 mb-8 md:mb-12 max-w-2xl font-light leading-relaxed">
              {HERO_CONTENT.subheadline}
            </p>

            {/* Stats (more compact on mobile) */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 md:mb-14 py-6 md:py-8 border-y border-gray-100/80 ewc-gap-tight">
              {HERO_CONTENT.stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col group cursor-default">
                  <span className="text-3xl sm:text-4xl md:text-5xl font-black brand-gradient-text font-heading mb-1 sm:mb-2 group-hover:scale-105 transition-transform duration-300 origin-left">
                    {stat.value}
                  </span>
                  <div className="flex items-center gap-2 text-gray-500 mt-1">
                    <stat.icon size={16} className="text-[#1292B7]" />
                    <span className="text-[11px] sm:text-sm font-bold uppercase tracking-widest text-gray-400">
                      {stat.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-start sm:items-center">
              <a
                href="https://entrepreneurshipworldcup.typeform.com/EWC2026"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button className="w-full px-8 sm:px-10 py-3.5 sm:py-4 text-base sm:text-lg shadow-xl shadow-blue-500/20 hover:shadow-2xl hover:shadow-blue-500/30 hover:-translate-y-1 transition-all duration-300">
                  Apply Now for EWC 2026
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: VALUE PROPOSITION */}
      <Section background="gray" id="benefits" className="relative ewc-tight-y">
        <div className="mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold font-heading mb-4 sm:mb-6 tracking-tight">
            Why Participate?
          </h2>
          <div className="w-16 sm:w-24 h-1.5 brand-gradient rounded-full opacity-80" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 relative z-10 ewc-gap-tight">
          {VALUE_PROPOSITION.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl shadow-[0_2px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 border border-gray-100/50 group ewc-card-pad p-8 md:p-10"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-blue-50/80 flex items-center justify-center mb-6 md:mb-8 group-hover:bg-[#1292B7] group-hover:text-white transition-colors duration-300">
                <card.icon className="text-[#1292B7] group-hover:text-white h-7 w-7 md:h-8 md:w-8 transition-colors duration-300" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold font-heading mb-3 md:mb-4 text-gray-900">
                {card.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* SECTION 4: WHO CAN APPLY */}
      <Section className="overflow-hidden ewc-tight-y">
        <div className="max-w-2xl mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold font-heading mb-4 sm:mb-6 tracking-tight">
            Who Can Apply?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-500 font-light leading-relaxed">
            EWC is open to startups at all stages. No matter where you are in your journey, there is a place for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 ewc-gap-tight">
          {ELIGIBILITY.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300 hover:-translate-y-1 p-8 md:p-10 ewc-card-pad"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-teal-50 flex items-center justify-center mb-6 md:mb-8 text-[#1292B7]">
                <item.icon size={26} />
              </div>

              <h3 className="text-xl md:text-2xl font-bold font-heading mb-5 md:mb-6 text-gray-900">
                {item.title}
              </h3>

              {/* LEFT-ALIGNED bullets (as requested earlier) */}
              <ul className="space-y-3 md:space-y-4">
                {item.criteria.map((criterion, cIdx) => (
                  <li key={cIdx} className="flex items-start gap-3 text-gray-600">
                    <span className="mt-2 w-2 h-2 rounded-full bg-[#1292B7] flex-shrink-0" />
                    <span className="text-sm sm:text-base font-medium leading-relaxed">
                      {criterion}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* SECTION 5: PRIZES */}
      <Section background="gray" className="relative ewc-tight-y-lg">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50/40 via-transparent to-transparent pointer-events-none" />

        {/* Prize Header (attention-grabbing) */}
        <div className="relative mb-10 sm:mb-16 md:mb-24">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-200/30 via-teal-100/30 to-blue-200/30 blur-[100px] rounded-full transform -translate-y-1/2" />
          <div className="relative text-center z-10 bg-white/60 backdrop-blur-xl rounded-[2.2rem] md:rounded-[3rem] p-10 sm:p-12 md:p-16 border border-white/50 shadow-2xl max-w-5xl mx-auto ring-1 ring-gray-900/5">
            <span className="brand-gradient-text font-black tracking-[0.2em] uppercase text-xs sm:text-sm mb-4 sm:mb-6 block">
              Global Reward
            </span>

            {/* ✅ Animated prize amount */}
            <h2 className="ewc-prize-amount text-5xl sm:text-6xl md:text-9xl font-black font-heading mb-4 sm:mb-6 brand-gradient-text drop-shadow-sm tracking-tight">
              {PRIZE_POOL_TOTAL}
            </h2>

            <p className="text-base sm:text-xl md:text-3xl text-gray-800 font-medium mb-6 sm:mb-10">
              Total Cash Prize Pool for 2026
            </p>

            <div className="inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-[#E6F4F1] text-[#0F5A4F] shadow-sm border border-[#0F5A4F]/10 hover:bg-[#D4EBE7] transition-colors">
              <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6" />
              <span className="font-bold tracking-wider uppercase text-sm sm:text-base">100% Equity Free</span>
            </div>
          </div>
        </div>

        {/* Prize tiers */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-10 sm:mb-16 md:mb-20 ewc-gap-tight">
          {PRIZE_TIERS.map((tier, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden relative transition-all hover:-translate-y-1 hover:shadow-2xl duration-300"
            >
              <div className="h-2 w-full brand-gradient absolute top-0 left-0" />
              <div className="p-8 md:p-10">
                <h3 className="text-xl md:text-2xl font-bold font-heading mb-6 md:mb-8 text-gray-900">
                  {tier.stage}
                </h3>
                <div className="space-y-4 md:space-y-6">
                  {tier.prizes.map((prize, pIdx) => (
                    <div
                      key={pIdx}
                      className={`flex justify-between items-center py-3 md:py-4 ${
                        pIdx !== tier.prizes.length - 1 ? "border-b border-gray-50" : ""
                      }`}
                    >
                      <span className="text-gray-500 font-medium flex items-center gap-3 text-sm md:text-base">
                        {pIdx === 0 && (
                          <Trophy className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                        )}
                        {prize.position}
                      </span>
                      <span className="font-bold text-xl md:text-2xl text-gray-900 tracking-tight">
                        {prize.amount}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* AI tracks (kept, but tighter) */}
        <div className="bg-gradient-to-br from-[#1292B7] to-[#0a6c8a] rounded-3xl p-8 sm:p-10 md:p-14 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-400/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

          <div className="relative z-10">
            <div className="mb-8 md:mb-12">
              <h3 className="text-2xl md:text-3xl font-bold font-heading mb-2 md:mb-3">
                AI Sub-Tracks
              </h3>
              <p className="text-blue-100 text-sm sm:text-base md:text-lg">
                Specialized prizes for cutting-edge innovation
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 ewc-gap-tight">
              {AI_TRACK_PRIZES.map((track, idx) => (
                <div
                  key={idx}
                  className="bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-[1.02]"
                >
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/20 flex items-center justify-center mb-4 md:mb-6 text-white shadow-inner">
                    <track.icon size={22} />
                  </div>
                  <h4 className="font-bold text-sm mb-2 md:mb-3 text-white/90 leading-tight">
                    {track.name}
                  </h4>
                  <p className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                    {track.amount}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* SECTION 6: TIMELINE (tighter on mobile) */}
      <Section id="timeline" className="ewc-tight-y">
        <div className="max-w-5xl">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold font-heading mb-8 sm:mb-12 md:mb-16 tracking-tight">
            EWC 2026 Timeline
          </h2>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-100 transform md:-translate-x-1/2" />

            <div className="space-y-10 sm:space-y-14 md:space-y-16">
              {TIMELINE.map((event, idx) => (
                <div
                  key={idx}
                  className={`relative flex flex-col md:flex-row gap-6 md:gap-8 items-start md:items-center ${
                    idx % 2 === 0 ? "md:flex-row-reverse" : ""
                  } group`}
                >
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-12">
                    <div className="group-hover:-translate-y-1 transition-transform duration-300">
                      <span className="inline-block py-1.5 px-4 rounded-full bg-blue-50 text-[#1292B7] font-bold text-xs sm:text-sm mb-2 md:mb-3 shadow-sm border border-blue-100">
                        {event.date}
                      </span>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold font-heading mb-2 md:mb-3 text-gray-900">
                        {event.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </div>

                  <div className="absolute left-4 md:left-1/2 w-5 h-5 bg-white border-[5px] border-[#1292B7] rounded-full transform -translate-x-1/2 z-10 shadow-[0_0_0_4px_rgba(255,255,255,1)] group-hover:scale-125 transition-transform duration-300" />
                  <div className="hidden md:block w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* SECTION 7: GLOBAL FINALS */}
      <Section className="relative overflow-hidden ewc-tight-y" background="gray">
        <div className="absolute top-0 right-0 w-[800px] h-full bg-white skew-x-12 transform translate-x-40 pointer-events-none opacity-50 lg:opacity-100" />

        <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-16 lg:gap-20 relative z-10">
          <div className="lg:w-1/2">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold font-heading mb-4 sm:mb-6 md:mb-8 tracking-tight">
              The Road to Riyadh
            </h2>
            <p className="text-sm sm:text-base md:text-xl text-gray-600 mb-6 sm:mb-8 md:mb-10 font-light leading-relaxed">
              The top 100 startups selected from the EWC Virtual Bootcamp advance to the next round of the competition and receive free travel to Riyadh, Saudi Arabia, for the EWC Global Finals.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-x-8 md:gap-y-10 ewc-gap-tight">
              {GLOBAL_FINALS_BENEFITS.map((benefit, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="mt-0.5 min-w-[28px] p-1.5 bg-blue-50 rounded-lg text-[#1292B7]">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1.5 text-base md:text-lg">
                      {benefit.title}
                    </h4>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 relative w-full">
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-[6px] border-white group">
              <img
                src={RIYADH_FINALS_IMAGE}
                alt="EWC Global Finals in Riyadh"
                className="w-full h-auto object-cover transform scale-105 group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex items-end p-6 sm:p-8 md:p-10">
                <div className="text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 w-full">
                  <p className="font-bold text-2xl sm:text-3xl mb-1.5 md:mb-2">
                    EWC Global Finals
                  </p>
                  <p className="text-xs sm:text-sm md:text-base opacity-90 font-light tracking-wide flex items-center gap-2">
                    <MapPin size={16} />
                    November 2026 | Riyadh, Saudi Arabia
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* SECTION 8: FINAL CTA */}
      <section className="py-20 sm:py-24 md:py-32 bg-[#111] text-white relative overflow-hidden">
        <Ident className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] md:w-[1200px] md:h-[1200px] opacity-10" />

        <div className="container mx-auto px-5 sm:px-6 relative z-10 max-w-4xl">
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold font-heading mb-4 sm:mb-6 md:mb-8 tracking-tight">
            It's time to shine.
          </h2>
          <p className="text-sm sm:text-lg md:text-2xl text-gray-400 mb-8 sm:mb-10 md:mb-12 max-w-2xl font-light leading-relaxed">
            Don't look back and wonder "what if?". Look ahead and wonder "what's next?".
          </p>

          <a
            href="https://entrepreneurshipworldcup.typeform.com/EWC2026"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="px-10 sm:px-14 py-4 sm:py-5 text-base sm:text-xl shadow-blue-900/40 shadow-2xl hover:scale-[1.02] active:scale-95 transition-transform duration-200">
              Apply Now for EWC 2026
            </Button>
          </a>
        </div>
      </section>

      {/* FOOTER (Global Hosts: logos side-by-side + Founding Partner) */}
      <footer className="bg-white pt-14 sm:pt-16 md:pt-20 pb-10 md:pb-12 border-t border-gray-100">
        <div className="container mx-auto px-5 sm:px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mb-12 md:mb-20">
            {/* Global Hosts (side-by-side) */}
            <div>
              <h4 className="text-[11px] sm:text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-6 md:mb-8">
                Global Hosts
              </h4>
              <div className="flex items-center gap-10 justify-start flex-wrap">
                {HOSTS.global.map((host, idx) => (
                  <img
                    key={idx}
                    src={host.logo}
                    alt={host.name}
                    className="h-10 sm:h-12 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      const span = document.createElement("span");
                      span.innerText = host.name;
                      span.className = "text-base sm:text-xl font-bold text-gray-900";
                      e.currentTarget.parentElement?.appendChild(span);
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Founding Partner */}
            <div>
              <h4 className="text-[11px] sm:text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-6 md:mb-8">
                Founding Partner
              </h4>
              <div className="flex items-center justify-start">
                <img
                  src={HOSTS.founding.logo}
                  alt={HOSTS.founding.name}
                  className="h-12 sm:h-14 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    const span = document.createElement("span");
                    span.innerText = HOSTS.founding.name;
                    span.className = "text-base sm:text-xl font-bold text-gray-900";
                    e.currentTarget.parentElement?.appendChild(span);
                  }}
                />
              </div>
            </div>
          </div>

          <div className="border-t border-gray-100 pt-8 md:pt-10 flex justify-start items-center text-xs sm:text-sm text-gray-400">
            <p>&copy; Entrepreneurship World Cup. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
