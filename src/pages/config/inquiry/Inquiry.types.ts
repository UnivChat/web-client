// TODO: 문의접수 데이터형식에 맞게 type 설정 변경필요
export interface InquiryProps {
  contents: string;
  email: string;
  privateCheck: boolean;
  onSuccess?: () => void;
  onError?: () => void;
}
