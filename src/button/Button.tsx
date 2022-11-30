import classnames from 'classnames';
import React from 'react';
import { classPrefix } from '../global.config';
import './style/Button.scss';
import { ButtonTypes } from './type';

const Button = (props: ButtonTypes) => {
  const { type, size = 'normal', disabled, shape, style } = props;

  const className = classnames(
    'a',
    [
      `${classPrefix}-button`,
      `${classPrefix}-button-theme`,
      `${classPrefix}-button-size-${size}`,
      `${classPrefix}-button-type-${type}`,
    ],
    {
      [`${classPrefix}-button-shape-${shape}`]: shape !== 'rectangle',
      [`${classPrefix}-button-disable`]: disabled,
    },
  );

  return (
    <button
      type="button"
      className={className}
      disabled={disabled}
      style={style}
    >
      确定
    </button>
  );
};

export default Button;
