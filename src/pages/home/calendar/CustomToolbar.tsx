import React from "react";
import type { ToolbarProps } from "react-big-calendar";

const CustomToolbar: React.FC<ToolbarProps> = props => {
  const { onNavigate, label } = props;
  const newLabel = `${label.split(" ")[1]}년 ${label.split(" ")[0]}`;

  return (
    <div className="rbc-toolbar">
      <button type="button" onClick={() => onNavigate("PREV")}>
        {"<"}
      </button>
      <span className="rbc-toolbar-label">{newLabel}</span>
      <button type="button" onClick={() => onNavigate("NEXT")}>
        {">"}
      </button>
    </div>
  );
};

export default CustomToolbar;
