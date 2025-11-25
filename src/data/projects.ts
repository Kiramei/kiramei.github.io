// Project data configuration file
// Used to manage data for the project display page

export interface Project {
	id: string;
	title: string;
	description: string;
	image: string;
	category: "AI" | "web" | "mobile" | "desktop" | "other";
	techStack: string[];
	status: "completed" | "in-progress" | "planned";
	liveDemo?: string;
	sourceCode?: string;
	startDate: string;
	endDate?: string;
	featured?: boolean;
	tags?: string[];
	visitUrl?: string; // 添加前往项目链接字段
}

export const projectsData: Project[] = [
  // --------------------------------------------------------------------------
  // Featured / Active Projects (High Priority)
  // --------------------------------------------------------------------------
  {
    id: "baas-tauri",
    title: "BAAS Tauri",
    description:
      "A cross-platform desktop application for BAAS, reconstructed using Tauri to integrate the WebUI with native performance.",
    image: "",
    category: "desktop",
    techStack: ["TypeScript", "Tauri", "Rust"],
    status: "in-progress",
    sourceCode: "https://github.com/Kiramei/baas-tauri",
    visitUrl: "https://github.com/Kiramei/baas-tauri",
    startDate: "2024-06-01",
    featured: true,
    tags: ["Desktop App", "Tauri", "Cross-platform"],
  },
  {
    id: "baas-webui",
    title: "BAAS WebUI",
    description:
      "A web-based reconstruction of the Blue Archive Auto Script (BAAS) GUI, providing a modern interface for automation management.",
    image: "",
    category: "web",
    techStack: ["TypeScript", "Vue", "WebUI"],
    status: "in-progress",
    sourceCode: "https://github.com/Kiramei/baas-webui",
    visitUrl: "https://github.com/Kiramei/baas-webui",
    startDate: "2024-01-01", // Estimated based on activity
    featured: true,
    tags: ["Automation", "Blue Archive", "WebUI"],
  },
  {
    id: "baas-dev",
    title: "BAAS Dev",
    description:
      "Development branch for Blue Archive automation implementation. Forked from pur1fying, featuring custom improvements and WebSocket support.",
    image: "",
    category: "desktop",
    techStack: ["Python", "WebSocket", "Automation"],
    status: "in-progress",
    sourceCode: "https://github.com/Kiramei/baas-dev",
    visitUrl: "https://github.com/Kiramei/baas-dev",
    startDate: "2023-01-01",
    featured: true,
    tags: ["Game Script", "Python", "Automation"],
  },

  {
    id: "kiramei-personal-site",
    title: "Kiramei's Personal Website",
    description:
      "The official personal website and portfolio for Kiramei, built with Vue.js.",
    image: "",
    category: "web",
    techStack: ["Vue.js", "JavaScript", "HTML/CSS"],
    status: "completed",
    liveDemo: "https://kiramei.cn",
    sourceCode: "https://github.com/Kiramei/kiramei.github.io",
    visitUrl: "https://kiramei.cn",
    startDate: "2023-01-01",
    featured: false,
    tags: ["Portfolio", "Vue", "Web Design"],
  },

  // --------------------------------------------------------------------------
  // Research & Academic Projects
  // --------------------------------------------------------------------------
  {
    id: "cbfl",
    title: "CBFL",
    description:
      "Official Implementation of 'Learning Behavior Aware Features Across Spaces for Improved 3D Human Motion Prediction'.",
    image: "",
    category: "AI",
    techStack: ["Python", "Deep Learning", "PyTorch"],
    status: "completed",
    sourceCode: "https://github.com/Kiramei/CBFL",
    visitUrl: "https://github.com/Kiramei/CBFL",
    startDate: "2024-01-01",
    tags: ["Research", "AI", "3D Motion", "Computer Vision"],
  },
  {
    id: "dafcn",
    title: "DAFCN Implementation",
    description:
      "The official code implementation for the DAFCN research project.",
    image: "",
    category: "AI",
    techStack: ["Python", "Deep Learning"],
    status: "completed",
    sourceCode: "https://github.com/Kiramei/DAFCN",
    visitUrl: "https://github.com/Kiramei/DAFCN",
    startDate: "2024-01-01",
    tags: ["Research", "AI", "Code Implementation"],
  },
  {
    id: "treasure-lab306",
    title: "Treasure Lab306",
    description:
      "A collection of code, algorithms, and research treasures for Lab306.",
    image: "",
    category: "other",
    techStack: ["Jupyter Notebook", "Python"],
    status: "in-progress",
    sourceCode: "https://github.com/Kiramei/Treasure-Lab306",
    visitUrl: "https://github.com/Kiramei/Treasure-Lab306",
    startDate: "2023-06-01",
    tags: ["Research", "Lab", "Education"],
  },
  {
    id: "scholar-homepage",
    title: "Scholar Homepage",
    description:
      "Academic homepage showcasing research papers, interests in Deep Learning, and Neural Networks.",
    image: "",
    category: "web",
    techStack: ["HTML", "CSS"],
    status: "completed",
    sourceCode: "https://github.com/Kiramei/scholar-homepage-kiramei",
    visitUrl: "https://github.com/Kiramei/scholar-homepage-kiramei",
    startDate: "2024-01-01",
    tags: ["Academic", "Web"],
  },

  // --------------------------------------------------------------------------
  // Web Development Projects
  // --------------------------------------------------------------------------
  {
    id: "szu-mirrors-frontend",
    title: "SZU Mirrors Frontend",
    description:
      "The frontend web template developed for the Shenzhen University (SZU) Open Source Mirror Station.",
    image: "",
    category: "web",
    techStack: ["Vue.js", "JavaScript"],
    status: "completed",
    sourceCode: "https://github.com/Kiramei/szu-mirrors-frontend",
    visitUrl: "https://github.com/Kiramei/szu-mirrors-frontend",
    startDate: "2023-01-01",
    tags: ["Open Source", "Mirrors", "Vue"],
  },
  {
    id: "fluent-web-calculator",
    title: "Fluent Web Calculator",
    description:
      "A web-based calculator application imitating the Windows 11 Fluent Design aesthetic.",
    image: "",
    category: "web",
    techStack: ["JavaScript", "CSS", "HTML"],
    status: "completed",
    sourceCode: "https://github.com/Kiramei/fluent-web-calculator",
    visitUrl: "https://github.com/Kiramei/fluent-web-calculator",
    startDate: "2023-01-01",
    tags: ["UI/UX", "Fluent Design", "Tool"],
  },
  {
    id: "kiramei-blog-trial-next",
    title: "Kiramei Blog (Next.js Trial)",
    description:
      "A personal blog project built to experiment with Next.js and modern web technologies.",
    image: "",
    category: "web",
    techStack: ["TypeScript", "Next.js"],
    status: "completed",
    sourceCode: "https://github.com/Kiramei/kiramei-blog-trial-next",
    visitUrl: "https://github.com/Kiramei/kiramei-blog-trial-next",
    startDate: "2024-01-01",
    tags: ["Blog", "Next.js"],
  },
  {
    id: "kiramei-former-site",
    title: "Former Personal Site (Nuxt)",
    description:
      "Previous iteration of the personal website, built to test and learn Nuxt.js.",
    image: "",
    category: "web",
    techStack: ["Vue", "Nuxt.js"],
    status: "completed",
    sourceCode: "https://github.com/Kiramei/kiramei-former-site",
    visitUrl: "https://github.com/Kiramei/kiramei-former-site",
    startDate: "2023-01-01",
    tags: ["Archive", "Nuxt"],
  },
  {
    id: "kiramei-old-site",
    title: "Old Personal Site",
    description: "An older version of the personal website.",
    image: "",
    category: "web",
    techStack: ["JavaScript"],
    status: "completed",
    sourceCode: "https://github.com/Kiramei/kiramei-old-site",
    startDate: "2022-01-01",
    tags: ["Archive", "Web"],
  },
  {
    id: "kiramei-birthday",
    title: "Birthday Celebration Demo",
    description: "A simple web demo created for a birthday celebration.",
    image: "",
    category: "web",
    techStack: ["JavaScript"],
    status: "completed",
    sourceCode: "https://github.com/Kiramei/kiramei-birthday-celebration",
    startDate: "2023-05-01",
    tags: ["Demo", "Creative"],
  },

  // --------------------------------------------------------------------------
  // Desktop Tools & Scripts
  // --------------------------------------------------------------------------
  {
    id: "ascii-art",
    title: "ASCII Art Generator",
    description:
      "A creative coding project that converts video files into ASCII motion pictures.",
    image: "",
    category: "desktop",
    techStack: ["C#", "Multimedia"],
    status: "completed",
    sourceCode: "https://github.com/Kiramei/ASCII-Art",
    visitUrl: "https://github.com/Kiramei/ASCII-Art",
    startDate: "2022-01-01",
    featured: true,
    tags: ["C#", "Video Processing", "ASCII"],
  },
  {
    id: "video-2-text",
    title: "Video2Text",
    description: "A Java tool designed to transform normal videos into ASCII character videos.",
    image: "",
    category: "desktop",
    techStack: ["Java"],
    status: "completed",
    sourceCode: "https://github.com/Kiramei/Video2Text",
    startDate: "2022-12-01",
    tags: ["Java", "Multimedia"],
  },
  {
    id: "fetcher-531mk-window",
    title: "Fetcher 531mk (Windows)",
    description:
      "A desktop crawler application to fetch and download comics from 531mk.com.",
    image: "",
    category: "desktop",
    techStack: ["Java"],
    status: "completed",
    sourceCode: "https://github.com/Kiramei/fetcher-531mk-window",
    startDate: "2023-01-01",
    tags: ["Crawler", "Java", "Tool"],
  },
  {
    id: "kiramei-compression",
    title: "Kiramei Compression",
    description: "A utility project designed for zipping and compressing files.",
    image: "",
    category: "desktop",
    techStack: ["Java"],
    status: "completed",
    sourceCode: "https://github.com/Kiramei/Kiramei-Compression",
    startDate: "2024-01-01",
    tags: ["Utility", "Compression"],
  },
  {
    id: "rush-spider",
    title: "Rush Spider",
    description: "A crawler tool that grabs media URLs and generates downloads from a base URL.",
    image: "",
    category: "desktop",
    techStack: ["Java"],
    status: "completed",
    sourceCode: "https://github.com/Kiramei/RushSpider",
    startDate: "2021-01-01",
    tags: ["Crawler", "Java"],
  },
  {
    id: "zerochan-fetcher",
    title: "Zerochan Fetcher",
    description: "A simple Python script to fetch specific images from Zerochan.net.",
    image: "",
    category: "desktop",
    techStack: ["Python"],
    status: "completed",
    sourceCode: "https://github.com/Kiramei/ZerochanFetcher",
    startDate: "2024-01-01",
    tags: ["Script", "Python", "Image"],
  },
  {
    id: "endless-message-sender",
    title: "Endless Message Sender",
    description: "A VBA-based tool designed to automate sending endless messages.",
    image: "",
    category: "desktop",
    techStack: ["VBA"],
    status: "completed",
    sourceCode: "https://github.com/Kiramei/Endless-Message-Sender",
    startDate: "2022-10-01",
    tags: ["VBA", "Script"],
  },

  // --------------------------------------------------------------------------
  // Mobile Projects
  // --------------------------------------------------------------------------
  {
    id: "fetcher-531mk-android",
    title: "Fetcher 531mk (Android)",
    description:
      "The Android mobile version of the 531mk comic fetcher application.",
    image: "",
    category: "mobile",
    techStack: ["Java", "Android"],
    status: "completed",
    sourceCode: "https://github.com/Kiramei/fetcher-531mk-android",
    startDate: "2023-01-01",
    tags: ["Android", "Mobile", "Crawler"],
  },

  // --------------------------------------------------------------------------
  // Other / Learning / Config
  // --------------------------------------------------------------------------
  {
    id: "chiba-java",
    title: "Chiba Java Learning",
    description:
      "A collection of Java learning resources and projects from studies at Chiba University.",
    image: "",
    category: "other",
    techStack: ["Java"],
    status: "completed",
    sourceCode: "https://github.com/Kiramei/Chiba-Java",
    startDate: "2024-01-01",
    tags: ["Learning", "University"],
  },
  {
    id: "s4d-farm",
    title: "S4DFarm (CTF)",
    description: "Attack & Defense CTF Farm based on DestructiveFarm. Forked repo.",
    image: "",
    category: "other",
    techStack: ["Python"],
    status: "completed",
    sourceCode: "https://github.com/Kiramei/S4DFarm",
    startDate: "2023-08-01",
    tags: ["CTF", "Security"],
  },
  {
    id: "cnocr-trial",
    title: "CnOcr Model Train Trial",
    description: "A trial project for training CnOcr models (Experimental/Failed).",
    image: "",
    category: "other",
    techStack: ["Python"],
    status: "completed",
    sourceCode: "https://github.com/Kiramei/CnOcr-model-train-trial",
    startDate: "2024-04-01",
    tags: ["AI", "OCR", "Experiment"],
  },
  {
    id: "kiramei-config",
    title: "GitHub Profile Config",
    description: "Configuration files and README for the GitHub profile.",
    image: "",
    category: "other",
    techStack: ["Markdown"],
    status: "in-progress",
    sourceCode: "https://github.com/Kiramei/Kiramei",
    startDate: "2020-01-01",
    tags: ["Config"],
  },
];
// Get project statistics
export const getProjectStats = () => {
	const total = projectsData.length;
	const completed = projectsData.filter((p) => p.status === "completed").length;
	const inProgress = projectsData.filter(
		(p) => p.status === "in-progress",
	).length;
	const planned = projectsData.filter((p) => p.status === "planned").length;

	return {
		total,
		byStatus: {
			completed,
			inProgress,
			planned,
		},
	};
};

// Get projects by category
export const getProjectsByCategory = (category?: string) => {
	if (!category || category === "all") {
		return projectsData;
	}
	return projectsData.filter((p) => p.category === category);
};

// Get featured projects
export const getFeaturedProjects = () => {
	return projectsData.filter((p) => p.featured);
};

// Get all tech stacks
export const getAllTechStack = () => {
	const techSet = new Set<string>();
	projectsData.forEach((project) => {
		project.techStack.forEach((tech) => {
			techSet.add(tech);
		});
	});
	return Array.from(techSet).sort();
};
