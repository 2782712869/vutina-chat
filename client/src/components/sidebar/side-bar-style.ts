import { styled } from "styled-components";

export const SideBarStyle = styled.div`
  width: 130px;
  height: 100%;
  background: #f0f4fa;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 25px 0;
  box-sizing: border-box;

  .top {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .bottom {
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      cursor: pointer;
      margin-top: 20px;
    }
  }

  .logo {
    width: 48px;
    height: 48px;
    border-radius: 12px;
    background: #afbbf7;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 25px;
      height: 25px;
    }
  }
`;

export const BarsStyle = styled.ul`
  width: 70px;
  height: 208px;
  box-sizing: border-box;
  border-bottom: 1px solid #b4b4b4;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 27px;

  li {
    width: 18px;
    height: 18px;
    margin-top: 36px;
    cursor: pointer;
    transition: all .2s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      font-size: 18px;
      color: #000;
    }
  }
  .active {
    width: 36px;
    height: 36px;
    border-radius: 9px;
    background: #5b96f7;
    span {
      color: #fff;
    }
  }
`;

export const SettingStyle = styled.div`
  margin-top: 20px;
  span {
    font-size: 18px;
    color: #000;
    cursor: pointer;
  }
`;
