import React, { useState } from 'react';
import { BiCreditCardFront, BiCreditCard } from 'react-icons/bi';
import Image from 'next/image';

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
  LabelValid,
  ImageChip,
  FlagCard
} from '../../styles/pages/Card';

const CardInterative: React.FC = () => {
  const [rotation, setRotation] = useState<boolean>(false);
  const [flag, setFlag] = useState<string>('');

  const handleFlag = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.split('_')[0]

    if (value.length === 7) {
      const response = await fetch(`http://localhost:3000/api/cards/flag/${value.replace(' ', '')}0000000000`);
      const data = await response.json()
      setFlag(data.flagCard);
    }
    if (value.length < 7) {
      setFlag('');
    }
  }

  return (
    <CardWrapper>
      <Card>
        <ButtonFlipCard onClick={() => setRotation(!rotation)}>{true ? <BiCreditCard /> : <BiCreditCardFront />}</ButtonFlipCard>
        <FrontCard rotate={rotation}>
          <CardType>Credit Card</CardType>
          <BankName>Dev Bank</BankName>
          <ImageChip>
            <Image
              priority
              src="/images/chip.png"
              alt='chip'
              width={64}
              height={46}
            />
          </ImageChip>

          <InputNumber
            autoComplete="off"
            name="cardNumber"
            mask='9999 9999 9999 9999'
            placeholder="0000 0000 0000 0000"
            maskPlaceholder={null}
            onChange={(e) => handleFlag(e)}
          />

          <LabelValid>Valid</LabelValid>
          <InputDate
            autoComplete="off"
            name="cardDate"
            mask='99/99'
            placeholder='00/00'
          />

          <InputName autoComplete="off" name="cardName" type="text" placeholder='Card Holder Name' />

          {flag ? (
            <FlagCard>
              <Image
                priority
                src={`/images/${flag}.png`}
                alt='chip'
                width={64}
                height={46}
              />
            </FlagCard>
          ) : (
            <span></span>
          )}

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
