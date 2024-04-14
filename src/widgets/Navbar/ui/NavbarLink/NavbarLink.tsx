import React, { memo } from 'react';

import cls from './NavbarLink.module.scss';

import { classNames } from 'shared/lib/classNames/classNames';
import { Link } from 'react-router-dom';

interface NavbarLinkProps {
  className?: string;
  to: string;
  children: any;
  blank?: boolean;
}

const NavbarLink = memo(
  ({ className, blank, to, children }: NavbarLinkProps) => {
    return (
      <Link
        to={to}
        className={classNames(cls.NavbarLink, {}, [className])}
        target={blank ? '_blank' : 'default'}
      >
        <span />
        {children}
      </Link>
    );
  },
);

export default NavbarLink;
