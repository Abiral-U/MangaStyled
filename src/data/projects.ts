import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'conversational-ai-rag',
    slug: 'conversational-ai-rag-sql',
    title: 'CONVERSATIONAL AI WITH RAG & SQL',
    subtitle: 'Multi-LLM chat with document intelligence and natural language to SQL.',
    katakana: 'コンバセーショナルAI',
    onomatopoeia: 'ピカッ',
    description:
      'A Streamlit-based conversational AI integrating 5+ LLMs via OpenRouter with a full RAG pipeline (HuggingFace Embeddings, FAISS, ChromaDB) and natural language to SQL interface for MySQL/SQLite databases.',
    bullets: [
      'Integrated 5+ LLMs via OpenRouter for flexible natural language interaction.',
      'Built RAG pipeline with HuggingFace Embeddings, FAISS, and persistent ChromaDB — 40% improvement in retrieval accuracy.',
      'Developed NL-to-SQL interface reducing query execution time for non-technical users by 60%.',
      'Streamlit frontend with real-time streaming responses and conversation history.',
    ],
    tech: ['Python', 'Streamlit', 'OpenRouter', 'LangChain', 'HuggingFace', 'FAISS', 'ChromaDB', 'MySQL', 'SQLite'],
    tags: ['AI', 'RAG', 'LLM', 'NLP', 'Data'],
    status: 'complete',
    year: 2025,
    coverAccent: 'crimson',
    links: [
      { label: 'LIVE DEMO', url: 'https://example.com' },
      { label: 'SOURCE', url: 'https://github.com' },
    ],
    chapters: [
      {
        id: 'rag-ch1',
        title: 'THE KNOWLEDGE AWAKENS',
        chapterNumber: 'SEQUENCE 01',
        pages: [
          {
            id: 'r1',
            pageNumber: 1,
            background: 'paper',
            speedLines: true,
            panels: [
              { kind: 'narration', text: 'A mountain of documents. A sea of queries. One interface to rule them all.', katakana: 'ゴゴゴ' },
              { kind: 'action', text: 'The RAG engine awakens — embeddings flow, vectors align, knowledge crystallizes.', katakana: 'ピカッ' },
            ],
          },
          {
            id: 'r2',
            pageNumber: 2,
            background: 'bone',
            halftone: true,
            panels: [
              { kind: 'dialogue', text: 'It doesn\'t just search. It understands.', speaker: 'SYSTEM' },
              { kind: 'stats', text: '40% better retrieval. 5+ LLMs. One seamless conversation.', katakana: 'データ' },
              { kind: 'quote', text: '"Finally, an AI that speaks SQL so I don\'t have to."', speaker: 'USER', align: 'right' },
            ],
          },
        ],
      },
      {
        id: 'rag-ch2',
        title: 'SQL SORCERY',
        chapterNumber: 'SEQUENCE 02',
        pages: [
          {
            id: 'r3',
            pageNumber: 3,
            background: 'ink',
            speedLines: true,
            panels: [
              { kind: 'action', text: 'Natural language becomes structured query. The database obeys.', katakana: 'ドドド' },
              { kind: 'narration', text: 'Non-technical users query MySQL and SQLite like wizards casting spells.' },
            ],
          },
          {
            id: 'r4',
            pageNumber: 4,
            background: 'crimson',
            panels: [
              { kind: 'stats', text: '60% faster queries. Zero syntax errors. Pure intent executed.', katakana: '結果' },
              { kind: 'quote', text: 'The barrier between question and answer — shattered.', speaker: 'DEV', align: 'right' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'workplace-safety',
    slug: 'workplace-safety-system',
    title: 'WORKPLACE SAFETY SYSTEM',
    subtitle: 'Real-time hazard detection with deep learning and live monitoring.',
    katakana: 'ワークプレイスセーフティ',
    onomatopoeia: 'ドーン',
    description:
      'A real-time workplace safety system built for Uhack3.0 Hackathon. Integrates CNN-based computer vision models for threat detection with live monitoring dashboards and automated alert systems.',
    bullets: [
      'Implemented CNN architectures for real-time hazard detection across diverse industrial scenarios.',
      'Achieved 85% accuracy in threat detection using deep learning-based computer vision.',
      'Built automated alert system reducing emergency response time by 30%.',
      'Integrated live monitoring dashboard for real-time safety oversight.',
      'Developed as a 4-member team project — finalist at Uhack3.0 Hackathon.',
    ],
    tech: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'CNN', 'Computer Vision', 'Dashboard', 'Real-time'],
    tags: ['Computer Vision', 'Deep Learning', 'Safety', 'Hackathon', 'IoT'],
    status: 'complete',
    year: 2024,
    coverAccent: 'yellow',
    links: [
      { label: 'LIVE DEMO', url: 'https://example.com' },
      { label: 'SOURCE', url: 'https://github.com' },
    ],
    chapters: [
      {
        id: 'safety-ch1',
        title: 'THE FACTORY THAT WATCHES ITSELF',
        chapterNumber: 'SEQUENCE 01',
        pages: [
          {
            id: 's1',
            pageNumber: 1,
            background: 'paper',
            speedLines: true,
            panels: [
              { kind: 'narration', text: 'Machines roar. Workers move. Danger lurks in blind spots.', katakana: 'ゴゴゴ' },
              { kind: 'action', text: 'The CNN awakens — 85% accuracy, eyes everywhere, blink never.', katakana: 'ドーン' },
            ],
          },
          {
            id: 's2',
            pageNumber: 2,
            background: 'sunny',
            halftone: true,
            panels: [
              { kind: 'dialogue', text: 'Hazard detected. Alert dispatched. Response initiated.', speaker: 'SYSTEM' },
              { kind: 'stats', text: '30% faster emergency response. 4-person team. Uhack3.0 Finalist.', katakana: 'データ' },
              { kind: 'quote', text: '"It sees what we miss. It acts before we can."', speaker: 'SAFETY OFFICER', align: 'right' },
            ],
          },
        ],
      },
      {
        id: 'safety-ch2',
        title: 'ZERO INCIDENTS',
        chapterNumber: 'SEQUENCE 02',
        pages: [
          {
            id: 's3',
            pageNumber: 3,
            background: 'ink',
            speedLines: true,
            panels: [
              { kind: 'action', text: 'Dashboard glows green. Every zone monitored. Every second counted.', katakana: 'ビリビリ' },
              { kind: 'narration', text: 'The factory learns. The system adapts. Safety becomes predictive.' },
            ],
          },
          {
            id: 's4',
            pageNumber: 4,
            background: 'crimson',
            panels: [
              { kind: 'stats', text: '85% detection accuracy. Real-time alerts. Lives protected.', katakana: '結果' },
              { kind: 'quote', text: 'This isn\'t just code. It\'s a shield.', speaker: 'TEAM LEAD', align: 'right' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'bird-species-classification',
    slug: 'endangered-bird-classification',
    title: 'ENDANGERED BIRD SPECIES CLASSIFICATION',
    subtitle: '17-layer CNN classifying birds from vocalizations via Mel-spectrograms.',
    katakana: 'バードクラシフィケーション',
    onomatopoeia: 'ピヨッ',
    description:
      'Developed a 17-layer CNN to classify endangered bird species from audio recordings. Converts vocalizations into Mel-spectrograms (MFCCs) with signal processing (noise filtering, normalization, time-windowing) for robust classification in noisy environments.',
    bullets: [
      'Built a 17-layer CNN architecture for audio-based species classification.',
      'Converted audio to Mel-spectrograms (MFCCs) with advanced signal processing pipeline.',
      'Applied noise filtering, normalization, and time-windowing for robustness in noisy environments.',
      'Achieved 96% classification accuracy enabling scalable biodiversity monitoring.',
      'Published patent for AI-driven biodiversity conservation methodology.',
    ],
    tech: ['Python', 'TensorFlow', 'Keras', 'Librosa', 'Signal Processing', 'MFCC', 'CNN', 'Audio Classification'],
    tags: ['Deep Learning', 'Audio AI', 'Conservation', 'Biodiversity', 'Patent'],
    status: 'complete',
    year: 2024,
    coverAccent: 'black',
    links: [
      { label: 'LIVE DEMO', url: 'https://example.com' },
      { label: 'SOURCE', url: 'https://github.com' },
      { label: 'PATENT', url: 'https://patents.example.com' },
    ],
    chapters: [
      {
        id: 'bird-ch1',
        title: 'THE SONG OF SURVIVAL',
        chapterNumber: 'SEQUENCE 01',
        pages: [
          {
            id: 'b1',
            pageNumber: 1,
            background: 'paper',
            speedLines: true,
            panels: [
              { kind: 'narration', text: 'A bird sings in the forest. Its voice carries its identity — and its extinction risk.', katakana: 'ピヨッ' },
              { kind: 'action', text: 'The 17-layer CNN listens. Mel-spectrograms bloom. Patterns emerge.', katakana: 'ザシュッ' },
            ],
          },
          {
            id: 'b2',
            pageNumber: 2,
            background: 'bone',
            halftone: true,
            panels: [
              { kind: 'dialogue', text: 'Noise filtered. Signal normalized. Time-windowed. The song is clean.', speaker: 'SYSTEM' },
              { kind: 'stats', text: '96% accuracy. Endangered species identified. Conservation enabled.', katakana: 'データ' },
              { kind: 'quote', text: '"Every chirp counted. Every species saved."', speaker: 'ECOLOGIST', align: 'right' },
            ],
          },
        ],
      },
      {
        id: 'bird-ch2',
        title: 'A CHORUS OF DATA',
        chapterNumber: 'SEQUENCE 02',
        pages: [
          {
            id: 'b3',
            pageNumber: 3,
            background: 'ink',
            speedLines: true,
            panels: [
              { kind: 'action', text: 'Forests monitored at scale. Biodiversity tracked in real-time. AI guards the wild.', katakana: 'ドドド' },
              { kind: 'narration', text: 'Two patents published. One for conservation. One for cybersecurity. The duality of protection.' },
            ],
          },
          {
            id: 'b4',
            pageNumber: 4,
            background: 'crimson',
            panels: [
              { kind: 'stats', text: '96% accuracy. Scalable monitoring. Patented methodology.', katakana: '結果' },
              { kind: 'quote', text: 'Code that listens to nature and answers back.', speaker: 'RESEARCHER', align: 'right' },
            ],
          },
        ],
      },
    ],
  },
];