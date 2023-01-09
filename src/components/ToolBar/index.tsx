import { Layer } from "react-konva";
import { Html } from "react-konva-utils";
import { useSkills } from "../../context/SkillsContext";
import { SkillsContextType } from "../../@types/skills";
import { useState } from "react";
import { Modal } from "../Modal";
import { SkillSearch } from "../SkillSearch";

const ToolBar = () => {
  const { addSkill, skills } = useSkills() as SkillsContextType;
  const [modal, setModal] = useState(false);

  const handleModalSkill = () => {
    setModal(true);
  };

  const handleAddSkill = (result: any) => {
    addSkill({
      id: `skill_${Math.random()}`,
      connections: [],
      name: result.name,
      x: 150,
      y: 150,
      lines: [],
    });
    setModal(false);
  };

  const handleSaveTree = () => {
    console.log(JSON.stringify(skills));
  };

  const buttonStyle = {
    outline: 0,
    background: "none",
    margin: 5,
    padding: 10,
    color: "#ffffff",
    cursor: "pointer",
    borderRadius: 6,
    border: "1px solid #2ECC71",
  };

  const buttonStyleSave = {
    ...buttonStyle,
    color: "#A4BE7B",
    borderColor: "#A4BE7B",
  };

  const buttonStyleBaba = {
    ...buttonStyle,
    color: "#a52a2a",
    borderColor: "#a52a2a",
  };
  const buttonStyleDruid = {
    ...buttonStyle,
    color: "#7c4848",
    borderColor: "#7c4848",
  };
  const buttonStyleNecro = {
    ...buttonStyle,
    color: "#ff9646",
    borderColor: "#ff9646",
  };
  const buttonStyleRogue = {
    ...buttonStyle,
    color: "#556b2f",
    borderColor: "#556b2f",
  };
  const buttonStyleSorcer = {
    ...buttonStyle,
    color: "#c27df1",
    borderColor: "#c27df1",
  };

  const AddSkillModal = () => {
    return (
      <Modal title="Select Skill" onClose={() => setModal(false)}>
        <SkillSearch onSelect={handleAddSkill} />
      </Modal>
    );
  };

  return (
    <Layer>
      <Html
        divProps={{
          style: {
            position: "fixed",
            top: 10,
            left: 10,
            background: "#222222",
            color: "#f1f1f1",
            border: 0,
          },
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
      </Html>
    </Layer>
  );
};

export { ToolBar };
