import { memo } from "react";
import { Image } from "react-konva";
import { useSkills } from "../../../context/Skills";
import { ISkill, SkillsContextType } from "../../../@types/skills";

type LinkSkillProps = {
  skill: ISkill;
  stage: any;
  image: HTMLImageElement | null;
};

const LinkSkill = memo<LinkSkillProps>(({ image, stage, skill }) => {
  const { addLinkSkill, selectedSkill, handleSelectSkill } =
    useSkills() as SkillsContextType;

  if (!image) return null;

  const passiveSkill = skill.damageType === undefined && skill.maxPoints === 1;
  const baseSkill = skill.requiredPoints !== undefined;

  return (
    <Image
      image={image}
      width={15}
      height={15}
      x={baseSkill ? 120 : passiveSkill ? 40 : 70}
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
