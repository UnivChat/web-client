import React from "react";
import type { ToolbarProps } from "react-big-calendar";
import * as Styled from "./Calendars.style";

const CustomToolbar: React.FC<ToolbarProps> = props => {
  const { onNavigate, label } = props;
  const newLabel = `${label.split(" ")[1]}년 ${label.split(" ")[0]}`;

  return (
    <div className="rbc-toolbar">
      <button type="button" onClick={() => onNavigate("PREV")}>
        <Styled.ArrowIcon svgName="left" />
      </button>
      <span className="rbc-toolbar-label">{newLabel}</span>
      <button type="button" onClick={() => onNavigate("NEXT")}>
        <Styled.ArrowIcon svgName="right" />
      </button>
    </div>
  );
};

export default CustomToolbar;
