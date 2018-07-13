import React from 'react'
import PropTypes from 'prop-types';
import {setFilter} from '../actions.js';
import {connect} from 'react-redux';

const Link = ({children, onClick}) => {
  return(
    <a onClick={onClick}>{children}</a>
  )
}

Link.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setFilter(ownProps.filter));
    }
  };
};

export default connect(null, mapDispatchToProps)(Link);