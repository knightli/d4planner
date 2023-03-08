import { Rect, Circle, Image } from "react-konva";
import { ISkill, SkillsContextType } from "../../../@types/skills";
import { FC, useEffect, useRef } from "react";
import { useSkills } from "../../../context/Skills";
import useImage from "use-image";

type Props = {
  skill: ISkill;
};

const SkillIcon: FC<Props> = ({ skill }) => {
  const { addSkillPoint, removeSkillPoint, updatePoints } =
    useSkills() as SkillsContextType;
  const { points } = skill;
  const strokeColor = points && points > 0 ? "#ff0000" : "#F2C94C";

  useEffect(() => {
    updatePoints();
  }, [skill]);

  const passiveSkill = skill.damageType === undefined;

  const loadSkillImage = (name: string) => {
    if (!passiveSkill || skill.requiredPoints !== undefined) {
      const [image] = useImage(
        `/skills/${name?.toLowerCase().replace(/\s/g, "")}.png`
      );
      return image;
    }
  };

  const props = {
    width: passiveSkill ? 40 : 60,
    height: passiveSkill ? 40 : 60,
    fill: "#474E68",
    stroke: strokeColor,
    strokeWidth: 4,
    shadowForStrokeEnabled: false,
    perfectDrawEnabled: false,
    rotation: passiveSkill ? 45 : 0,
    onClick: (e: any) => {
      if (e.evt.button === 0) {
        if (skill.maxPoints !== 0) {
          addSkillPoint(skill.id);
        }
      }
    },
    onContextMenu: (e: any) => {
      e.evt.preventDefault();
      if (skill.maxPoints !== 0) {
        removeSkillPoint(skill.id);
      }
    },
  };

  return skill.requiredPoints !== undefined ? (
    <Image
      {...props}
      width={120}
      height={120}
      rotation={0}
      image={loadSkillImage("baseskill")}
      fill="transparent"
      strokeWidth={0}
    />
  ) : (
    <Image {...props} image={loadSkillImage(skill.name!)} />
  );
};

export { SkillIcon };
