// src/components/Skills.tsx
import React from 'react';
import {
  Code,
  Layout,
  GitBranch,
  Cloud,
  Beaker,
  Cpu,
  Layers,
  Terminal,
} from 'lucide-react';

interface SkillCategory {
  icon: React.ReactNode;
  title: string;
  items: string[];
}

export const Skills: React.FC = () => {
  const categories: SkillCategory[] = [
    {
      icon: <Code className="w-12 h-12 text-gray-800" />,
      title: 'Languages',
      items: ['TypeScript', 'JavaScript', 'C++', 'Java', 'Python', 'C'],
    },
    {
      icon: <Layout className="w-12 h-12 text-gray-800" />,
      title: 'Web Frameworks',
      items: ['ReactJS (Hooks)', 'Node.js', 'Spring Boot', 'Express', 'Material UI (v4/v5)'],
    },
    {
      icon: <GitBranch className="w-12 h-12 text-gray-800" />,
      title: 'DevOps Tools',
      items: ['Git', 'GitLab', 'Docker', 'Kubernetes', 'Prometheus', 'CI/CD'],
    },
    {
      icon: <Cloud className="w-12 h-12 text-gray-800" />,
      title: 'Cloud',
      items: ['AWS', 'Google Cloud Platform (GCP)', 'Azure'],
    },
    {
      icon: <Beaker className="w-12 h-12 text-gray-800" />,
      title: 'Testing',
      items: ['Jest', 'Playwright', 'React Testing Library'],
    },
    {
      icon: <Cpu className="w-12 h-12 text-gray-800" />,
      title: 'AI/ML & Data',
      items: ['TensorFlow', 'Pandas', 'NumPy', 'Jupyter Notebooks'],
    },
    {
      icon: <Layers className="w-12 h-12 text-gray-800" />,
      title: 'Architecture',
      items: ['Micro-Frontend (Module Federation)', 'Monorepo Management'],
    },
    {
      icon: <Terminal className="w-12 h-12 text-gray-800" />,
      title: 'Embedded & OS',
      items: ['Arduino', 'Raspberry Pi', 'Linux', 'Windows', 'macOS'],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white font-sen">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 text-center space-y-12">
        {/* Main Heading */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight">
          Technical Skills: Tools and Technologies<br />
          That Empower My Software<br />
          Development Journey
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="space-y-4 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-left"
            >
              <div className="flex justify-center">{cat.icon}</div>
              <h3 className="text-lg font-bold text-gray-900">{cat.title}</h3>
              <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
                {cat.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
