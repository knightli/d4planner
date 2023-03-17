import { Group } from "react-konva";
import { ISkill, SkillsContextType } from "../../@types/skills";
import { useSkills } from "../../context/Skills";
import useImage from "use-image";
import { useRef, useMemo } from "react";
import { Trash } from "./components/Trash";
import { LinkSkill } from "./components/LinkSkill";
import { EditSkill } from "./components/EditSkill";

type EditProps = {
  skill: ISkill;
  stage: any;
};

export type IconProps = {
  image: HTMLImageElement | null;
};

const Edit = (props: EditProps) => {
  const { skill, stage } = props;
  const { selectedSkill } = useSkills() as SkillsContextType;
  const linkIconRef = useRef<HTMLImageElement | null>(null);
  const trashIconRef = useRef<HTMLImageElement | null>(null);
  const editIconRef = useRef<HTMLImageElement | null>(null);

  const imageName = useMemo(() => {
    return selectedSkill && selectedSkill.id !== skill.id
      ? "link-to-select.png"
      : "link.png";
  }, [selectedSkill, skill]);

  const [linkImage] = useImage(`/icons/${imageName}`);
  if (linkImage) linkIconRef.current = linkImage;

  const [trashImage] = useImage(`/icons/trash.png`);
  if (trashImage) trashIconRef.current = trashImage;

  const [editSkillImage] = useImage(`/icons/edit.png`);
  if (editSkillImage) editIconRef.current = editSkillImage;

  return (
    <Group key={`edit-skill-${skill.id}`}>
      <LinkSkill image={linkIconRef.current} skill={skill} stage={stage} />
      <Trash image={trashIconRef.current} skill={skill} stage={stage} />
      <EditSkill image={editIconRef.current} skill={skill} stage={stage} />
    </Group>
  );
};

export { Edit };
