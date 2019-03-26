// @flow
import * as React from 'react';
import { map } from 'lodash';
import cn from 'classnames';
import type { SidebarMenuItemType } from '@/pages/home-page';
import { createBlock } from '@/utils/bem-helper';
import './sidebar.sass';

const block = createBlock('sidebar');

type SidebarType = {
  menuItems: SidebarMenuItemType[],
  setFilterMethod: (filterMethod: string) => void;
  filterMethod: string,
};

export const Sidebar = ({ menuItems, setFilterMethod, filterMethod }: SidebarType) => (
  <div className={block.block()}>
    <div className={block.element('title')}>
      <h4 className={block.element('title_text')}>Каталог</h4>
    </div>
    <div className={block.element('menu_items')}>
      {
        map(menuItems, (item: SidebarMenuItemType) => (
          <a
            key={item.id}
            onClick={() => setFilterMethod(item.filterMethod)}
            className={cn(
              block.element('menu_item'),
              filterMethod === item.filterMethod
                ? block.modifyElement('menu_item', 'active')
                : null
            )}
          >
            {item.text}
          </a>
        ))
      }
    </div>
  </div>
);
