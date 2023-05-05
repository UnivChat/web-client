import React, { useState } from "react";
import { Switch, SwitchInput, SwitchSlider } from "./notification.styles";

interface ToggleSwitchProps {
  onChange: (checked: boolean) => void;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ onChange }) => {
  const [checked, setChecked] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    onChange(event.target.checked);
  };

  return (
    <Switch>
      <SwitchInput type="checkbox" checked={checked} onChange={handleChange} />
      <SwitchSlider />
    </Switch>
  );
};

export default ToggleSwitch;
