export type Project = {
  name: string;
  description: string;
  tags: string[];
  href: string;
  status: string;
  kind: "football" | "baseball" | "bot";
};
export const projects: Project[] = [
  {
    name: "Reading the game",
    description:
      "A J1 League scouting dashboard that explores player profiles through clustering, regression, and similarity.",
    tags: ["Python", "Sports analytics", "NumPy"],
    href: "https://github.com/LeFrenny/j1-player-performance-dashboard",
    status: "Complete",
    kind: "football",
  },
  {
    name: "What’s the next pitch?",
    description:
      "A baseball pitch recommender built around game situations and batter history, including a closer look at data leakage.",
    tags: ["Python", "XGBoost", "Baseball"],
    href: "https://github.com/LeFrenny/baseball-pitch-type-recommender",
    status: "Complete",
    kind: "baseball",
  },
  {
    name: "Meet AlisaBot",
    description:
      "A Discord companion with RPG systems, economy mechanics, and AI integration. An ongoing playground for building game systems.",
    tags: ["C#", "Discord.Net", "Games"],
    href: "https://github.com/LeFrenny/AlisaBot",
    status: "In progress",
    kind: "bot",
  },
  {
    name: "Putting a name to a pitch",
    description:
      "A classification pipeline comparing how different models identify baseball pitches from statistical features.",
    tags: ["Python", "Scikit-learn", "Classification"],
    href: "https://github.com/LeFrenny/baseball-pitch-type-classifier",
    status: "Complete",
    kind: "baseball",
  },
];
