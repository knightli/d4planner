import { FC } from "react";
import { Text } from "react-konva";
import { ISkill } from "../../../@types/skills";

export type skillPointsType = {
  skill: ISkill;
};

const SkillPoints: FC<skillPointsType> = (props) => {
  const { skill } = props;
  if (skill.maxPoints === undefined || skill.maxPoints <= 0) return null;

  return (
    <Text
      x={38}
      y={45}
      text={`${skill.points?.toString()}/${skill.maxPoints?.toString()}`}
      fontStyle={"bold"}
      fill={"#FD841F"}
    />
  );
};

export { SkillPoints };
