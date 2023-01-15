import { memo } from "react";
import { Image } from "react-konva";
import { useSkills } from "../../context/SkillsContext";
import { SkillsContextType } from "../../@types/skills";

type LinkSkillProps = {
  skill: any;
  stage: any;
  image: HTMLImageElement | null;
};

const LinkSkill = memo<LinkSkillProps>(({ image, stage, skill }) => {
  const { addLinkSkill, selectedSkill, handleSelectSkill } =
    useSkills() as SkillsContextType;

  if (!image) return null;

  return (
    <Image
      image={image}
      width={15}
      height={15}
      x={70}
      y={-2}
      shadowBlur={5}
      shadowOffsetX={2}
      shadowOffsetY={2}
      pointerCursor={true}
      shadowForStrokeEnabled={false}
      onMouseOver={(e) => {
        stage.current.container().style.cursor = "pointer";
      }}
      onMouseLeave={(e) => {
        stage.current.container().style.cursor = "default";
      }}
      onClick={(e) => {
        if (selectedSkill) {
          addLinkSkill(skill.id, selectedSkill.id);
        } else {
          handleSelectSkill(skill);
        }
      }}
    />
  );
});

export { LinkSkill };
