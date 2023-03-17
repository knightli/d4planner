import { Rect, Image } from "react-konva";
import { ISkill, SkillsContextType } from "../../../@types/skills";
import { FC, useEffect } from "react";
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

  const passiveSkill =
    skill.damageType === undefined && skill.requiredPoints === undefined;

  const loadSkillImage = (name: string) => {
    const iconFilename = skill?.icon ? skill.icon : name;
    const [image] = useImage(
      `/skills/${iconFilename.toLowerCase().replace(/\s/g, "")}.png`
    );
    return image;
  };

  const props = {
    width: 60,
    height: 60,
    fill: "transparent",
    stroke: strokeColor,
    strokeWidth: 0,
    shadowForStrokeEnabled: false,
    perfectDrawEnabled: false,
    rotation: 0,
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

  if (skill.requiredPoints !== undefined) {
    return (
      <Image
        {...props}
        width={120}
        height={120}
        rotation={0}
        image={loadSkillImage("baseskill")}
        fill="transparent"
        strokeWidth={0}
      />
    );
  }

  if (passiveSkill) {
    return (
      <>
        <Rect {...props} rotation={45} strokeWidth={4} width={45} height={45} />
        <Image {...props} image={loadSkillImage(skill.name!)} x={-30} y={2} />
      </>
    );
  }

  return (
    <>
      <Rect {...props} strokeWidth={4} />
      <Image {...props} image={loadSkillImage(skill.name!)} />
    </>
  );
};

export { SkillIcon };
