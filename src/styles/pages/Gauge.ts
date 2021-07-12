import styled from 'styled-components';

export const GaugeWrapper = styled.div`
  display: flex;
  >div{
    margin-top: 50px;
    position: relative;
    background-image: url('/gauge/gauge.svg');
    background-repeat: no-repeat;
    height: 130px;
    width: 130px;

    .pointOne{
      height: 4px;
      width: 50px;
      background-color: #000;
      position: absolute;
      left: 66px;
      bottom: 40px;
      transform-origin: bottom left;
      transform: rotate(-45deg);

    }

  }
`
