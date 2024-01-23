import { styled } from 'styled-components';

export const ContainerStyle = styled.div`
  width: 710px;
  height: 100%;
  background: #fff;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  .emptyBG {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      width: 200px;
      height: 200px;
    }
    span {
      color: #000;
      font-family: Manrope;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      margin-top: 48px;
    }
  }
`