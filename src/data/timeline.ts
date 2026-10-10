// Public, project-focused timeline. Avoid personal location and education details.
export interface TimelineItem {
	id: string;
	title: string;
	description: string;
	type: "education" | "work" | "project" | "achievement";
	startDate: string;
	endDate?: string;
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
	icon?: string;
	color?: string;
	featured?: boolean;
}

export const timelineData: TimelineItem[] = [
	{
		id: "efficient-diffusion-research",
		title: "Efficient Diffusion Transformer Research",
		description:
			"Developing training-free methods that make image and video Diffusion Transformers faster and less memory-hungry, with reproducible implementations and project pages for ChebBooster and BaryCache.",
		type: "project",
		startDate: "2026-08-18",
		skills: [
			"PyTorch",
			"Diffusion Transformers",
			"Numerical Methods",
			"Efficient Inference",
		],
		achievements: [
			"Released ChebBooster",
			"Released BaryCache",
			"Published code, documentation, and reproducible examples",
		],
		links: [
			{
				name: "ChebBooster",
				url: "https://github.com/Kiramei/ChebBooster",
				type: "project",
			},
			{
				name: "BaryCache",
				url: "https://github.com/Kiramei/BaryCache",
				type: "project",
			},
		],
		icon: "material-symbols:speed",
		color: "#7C3AED",
		featured: true,
	},
	{
		id: "baas-tauri",
		title: "BAAS Desktop Ecosystem",
		description:
			"Maintaining the BAAS automation branch and evolving its desktop experience in Tauri. The former standalone WebUI was archived after its interface and documentation moved into BAAS Tauri.",
		type: "project",
		startDate: "2024-06-01",
		skills: ["Python", "TypeScript", "Tauri", "Computer Vision", "WebSocket"],
		achievements: [
			"Unified the desktop interface in BAAS Tauri",
			"Archived BAAS WebUI after migration",
			"Continued active maintenance of BAAS Core",
		],
		links: [
			{
				name: "BAAS Tauri",
				url: "https://github.com/Kiramei/baas-tauri",
				type: "project",
			},
			{ name: "BAAS Wiki", url: "https://baas.wiki", type: "website" },
		],
		icon: "material-symbols:desktop-windows",
		color: "#0EA5E9",
		featured: true,
	},
	{
		id: "kiramei-site",
		title: "Kiramei's Site",
		description:
			"Continuously refining a fast Astro-based home for research notes, open-source projects, and music-video production stories.",
		type: "project",
		startDate: "2021-01-26",
		skills: ["Astro", "TypeScript", "Svelte", "Responsive Design"],
		links: [
			{ name: "Website", url: "https://kiramei.cn", type: "website" },
			{
				name: "Source",
				url: "https://github.com/Kiramei/kiramei.github.io",
				type: "project",
			},
		],
		icon: "material-symbols:language",
		color: "#EC4899",
	},
	{
		id: "kiramei-preprint",
		title: "Kiramei Preprint Style Released",
		description:
			"Packaged a reusable XeLaTeX style for preprints and technical writing, including coordinated layouts for citations, theorems, algorithms, listings, diagrams, and plots.",
		type: "achievement",
		startDate: "2026-08-17",
		endDate: "2026-08-17",
		skills: ["XeLaTeX", "BibTeX", "TikZ", "Technical Writing"],
		links: [
			{
				name: "Template",
				url: "https://github.com/Kiramei/kiramei-preprint",
				type: "project",
			},
		],
		icon: "material-symbols:description",
		color: "#F59E0B",
	},
	{
		id: "cbfl",
		title: "CBFL Official Implementation",
		description:
			"Released the official implementation of behavior-aware feature learning across geometric-algebra and Euclidean spaces for 3D human motion prediction.",
		type: "achievement",
		startDate: "2025-07-04",
		endDate: "2025-08-06",
		skills: ["PyTorch", "Geometric Algebra", "3D Human Motion"],
		links: [
			{ name: "CBFL", url: "https://github.com/Kiramei/CBFL", type: "project" },
		],
		icon: "material-symbols:directions-run",
		color: "#10B981",
	},
	{
		id: "dafcn",
		title: "DAFCN Official Implementation",
		description:
			"Released a dual-path network that combines motion attention with Fast Fourier Convolution for short- and long-horizon human motion prediction.",
		type: "achievement",
		startDate: "2025-04-20",
		endDate: "2025-07-04",
		skills: ["PyTorch", "Fourier Convolution", "Motion Attention"],
		links: [
			{
				name: "DAFCN",
				url: "https://github.com/Kiramei/DAFCN",
				type: "project",
			},
		],
		icon: "material-symbols:timeline",
		color: "#6366F1",
	},
];

export const getTimelineStats = () => ({
	total: timelineData.length,
	byType: {
		education: timelineData.filter((item) => item.type === "education").length,
		work: timelineData.filter((item) => item.type === "work").length,
		project: timelineData.filter((item) => item.type === "project").length,
		achievement: timelineData.filter((item) => item.type === "achievement")
			.length,
	},
});

export const getTimelineByType = (type?: string) => {
	const items =
		!type || type === "all"
			? timelineData
			: timelineData.filter((item) => item.type === type);
	return [...items].sort(
		(a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime(),
	);
};

export const getFeaturedTimeline = () =>
	timelineData
		.filter((item) => item.featured)
		.sort(
			(a, b) =>
				new Date(b.startDate).getTime() - new Date(a.startDate).getTime(),
		);

export const getCurrentItems = () =>
	timelineData.filter((item) => !item.endDate);

export const getTotalWorkExperience = () => ({ years: 0, months: 0 });
