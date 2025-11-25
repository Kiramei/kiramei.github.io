// Timeline data configuration file
// Used to manage data for the timeline page

export interface TimelineItem {
	id: string;
	title: string;
	description: string;
	type: "education" | "work" | "project" | "achievement";
	startDate: string;
	endDate?: string; // If empty, it means current
	location?: string;
	organization?: string;
	position?: string;
	skills?: string[];
	achievements?: string[];
	links?: {
		name: string;
		url: string;
		type: "website" | "certificate" | "project" | "other";
	}[];
	icon?: string; // Iconify icon name
	color?: string;
	featured?: boolean;
}

export const timelineData: TimelineItem[] = [
  {
    id: "cu-current-study",
    title: "Computer Science & Intelligent Systems (Exchange Study)",
    description:
      "Currently studying computer science and AI-related curriculum as an exchange student, focusing on multimodal deep learning, diffusion models, and research-driven development.",
    type: "education",
    startDate: "2024-10-01",
    endDate: "2025-02-06",
    location: "Chiba, Japan",
    organization: "Chiba University",
    skills: ["Deep Learning", "Diffusion Models", "Computer Vision", "Machine Learning"],
    achievements: [
      "Participated in Japan-based AI research community",
      "Conducted multiple experiments in motion prediction and generative modeling",
      "Strengthened cross-cultural communication and academic collaboration ability"
    ],
    icon: "material-symbols:school",
    color: "#059669",
    featured: true
  },
  {
    id: "su-undergraduate",
    title: "Electronic and Information Engineering",
    description:
      "Studied Electronics, Computer Engineering, Signal Processing, and Embedded Systems with growing focus on AI research and large-scale software engineering.",
    type: "education",
    startDate: "2022-09-01",
    location: "Shenzhen, China",
    organization: "Shenzhen University",
    skills: ["C/C++", "Python", "Embedded Systems", "Digital Signal Processing"],
    achievements: [
      "Published conference paper (AIPR 2024)",
      "Top student leadership role with strong technical contributions",
      "Multiple innovation & entrepreneurship awards"
    ],
    icon: "material-symbols:school",
    color: "#3B82F6",
    featured: true
  },
  {
    id: "szuea-president",
    title: "President of Electronics Association",
    description:
      "Led the Electronics Association of Shenzhen University, building an engineering-driven learning community, organizing workshops, competitions, and open-source technical activities.",
    type: "work",
    startDate: "2023-09-01",
    endDate: "2024-09-01",
    organization: "SZUEA — Shenzhen University Electronics Association",
    position: "President",
    skills: ["Leadership", "Organization", "Public Speaking", "Team Management"],
    achievements: [
      "Led the largest technology student association in the school",
      "Established stable technical recruitment, training and competition ecosystem",
      "Recognized as Excellent Student Leader & Innovation Talent"
    ],
    icon: "material-symbols:groups",
    color: "#F97316",
    featured: true
  },
  {
    id: "blue-archive-auto-script",
    title: "BlueArchive Auto Script System",
    description:
      "Developed a cross-platform automation system with Python + PyQt UI + WebSocket backend architecture, featuring configurable logic, real-time interaction, and packaging for non-technical users.",
    type: "project",
    startDate: "2024-04-01",
    skills: [
      "Python",
      "PyQt",
      "WebSockets",
      "Computer Vision",
      "Process Automation",
      "UI/UX Engineering"
    ],
    achievements: [
      "Built full-stack architecture including installer, UI, automation logic and update flow",
      "Served hundreds of users with strong community feedback",
      "Iterated multiple versions with performance and UX improvements"
    ],
    icon: "material-symbols:smart-toy",
    color: "#7C3AED",
    featured: true
  },
  {
    id: "research-human-motion-prediction",
    title: "Research: Human Motion Prediction Using Deep Learning",
    description:
      "Developed advanced motion prediction model combining Graph Neural Networks, Transformers, and Diffusion Models. Explored architectural design, model optimization, and mathematical formulation.",
    type: "project",
    startDate: "2024-05-01",
    endDate: "2024-11-01",
    skills: [
      "PyTorch",
      "GCN",
      "Transformer",
      "Diffusion Models",
      "Mathematical Modeling",
      "Scientific Writing"
    ],
    achievements: [
      "Constructed a novel architecture achieving competitive performance",
      "Designed multi-frequency structured loss and hybrid fusion pipeline",
      "Result published as AIPR 2024 second author paper"
    ],
    icon: "material-symbols:science",
    color: "#0EA5E9",
    featured: true
  },
  {
    id: "awards",
    title: "Competition & Research Awards",
    description:
      "Received multiple recognitions for innovation, engineering excellence, and research contributions.",
    type: "achievement",
    startDate: "2023-01-01",
    achievements: [
      "Shenzhen University Innovation Star — Individual & Group Awards",
      "Top Awards: GBA Data Innovation Competition & National Internet+",
      "Provincial Awards in Intelligent Systems and Open-Source Competitions"
    ],
    icon: "material-symbols:emoji-events",
    color: "#FFD700"
  },
  {
    id: "first-coding-memory",
    title: "First Encounter with Programming",
    description:
      "Started programming exploration independently, gradually transitioning from hobbyist experimentation to research-oriented system development.",
    type: "education",
    startDate: "2019-05-01",
    skills: ["Python", "Logical Thinking", "Algorithmic Fundamentals"],
    achievements: [
      "Wrote first working automation script",
      "Realized passion for building intelligent systems"
    ],
    icon: "material-symbols:code",
    color: "#6D28D9"
  }
];

// Get timeline statistics
export const getTimelineStats = () => {
	const total = timelineData.length;
	const byType = {
		education: timelineData.filter((item) => item.type === "education").length,
		work: timelineData.filter((item) => item.type === "work").length,
		project: timelineData.filter((item) => item.type === "project").length,
		achievement: timelineData.filter((item) => item.type === "achievement")
			.length,
	};

	return { total, byType };
};

// Get timeline items by type
export const getTimelineByType = (type?: string) => {
	if (!type || type === "all") {
		return timelineData.sort(
			(a, b) =>
				new Date(b.startDate).getTime() - new Date(a.startDate).getTime(),
		);
	}
	return timelineData
		.filter((item) => item.type === type)
		.sort(
			(a, b) =>
				new Date(b.startDate).getTime() - new Date(a.startDate).getTime(),
		);
};

// Get featured timeline items
export const getFeaturedTimeline = () => {
	return timelineData
		.filter((item) => item.featured)
		.sort(
			(a, b) =>
				new Date(b.startDate).getTime() - new Date(a.startDate).getTime(),
		);
};

// Get current ongoing items
export const getCurrentItems = () => {
	return timelineData.filter((item) => !item.endDate);
};

// Calculate total work experience
export const getTotalWorkExperience = () => {
	const workItems = timelineData.filter((item) => item.type === "work");
	let totalMonths = 0;

	workItems.forEach((item) => {
		const startDate = new Date(item.startDate);
		const endDate = item.endDate ? new Date(item.endDate) : new Date();
		const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
		const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30));
		totalMonths += diffMonths;
	});

	return {
		years: Math.floor(totalMonths / 12),
		months: totalMonths % 12,
	};
};
