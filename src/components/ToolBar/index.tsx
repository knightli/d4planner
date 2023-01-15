import { useSkills } from "../../context/Skills";
import { SkillsContextType } from "../../@types/skills";
import { useState } from "react";
import { Modal } from "../Modal";
import { SkillSearch } from "../SkillSearch";
import { compressSkills } from "../../helpers/skills";

import {
  buttonStyle,
  buttonStyleBaba,
  buttonStyleDruid,
  buttonStyleNecro,
  buttonStyleRogue,
  buttonStyleSave,
  buttonStyleSorcer,
} from "./styles";

const ToolBar = () => {
  const { addSkill, skills } = useSkills() as SkillsContextType;
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
    console.log(compressSkills(skills));
  };

  const AddSkillModal = () => {
    return (
      <Modal title="Select Skill" onClose={() => setModal(false)}>
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
        <hr style={{ border: "1px solid #333333" }}></hr>
        <button style={buttonStyleBaba}>Barbarian</button>
        <button style={buttonStyleDruid}>Druid</button>
        <button style={buttonStyleNecro}>Necromancer</button>
        <button style={buttonStyleRogue}>Rogue</button>
        <button style={buttonStyleSorcer}>Sorcer</button>
      </div>
      {modal && <AddSkillModal />}
    </div>
  );
};

export { ToolBar };
