import React, { useState } from "react";
import { Switch, SwitchInput, SwitchSlider } from "./notification.styles";
import type { ToggleSwitchProps } from "./notification.type";

const ToggleSwitch = ({ onChange }: ToggleSwitchProps) => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
    if (onChange) {
      onChange(!checked);
    }
  };

  return (
    <Switch onClick={handleChange}>
      <SwitchInput type="checkbox" checked={checked} readOnly />
      <SwitchSlider />
    </Switch>
  );
};

export default ToggleSwitch;
