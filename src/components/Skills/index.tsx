import { Group, Layer } from "react-konva";
import { useSkills } from "../../context/Skills";
import { ISkill, SkillsContextType } from "../../@types/skills";
import { useStage } from "../../context/Stage";
import { StageContextType } from "../../@types/stage";
import { useEffect, useState } from "react";
import { Lines } from "../Lines";
import { SkillToolTip, skillToolTipType } from "./components/SkillTooltip";
import { Skill } from "./components/Skill";
import { decompressFromEncodedURIComponent } from "lz-string";

const Skills = () => {
  const { skills, loadSkills } = useSkills() as SkillsContextType;
  const { scale } = useStage() as StageContextType;
  const [toolTip, setToolTip] = useState<skillToolTipType | null>(null);
  const stageWidth = window.innerWidth;
  const stageHeight = window.innerHeight;

  useEffect(() => {
    (async () => {
      const { tree } = await import("../../data/tree/barbarian");
      const decompressed = decompressFromEncodedURIComponent(tree);

      if (decompressed) {
        const parsed = JSON.parse(decompressed);
        loadSkills(parsed);
      }
    })();
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
