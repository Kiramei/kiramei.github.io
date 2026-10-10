// Curated public portfolio. GitHub remains the complete archive of experiments.
export interface Project {
	id: string;
	title: string;
	description: string;
	image: string;
	category: "AI" | "web" | "mobile" | "desktop" | "other";
	techStack: string[];
	// UI labels map these legacy values to Active, Released, and Archived.
	status: "completed" | "in-progress" | "planned";
	liveDemo?: string;
	sourceCode?: string;
	startDate: string;
	endDate?: string;
	featured?: boolean;
	tags?: string[];
	visitUrl?: string;
}

export const projectsData: Project[] = [
	{
		id: "chebbooster",
		title: "ChebBooster",
		description:
			"A training-free accelerator for Diffusion Transformers built around Chebyshev-style feature extrapolation. It reuses intermediate features across denoising steps to reduce latency without changing or retraining the original model weights.",
		image:
			"https://raw.githubusercontent.com/Kiramei/ChebBooster/main/docs/assets/teaser.png",
		category: "AI",
		techStack: ["Python", "PyTorch", "Diffusion Transformers", "Feature Reuse"],
		status: "in-progress",
		sourceCode: "https://github.com/Kiramei/ChebBooster",
		visitUrl: "https://kiramei.github.io/ChebBooster/",
		startDate: "2026-08-18",
		featured: true,
		tags: ["Training-free", "Generative AI", "Inference Acceleration"],
	},
	{
		id: "barycache",
		title: "BaryCache",
		description:
			"A memory-conscious cache accelerator for image and video Diffusion Transformers. A clipped, decay-adjusted barycentric extrapolator works from a short output history instead of retaining large per-layer activation caches.",
		image:
			"https://raw.githubusercontent.com/Kiramei/BaryCache/main/docs/static/images/overview.png",
		category: "AI",
		techStack: [
			"Python",
			"PyTorch",
			"Diffusion Transformers",
			"Barycentric Extrapolation",
		],
		status: "in-progress",
		sourceCode: "https://github.com/Kiramei/BaryCache",
		visitUrl: "https://kiramei.github.io/BaryCache/",
		startDate: "2026-08-19",
		featured: true,
		tags: ["Memory Efficient", "Generative AI", "Cache Acceleration"],
	},
	{
		id: "baas-tauri",
		title: "BAAS Tauri",
		description:
			"The current desktop home of the BAAS interface. It brings the former standalone WebUI into a Tauri application, combining a responsive TypeScript frontend with native packaging and the actively maintained BAAS automation workflow.",
		image: "",
		category: "desktop",
		techStack: ["TypeScript", "Tauri", "Rust", "Vue"],
		status: "in-progress",
		sourceCode: "https://github.com/Kiramei/baas-tauri",
		visitUrl: "https://baas.kiramei.moe/",
		startDate: "2024-06-01",
		featured: true,
		tags: ["Desktop App", "Cross-platform", "Active"],
	},
	{
		id: "baas-core",
		title: "BAAS Core",
		description:
			"An actively maintained development branch of the Blue Archive automation system, covering task execution, computer-vision-assisted interaction, configuration, updates, and communication with the desktop interface.",
		image: "",
		category: "desktop",
		techStack: ["Python", "Computer Vision", "WebSocket", "Automation"],
		status: "in-progress",
		sourceCode: "https://github.com/Kiramei/baas-dev",
		visitUrl: "https://baas.wiki",
		startDate: "2023-01-01",
		tags: ["Open Source", "Automation", "Active"],
	},
	{
		id: "kiramei-preprint",
		title: "Kiramei Preprint Style",
		description:
			"A reusable XeLaTeX style for arXiv preprints, technical reports, and manuscripts. It supports single- and two-column layouts and collects typography, bibliography, theorem, algorithm, code-listing, TikZ, and PGFPlots conventions in one template.",
		image:
			"https://raw.githubusercontent.com/Kiramei/kiramei-preprint/main/assets/two-column.png",
		category: "other",
		techStack: ["LaTeX", "XeLaTeX", "BibTeX", "TikZ"],
		status: "completed",
		sourceCode: "https://github.com/Kiramei/kiramei-preprint",
		visitUrl: "https://github.com/Kiramei/kiramei-preprint",
		startDate: "2026-08-17",
		featured: true,
		tags: ["Academic Writing", "Template", "arXiv"],
	},
	{
		id: "cbfl",
		title: "CBFL",
		description:
			"The official implementation of Learning Behavior-Aware Features Across Spaces for 3D human motion prediction. It combines geometric-algebra dependencies with Euclidean temporal and spatial kinematics so complementary spaces can describe motion structure together.",
		image: "",
		category: "AI",
		techStack: ["Python", "PyTorch", "Geometric Algebra", "3D Motion"],
		status: "completed",
		sourceCode: "https://github.com/Kiramei/CBFL",
		visitUrl: "https://github.com/Kiramei/CBFL",
		startDate: "2025-07-04",
		endDate: "2025-08-06",
		featured: true,
		tags: ["Human Motion Prediction", "Research", "Official Implementation"],
	},
	{
		id: "dafcn",
		title: "DAFCN",
		description:
			"A dual-path attention Fourier convolutional network for human motion prediction. Motion attention preserves informative near-term cues while Fast Fourier Convolution models longer-range dynamics before both paths are fused for forecasting.",
		image: "/assets/posts/dafcn-architecture.png",
		category: "AI",
		techStack: ["Python", "PyTorch", "Fourier Convolution", "Motion Attention"],
		status: "completed",
		sourceCode: "https://github.com/Kiramei/DAFCN",
		visitUrl: "https://github.com/Kiramei/DAFCN",
		startDate: "2025-04-20",
		endDate: "2025-07-04",
		featured: true,
		tags: ["Human Motion Prediction", "Research", "Official Implementation"],
	},
	{
		id: "kiramei-personal-site",
		title: "Kiramei's Personal Website",
		description:
			"This continuously maintained Astro site: a fast, responsive home for project notes, research write-ups, and music-video production stories.",
		image: "",
		category: "web",
		techStack: ["Astro", "Svelte", "TypeScript", "Tailwind CSS"],
		status: "in-progress",
		liveDemo: "https://kiramei.cn",
		sourceCode: "https://github.com/Kiramei/kiramei.github.io",
		visitUrl: "https://kiramei.cn",
		startDate: "2021-01-26",
		tags: ["Portfolio", "Static Site", "Active"],
	},
	{
		id: "baas-webui",
		title: "BAAS WebUI",
		description:
			"The archived standalone interface that introduced BAAS's multi-profile dashboard, scheduler, realtime logs, and configuration workflow. Its maintained successor now lives inside BAAS Tauri.",
		image: "",
		category: "web",
		techStack: ["TypeScript", "Vue", "WebUI"],
		status: "planned",
		sourceCode: "https://github.com/Kiramei/baas-webui",
		visitUrl: "https://github.com/Kiramei/baas-tauri",
		startDate: "2024-01-01",
		endDate: "2026-06-10",
		tags: ["Archived", "Merged into BAAS Tauri"],
	},
];

export const getProjectStats = () => {
	const total = projectsData.length;
	const completed = projectsData.filter((p) => p.status === "completed").length;
	const inProgress = projectsData.filter(
		(p) => p.status === "in-progress",
	).length;
	const planned = projectsData.filter((p) => p.status === "planned").length;
	return { total, byStatus: { completed, inProgress, planned } };
};

export const getProjectsByCategory = (category?: string) => {
	if (!category || category === "all") return projectsData;
	return projectsData.filter((p) => p.category === category);
};

export const getFeaturedProjects = () => projectsData.filter((p) => p.featured);

export const getAllTechStack = () => {
	const techSet = new Set<string>();
	projectsData.forEach((project) => {
		project.techStack.forEach((tech) => {
			techSet.add(tech);
		});
	});
	return Array.from(techSet).sort();
};
