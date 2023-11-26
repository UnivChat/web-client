import {
  useClassEnter,
  useClassExit
} from "@server-state/chat/hooks/mutations";
import { Svg } from "~/components/Common";
import * as Styled from "./classbox.styles";
import type { ClassBoxProps } from "./classbox.types";

export const ClassBox = ({
  svgName,
  title,
  classTime,
  classNumber,
  subTitle,
  onSuccess
}: ClassBoxProps) => {
  const { mutate: classEnterMutation } = useClassEnter();
  const { mutate: classExitMutation } = useClassExit();

  const handleClassEnter = () => {
    if (classNumber) {
      if (svgName === "plus") {
        classEnterMutation(classNumber, { onSuccess });
      }
      if (svgName === "chatMinus") {
        classExitMutation(classNumber, { onSuccess });
      }
    } else {
      console.error("classNumber is undefined");
    }
  };

  return (
    <Styled.ClassBox>
      <div>
        <Styled.Title>
          [{classNumber}] {title}
        </Styled.Title>
        <Styled.SubTitle>
          {classTime} {subTitle}
        </Styled.SubTitle>
      </div>
      <button type="button" className="icon" onClick={handleClassEnter}>
        <Svg _width={18} _height={18} svgName={svgName} />
      </button>
    </Styled.ClassBox>
  );
};
