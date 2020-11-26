import React from 'react';
import * as icons from '../../theme/icons';

const Icon = (props) => {
  const { type, classes, onClick } = props;

  const iconAction = icons[type];

  if (!iconAction) {
    return null;
  }

  return (
    <div className={classes} onClick={onClick}>
      {iconAction()}
    </div>
  )
}

export default Icon
