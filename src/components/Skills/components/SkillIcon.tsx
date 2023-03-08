import { Rect, Circle } from "react-konva";
import { ISkill, SkillsContextType } from "../../../@types/skills";
import { FC, useEffect } from "react";
import { useSkills } from "../../../context/Skills";

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

  const props = {
    width: passiveSkill ? 40 : 60,
    height: passiveSkill ? 40 : 60,
    fill: "#474E68",
    stroke: strokeColor,
    strokeWidth: 4,
    shadowForStrokeEnabled: false,
    perfectDrawEnabled: false,
    radius: 40,
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
    <Circle {...props} />
  ) : (
    <Rect {...props} />
  );
};

export { SkillIcon };
