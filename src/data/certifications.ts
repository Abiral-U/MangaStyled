import type { Certification } from '../types';

export const certifications: Certification[] = [
  {
    id: 'oci-ai-foundations',
    name: 'OCI AI Foundations Associate',
    rank: 'S',
    title: 'Oracle Cloud AI Adept',
    issuer: 'Oracle',
    year: 2025,
    accent: 'crimson',
    description: 'Mastered Oracle Cloud Infrastructure AI services — from vision to language to anomaly detection.',
    credentialUrl: 'https://www.credly.com',
  },
  {
    id: 'ibm-generative-ai',
    name: 'Generative AI in Action',
    rank: 'A',
    title: 'GenAI Practitioner',
    issuer: 'IBM',
    year: 2025,
    accent: 'yellow',
    description: 'Built and deployed generative AI solutions using watsonx and foundation models.',
    credentialUrl: 'https://www.credly.com',
  },
  {
    id: 'ibm-ai-fundamentals',
    name: 'Artificial Intelligence Fundamentals',
    rank: 'A',
    title: 'AI Foundation Bearer',
    issuer: 'IBM',
    year: 2024,
    accent: 'paper',
    description: 'Core AI concepts, ethics, machine learning pipelines, and real-world applications.',
    credentialUrl: 'https://www.credly.com',
  },
];