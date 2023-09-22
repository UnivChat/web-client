import { postInquiry } from "@server-state/config/api"
import { useMutation } from "@tanstack/react-query"

export const useInquiry = () => {
	return useMutation(postInquiry, {
		onSuccess: () => {
			console.log('succ')
		},
		onError: () => {
			console.log('err')
		}
	})
}