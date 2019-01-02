/*
* 列表页面的新增按钮
* */

import React from 'react';
import { Link } from 'dva/router';
import { Button } from 'antd';

function PathButton({ className, ...props }) {
  const { to, name = '新增', onClick, disabled = false } = props;
  const btnProps = {
    type: 'primary',
    icon: 'plus',
    style: {
      marginBottom: 12,
    },
    disabled,
  };

  if (onClick) {
    return (
      <Button {...btnProps} onClick={onClick}>{name}</Button>
    );
  }
  
  return (
    <Link to={to} className={className}>
      <Button {...btnProps}>{name}</Button>
    </Link>
  );
}

export default PathButton;
