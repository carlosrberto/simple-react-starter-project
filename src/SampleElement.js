import React from 'react';
import PropTypes from 'prop-types';

const SampleElement = ({ children }) => <p><strong>{children}</strong></p>;

SampleElement.propTypes = {
  children: PropTypes.node,
};

export default SampleElement;
