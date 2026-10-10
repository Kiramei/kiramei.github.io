export interface Skill {
	id: string;
	name: string;
	description: string;
	icon: string;
	category: "frontend" | "backend" | "database" | "tools" | "other";
	level: "beginner" | "intermediate" | "advanced" | "expert";
	experience: { years: number; months: number };
	projects?: string[];
	certifications?: string[];
	color?: string;
}

// A compact snapshot of skills demonstrated by the current public portfolio.
export const skillsData: Skill[] = [
	{
		id: "python",
		name: "Python",
		description:
			"Primary language for efficient-AI research, motion prediction, automation, and reproducible experiments.",
		icon: "logos:python",
		category: "backend",
		level: "advanced",
		experience: { years: 6, months: 0 },
		projects: ["chebbooster", "barycache", "cbfl", "dafcn", "baas-core"],
		color: "#3776AB",
	},
	{
		id: "pytorch",
		name: "PyTorch",
		description:
			"Research framework for Diffusion Transformer acceleration and 3D human motion prediction.",
		icon: "logos:pytorch-icon",
		category: "other",
		level: "advanced",
		experience: { years: 2, months: 6 },
		projects: ["chebbooster", "barycache", "cbfl", "dafcn"],
		color: "#EE4C2C",
	},
	{
		id: "typescript",
		name: "TypeScript",
		description:
			"Typed frontend and desktop application development across BAAS Tauri and this Astro site.",
		icon: "logos:typescript-icon",
		category: "frontend",
		level: "advanced",
		experience: { years: 3, months: 0 },
		projects: ["baas-tauri", "kiramei-personal-site"],
		color: "#3178C6",
	},
	{
		id: "astro",
		name: "Astro",
		description:
			"Static-first web development with content collections, responsive components, and performance-conscious asset delivery.",
		icon: "logos:astro-icon",
		category: "frontend",
		level: "intermediate",
		experience: { years: 1, months: 0 },
		projects: ["kiramei-personal-site"],
		color: "#BC52EE",
	},
	{
		id: "tauri",
		name: "Tauri",
		description:
			"Cross-platform desktop packaging and native integration for the current BAAS interface.",
		icon: "logos:tauri",
		category: "tools",
		level: "intermediate",
		experience: { years: 2, months: 0 },
		projects: ["baas-tauri"],
		color: "#FFC131",
	},
	{
		id: "rust",
		name: "Rust",
		description:
			"Native application integration and backend work in the Tauri ecosystem.",
		icon: "logos:rust",
		category: "backend",
		level: "intermediate",
		experience: { years: 2, months: 0 },
		projects: ["baas-tauri"],
		color: "#CE422B",
	},
	{
		id: "opencv",
		name: "OpenCV",
		description:
			"Image matching and computer-vision-assisted interaction in automation workflows.",
		icon: "logos:opencv",
		category: "other",
		level: "advanced",
		experience: { years: 3, months: 0 },
		projects: ["baas-core"],
		color: "#5C3EE8",
	},
	{
		id: "latex",
		name: "LaTeX",
		description:
			"Academic writing, mathematical typesetting, reusable document styles, diagrams, and publication-ready layouts.",
		icon: "simple-icons:latex",
		category: "other",
		level: "advanced",
		experience: { years: 2, months: 6 },
		projects: ["kiramei-preprint", "chebbooster", "barycache", "cbfl", "dafcn"],
		color: "#008080",
	},
	{
		id: "git",
		name: "Git & GitHub",
		description:
			"Versioned research, collaborative open-source development, releases, documentation, and Pages deployment.",
		icon: "logos:git-icon",
		category: "tools",
		level: "advanced",
		experience: { years: 6, months: 0 },
		projects: [
			"kiramei-personal-site",
			"baas-tauri",
			"chebbooster",
			"barycache",
		],
		color: "#F05032",
	},
	{
		id: "mv-production",
		name: "Music Video Production",
		description:
			"Scene planning, illustration workflows, typography, subtitles, motion, compositing, and visual storytelling for cover-song MVs.",
		icon: "material-symbols:movie-edit",
		category: "tools",
		level: "intermediate",
		experience: { years: 1, months: 0 },
		color: "#EC4899",
	},
];

export const getSkillStats = () => ({
	total: skillsData.length,
	byLevel: {
		beginner: skillsData.filter((s) => s.level === "beginner").length,
		intermediate: skillsData.filter((s) => s.level === "intermediate").length,
		advanced: skillsData.filter((s) => s.level === "advanced").length,
		expert: skillsData.filter((s) => s.level === "expert").length,
	},
	byCategory: {
		frontend: skillsData.filter((s) => s.category === "frontend").length,
		backend: skillsData.filter((s) => s.category === "backend").length,
		database: skillsData.filter((s) => s.category === "database").length,
		tools: skillsData.filter((s) => s.category === "tools").length,
		other: skillsData.filter((s) => s.category === "other").length,
	},
});

export const getSkillsByCategory = (category?: string) => {
	if (!category || category === "all") return skillsData;
	return skillsData.filter((s) => s.category === category);
};

export const getAdvancedSkills = () =>
	skillsData.filter((s) => s.level === "advanced" || s.level === "expert");

export const getTotalExperience = () => {
	// Parallel skills should not be added together; use the longest active track.
	const totalMonths = Math.max(
		...skillsData.map(
			(skill) => skill.experience.years * 12 + skill.experience.months,
		),
	);
	return { years: Math.floor(totalMonths / 12), months: totalMonths % 12 };
};
