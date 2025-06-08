export interface IChatCard {
  id: number | string;
  img: string;
  name: string;
  time: string;
  lastMessage: string;
  unreadMessagesQty?: number | string;
}