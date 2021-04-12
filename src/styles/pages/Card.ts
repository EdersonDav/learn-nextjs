import styled from 'styled-components';
import InputMask from 'react-input-mask';

interface IRotation {
  rotate?: boolean;
}

export const CardWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #1c1c25;

  &::before{
    content:'';
    position: absolute;
    bottom: -40%;
    left: 40%;
    width: 600px;
    height: 600px;
    background: linear-gradient(#0f0, #ff0);
    border-radius: 50%;
  }
`;

export const Card = styled.div`
  position: relative;
  width: 508px;
  height: 314px;
  transform-style: preserve-3d;
  perspective: 500px;
`;

export const FrontCard = styled.div<IRotation>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-shadow: 0 15px 35px rgba(0,0,0,0.5);
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  transform-style: preserve-3d;
  transition: 1s;
  backface-visibility: hidden;
  ${(props: { rotate?: boolean }) => props.rotate ? 'transform:rotateY(180deg)' : 'none'};
`;

export const CardType = styled.h3`
  position: absolute;
  left: 40px;
  top: 30px;
  color: #fff;
  font-weight: 500;
`;

export const BankName = styled.h3`
  position: absolute;
  right: 40px;
  top: 25px;
  color: #fff;
  font-weight: 500;
  font-style: italic;
  font-size: 24px;
`;

export const InputNumber = styled(InputMask)`
  position: absolute;
  bottom: 130px;
  left: 40px;
  color: #fff;
  font-weight: 500;
  letter-spacing: 6px;
  font-size: 18px;
  text-shadow: 0 2px 1px #0005;
  width: 89%;
`;

export const InputDate = styled(InputMask)`
  position: absolute;
  bottom: 90px;
  left: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-weight: 300;
  line-height: 1em;
`;

export const LabelValid = styled.label`
  position: absolute;
  bottom: 90px;
  left: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-weight: 300;
  line-height: 1em;
`;

export const InputName = styled.input`
  position: absolute;
  bottom: 40px;
  left: 40px;
  color: #fff;
  font-weight: 300;
  font-size: 16px;
  letter-spacing: 2px;
  width: 90%;
`;

export const BackCard = styled.div<IRotation>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-shadow: 0 15px 35px rgba(0,0,0,0.5);
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  transform-style: preserve-3d;
  transition: 1s;
  backface-visibility: hidden;
  ${(props: { rotate?: boolean }) => props.rotate ? 'transform: rotateY(360deg)' : 'transform: rotateY(180deg)'};
`;

export const Blackbar = styled.div`
  position: absolute;
  top: 40px;
  width: 100%;
  height: 60px;
  background: #000;
`;

export const CVVText = styled.div`
  position: absolute;
  top: 120px;
  left: 30px;
  h5{
    color: #fff;
    font-weight: 400;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 2px;
  }
`;

export const WhiteBar = styled.div`
  position: relative;
  width: 400px;
  height: 40px;
  background:#fff;
  margin-top: 5px;
`;

export const InputCvv = styled(InputMask)`
  position: relative;
  top: -35px;
  left: 395px;
  background: #ccc;
  color: #111;
  width: 50px;
  height: 30px;
  font-weight: 600;
  letter-spacing: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BackText = styled.p`
  position: absolute;
  bottom: 30px;
  left: 30px;
  right: 30px;
  color:#fff;
  font-size: 10px;
  line-height: 1.4em;
  font-weight: 300;
`;


export const ButtonFlipCard = styled.button`
  position: absolute;
  right: -79px;
  top: -33px;
  color: #fff;
  font-size: 47px;
`;

