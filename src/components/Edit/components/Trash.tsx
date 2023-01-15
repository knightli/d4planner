import { memo } from "react";
import { Image } from "react-konva";
import { SkillsContextType } from "../../../@types/skills";
import { useSkills } from "../../../context/Skills";

type TrashProps = {
  skill: any;
  stage: any;
  image: HTMLImageElement | null;
};

const Trash = memo<TrashProps>((props) => {
  const { image, stage, skill } = props;
  const { removeSkill } = useSkills() as SkillsContextType;

  if (!image) return null;

  return (
    <Image
      image={image}
      width={15}
      height={15}
      x={70}
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
