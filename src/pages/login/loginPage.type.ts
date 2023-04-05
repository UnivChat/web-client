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

export interface LoginButtonProps {
    type: string;
  }

export interface SubAreaProps {
    href: string;
  }

// index.page.tsx
export interface LoginFormType {
    email: string;
    password: string;
  }