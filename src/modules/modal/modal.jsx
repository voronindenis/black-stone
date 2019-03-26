// @flow
import * as React from 'react';
import { Modal as SuiModal } from 'semantic-ui-react';
import { createBlock } from '@/utils/bem-helper';
import type { ModalSizeTypes } from './modal-types';
import './assets/modal.sass';

const block = createBlock('custom-modal');

type ModalPropsType = {
  header: string,
  children: React.Element<*>,
  size: ModalSizeTypes,
  open: boolean,
  close: Function,
};

type ModalStateType = {
  open: boolean,
};

export class Modal extends React.PureComponent<ModalPropsType, ModalStateType> {
  state = {
    open: false,
  };

  static getDerivedStateFromProps(nextProps: ModalPropsType, state: ModalStateType) {
    if (state.open !== nextProps.open) {
      return {
        open: nextProps.open,
      };
    }
    return {
      open: false,
    };
  }

  render() {
    return (
      <SuiModal
        className={block.block()}
        size={this.props.size}
        open={this.state.open}
        onClose={this.props.close}
      >
        <SuiModal.Header>
          {this.props.header}
        </SuiModal.Header>
        {this.props.children}
      </SuiModal>
    );
  }
}
