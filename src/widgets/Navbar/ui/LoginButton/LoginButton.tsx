import React from 'react';

import cls from './LoginButton.module.scss';

import PersonPic from 'shared/assets/icons/main/Person.svg';
import ButtonType1 from 'shared/ui/ButtonType1/ButtonType1';

import { classNames } from 'shared/lib/classNames/classNames';

interface LoginButtonProps {
  className?: string;
}

const LoginButton = ({ className }: LoginButtonProps) => {
  return (
    <ButtonType1
      onClick={() => {}}
      className={cls.ButtonType1}
      text='Логин'
      Pic={PersonPic}
      picClassName={cls.LoginPic}
      navbar
    />
  );
};

export default LoginButton;
