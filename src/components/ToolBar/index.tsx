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

const ToolBar = () => {
  const { addSkill, skills } = useSkills() as SkillsContextType;
  const { setClassName, className } = useClass() as ClassContextType;
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

  return (
    <div
      style={{
        position: "fixed",
        top: 10,
        left: 10,
        background: "#222222",
        color: "#f1f1f1",
        border: 0,
      }}
    >
      <div
        style={{
          background: "#444444",
          padding: 10,
          borderRadius: 6,
          border: 0,
          display: "flex",
        }}
      >
        <button style={buttonStyle} onClick={handleModalSkill}>
          Add Skill
        </button>
        <button style={buttonStyleSave} onClick={handleSaveTree}>
          Save Tree
        </button>
        <button style={buttonStyleSave} onClick={handleShareTree}>
          Share Tree
        </button>
        <hr style={{ border: "1px solid #333333" }}></hr>
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
      </div>
      {modal && <AddSkillModal />}
    </div>
  );
};

export { ToolBar };
