import { Group, Layer, Line, Rect, Text } from "react-konva";
import { useSkills } from "../../context/SkillsContext";
import { ISkill, SkillsContextType } from "../../@types/skills";
import { StageContextType } from "../../@types/stage";
import { useStage } from "../../context/StageContext";

const Lines = () => {
  const { skills } = useSkills() as SkillsContextType;
  const { scale } = useStage() as StageContextType;
  const stageWidth = window.innerWidth;
  const stageHeight = window.innerHeight;

  return (
    <Layer>
      <Group
        scaleX={scale}
        scaleY={scale}
        width={stageWidth}
        height={stageHeight}
      >
        {skills &&
          skills.map((skill: ISkill) => (
            <Group key={`lines-group.${skill.id}`}>
              <Line
                key={`line_${skill.id}`}
                id={`line_${skill.id}`}
                stroke="#E14D2A"
                strokeWidth={3}
                lineCap="round"
                lineJoin="round"
                points={skill.lines}
                tension={1}
              />
            </Group>
          ))}
      </Group>
    </Layer>
  );
};

export { Lines };
