import { styled } from "styled-components";

export const ChatsItemStyle = styled.li`
  width: 100%;
  height: 52px;
  border-radius: 10px;
  background: #FFF;
  margin: 16px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  box-sizing: border-box;
  cursor: pointer;
  .avatar {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }
  .content {
    width: calc(100% - 42px);
    > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-family: Manrope;
      padding: 2px 0;
      box-sizing: border-box;
    }
    .username {
      color: #030303;
      font-size: 14px;
      font-weight: bold;
    }
    .date {
      color: #686768;
      font-size: 12px;
    }
    .msg {
      max-width: 200px;
      color: #7C7C7D;
      font-size: 14px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .hint {
      width: 14px;
      height: 14px;
      border-radius: 50%;
      color: #FFF;
      background: #5B96F7;
      font-size: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`