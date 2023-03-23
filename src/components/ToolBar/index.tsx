import { useSkills } from "../../context/Skills";
import { Shared, SkillsContextType } from "../../@types/skills";
import { useState } from "react";
import { Modal } from "../Modal";
import { SkillSearch } from "../SkillSearch";
import { compressShareSkills, compressSkills } from "../../helpers/skills";

import {
  buttonStyle,
  buttonStyleBaba,
  buttonStyleDruid,
  buttonStyleNecro,
  buttonStyleRogue,
  buttonStyleSave,
  buttonStyleSorcer,
} from "./styles";
import { ClassContextType } from "../../@types/class";
import { useClass } from "../../context/Class";
import { cleanHashUrl } from "../../helpers/url";
import { useAccess } from "../../context/Access";
import { AccessContextType } from "../../@types/access";

const ToolBar = () => {
  const { addSkill, skills } = useSkills() as SkillsContextType;
  const { setClassName, className } = useClass() as ClassContextType;
  const { isAdmin } = useAccess() as AccessContextType;
  const [modal, setModal] = useState(false);

  const handleModalSkill = () => {
    setModal(true);
  };

  const handleAddSkill = (result: any) => {
    const skill = {
      ...result,
      id: `skill_${Math.random()}`,
      connections: [],
      x: 150,
      y: 150,
      lines: [],
    };
    addSkill(skill);
    setModal(false);
  };

  const handleSaveTree = () => {
    navigator.clipboard.writeText(compressSkills(skills));
  };

  const handleShareTree = () => {
    const selectedSkills = skills
      .filter((skill) => skill.points! > 0)
      .map((skill) => {
        return {
          id: skill.id,
          points: skill.points,
        };
      }) as [];

    if (selectedSkills) {
      const share: Shared = {
        className,
        skills: selectedSkills,
      };
      window.location.hash = compressShareSkills(share);
      navigator.clipboard.writeText(window.location.href);
    }
  };

  const AddSkillModal = () => {
    return (
      <Modal
        title={`${className.toUpperCase()} - Select Skill`}
        onClose={() => setModal(false)}
      >
        <SkillSearch onSelect={handleAddSkill} />
      </Modal>
    );
  };

  const addSkillButton = () => {
    return (
      isAdmin && (
        <button style={buttonStyle} onClick={handleModalSkill}>
          Add Skill
        </button>
      )
    );
  };

  const saveTreeButton = () => {
    return (
      isAdmin && (
        <button style={buttonStyleSave} onClick={handleSaveTree}>
          Save Tree
        </button>
      )
    );
  };

  return (
    <div
      style={{
        position: "fixed",
        display: "flex",
        top: 0,
        left: 0,
        background: "rgba(36, 37, 38, 0.8)",
        color: "#f1f1f1",
        border: 0,
        width: "100%",
      }}
    >
      <div
        style={{
          padding: 10,
          borderRadius: 0,
          border: 0,
          display: "flex",
        }}
      >
        <button
          style={buttonStyleBaba}
          onClick={() => {
            cleanHashUrl();
            setClassName("barbarian");
          }}
        >
          Barbarian
        </button>
        <button
          style={buttonStyleDruid}
          onClick={() => {
            cleanHashUrl();
            setClassName("druid");
          }}
        >
          Druid
        </button>
        <button style={buttonStyleNecro}>Necromancer</button>
        <button style={buttonStyleRogue}>Rogue</button>
        <button style={buttonStyleSorcer}>Sorcer</button>

        <hr style={{ border: "1px solid #333333" }}></hr>
        {addSkillButton()}
        {saveTreeButton()}
        <button style={buttonStyleSave} onClick={handleShareTree}>
          Share Tree
        </button>
      </div>
      {modal && <AddSkillModal />}
    </div>
  );
};

export { ToolBar };
