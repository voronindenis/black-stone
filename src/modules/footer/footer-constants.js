// @flow
import * as React from 'react';
import { PATH } from '@/routes';

import PHONE_ICON from '@/assets/icons/phone-icon.png';
import MAIL_ICON from '@/assets/icons/mail-icon.png';
import MARKER_ICON from '@/assets/icons/marker-icon.png';
import CLOCK_ICON from '@/assets/icons/clock-icon.png';
import INSTAGRAM_ICON from '@/assets/icons/instagram-icon.png';

import MIR_LOGO from './assets/mir-logo.png';
import VISA_LOGO from './assets/visa-pay-logo.png';
import MASTERCARD_LOGO from './assets/mastercard-logo.png';

export const LinksRowsItems = [
  {
    title: 'Столешницы',
    id: '1',
    link: PATH.countertops,
  },
  {
    title: 'Подоконники',
    id: '2',
    link: PATH.windowSills,
  },
  {
    title: 'Мойки',
    id: '3',
    link: PATH.sinks,
  },
  {
    title: 'Барные стойки',
    id: '4',
    link: PATH.barCounters,
  },
  {
    title: 'Столы',
    id: '5',
    link: PATH.tables,
  },
  {
    title: 'Контакты',
    id: '7',
    link: PATH.contacts,
  },
];

export const IconInfoBlockItems = [
  {
    id: '1',
    title: 'Телефон',
    text: <a href="tel:+74991308538">+7 (499) 130-85-38</a>,
    icon: PHONE_ICON,
  },
  {
    id: '2',
    title: 'email',
    text: <a href="mailto:GSRUS@GSRUS.RU">GSRUS@GSRUS.RU</a>,
    icon: MAIL_ICON,
  },
  {
    id: '3',
    title: 'Адрес',
    text: <p>г. Москва, Ул. Щепкина, д. 9, строение 1</p>,
    icon: MARKER_ICON,
  },
  {
    id: '4',
    title: 'Время работы',
    text: <p>пн-сб 9:00-19:00</p>,
    icon: CLOCK_ICON,
  },
  {
    id: '5',
    title: 'Мы в instagram',
    text: <a href="https://www.instagram.com/gsinst/">@gsinst</a>,
    icon: INSTAGRAM_ICON,
  },
];

export const PaymentSystems = [
  {
    id: '1',
    title: 'Мир',
    img: MIR_LOGO,
  },
  {
    id: '2',
    title: 'Mastercard',
    img: MASTERCARD_LOGO,
  },
  {
    id: '3',
    title: 'Visa',
    img: VISA_LOGO,
  },
];
