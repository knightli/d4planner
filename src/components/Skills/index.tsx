import { Layer, Rect } from "react-konva";
import { useSkills } from "../../context/SkillsContext";
import { ISkill, SkillsContextType } from "../../@types/skills";
import { useStage } from "../../context/StageContext";
import { StageContextType } from "../../@types/stage";

const handleDragStart = (e: any, stage: any) => {
  const id = e.target.id();
};

const Skills = () => {
  const { skills, currentSkill } = useSkills() as SkillsContextType;
  const { stage } = useStage() as StageContextType;

  return (
    <Layer>
      {skills &&
        skills.map((skill: ISkill) => (
          <Rect
            onContextMenu={(e) => {
              e.evt.preventDefault();
              e.target.destroy();
            }}
            key={skill.id}
            id={skill.id}
            x={skill.x}
            y={skill.y}
            width={60}
            height={60}
            fill="#444444"
            draggable
            onDragStart={(e) => {
              handleDragStart(e, stage);
            }}
            onDragEnd={(e) => {
              handleDragStart(e, stage);
            }}
          />
        ))}
    </Layer>
  );
};

export { Skills };
