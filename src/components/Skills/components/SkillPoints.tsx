import { FC } from "react";
import { Text } from "react-konva";
import { ISkill } from "../../../@types/skills";

export type skillPointsType = {
  skill: ISkill;
};

const SkillPoints: FC<skillPointsType> = (props) => {
  const { skill } = props;
  if (
    skill.maxPoints === undefined ||
    skill.maxPoints <= 0 ||
    skill.damageType === undefined
  )
    return null;

  return (
    <Text
      x={40}
      y={50}
      fontSize={18}
      text={`${skill.points?.toString()}/${skill.maxPoints?.toString()}`}
      fontStyle={"bold"}
      fill={"#d5cfcd"}
      shadowColor={"#000000"}
      shadowBlur={2}
      shadowOffsetX={2}
      shadowOffsetY={1}
    />
  );
};

export { SkillPoints };
