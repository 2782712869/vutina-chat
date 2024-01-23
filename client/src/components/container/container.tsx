import { ContainerStyle } from "./container-style";
import emptyBG from "@src/assets/imgs/container/Group.png";

export default function Container() {
  return (
    <ContainerStyle>
      <div className="emptyBG">
        <img src={emptyBG} alt="emptyBG" />
        <span>选择一个对话或开始一个新对话</span>
      </div>
    </ContainerStyle>
  );
}
