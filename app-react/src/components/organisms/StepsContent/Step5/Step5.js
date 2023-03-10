import React, { useEffect, useContext } from 'react';
import { Wrapper, GreenIconStyleWrapper, TextSection, SectionHeader } from './Step5-styled';
import { CheckCircle } from '@styled-icons/material/CheckCircle';
import '@fontsource/montserrat';
import { UserDataContext } from 'providers/UserDataProvider';

const Step5 = ({ totalPrice }) => {
  const UserCtx = useContext(UserDataContext);

  useEffect(() => {
    const createReservation = async () => {
      if (UserCtx?.room?._links?.CREATE_RESERVATION?.href) {
        const reservationUrl = UserCtx.room._links.CREATE_RESERVATION.href;
        const UserContext = { ...UserCtx };
        delete UserContext.guestData.active;
        delete UserContext.invoiceData.active;
        const body = { ...UserCtx, totalPrice: totalPrice };
        if (body.customerData.email && !body.guestData.email) {
          body.guestData.email = body.customerData.email;
        }
        if (body.customerData.name && !body.guestData.name) {
          body.guestData.name = body.customerData.name;
        }
        if (body.customerData.surname && !body.guestData.surname) {
          body.guestData.surname = body.customerData.surname;
        }
        const requestOptions = {
          method: 'POST',
          body: JSON.stringify(body),
          headers: new Headers({ 'content-type': 'application/json' }),
        };
        const response = await fetch(reservationUrl, requestOptions);
        const data = await response.json();
        console.dir(data);
      }
    };
    createReservation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Wrapper>
      <GreenIconStyleWrapper>
        <CheckCircle size="96" />
      </GreenIconStyleWrapper>
      <SectionHeader>Dziękujemy!</SectionHeader>
      <TextSection>Twoja rezerwacja została rozpatrzona pozytywnie a jej potwierdzenie otrzymasz wkrótce na podany adres e-mail!</TextSection>
      <TextSection>Dziękujemy za skorzystanie z Bookify.</TextSection>
    </Wrapper>
  );
};

export default Step5;
