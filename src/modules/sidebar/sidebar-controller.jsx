// @flow
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { setFilterMethod, getFilterMethod } from '@/modules/catalog';
import { Sidebar } from './sidebar';

const mapStateToProps = createStructuredSelector({
  filterMethod: getFilterMethod,
});

export const SidebarController = connect(
  mapStateToProps,
  {
    setFilterMethod,
  }
)(Sidebar);
