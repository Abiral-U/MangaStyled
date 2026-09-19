import type { NavItem, ProfileLink, SocialLink } from '../types';

export const profile = {
  name: 'Your Name',
  nameKatakana: 'ユアネーム',
  epithet: 'The AI Automation Phantom',
  volume: 'VOL.1',
  location: 'Prayagraj, UP · UTC+5:30',
  availability: 'OPEN FOR WORK',
  email: 'your.email@example.com',
  tagline:
    'I build AI-powered automation pipelines, RAG systems, and computer vision solutions that turn raw data into intelligent actions — from news aggregation to biodiversity conservation.',
  heroStats: [
    { label: 'YEARS IN COMBAT', value: '3+' },
    { label: 'PROJECTS DELIVERED', value: '10+' },
    { label: 'PATENTS PUBLISHED', value: '2' },
  ],
} as const;

export const navItems: NavItem[] = [
  { id: 'hero', label: 'COVER', chapter: '第1話', katakana: '表紙', anchor: '#hero' },
  { id: 'about', label: 'ABOUT', chapter: '第2話', katakana: '自己紹介', anchor: '#about' },
  { id: 'experience', label: 'RECORD', chapter: '第3話', katakana: '戦歴', anchor: '#experience' },
  { id: 'projects', label: 'WORKS', chapter: '第4話', katakana: '作品', anchor: '#projects' },
  { id: 'skills', label: 'SKILLS', chapter: '第5話', katakana: '技', anchor: '#skills' },
  { id: 'certifications', label: 'TITLES', chapter: '第6話', katakana: '称号', anchor: '#certifications' },
  { id: 'contact', label: 'CONTACT', chapter: '第7話', katakana: '連絡', anchor: '#contact' },
] as const;

export const socials: SocialLink[] = [
  { id: 'github', label: 'GitHub', handle: '@yourhandle', href: 'https://github.com' },
  { id: 'linkedin', label: 'LinkedIn', handle: 'in/yourhandle', href: 'https://linkedin.com' },
  { id: 'x', label: 'X / Twitter', handle: '@yourhandle', href: 'https://x.com' },
  { id: 'discord', label: 'Discord', handle: 'yourhandle#0001', href: 'https://discord.com' },
] as const;

export const profileLinks: ProfileLink[] = [
  { id: 'resume', label: 'RESUME (PDF)', value: 'download', href: '#contact' },
  { id: 'email', label: 'EMAIL', value: profile.email, href: `mailto:${profile.email}` },
] as const;