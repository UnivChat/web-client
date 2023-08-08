export interface ChatRoomProps {
  sender: "me" | "other" | undefined;
  gender?: "male" | "female" | "private" | undefined;
  children?: string;
}
