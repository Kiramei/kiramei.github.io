// Skill data configuration file
// Used to manage data for the skill display page

export interface Skill {
	id: string;
	name: string;
	description: string;
	icon: string; // Iconify icon name
	category: "frontend" | "backend" | "database" | "tools" | "other";
	level: "beginner" | "intermediate" | "advanced" | "expert";
	experience: {
		years: number;
		months: number;
	};
	projects?: string[]; // Related project IDs
	certifications?: string[];
	color?: string; // Skill card theme color
}

export const skillsData: Skill[] = [
  // --------------------------------------------------------------------------
  // Frontend Skills (Focus: Vue.js & Modern Web)
  // --------------------------------------------------------------------------
  {
    id: "vue",
    name: "Vue.js",
    description:
      "My primary frontend framework. Proficient in Options/Composition API and ecosystem (Router, Pinia).",
    icon: "logos:vue",
    category: "frontend",
    level: "advanced",
    experience: { years: 2, months: 5 },
    projects: ["baas-webui", "kiramei-personal-site", "szu-mirrors-frontend"],
    color: "#4FC08D",
  },
  {
    id: "typescript",
    name: "TypeScript",
    description:
      "Used extensively in modern web projects and Tauri apps for type safety.",
    icon: "logos:typescript-icon",
    category: "frontend",
    level: "intermediate",
    experience: { years: 1, months: 6 },
    projects: ["baas-webui", "baas-tauri", "kiramei-blog-trial-next"],
    color: "#3178C6",
  },
  {
    id: "javascript",
    name: "JavaScript",
    description:
      "Solid foundation in ES6+, DOM manipulation, and asynchronous programming.",
    icon: "logos:javascript",
    category: "frontend",
    level: "advanced",
    experience: { years: 3, months: 0 },
    projects: ["fluent-web-calculator", "kiramei-birthday"],
    color: "#F7DF1E",
  },
  {
    id: "nextjs",
    name: "Next.js",
    description:
      "Experience with React-based framework for SSR and static generation.",
    icon: "logos:nextjs-icon",
    category: "frontend",
    level: "beginner",
    experience: { years: 0, months: 6 },
    projects: ["kiramei-blog-trial-next"],
    color: "#616161",
  },
  {
    id: "nuxtjs",
    name: "Nuxt.js",
    description:
      "Experience building universal Vue applications.",
    icon: "logos:nuxt-icon",
    category: "frontend",
    level: "intermediate",
    experience: { years: 1, months: 0 },
    projects: ["kiramei-former-site"],
    color: "#00DC82",
  },
  {
    id: "tailwindcss",
    name: "Tailwind CSS",
    description:
      "Utility-first CSS framework used for rapid UI development in recent projects.",
    icon: "logos:tailwindcss-icon",
    category: "frontend",
    level: "intermediate",
    experience: { years: 1, months: 2 },
    projects: ["baas-webui"],
    color: "#06B6D4",
  },

  // --------------------------------------------------------------------------
  // Backend & Languages (Focus: Java, Python, Scripts)
  // --------------------------------------------------------------------------
  {
    id: "java",
    name: "Java",
    description:
      "Strong background in Java for desktop tools, crawlers, and Android development.",
    icon: "logos:java",
    category: "backend",
    level: "advanced",
    experience: { years: 3, months: 5 },
    projects: ["fetcher-531mk-window", "video-2-text", "chiba-java"],
    color: "#ED8B00",
  },
  {
    id: "python",
    name: "Python",
    description:
      "Primary language for automation scripts, data processing, and AI research.",
    icon: "logos:python",
    category: "backend",
    level: "advanced",
    experience: { years: 3, months: 0 },
    projects: ["baas-dev", "cbfl", "zerochan-fetcher"],
    color: "#3776AB",
  },
  {
    id: "csharp",
    name: "C#",
    description:
      "Experience with .NET framework for desktop multimedia applications.",
    icon: "devicon:csharp",
    category: "backend",
    level: "intermediate",
    experience: { years: 1, months: 6 },
    projects: ["ascii-art"],
    color: "#239120",
  },
  {
    id: "cpp",
    name: "C++",
    description:
      "Used for algorithms and competitive programming education.",
    icon: "logos:c-plusplus",
    category: "backend",
    level: "intermediate",
    experience: { years: 1, months: 8 },
    projects: ["ea-code-inspiration"],
    color: "#00599C",
  },
  {
    id: "rust",
    name: "Rust",
    description:
      "Learning and applying Rust in Tauri desktop application development.",
    icon: "logos:rust",
    category: "backend",
    level: "beginner",
    experience: { years: 0, months: 5 },
    projects: ["baas-tauri"],
    color: "#CE422B",
  },
  {
    id: "vba",
    name: "VBA",
    description:
      "Experience in automating Office tasks and simple scripts.",
    icon: "file-icons:vba",
    category: "backend",
    level: "intermediate",
    experience: { years: 1, months: 0 },
    projects: ["endless-message-sender"],
    color: "#217346",
  },

  // --------------------------------------------------------------------------
  // Database (Applied in Projects)
  // --------------------------------------------------------------------------
  {
    id: "mysql",
    name: "MySQL",
    description:
      "Relational database management for web applications.",
    icon: "logos:mysql-icon",
    category: "database",
    level: "intermediate",
    experience: { years: 2, months: 0 },
    color: "#4479A1",
  },
  {
    id: "sqlite",
    name: "SQLite",
    description:
      "Used in mobile and desktop applications for local data storage.",
    icon: "simple-icons:sqlite",
    category: "database",
    level: "intermediate",
    experience: { years: 2, months: 0 },
    projects: ["fetcher-531mk-android"],
    color: "#003B57",
  },

  // --------------------------------------------------------------------------
  // Tools & Platforms
  // --------------------------------------------------------------------------
  {
    id: "git",
    name: "Git",
    description:
      "Proficient in version control and GitHub workflow management.",
    icon: "logos:git-icon",
    category: "tools",
    level: "advanced",
    experience: { years: 4, months: 0 },
    projects: ["kiramei-config"],
    color: "#F05032",
  },
  {
    id: "jetbrains",
    name: "JetBrains Suite",
    description:
      "Heavy user of IntelliJ IDEA, PyCharm, and WebStorm for development.",
    icon: "logos:jetbrains",
    category: "tools",
    level: "expert",
    experience: { years: 3, months: 5 },
    color: "#000000",
  },
  {
    id: "vscode",
    name: "VS Code",
    description:
      "Lightweight editor for frontend and quick scripting.",
    icon: "logos:visual-studio-code",
    category: "tools",
    level: "advanced",
    experience: { years: 3, months: 0 },
    color: "#007ACC",
  },
  {
    id: "tauri",
    name: "Tauri",
    description:
      "Framework for building tiny, fast binaries for all major desktop platforms.",
    icon: "logos:tauri",
    category: "tools",
    level: "beginner",
    experience: { years: 0, months: 4 },
    projects: ["baas-tauri"],
    color: "#FFC131",
  },
  {
    id: "android-studio",
    name: "Android Studio",
    description:
      "IDE for Android development.",
    icon: "logos:android-icon",
    category: "tools",
    level: "intermediate",
    experience: { years: 1, months: 0 },
    projects: ["fetcher-531mk-android"],
    color: "#3DDC84",
  },
  {
    id: "jupyter",
    name: "Jupyter",
    description:
      "Used for research experiments and data visualization.",
    icon: "logos:jupyter",
    category: "tools",
    level: "advanced",
    experience: { years: 2, months: 0 },
    projects: ["treasure-lab306"],
    color: "#F37626",
  },

  // --------------------------------------------------------------------------
  // Research & AI (New Category based on repos)
  // --------------------------------------------------------------------------
  {
    id: "pytorch",
    name: "PyTorch",
    description:
      "Deep learning framework used for academic research and model implementation.",
    icon: "logos:pytorch-icon",
    category: "other",
    level: "intermediate",
    experience: { years: 1, months: 6 },
    projects: ["cbfl", "dafcn"],
    color: "#EE4C2C",
  },
  {
    id: "opencv",
    name: "OpenCV",
    description:
      "Library for computer vision tasks and image processing.",
    icon: "logos:opencv",
    category: "other",
    level: "intermediate",
    experience: { years: 2, months: 0 },
    projects: ["baas-dev"],
    color: "#5C3EE8",
  },
  {
    id: "latex",
    name: "LaTeX",
    description:
      "Typesetting system for academic paper writing.",
    icon: "simple-icons:latex",
    category: "other",
    level: "intermediate",
    experience: { years: 2, months: 0 },
    color: "#008080",
  },
];

