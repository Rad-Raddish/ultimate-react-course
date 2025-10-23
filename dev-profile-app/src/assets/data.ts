export type SkillItem = {
  skill: string;
  // narrow the experience values if you use them in conditionals
  experience: "low" | "med" | "high";
  color: string;
  emoji?: string;
};

export const skillsData: SkillItem[] = [
  { skill: "HTML+CSS", experience: "high", color: "lightblue" },
  { skill: "JavaScript", experience: "high", color: "yellow" },
  { skill: "Web Dev", experience: "med", color: "lightgreen" },
  { skill: "Github", experience: "med", color: "maroon" },
  { skill: "React", experience: "low", color: "teal" },
  { skill: "TypeScript", experience: "low", color: "red" },
  { skill: "AWS", experience: "med", color: "darkgreen" },
];

export default skillsData;
