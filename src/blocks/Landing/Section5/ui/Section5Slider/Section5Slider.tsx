import React, { useEffect, useState } from 'react';
import cls from './Section5Slider.module.scss';
import ArrowPicType2 from 'shared/ui/ArrowPicType2/ArrowPicType2';
import AnimationBoxScroll from 'shared/ui/AnimationBoxScroll/AnimationBoxScroll';
import Section5Slide from './Section5Slide/Section5Slide';

import portfolio1Pic from 'shared/assets/icons/pngs/portfolio1.png';
import zenoPic1 from 'shared/assets/icons/pngs/ZennoPoster1.png';
import zenoPic2 from 'shared/assets/icons/pngs/ZennoPoster2.png';

import { classNames } from 'shared/lib/classNames/classNames';
import SliderLoader from 'shared/ui/SliderLoader/SliderLoader';

interface Section5SliderProps {
  className?: string;
  exitAnimation: boolean;
}

const Section5Slider = ({ className, exitAnimation }: Section5SliderProps) => {
  const duration = 1;
  const numOfSlides = 3;
  const [slide, setSlide] = useState<number>(1);
  const minusSlide = () => {
    if (slide == 1) {
      setSlide(numOfSlides);
    } else {
      setSlide(slide - 1);
    }
  };
  const plusSlide = () => {
    if (slide == numOfSlides) {
      setSlide(1);
    } else {
      setSlide(slide + 1);
    }
  };

  const animationButtonsVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: duration,
      },
    },
  };

  console.log(slide);
  return (
    <div className={classNames(cls.Section5Slider, {}, [])}>
      <div className={cls.Section5Slider__top}>
        <AnimationBoxScroll
          visiblePart={10}
          exitAnimation={exitAnimation}
          className={cls.ArrowsBtns}
          variants={animationButtonsVariants}
        >
          <ArrowPicType2
            className={cls.ArrowsBtns__minus}
            onClick={minusSlide}
          />
          <ArrowPicType2 className={cls.ArrowsBtns__plus} onClick={plusSlide} />
        </AnimationBoxScroll>
        <div className={cls.Section5Slider__slider}>
          <SliderLoader slide={slide} numOfSlides={numOfSlides} />
        </div>
      </div>
      <div className={cls.Section5Slider__content}>
        <div className={cls.Section5Slider__content__texts}>
          <Section5Slide
            show={slide == 1}
            title={[
              { text: 'Скрипт активностей в сети ' },
              { text: 'zkSync ERA/LIGHT', gradient: true },
            ]}
            subtitle={
              'zkSync – предназначенная для обеспечения быстрых и недорогих транзакций в Ethereum.'
            }
            options={[
              'более 20 площадок, взаимодействие с 25+ токенами, 50+ смарт-контрактами',
              'более 15 блоков активностей (swap, mint nft, dmail, pool, liqutity, daily checkin и др.), которые выполняются в абсолютно рандомном порядке, каждый блок индивидуален и не зависит от других (вкл/выкл)',
              'рандомизация сумм операций в указанных диапазонах для каждого действия',
              'полное логирование блоков активностей с записью в таблицу',
              'полная эмуляция поведения человека и многое другое - обеспечивает антиSybil действия',
            ]}
            exitAnimation={exitAnimation}
          />
          <Section5Slide
            show={slide == 2}
            title={[
              { text: 'Скрипт активностей в сети ' },
              { text: 'zkSync ERA/LIGHT', gradient: true },
            ]}
            subtitle={
              'zkSync – предназначенная для обеспечения быстрых и недорогих транзакций в Ethereum.'
            }
            options={[
              'более 20 площадок, взаимодействие с 25+ токенами, 50+ смарт-контрактами',
              'более 15 блоков активностей (swap, mint nft, dmail, pool, liqutity, daily checkin и др.), которые выполняются в абсолютно рандомном порядке, каждый блок индивидуален и не зависит от других (вкл/выкл)',
              'рандомизация сумм операций в указанных диапазонах для каждого действия',
            ]}
            exitAnimation={exitAnimation}
          />
          <Section5Slide
            show={slide == 3}
            title={[
              { text: 'Скрипт активностей в сети ' },
              { text: 'zkSync ERA/LIGHT', gradient: true },
            ]}
            subtitle={
              'zkSync – предназначенная для обеспечения быстрых и недорогих транзакций в Ethereum.'
            }
            options={[
              'более 20 площадок, взаимодействие с 25+ токенами, 50+ смарт-контрактами',
            ]}
            exitAnimation={exitAnimation}
          />
        </div>
        <div className={cls.Section5Slider__content__pic}>
          <AnimationBoxScroll
            className={cls.Section5Slider__content__pic__img}
            visiblePart={50}
            variants={animationButtonsVariants}
            addVisibleOption={slide == 1}
            exitAnimation={exitAnimation}
          >
            <img src={portfolio1Pic} alt='' />
          </AnimationBoxScroll>
          <AnimationBoxScroll
            className={cls.Section5Slider__content__pic__img}
            visiblePart={50}
            variants={animationButtonsVariants}
            addVisibleOption={slide == 2}
            exitAnimation={exitAnimation}
          >
            <img src={zenoPic1} alt='' />
          </AnimationBoxScroll>
          <AnimationBoxScroll
            className={cls.Section5Slider__content__pic__img}
            visiblePart={50}
            variants={animationButtonsVariants}
            addVisibleOption={slide == 3}
            exitAnimation={exitAnimation}
          >
            <img src={zenoPic2} alt='' />
          </AnimationBoxScroll>
        </div>
      </div>
    </div>
  );
};

export default Section5Slider;
