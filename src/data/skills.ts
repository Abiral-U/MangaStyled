import type { Skill, SkillCategory } from '../types';

const languages: Skill[] = [
  { id: 'python', name: 'Python', katakana: 'パイソン', category: 'language', powerLevel: 95, years: 5 },
  { id: 'cpp', name: 'C++', katakana: 'シープラスプラス', category: 'language', powerLevel: 88, years: 4 },
  { id: 'c', name: 'C', katakana: 'シー', category: 'language', powerLevel: 85, years: 4 },
  { id: 'sql', name: 'SQL', katakana: 'エスキューエル', category: 'language', powerLevel: 90, years: 4 },
];

const frameworks: Skill[] = [
  { id: 'tensorflow', name: 'TensorFlow', katakana: 'テンソルフロー', category: 'framework', powerLevel: 92, years: 4 },
  { id: 'keras', name: 'Keras', katakana: 'ケラス', category: 'framework', powerLevel: 90, years: 4 },
  { id: 'pytorch', name: 'PyTorch', katakana: 'パイトーチ', category: 'framework', powerLevel: 88, years: 3 },
  { id: 'langchain', name: 'LangChain', katakana: 'ラングチェーン', category: 'framework', powerLevel: 85, years: 2 },
  { id: 'streamlit', name: 'Streamlit', katakana: 'ストリームリット', category: 'framework', powerLevel: 88, years: 2 },
  { id: 'n8n', name: 'n8n', katakana: 'エヌエイトエヌ', category: 'framework', powerLevel: 85, years: 1 },
];

const dataAI: Skill[] = [
  { id: 'numpy', name: 'NumPy', katakana: 'ナンパイ', category: 'database', powerLevel: 92, years: 4 },
  { id: 'pandas', name: 'Pandas', katakana: 'パンダス', category: 'database', powerLevel: 90, years: 4 },
  { id: 'huggingface', name: 'HuggingFace', katakana: 'ハギングフェイス', category: 'database', powerLevel: 88, years: 3 },
  { id: 'chromadb', name: 'ChromaDB', katakana: 'クロマDB', category: 'database', powerLevel: 85, years: 2 },
  { id: 'faiss', name: 'FAISS', katakana: 'フェイス', category: 'database', powerLevel: 85, years: 2 },
];

const cloud: Skill[] = [
  { id: 'git', name: 'Git/GitHub', katakana: 'ギット', category: 'cloud', powerLevel: 95, years: 5 },
  { id: 'ibmcloud', name: 'IBM Cloud', katakana: 'アイビーエムクラウド', category: 'cloud', powerLevel: 80, years: 2 },
  { id: 'firebase', name: 'Firebase', katakana: 'ファイアベース', category: 'cloud', powerLevel: 82, years: 2 },
  { id: 'powerbi', name: 'PowerBI', katakana: 'パワーBI', category: 'cloud', powerLevel: 78, years: 2 },
  { id: 'vscode', name: 'VS Code', katakana: 'ブイエスコード', category: 'cloud', powerLevel: 95, years: 5 },
  { id: 'jupyter', name: 'Jupyter Notebooks', katakana: 'ジュピターノートブック', category: 'cloud', powerLevel: 92, years: 4 },
];

const csCore: Skill[] = [
  { id: 'dsa', name: 'Data Structures & Algorithms', katakana: 'データ構造とアルゴリズム', category: 'design', powerLevel: 88, years: 4 },
  { id: 'oop', name: 'OOP', katakana: 'オブジェクト指向', category: 'design', powerLevel: 90, years: 4 },
  { id: 'os', name: 'Operating Systems', katakana: 'オペレーティングシステム', category: 'design', powerLevel: 82, years: 3 },
  { id: 'dbms', name: 'DBMS', katakana: 'データベース管理', category: 'design', powerLevel: 85, years: 3 },
  { id: 'ai', name: 'Artificial Intelligence', katakana: '人工知能', category: 'design', powerLevel: 92, years: 4 },
  { id: 'ml', name: 'Machine Learning', katakana: '機械学習', category: 'design', powerLevel: 90, years: 4 },
  { id: 'dl', name: 'Deep Learning', katakana: '深層学習', category: 'design', powerLevel: 92, years: 4 },
];

export const skillGroups: { category: SkillCategory; label: string; katakana: string; skills: Skill[] }[] = [
  { category: 'language', label: 'LANGUAGES', katakana: '言語', skills: languages },
  { category: 'framework', label: 'FRAMEWORKS & LIBRARIES', katakana: '武器', skills: frameworks },
  { category: 'database', label: 'DATA & AI', katakana: '知能', skills: dataAI },
  { category: 'cloud', label: 'CLOUD & TOOLS', katakana: '天空', skills: cloud },
  { category: 'design', label: 'CORE CS', katakana: '核心', skills: csCore },
];

export const allSkills: Skill[] = Object.values(skillGroups).flatMap((g) => g.skills);