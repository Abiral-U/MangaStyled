import { motion } from 'framer-motion';
import { MapPin, Coffee, Award, Zap } from 'lucide-react';
import { profile } from '../../data/profile';
import { SectionHeading } from '../common/SectionHeading';
import { SpeechBubble } from '../common/SpeechBubble';
import { MangaPanel } from '../common/MangaPanel';
import { KatakanaText } from '../common/KatakanaText';
import { useAudio } from '../../hooks/useAudio';
import { useReadingDirection } from '../../hooks/useReadingDirection';

const facts = [
  'Likes: Python, strong coffee, and AI models that actually work in production.',
  'Dislikes: Vague requirements, and manual processes that should be automated.',
  'Believes: AI should amplify human capability, not replace human judgment.',
];

const fightStats = [
  { label: 'BASE OF OPERATIONS', value: profile.location },
  { label: 'COMBAT CLASS', value: 'AI ENGINEER · A-RANK' },
  { label: 'CHI PATTERN', value: 'CLEAN PIPELINES / 0 TECH DEBT' },
  { label: 'WEAKNESS', value: 'NEW PAPER ON ARXIV' },
  { label: 'PATENTS PUBLISHED', value: '3 (AI + CYBERSECURITY)' },
  { label: 'PROBLEMS SOLVED', value: '250+' },
];

export function About() {
  const { play } = useAudio();
  const { toggle, modeLabel } = useReadingDirection();

  return (
    <section id="about" className="relative overflow-hidden bg-paper py-20 lg:py-28">
      <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.05]" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading chapter="第2話" title="WHO AM I" katakana="自己紹介" subtitle="A few panels from the author's own autobiography." />

        <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55 }}
            className="relative"
          >
            <SpeechBubble variant="manga" tone="bone" className="mb-6">
              <span className="font-comic text-sm tracking-widest text-blood">NARRATION</span>
              <p className="font-body text-base leading-relaxed font-semibold text-ink sm:text-lg">
                A developer who taught himself to code before he finished university.
                Three years later he builds AI automation pipelines, RAG systems, and computer vision solutions
                that turn raw data into intelligent actions — from news aggregation to biodiversity conservation.
              </p>
            </SpeechBubble>

            <SpeechBubble variant="manga" tone="paper">
              <span className="font-comic text-sm tracking-widest text-blood">NARRATION · CONT.</span>
              <p className="font-body text-base leading-relaxed font-semibold text-ink sm:text-lg">
                By day he engineers automation at RevNDev Studios — n8n workflows, LLM integrations, LinkedIn-ready content generation.
                By night he trains CNNs to hear endangered birds and builds RAG systems that speak SQL.
                A portfolio that can't make you think is just a resume with extra steps.
              </p>
            </SpeechBubble>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {facts.map((fact, i) => (
                <SpeechBubble key={fact} variant="thought" tone="paper" padded={false} className={i % 2 === 1 ? 'sm:translate-y-4' : ''}>
                  <p className="px-3 py-2 font-body text-sm font-semibold leading-snug text-ink">{fact}</p>
                </SpeechBubble>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="relative"
          >
            <MangaPanel accent="yellow" halftone className="p-6">
              <div className="flex items-center justify-between">
                <h3 className="font-comic text-2xl tracking-wide text-ink">COMBAT DOSSIER</h3>
                <KatakanaText outline="none" className="text-2xl text-blood" rotate={-8}>
                  闇夜
                </KatakanaText>
              </div>

              <dl className="mt-5 space-y-4">
                {fightStats.map((stat) => (
                  <div key={stat.label} className="border-b-2 border-dashed border-ink/40 pb-3 last:border-0">
                    <dt className="font-pop text-[11px] tracking-[0.2em] text-ink/60">{stat.label}</dt>
                    <dd className="font-comic text-lg tracking-wide text-ink">{stat.value}</dd>
                  </div>
                ))}
              </dl>
            </MangaPanel>

            <MangaPanel accent="black" className="mt-6 bg-ink p-6 text-bone" shadow>
              <p className="font-pop text-sm leading-relaxed tracking-wide">
                <span className="text-sunny">EDITOR'S NOTE:</span> Reading this volume from right to left is how the author
                first learned — legends read manga before they read specs, after all.
              </p>
              <button
                onClick={() => {
                  play('whoosh');
                  toggle();
                }}
                className="pressable mt-4 border-4 border-bone bg-bone px-4 py-2 font-comic text-sm tracking-widest text-ink"
                aria-label={`Switch reading direction. Currently ${modeLabel}`}
              >
                SWITCH ORDER: {modeLabel}
              </button>
            </MangaPanel>

            <div className="mt-6 grid grid-cols-2 gap-4">
              {[
                { icon: MapPin, text: 'Based in India' },
                { icon: Coffee, text: 'Brew ratio 1:16' },
                { icon: Zap, text: 'AI Automation' },
                { icon: Award, text: '3 Patents Published' },
              ].map(({ icon: Icon, text }) => (
                <MangaPanel key={text} accent="paper" shadow={false} className="p-3" skew="none">
                  <div className="flex items-center gap-2">
                    <Icon className="h-4 w-4 shrink-0 text-blood" />
                    <span className="font-body text-xs font-bold text-ink">{text}</span>
                  </div>
                </MangaPanel>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}