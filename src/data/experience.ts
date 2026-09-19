import type { Experience } from '../types';

export const experience: Experience[] = [
  {
    id: 'revndev',
    company: 'RevNDev Studios',
    role: 'Automation Engineer',
    arc: 'THE AUTOMATION ARC',
    period: 'Jul 2026 — PRESENT',
    startYear: 2026,
    endYear: null,
    location: 'Remote, UP',
    summary:
      'Building end-to-end AI-powered automation pipelines that aggregate, analyze, and transform content at scale.',
    achievements: [
      'Developed an n8n workflow aggregating news from 10+ RSS feeds with automated relevance filtering.',
      'Integrated LLMs (OpenAI) to generate professional LinkedIn posts from news content with minimal human intervention.',
      'Built an end-to-end automation pipeline combining RSS feeds, HTTP requests, AI APIs, and LinkedIn-ready content generation.',
    ],
    tech: ['n8n', 'OpenAI', 'RSS', 'HTTP APIs', 'LinkedIn API', 'Automation'],
    onomatopoeia: 'ビリビリ',
    accent: 'crimson',
  },
  {
    id: 'education',
    company: 'Sharda University',
    role: 'B.Tech Computer Science',
    arc: 'ACADEMY ARC',
    period: 'Aug 2022 — Jun 2026',
    startYear: 2022,
    endYear: 2026,
    location: 'Greater Noida, UP',
    summary:
      'Graduated with 8.6/10 GPA. Focused on AI, ML, Deep Learning, and Computer Vision. Published 2 patents and was a finalist at Uhack3.0 Hackathon.',
    achievements: [
      'Published 2 patents in AI (biodiversity conservation, cybersecurity).',
      'Finalist at Uhack3.0 Hackathon, Prayagraj (2024).',
      'Solved 250+ algorithmic problems across competitive programming platforms.',
      'GPA: 8.6/10.0',
    ],
    tech: ['Python', 'C++', 'TensorFlow', 'PyTorch', 'OpenCV', 'SQL'],
    onomatopoeia: 'ドーン',
    accent: 'yellow',
  },
];