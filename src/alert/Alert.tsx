import {
  CheckCircleFilled,
  CloseCircleFilled,
  CloseOutlined,
  ExclamationCircleFilled,
  InfoCircleFilled,
} from '@ant-design/icons';
import classNames from 'classnames';
import React, { useState } from 'react';
import { classPrefix } from '../global.config';
import './style/Alert.scss';
import { AlertTypes } from './type';

const iconMapFilled = {
  success: CheckCircleFilled,
  info: InfoCircleFilled,
  error: CloseCircleFilled,
  warning: ExclamationCircleFilled,
};

const Alert = (props: AlertTypes) => {
  const {
    className,
    title,
    message,
    type,
    showIcon = true,
    closeable,
    onClose,
  } = props;
  const [hideAlert, setHideAlert] = useState(false);
  const userClassName = Array.isArray(className) ? className : [className];

  const classnames = classNames(
    'alert',
    [`${classPrefix}-alert`, `${classPrefix}-alert-type-${type}`],
    [`${classPrefix}-alert-${type}`],
    ...userClassName,
  );

  const iconNode = () => {
    if (!type) return null;
    return React.createElement(iconMapFilled[type], {
      className: `${classPrefix}-alert-icon ${type}`,
    });
  };

  const handleHideAlert = () => {
    setHideAlert(true);
    onClose?.();
  };

  return !hideAlert ? (
    <div className={classnames}>
      {!!showIcon && iconNode()}
      <span className={classPrefix + '-alert-content'}>
        {!!title && <div className="title">{title}</div>}
        <div className="content">{message}</div>
      </span>
      {closeable && (
        <CloseOutlined
          className={classPrefix + 'icon-close'}
          onClick={handleHideAlert}
        />
      )}
    </div>
  ) : null;
};

export default Alert;
