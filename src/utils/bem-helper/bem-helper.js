// @flow
import { toPairs } from 'lodash';

type ModifiersType = { [string]: boolean } | string | Array<string>;

export class BemHelper {
  blockName: string;

  _elementSeparator = '__';

  _modifierSeparator = '--';

  constructor(blockName: string) {
    this.blockName = blockName;
  }

  block(): string {
    return this.blockName;
  }

  element(elementName: string): string {
    return `${this.blockName}${this._elementSeparator}${elementName}`;
  }

  modifyBlock(modifiers: ModifiersType): string {
    return this.modify(this.blockName, modifiers);
  }

  modifyElement(elementName: string, modifiers: ModifiersType): string {
    return this.modify(this.element(elementName), modifiers);
  }

  modify(base: string, modifiers: ModifiersType): string {
    if (typeof modifiers === 'string') {
      return `${base}${this._modifierSeparator}${modifiers}`;
    } if (Array.isArray(modifiers)) {
      return modifiers.map(mod => `${base}${this._modifierSeparator}${mod}`).join(' ');
    } if (typeof modifiers === 'object') {
      return toPairs(modifiers).reduce((styles, [mod, enabled] = []) => {
        if (enabled) return [...styles, `${base}${this._modifierSeparator}${mod}`];
        return styles;
      }, []).join(' ');
    }
    return base;
  }
}
