import { styled } from 'styled-components';

export const SideBarStyle = styled.div`
  width: 130px;
  height: 100%;
  background: #F0F4FA;
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
    .MuiFormControlLabel-root {
      margin-left: 0;
      margin-right: 0;
    }
    img {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      cursor: pointer;
      margin-top: 20px;
    }
  }

  .logo {
    width: 50px;
    height: 50px;
    border-radius: 12px;
    background: #AFBBF7;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 25px;
      height: 25px;
    }
  }
`

export const BarsStyle = styled.ul`
  width: 70px;
  border-bottom: 1px solid #B4B4B4;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 27px;
  li {
    width: 18px;
    height: 18px;
    margin-top: 36px;
    cursor: pointer;
    img {
      width: 18px;
      height: 18px;
    }
  }
  .active {
    width: 36px;
    height: 36px;
    border-radius: 9px;
    background: #5B96F7;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const SettingStyle = styled.div`
  margin-top: 20px;
  img {
    width: 18px;
    height: 18px;
    cursor: pointer;
  }
`
