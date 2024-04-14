import React, { memo } from 'react';

import cls from './NavbarMobileNav.module.scss';
import LogoPic from 'shared/assets/icons/Logo.svg';
import NavbarLinks from '../../Navbar/NavbarLinks/NavbarLinks';
import LoginButton from '../../LoginButton/LoginButton';
import RegisterButton from '../../RegisterButton/RegisterButton';

import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { Link } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

interface NavbarMobileNavProps {
  className?: string;
  closing?: boolean;
}

const NavbarMobileNav = memo(({ className, closing }: NavbarMobileNavProps) => {
  const mods: Mods = {
    [cls.NavbarMobileNavClosed]: closing,
  };
  return (
    <div className={classNames(cls.NavbarMobileNav, { ...mods }, [])}>
      <div className={cls.Buttons}>
        <LoginButton />
        <RegisterButton />
      </div>
      <NavbarLinks className={cls.NavbarLinks} />
      <Link to={RoutePath.main} className={cls.Logo}>
        <LogoPic className={cls.Logo__pic} />
      </Link>
    </div>
  );
});

export default NavbarMobileNav;
