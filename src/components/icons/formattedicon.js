import React from 'react';
import PropTypes from 'prop-types';
import IconGitHub from './github';
import IconExternal from './external';
import IconFolder from './folder';

const FormattedIcon = ({ name }) => {
  switch (name) {
    case 'GitHub':
      return <IconGitHub />;
    case 'Folder':
      return <IconFolder />;
    default:
      return <IconExternal />;
  }
};

FormattedIcon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default FormattedIcon;
