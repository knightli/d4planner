import { Text, Label, Tag } from "react-konva";
import { ISkill } from "../../../@types/skills";

export type skillToolTipType = {
  skill: ISkill;
};

const SkillToolTip = (props: skillToolTipType) => {
  const { skill } = props;

  if (skill === null || skill.description === "") return null;

  return (
    <Label x={skill.x + 70} y={skill.y + 30} opacity={0.75}>
      <Tag
        fill="#474E68"
        pointerDirection="left"
        pointerWidth={20}
        pointerHeight={28}
        lineJoin="round"
        shadowBlur={10}
        shadowOffsetX={1}
        shadowOffsetY={1}
        shadowForStrokeEnabled={false}
        perfectDrawEnabled={false}
      />
      <Text
        text={`${skill.name}\n${skill.description}`}
        width={300}
        fontSize={14}
        fill={"#DCB166"}
        shadowColor="black"
        shadowBlur={5}
        shadowOffsetX={2}
        shadowOffsetY={2}
        shadowForStrokeEnabled={false}
        perfectDrawEnabled={false}
        padding={10}
        lineHeight={1.5}
      />
    </Label>
  );
};

export { SkillToolTip };
