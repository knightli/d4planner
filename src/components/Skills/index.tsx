import { Group, Layer } from "react-konva";
import { useSkills } from "../../context/Skills";
import { ISkill, Shared, SkillsContextType } from "../../@types/skills";
import { useStage } from "../../context/Stage";
import { StageContextType } from "../../@types/stage";
import { useEffect, useState } from "react";
import { Lines } from "../Lines";
import { SkillToolTip, skillToolTipType } from "./components/SkillTooltip";
import { Skill } from "./components/Skill";
import { decompressShareSkills, decompressSkills } from "../../helpers/skills";
import { useClass } from "../../context/Class";
import { ClassContextType } from "../../@types/class";

const Skills = () => {
  const { skills, loadSkills } = useSkills() as SkillsContextType;
  const { scale } = useStage() as StageContextType;
  const [toolTip, setToolTip] = useState<skillToolTipType | null>(null);
  const { className, setClassName } = useClass() as ClassContextType;
  const stageWidth = window.innerWidth;
  const stageHeight = window.innerHeight;

  useEffect(() => {
    (async () => {
      const { tree } = await import(`../../data/tree/${className}.ts`);
      let sharedSkills;

      const shared = window.location.hash.replace("#", "");
      if (shared) {
        const { skills, className } = decompressShareSkills(shared) as Shared;
        if (skills && className) {
          sharedSkills = skills;
          setClassName(className);
        }
      }

      loadSkills(decompressSkills(tree), sharedSkills);
    })();
  }, [className]);

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
