import { Group, Text } from "react-konva";
import { ISkill } from "../../@types/skills";
import { useState } from "react";

type EditProps = {
  skill: ISkill;
  stage: any;
};

const Edit = (props: EditProps) => {
  const { skill, stage } = props;
  const [modal, setModal] = useState(false);

  const EditSkillModal = () => {};

  return (
    <Group key={`edit-skill${skill.id}`}>
      <Text
        text="Add Connection"
        fontSize={12}
        fill="#A4BE7B"
        x={70}
        y={-2}
        shadowBlur={5}
        shadowOffsetX={2}
        shadowOffsetY={2}
        pointerCursor={true}
        onMouseOver={(e) => {
          stage.current.container().style.cursor = "pointer";
        }}
        onMouseLeave={(e) => {
          stage.current.container().style.cursor = "default";
        }}
        onClick={(e) => {
          console.log(skill.name);
          setModal(true);
        }}
      />
    </Group>
  );
};

export { Edit };
