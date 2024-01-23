import { styled } from "styled-components";

export const ChatsStyle = styled.div`
  width: 340px;
  height: 100%;
  background: #f8faff;
  padding: 28px;
  box-sizing: border-box;
  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 44px;
    h1 {
      color: #000;
      font-family: Manrope;
      font-size: 28px;
      font-style: normal;
      font-weight: 800;
      line-height: normal;
    }
    .logo {
      width: 28px;
      height: 28px;
      border-radius: 50%;
      border: 1px dashed #000;
    }
  }
`;

export const SearchStyle = styled.div`
  width: 100%;
  height: 45px;
  border-radius: 22px;
  background: #eaf2fe;
  margin-top: 25px;
  display: flex;
  align-items: center;
  padding: 0 13px;
  box-sizing: border-box;
  img {
    vertical-align: bottom;
  }
  .search {
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
  .sort {
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
  input {
    width: 100%;
    height: 100%;
    border: none;
    background: none;
    border-radius: 22px;
    outline: none;
    padding-left: 12px;
    color: #709ce6;
    &::placeholder {
      color: #709ce6;
      font-family: Manrope;
      font-size: 14px;
      font-style: normal;
      line-height: normal;
      font-weight: bold;
    }
  }
`;

export const ListStyle = styled.div`
  width: 100%;
  height: calc(100% - 20vh);
  overflow: hidden;
  display: flex;
  margin-top: 30px;
  flex-direction: column;
  .title {
    width: 100%;
    height: 30px;
    padding-bottom: 10px;
    border-bottom: 1px solid #b4b4b4;
    display: flex;
    justify-content: start;
    align-items: center;
    box-sizing: border-box;
    margin-bottom: 15px;
    img {
      width: 20px;
      height: 22px;
    }
    span {
      color: #709ce6;
      font-family: Manrope;
      font-size: 14px;
      font-style: normal;
      line-height: normal;
      margin-left: 12px;
      font-weight: bold;
    }
  }

  .list {
    overflow-y: auto;
    h6 {
      color: #676667;
      font-family: Manrope;
      font-size: 14px;
      font-style: normal;
      font-weight: bold;
      line-height: normal;
    }
    > div {
      margin-bottom: 15px;
    }
    .pinned {
      .empty {
        font-size: 12px;
        color: #676667;
        font-family: Manrope;
        font-style: normal;
        font-weight: bold;
        line-height: normal;
        padding: 5px 0;
        box-sizing: border-box;
      }
    }
    .all {
    }
  }
`;
