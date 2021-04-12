import React, { useState } from 'react';
import { BiCreditCardFront, BiCreditCard } from 'react-icons/bi';

import {
  CardWrapper,
  Card,
  FrontCard,
  CardType,
  BankName,
  Blackbar,
  CVVText,
  WhiteBar,
  BackText,
  InputNumber,
  InputDate,
  InputName,
  BackCard,
  InputCvv,
  ButtonFlipCard,
  LabelValid
} from '../../styles/pages/Card';

const CardInterative: React.FC = () => {
  const [rotation, setRotation] = useState<boolean>(false);

  return (
    <CardWrapper>
      <Card>
        <ButtonFlipCard onClick={() => setRotation(!rotation)}>{!rotation ? <BiCreditCard /> : <BiCreditCardFront />}</ButtonFlipCard>
        <FrontCard rotate={rotation}>
          <CardType>Debit Card</CardType>
          <BankName>Bank KML-Cred</BankName>
          {/* <img src="img/chip.png" class="chip"> */}
          <InputNumber
            autoComplete="off"
            name="cardNumber"
            mask='9999 9999 9999 9999'
            placeholder="0000 0000 0000 0000"
          />

          <LabelValid>Valid</LabelValid>
          <InputDate
            autoComplete="off"
            name="cardDate"
            mask='99/99'
            placeholder='00/00'
          />

          <InputName autoComplete="off" name="cardName" type="text" placeholder='Card Holder Name' />

          {/* <img src="img/chip.png" class="chip"> */}
        </FrontCard>
        <BackCard rotate={rotation}>
          <Blackbar></Blackbar>
          <CVVText>
            <h5>Autorized Signature-not valid unless signed</h5>
            <WhiteBar ></WhiteBar>
            <InputCvv autoComplete="off" name="ccv" placeholder='000' mask='999' />
          </CVVText>
          <BackText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
        </BackText>
        </BackCard>
      </Card>
    </CardWrapper>
  )
}

export default CardInterative;
