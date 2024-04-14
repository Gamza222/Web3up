import React, { useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './NavbarLinks.module.scss';
import NavbarLink from '../../NavbarLink/NavbarLink';
import ButtonType1 from 'shared/ui/ButtonType1/ButtonType1';
import useWindowDimensions from 'shared/lib/hooks/useWindowDimensions/useWindowDimensions';

interface NavbarLinksProps {
  className?: string;
}

const NavbarLinks = ({ className }: NavbarLinksProps) => {
  const { width, height } = useWindowDimensions();

  const dimensionsProps = useMemo(
    () => ({
      width,
      height,
    }),
    [width, height],
  );
  return (
    <nav className={classNames(cls.NavbarLinks, {}, [className])}>
      {width > 1350 ? (
        <>
          {' '}
          <NavbarLink to='#main'>Что такое ZennoPoster</NavbarLink>
          <NavbarLink to='#main'>Программа курса</NavbarLink>
          <NavbarLink to='#main'>Результат</NavbarLink>
          <NavbarLink to='#main'>Тарифы</NavbarLink>
          <NavbarLink to='#main'>Отзывы</NavbarLink>
        </>
      ) : (
        <>
          <ButtonType1 navbar className={cls.NavbarLinkButton}>
            <NavbarLink to='#main'>Что такое ZennoPoster</NavbarLink>
          </ButtonType1>
          <ButtonType1 navbar className={cls.NavbarLinkButton}>
            <NavbarLink to='#main'>Программа курса</NavbarLink>
          </ButtonType1>
          <ButtonType1 navbar className={cls.NavbarLinkButton}>
            <NavbarLink to='#main'>Результат</NavbarLink>
          </ButtonType1>
          <ButtonType1 navbar className={cls.NavbarLinkButton}>
            <NavbarLink to='#main'>Тарифы</NavbarLink>
          </ButtonType1>
          <ButtonType1 navbar className={cls.NavbarLinkButton}>
            <NavbarLink to='#main'>Отзывы</NavbarLink>
          </ButtonType1>
        </>
      )}
    </nav>
  );
};

export default NavbarLinks;
