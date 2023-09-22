import { setIsInquiryModal } from "@client-state/config/inquiry/inquirySlice";
import { useAppDispatch } from "@client-state/hooks";
import { postInquiry } from "@server-state/config/api";
import { useMutation } from "@tanstack/react-query";

export const useInquiry = () => {
  const dispatch = useAppDispatch();
  return useMutation(postInquiry, {
    onSuccess: () => {
      dispatch(setIsInquiryModal(true));
    }
  });
};
