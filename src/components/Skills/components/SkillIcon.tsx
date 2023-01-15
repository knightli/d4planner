import { Rect } from "react-konva";
import { ISkill, SkillsContextType } from "../../../@types/skills";
import { FC } from "react";
import { useSkills } from "../../../context/Skills";

type Props = {
  skill: ISkill;
};

const SkillIcon: FC<Props> = ({ skill }) => {
  const { addSkillPoint, removeSkillPoint } = useSkills() as SkillsContextType;

  return (
    <Rect
      width={60}
      height={60}
      fill="#474E68"
      stroke="#FD841F"
      strokeWidth={4}
      shadowForStrokeEnabled={false}
      perfectDrawEnabled={false}
      onClick={(e) => {
        if (e.evt.button === 0) {
          addSkillPoint(skill.id);
        }
      }}
      onContextMenu={(e) => {
        e.evt.preventDefault();
        removeSkillPoint(skill.id);
      }}
    />
  );
};

export { SkillIcon };
