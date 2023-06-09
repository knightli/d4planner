import { Group } from "react-konva";
import { ISkill, SkillsContextType } from "../../../@types/skills";
import { useStage } from "../../../context/Stage";
import { StageContextType } from "../../../@types/stage";
import { useSkills } from "../../../context/Skills";
import { Edit } from "../../Edit";
import { skillToolTipType } from "./SkillTooltip";
import { SkillPoints } from "./SkillPoints";
import { SkillIcon } from "./SkillIcon";
import { SkillName } from "./SkillName";
import { AccessContextType } from "../../../@types/access";
import { useAccess } from "../../../context/Access";

type Props = {
  skill: ISkill;
  toolTip: React.Dispatch<React.SetStateAction<skillToolTipType | null>>;
};

const Skill = (props: Props) => {
  const { skill, toolTip } = props;
  const { stage } = useStage() as StageContextType;
  const { isAdmin } = useAccess() as AccessContextType;
  const { updateSkillPosition } = useSkills() as SkillsContextType;

  const handleDragStart = (e: any) => {
    const id = e.target.id();
    const x = e.target.x();
    const y = e.target.y();
    updateSkillPosition({ id, x, y });
  };

  return (
    <Group>
      <Group
        x={skill.x}
        y={skill.y}
        onContextMenu={(e) => {
          e.evt.preventDefault();
        }}
        id={skill.id}
        draggable={isAdmin}
        onDragStart={(e) => {
          handleDragStart(e);
        }}
        onDragEnd={(e) => {
          handleDragStart(e);
          toolTip({ skill });
        }}
        onDragMove={(e) => {
          handleDragStart(e);
          toolTip(null);
        }}
      >
        <Group
          onMouseOver={(e) => {
            stage.current.container().style.cursor = "pointer";
            toolTip({ skill });
          }}
          onMouseLeave={(e) => {
            stage.current.container().style.cursor = "default";
            toolTip(null);
          }}
        >
          <SkillIcon skill={skill} />
          <SkillPoints skill={skill} />
        </Group>
        <Edit skill={skill} stage={stage} />
      </Group>
    </Group>
  );
};

export { Skill };
