import { FC } from "react";
import { Text } from "react-konva";
import { ISkill } from "../../../@types/skills";

type Props = {
  skill: ISkill;
};

const SkillName: FC<Props> = ({ skill }) => {
  const x = skill.requiredPoints !== undefined ? -15 : 0;
  const y = skill.requiredPoints !== undefined ? -10 : 70;

  return (
    <Text
      text={skill.name}
      fontSize={14}
      y={y}
      x={x}
      fill={"#DCB166"}
      shadowColor="black"
      shadowBlur={5}
      shadowOffsetX={2}
      shadowOffsetY={2}
      shadowForStrokeEnabled={false}
      perfectDrawEnabled={false}
      lineHeight={1.5}
    />
  );
};

export { SkillName };
