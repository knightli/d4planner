import { FC } from "react";
import { Text } from "react-konva";

type Prop = {
  name: string;
};

const SkillName: FC<Prop> = ({ name }) => {
  return (
    <Text
      text={name}
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
  );
};

export { SkillName };
