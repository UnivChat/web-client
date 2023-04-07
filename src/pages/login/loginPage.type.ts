// loginPage.styles.ts
export interface LoginFormProps {
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  }
  
export interface IdPwBoxProps {
    type: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string
  }

export interface SubAreaProps {
    href: string;
  }
