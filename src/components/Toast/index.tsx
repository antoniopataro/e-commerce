import React from 'react';

import ToastStyles from './styles';

interface ToastProps {
  content: string;
}

function Toast(props: ToastProps) {
  const content = props.content;

  const toastStyles = {
    opacity: content ? '1' : '0',
    transform: content ? 'translateY(-30px)' : 'translateY(30px)'
  };

  return <ToastStyles style={toastStyles}>{content}</ToastStyles>;
}

export default Toast;
