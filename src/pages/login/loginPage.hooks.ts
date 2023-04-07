import { useState } from 'react'

export const useLoginForm = () => {
    const [loginFormData, setloginFormData] = useState<{
        email: string; 
        password: string;
      }>({
        email: "",
        password: "",
      });
    
      const handleInputChange = (
        event: React.ChangeEvent<HTMLInputElement>,
      ) => {
        setloginFormData(prevState => ({
          ...prevState,
          [event.target.type]: event.target.value
        }));
      };
    

  return {
    email: {
        value: loginFormData.email,
        onChange: handleInputChange
    },
    password: {
        value: loginFormData.password,
        onChange: handleInputChange
    }
  }
}

export default useLoginForm;
