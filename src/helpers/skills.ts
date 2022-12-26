import { ISkill } from "../@types/skills";

export const getSkills = (skills: ISkill[], skillsIds: string[]): ISkill[] => {
  return skills.filter((skill) => skillsIds.includes(skill.id));
};
