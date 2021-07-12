import styled from 'styled-components';

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: auto;
  margin-top: 40px;
`;

export const TitleHome = styled.h1`
  text-align: center;
  margin-bottom: 30px;
  font-size: 2.4rem;
`;

export const SubtitleHome = styled.h3`
  margin-bottom: 50px;
  font-size: 1.4rem;
`;

export const ListHome = styled.ol`
  margin-left: 25px;
  li{
    margin-bottom: 30px;
  }
  a{
    font-style: none;
    color: #000;
    font-weight: bold;
  }
`
