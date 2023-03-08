import { memo } from "react";
import { Image } from "react-konva";
import { ISkill, SkillsContextType } from "../../../@types/skills";
import { useSkills } from "../../../context/Skills";

type TrashProps = {
  skill: ISkill;
  stage: any;
  image: HTMLImageElement | null;
};

const Trash = memo<TrashProps>((props) => {
  const { image, stage, skill } = props;
  const { removeSkill } = useSkills() as SkillsContextType;

  if (!image) return null;

  const passiveSkill = skill.damageType === undefined;

  return (
    <Image
      image={image}
      width={15}
      height={15}
      x={passiveSkill ? 40 : 70}
      y={25}
      shadowBlur={5}
      shadowOffsetX={2}
      shadowOffsetY={2}
      pointerCursor={true}
      shadowForStrokeEnabled={false}
      onMouseOver={() => {
        stage.current.container().style.cursor = "pointer";
      }}
      onMouseLeave={() => {
        stage.current.container().style.cursor = "default";
      }}
      onClick={() => {
        removeSkill(skill.id);
      }}
    />
  );
});

export { Trash };
