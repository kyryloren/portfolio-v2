import React from 'react';
import PropTypes from 'prop-types';
import { IconGitHub, IconExternal, IconFolder } from '@components/icons';

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
