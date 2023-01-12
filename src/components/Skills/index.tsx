import { Group, Layer, Rect, Text, Label, Tag } from "react-konva";
import { useSkills } from "../../context/SkillsContext";
import { ISkill, SkillsContextType } from "../../@types/skills";
import { useStage } from "../../context/StageContext";
import { StageContextType } from "../../@types/stage";
import { FC, useEffect, useState } from "react";
import { tree } from "../../data/tree";
import { Edit } from "../Edit";
import { Lines } from "../Lines";

type skillPointsType = {
  skill: ISkill;
};

type skillToolTipType = {
  skill: ISkill;
};

const Skills = () => {
  const {
    skills,
    updateSkillPosition,
    loadSkills,
    addSkillPoint,
    removeSkillPoint,
  } = useSkills() as SkillsContextType;
  const { stage, scale } = useStage() as StageContextType;
  const [skillToolTip, setSkillToolTip] = useState<skillToolTipType | null>(
    null
  );
  const stageWidth = window.innerWidth;
  const stageHeight = window.innerHeight;

  const handleDragStart = (e: any, stage: any) => {
    const id = e.target.id();
    const x = e.target.x();
    const y = e.target.y();
    updateSkillPosition({ id, x, y });
  };

  useEffect(() => {
    loadSkills(tree);
  }, []);

  const SkillPoints: FC<skillPointsType> = (props) => {
    const { skill } = props;
    if (skill.maxPoints === undefined || skill.maxPoints <= 0) return null;

    return (
      <Text
        x={38}
        y={45}
        text={`${skill.points?.toString()}/${skill.maxPoints?.toString()}`}
        fontStyle={"bold"}
        fill={"#FD841F"}
      />
    );
  };

  const SkillToolTip = () => {
    if (skillToolTip === null || skillToolTip.skill.description === "")
      return null;

    return (
      <Label
        x={skillToolTip?.skill.x + 70}
        y={skillToolTip?.skill.y + 30}
        opacity={0.75}
      >
        <Tag
          fill="#474E68"
          pointerDirection="left"
          pointerWidth={20}
          pointerHeight={28}
          lineJoin="round"
          shadowBlur={10}
          shadowOffsetX={1}
          shadowOffsetY={1}
          shadowForStrokeEnabled={false}
          perfectDrawEnabled={false}
        />
        <Text
          text={`${skillToolTip?.skill.name}\n${skillToolTip?.skill.description}`}
          width={300}
          fontSize={14}
          fill={"#DCB166"}
          shadowColor="black"
          shadowBlur={5}
          shadowOffsetX={2}
          shadowOffsetY={2}
          shadowForStrokeEnabled={false}
          perfectDrawEnabled={false}
          padding={10}
          lineHeight={1.5}
        />
      </Label>
    );
  };

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
            <Group key={`main_groupd.${skill.id}`}>
              <Group
                x={skill.x}
                y={skill.y}
                key={skill.id}
                onContextMenu={(e) => {
                  e.evt.preventDefault();
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
                <Group
                  onMouseOver={(e) => {
                    stage.current.container().style.cursor = "pointer";
                    setSkillToolTip({ skill });
                  }}
                  onMouseLeave={(e) => {
                    stage.current.container().style.cursor = "default";
                    setSkillToolTip(null);
                  }}
                >
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
                  <SkillPoints skill={skill} />
                </Group>
                <Text
                  text={skill.name}
                  fontSize={14}
                  y={65}
                  fill={"#DCB166"}
                  shadowColor="black"
                  shadowBlur={5}
                  shadowOffsetX={2}
                  shadowOffsetY={2}
                  shadowForStrokeEnabled={false}
                  perfectDrawEnabled={false}
                  padding={10}
                  lineHeight={1.5}
                />
                <Edit skill={skill} stage={stage} />
              </Group>
            </Group>
          ))}
        <SkillToolTip />
      </Group>
    </Layer>
  );
};

export { Skills };
