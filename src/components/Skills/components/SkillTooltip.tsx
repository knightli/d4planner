import { Text, Label, Tag } from "react-konva";
import { ISkill } from "../../../@types/skills";

export type skillToolTipType = {
  skill: ISkill;
};

const SkillToolTip = (props: skillToolTipType) => {
  const { skill } = props;

  if (skill === null || skill.description === "") return null;

  const descriptionBuilder = (description?: string, values?: string[]) => {
    if (!description || !values) {
      return description;
    }

    return description.replace(/{#}/g, () => {
      const shallowValues = [...values];
      const value = shallowValues.shift();
      return value ? value : "{#}";
    });
  };

  const formattedDescription = descriptionBuilder(
    skill.description,
    skill.values
  );

  const leftOffset = skill.damageType === undefined ? 40 : 70;

  return (
    <Label x={skill.x + leftOffset} y={skill.y + 30}>
      <Tag
        fill="rgba(36, 37, 38, 0.8)"
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
        text={`${skill.name}\n${formattedDescription}`}
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
