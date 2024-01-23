import { ChatsItemStyle } from "./chats-item-style";
import avatar from "@src/assets/imgs/chats/avatar.jpg";

export default function ChatsItem() {
  return (
    <ChatsItemStyle>
      <div className="avatar">
        <img src={avatar} alt="avatar" />
      </div>
      <div className="content">
        <div className="content-title">
          <span className="username">辛克莱</span>
          <span className="date">9:36</span>
        </div>
        <div className="content-message">
          <span className="msg">hello world!</span>
          <span className="hint">2</span>
        </div>
      </div>
    </ChatsItemStyle>
  );
}
