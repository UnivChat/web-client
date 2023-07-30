import { useState } from "react";
import type { ChangeEventHandler } from "react";

export const useLoginForm = () => {
  const [loginFormData, setloginFormData] = useState<{
    id: string;
    password: string;
  }>({
    id: "",
    password: ""
  });

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = e => {
    setloginFormData(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  return {
    id: {
      value: loginFormData.id,
      onChange: handleInputChange
    },
    password: {
      value: loginFormData.password,
      onChange: handleInputChange
    }
  };
};

export default useLoginForm;
