import { Group } from "react-konva";
import { ISkill, SkillsContextType } from "../../@types/skills";
import { useSkills } from "../../context/SkillsContext";
import useImage from "use-image";
import { useRef, useMemo } from "react";
import { Trash } from "./Trash";
import { LinkSkill } from "./LinkSkill";

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

  const imageName = useMemo(() => {
    return selectedSkill && selectedSkill.id !== skill.id
      ? "link-to-select.png"
      : "link.png";
  }, [selectedSkill, skill]);

  const [linkImage] = useImage(`/icons/${imageName}`);
  if (linkImage) linkIconRef.current = linkImage;

  const [trashImageimage] = useImage(`/icons/trash.png`);
  if (trashImageimage) trashIconRef.current = trashImageimage;

  return (
    <Group key={`edit-skill-${skill.id}`}>
      <LinkSkill image={linkIconRef.current} skill={skill} stage={stage} />
      <Trash image={trashIconRef.current} skill={skill} stage={stage} />
    </Group>
  );
};

export { Edit };
