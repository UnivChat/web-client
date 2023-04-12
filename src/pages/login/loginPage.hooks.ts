import { useState } from 'react'

export const useLoginForm = () => {
    const [loginFormData, setloginFormData] = useState<{
        id: string; 
        password: string;
      }>({
        id: "",
        password: "",
      });
    
      const handleInputChange = (
        event: React.ChangeEvent<HTMLInputElement>,
      ) => {
        setloginFormData(prevState => ({
          ...prevState,
          [event.target.name]: event.target.value
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
  }
}

export default useLoginForm;
