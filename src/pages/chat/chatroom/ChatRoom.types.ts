export interface ChatRoomProps {
  sender?: "me" | "other";
  gender?: "male" | "female" | "private";
  children?: string;
}
