import ProjectCard, { type Project } from "@/components/ProjectCard";
import SectionHeader from "@/components/SectionHeader";

const projects: Project[] = [
  {
    name: "J1 League Player Performance Dashboard",
    description:
      "Scouting analytics dashboard using StatsBomb and Hudl data. K-Means clustering, Ridge regression, and cosine similarity for player profiling. Custom NumPy ML pipeline.",
    tags: ["Python", "StatsBomb", "K-Means", "Ridge Regression", "NumPy"],
    href: "https://github.com/Solace00/j1-player-performance-dashboard",
    stat: "complete",
  },
  {
    name: "Baseball Pitch Type Recommender",
    description:
      "Multi-classifier pitch recommendation system using XGBoost. Includes data leakage diagnosis and fix. Recommends optimal pitch type based on game situation and batter history.",
    tags: ["Python", "XGBoost", "ML", "Baseball"],
    href: "https://github.com/Solace00/baseball-pitch-type-recommender",
    stat: "complete",
  },
  {
    name: "Baseball Pitch Type Classifier",
    description:
      "Classification pipeline for identifying pitch types from statistical features. Comparative analysis across multiple classifiers with performance benchmarking.",
    tags: ["Python", "Classification", "Scikit-learn", "Baseball"],
    href: "https://github.com/Solace00/baseball-pitch-type-classifier",
    stat: "complete",
  },
  {
    name: "AlisaBot",
    description:
      "Discord bot with RPG systems, economy mechanics, and AI integration. Built in C# with Discord.Net.",
    tags: ["C#", "Discord.Net", "RPG Systems", "AI"],
    href: "https://github.com/Solace00/AlisaBot",
    stat: "active",
  },
];

export default function ProjectsPage() {
  return (
    <div>
      <SectionHeader
        eyebrow="$ ls ./projects"
        title="Projects"
        description="Selected repositories and experiments, kept as simple cards with stack tags and placeholder links."
      />
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </div>
  );
}
