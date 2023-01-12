import { Group, Image } from "react-konva";
import { ISkill, SkillsContextType } from "../../@types/skills";
import { useSkills } from "../../context/SkillsContext";
import useImage from "use-image";
import { useRef, memo, useMemo } from "react";

type EditProps = {
  skill: ISkill;
  stage: any;
};

type IconProps = {
  image: HTMLImageElement | null;
};

const Edit = (props: EditProps) => {
  const { skill, stage } = props;
  const { addLinkSkill, selectedSkill, handleSelectSkill, removeSkill } =
    useSkills() as SkillsContextType;
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

  const LinkSkill = memo<IconProps>((props) => {
    const { image } = props;

    if (!image) return null;

    return (
      <Image
        image={image}
        width={15}
        height={15}
        x={70}
        y={-2}
        shadowBlur={5}
        shadowOffsetX={2}
        shadowOffsetY={2}
        pointerCursor={true}
        shadowForStrokeEnabled={false}
        onMouseOver={(e) => {
          stage.current.container().style.cursor = "pointer";
        }}
        onMouseLeave={(e) => {
          stage.current.container().style.cursor = "default";
        }}
        onClick={(e) => {
          if (selectedSkill) {
            addLinkSkill(skill.id, selectedSkill.id);
          } else {
            handleSelectSkill(skill);
          }
        }}
      />
    );
  });

  const Trash = memo<IconProps>((props) => {
    const { image } = props;

    if (!image) return null;

    return (
      <Image
        image={image}
        width={15}
        height={15}
        x={70}
        y={25}
        shadowBlur={5}
        shadowOffsetX={2}
        shadowOffsetY={2}
        pointerCursor={true}
        shadowForStrokeEnabled={false}
        onMouseOver={(e) => {
          stage.current.container().style.cursor = "pointer";
        }}
        onMouseLeave={(e) => {
          stage.current.container().style.cursor = "default";
        }}
        onClick={(e) => {
          confirm("Are you sure you want to delete this skill?") &&
            removeSkill(skill.id);
        }}
      />
    );
  });

  return (
    <Group key={`edit-skill${skill.id}`}>
      <LinkSkill image={linkIconRef.current} />
      <Trash image={trashIconRef.current} />
    </Group>
  );
};

export { Edit };
