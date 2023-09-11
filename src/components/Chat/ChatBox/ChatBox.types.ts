export interface ChatRoomStyledProps {
  sender?: "me" | "other";
  gender?: "male" | "female" | "private";
}

export interface ChatRoomProps extends ChatRoomStyledProps {
  children?: React.ReactNode;
}
