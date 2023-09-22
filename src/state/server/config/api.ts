import { createAxiosInstance } from "@server-state/axios";

export type InquiryProps = {
	content: string,
	receiverEmail: string
}

export const postInquiry = async (inquiryData: InquiryProps) => {
	const api = createAxiosInstance({ needAuth: true });
	const res = await api.post('/inquiry/register', inquiryData)
	return res.data
  };