// Get skill statistics
export const getSkillStats = () => {
	const total = skillsData.length;
	const byLevel = {
		beginner: skillsData.filter((s) => s.level === "beginner").length,
		intermediate: skillsData.filter((s) => s.level === "intermediate").length,
		advanced: skillsData.filter((s) => s.level === "advanced").length,
		expert: skillsData.filter((s) => s.level === "expert").length,
	};
	const byCategory = {
		frontend: skillsData.filter((s) => s.category === "frontend").length,
		backend: skillsData.filter((s) => s.category === "backend").length,
		database: skillsData.filter((s) => s.category === "database").length,
		tools: skillsData.filter((s) => s.category === "tools").length,
		other: skillsData.filter((s) => s.category === "other").length,
	};

	return { total, byLevel, byCategory };
};

// Get skills by category
export const getSkillsByCategory = (category?: string) => {
	if (!category || category === "all") {
		return skillsData;
	}
	return skillsData.filter((s) => s.category === category);
};

// Get advanced skills
export const getAdvancedSkills = () => {
	return skillsData.filter(
		(s) => s.level === "advanced" || s.level === "expert",
	);
};

// Calculate total years of experience
export const getTotalExperience = () => {
	const totalMonths = skillsData.reduce((total, skill) => {
		return total + skill.experience.years * 12 + skill.experience.months;
	}, 0);
	return {
		years: Math.floor(totalMonths / 12),
		months: totalMonths % 12,
	};
};
