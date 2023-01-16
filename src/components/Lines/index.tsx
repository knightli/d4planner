import { Group, Line } from "react-konva";
import { useSkills } from "../../context/Skills";
import { ISkill, SkillsContextType } from "../../@types/skills";
import { StageContextType } from "../../@types/stage";
import { useStage } from "../../context/Stage";

const Lines = () => {
  const { skills } = useSkills() as SkillsContextType;
  const { scale } = useStage() as StageContextType;
  const stageWidth = window.innerWidth;
  const stageHeight = window.innerHeight;

  return (
    <Group
      scaleX={scale}
      scaleY={scale}
      width={stageWidth}
      height={stageHeight}
    >
      {skills &&
        skills.map((skill: ISkill) => (
          <Group key={`lines-group.${skill.id}`}>
            {skill.lines?.map(
              (line, index) =>
                line.coords && (
                  <Line
                    key={`line_${index}_${skill.id}`}
                    id={`line_${index}_${skill.id}`}
                    stroke={skill.points! > 0 ? "#ff0000" : "#E14D2A"}
                    strokeWidth={skill.points! > 0 ? 6 : 3}
                    lineCap="round"
                    lineJoin="round"
                    points={line.coords}
                    tension={1}
                    perfectDrawEnabled={false}
                    shadowForStrokeEnabled={false}
                  />
                )
            )}
          </Group>
        ))}
    </Group>
  );
};

export { Lines };
