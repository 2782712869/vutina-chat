import { ChatStyle } from "./chat-style";
import SideBar from "@src/components/sidebar/side-bar";
import Chats from "@src/components/chats/chats";
import Container from "@src/components/container/container";

export default function Chat() {
  return (
    <ChatStyle className="chat">
      <SideBar />
      <Chats />
      <Container />
    </ChatStyle>
  );
}
