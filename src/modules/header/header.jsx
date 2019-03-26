// @flow
import * as React from 'react';
import { createBlock } from '@/utils/bem-helper';
import { RowInfoBlock } from '../submodules/row-info-block';
import { Menu } from '../submodules/menu';
import { MenuItems } from './header-constants';
import logoUri from '@/assets/image/blackstone.svg';
import './assets/header.sass';

const block = createBlock('header');

const centerContent = [
  {
    id: '1',
    title: 'Blackstone',
    img: logoUri,
  },
];

export const Header = () => (
  <header className={block.block()}>
    <RowInfoBlock
      className={block.element('row-info-block')}
      leftContent={<a href="tel: +74991121774">+7 (499) 112-17-74</a>}
      centerContent={centerContent}
      rightContent={<a href="mailto: blackstone@mail.ru">blackstone@mail.ru</a>}
    />
    <Menu
      className={block.element('menu')}
      leftButtonLabel="Оставить заявку"
      menuItems={MenuItems}
      rightButtonLabel="Онлайн калькулятор"
    />
  </header>
);
