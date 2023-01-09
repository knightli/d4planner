import { Group, Layer, Rect, Text } from "react-konva";
import { useSkills } from "../../context/SkillsContext";
import { ISkill, SkillsContextType } from "../../@types/skills";
import { useStage } from "../../context/StageContext";
import { StageContextType } from "../../@types/stage";
import { useEffect } from "react";
import { tree } from "../../data/tree";
import { Edit } from "../Edit";

const Skills = () => {
  const { skills, updateSkill, loadSkills, removeSkill } =
    useSkills() as SkillsContextType;
  const { stage, scale } = useStage() as StageContextType;
  const stageWidth = window.innerWidth;
  const stageHeight = window.innerHeight;

  const handleDragStart = (e: any, stage: any) => {
    const id = e.target.id();
    const x = e.target.x();
    const y = e.target.y();
    updateSkill({ id, x, y });
  };

  useEffect(() => {
    loadSkills(tree);
  }, []);

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
            <Group key={`main_groupd.${skill.id}`}>
              <Group
                x={skill.x}
                y={skill.y}
                key={skill.id}
                onContextMenu={(e) => {
                  e.evt.preventDefault();
                  removeSkill(skill.id);
                }}
                id={skill.id}
                draggable
                onDragStart={(e) => {
                  handleDragStart(e, stage);
                }}
                onDragEnd={(e) => {
                  handleDragStart(e, stage);
                }}
                onDragMove={(e) => {
                  handleDragStart(e, stage);
                }}
              >
                <Rect
                  width={60}
                  height={60}
                  fill="#474E68"
                  stroke="#FD841F"
                  strokeWidth={4}
                />
                <Edit skill={skill} stage={stage} />
                <Text
                  x={0}
                  y={70}
                  text={skill.name}
                  fontSize={16}
                  fill={"#DCB166"}
                  shadowColor="black"
                  shadowBlur={5}
                  shadowOffsetX={2}
                  shadowOffsetY={2}
                />
              </Group>
            </Group>
          ))}
      </Group>
    </Layer>
  );
};

export { Skills };
