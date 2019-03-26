// @flow
import { PATH } from '@/routes';

export const MenuItems = [
  {
    id: '1',
    title: 'Главная',
    link: '/',
  },
  {
    id: '2',
    title: 'Прайс',
    link: PATH.price,
  },
  {
    id: '3',
    title: 'Каталог',
    link: PATH.catalog,
  },
  {
    id: '4',
    title: 'Текстура камня',
    link: PATH.textures,
  },
  {
    id: '5',
    title: 'Контакты',
    link: PATH.contacts,
  },
];
