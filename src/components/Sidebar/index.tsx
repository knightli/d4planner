import { useEffect, useState } from "react";
import { ISkill, SkillsContextType } from "../../@types/skills";
import { useSkills } from "../../context/Skills";

const SideBar = () => {
  const { editSkill, updateSkill } = useSkills() as SkillsContextType;

  const [name, setName] = useState("");
  const [maxPoints, setMaxPoints] = useState(0);
  const [id, setId] = useState("");
  const [icon, setIcon] = useState("");
  const [description, setDescription] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (editSkill) {
      const savedSkill: ISkill = {
        ...editSkill,
        name,
        maxPoints,
        icon,
        description,
      };
      updateSkill(savedSkill);
    }
  };

  useEffect(() => {
    if (editSkill?.name) setName(editSkill.name);
    if (editSkill?.maxPoints) setMaxPoints(editSkill.maxPoints);
    if (editSkill?.id) setId(editSkill.id);
    if (editSkill?.description) setDescription(editSkill.description);
    editSkill?.icon ? setIcon(editSkill.icon) : setIcon("");
  }, [editSkill]);

  return (
    editSkill && (
      <div
        style={{
          position: "fixed",
          right: "0",
          top: "0",
          width: "400px",
          height: "100vh",
          background: "#222222",
          boxShadow: "1px 1px 10px #333333",
          padding: 20,
        }}
      >
        <h2>Edit: {editSkill.name}</h2>
        <form onSubmit={onSubmit}>
          <label>Name</label>
          <input
            required
            type="text"
            value={name}
            style={{ marginBottom: 20 }}
            name="name"
            onChange={(e) => {
              setName(e.currentTarget.value);
            }}
          />
          <label>Max Points</label>
          <input
            required
            type="number"
            value={maxPoints}
            style={{ marginBottom: 20 }}
            name="maxPoints"
            min={0}
            max={10}
            onChange={(e) => {
              setMaxPoints(parseInt(e.currentTarget.value));
            }}
          />
          <label>Icon</label>
          <input
            required
            type="text"
            value={icon}
            style={{ marginBottom: 20 }}
            name="icon"
            onChange={(e) => {
              setIcon(e.currentTarget.value);
            }}
          />

          <label>Description</label>
          <textarea
            style={{
              display: "block",
              width: "100%",
            }}
            rows={10}
            name="description"
            onChange={(e) => {
              setDescription(e.currentTarget.value);
            }}
            value={description}
          />

          <button
            style={{
              outline: 0,
              background: "none",
              margin: "20px 0",
              padding: 10,
              color: "#ffffff",
              cursor: "pointer",
              borderRadius: 6,
              border: "1px solid #2ECC71",
            }}
            type="submit"
          >
            Save
          </button>
          <input
            name="id"
            type="hidden"
            value={id}
            onChange={(e) => {
              setId(e.target.value);
            }}
          />
        </form>
      </div>
    )
  );
};

export { SideBar };
