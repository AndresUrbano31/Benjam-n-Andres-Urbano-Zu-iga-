export interface SkillGroup {
  categoryKey: string;
  skillsKey: string;
}

export const skillGroups: SkillGroup[] = [
  {
    categoryKey: "skills.backend.category",
    skillsKey: "skills.backend.items",
  },
  {
    categoryKey: "skills.tools.category",
    skillsKey: "skills.tools.items",
  },
  {
    categoryKey: "skills.fundamentals.category",
    skillsKey: "skills.fundamentals.items",
  },
];