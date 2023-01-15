import { Group, Layer } from "react-konva";
import { useSkills } from "../../context/SkillsContext";
import { ISkill, SkillsContextType } from "../../@types/skills";
import { useStage } from "../../context/StageContext";
import { StageContextType } from "../../@types/stage";
import { useEffect, useState } from "react";
import { tree } from "../../data/tree";
import { Lines } from "../Lines";
import { SkillToolTip, skillToolTipType } from "./components/SkillTooltip";
import { Skill } from "./components/Skill";

const Skills = () => {
  const { skills, loadSkills } = useSkills() as SkillsContextType;
  const { scale } = useStage() as StageContextType;
  const [toolTip, setToolTip] = useState<skillToolTipType | null>(null);
  const stageWidth = window.innerWidth;
  const stageHeight = window.innerHeight;

  useEffect(() => {
    loadSkills(tree);
  }, []);

  return (
    <Layer>
      <Lines />
      <Group
        scaleX={scale}
        scaleY={scale}
        width={stageWidth}
        height={stageHeight}
      >
        {skills &&
          skills.map((skill: ISkill) => (
            <Skill key={skill.id} skill={skill} toolTip={setToolTip} />
          ))}
        {toolTip && <SkillToolTip skill={toolTip.skill} />}
      </Group>
    </Layer>
  );
};

export { Skills };
