import React, { useCallback, useState } from 'react';

import cls from './Section4.module.scss';
import AnimationBoxScroll from 'shared/ui/AnimationBoxScroll/AnimationBoxScroll';
import TitleBar from './TitleBar/TitleBar';

import { classNames } from 'shared/lib/classNames/classNames';
import { Lesson } from 'widgets/Lesson';
import { LessonColors } from 'widgets/Lesson/ui/Lesson';

interface Section4Props {
  className?: string;
}

const Section4 = ({ className }: Section4Props) => {
  const duration = 0.6;

  const [exitAnimation, setExitAnimation] = useState(false);

  const setterExitAnimation = useCallback((value: boolean) => {
    setExitAnimation(value);
  }, []);

  const animationTitleVariants = {
    hidden: { y: '150%', opacity: 0 },
    visible: {
      y: 0,

      opacity: 1,
      transition: {
        ease: [0.135, 0.285, 0.335, 1],

        duration: duration,
      },
    },
  };
  return (
    <AnimationBoxScroll
      className={classNames(cls.Section4, {}, [])}
      visiblePart={20}
      // variants={animationSection4Variants}
      exitAnimation={exitAnimation || false}
      setExit={setterExitAnimation}
    >
      <div className={cls.Section4__content}>
        <div className={cls.Titlewrapper}>
          <AnimationBoxScroll
            visiblePart={0}
            variants={animationTitleVariants}
            exitAnimation={exitAnimation}
          >
            <h3 className={cls.Title}>Программа курса</h3>
          </AnimationBoxScroll>
        </div>
        <TitleBar exitAnimation={exitAnimation} />
        <div className={cls.Lessons}>
          <Lesson
            number='1'
            first
            text='Подготовка в сфере безопастности для работы с автоматизацией'
            lesson='Теория'
            exitAnimation={exitAnimation}
            color={LessonColors.YELLOW}
            contentText={
              'После прохождения модуля участники приобретут глубокие знания о современных угрозах информационной безопасности и освоят навыки анализа угроз, защиты данных и обнаружения инцидентов, готовясь применять их на практике для обеспечения безопасности автоматизированных систем.'
            }
            contentData={[
              'Основы безопасности информации.',
              'Основы сетевой безопасности.',
              'Безопасность при работе с программным обеспечением',
              'Защита данных.',
              'Управление учетными записями и доступом.',
              'Обнаружение и реагирование на инциденты.',
              'Защита от социальной инженерии.',
              'Заключительный экзамен и практические упражнения.',
            ]}
          />
          <Lesson
            number='2'
            text='Создание профилей ваших крипто-кошельков'
            lesson='Практика'
            exitAnimation={exitAnimation}
            color={LessonColors.BLUE}
            contentText={
              'После прохождения модуля участники приобретут глубокие знания о современных угрозах информационной безопасности и освоят навыки анализа угроз, защиты данных и обнаружения инцидентов, готовясь применять их на практике для обеспечения безопасности автоматизированных систем.'
            }
            contentData={[
              'Основы безопасности информации.',
              'Основы сетевой безопасности.',
              'Безопасность при работе с программным обеспечением',
            ]}
          />
          <Lesson
            number='3'
            text='Разработка вашей базы данных для анализа активностей'
            lesson='Теория + практика'
            exitAnimation={exitAnimation}
            color={LessonColors.PINK}
            contentText={
              'После прохождения модуля участники приобретут глубокие знания о современных угрозах информационной безопасности и освоят навыки анализа угроз, защиты данных и обнаружения инцидентов, готовясь применять их на практике для обеспечения безопасности автоматизированных систем.'
            }
            contentData={[
              'Основы безопасности информации.',
              'Основы сетевой безопасности.',
              'Безопасность при работе с программным обеспечением',
            ]}
          />
          <Lesson
            number='4'
            text='Работа с подключением различных прокси для работы с активностями'
            lesson='Теория + практика'
            exitAnimation={exitAnimation}
            color={LessonColors.PINK}
            contentText={
              'После прохождения модуля участники приобретут глубокие знания о современных угрозах информационной безопасности и освоят навыки анализа угроз, защиты данных и обнаружения инцидентов, готовясь применять их на практике для обеспечения безопасности автоматизированных систем.'
            }
            contentData={[
              'Основы безопасности информации.',
              'Основы сетевой безопасности.',
              'Безопасность при работе с программным обеспечением.',
            ]}
          />
          <Lesson
            number='5'
            text='Работа по изучения XPath для работы с HTML разметкой веб-ресурсов.'
            lesson='Практика'
            exitAnimation={exitAnimation}
            color={LessonColors.BLUE}
            contentText={
              'После прохождения модуля участники приобретут глубокие знания о современных угрозах информационной безопасности и освоят навыки анализа угроз, защиты данных и обнаружения инцидентов, готовясь применять их на практике для обеспечения безопасности автоматизированных систем.'
            }
            contentData={[
              'Основы безопасности информации.',
              'Основы сетевой безопасности.',
              'Безопасность при работе с программным обеспечением',
            ]}
          />
          <Lesson
            number='6'
            text='Работа с веб-ресурсами (подключения кошелька, выполнения активностей)'
            lesson='Теория + практика'
            exitAnimation={exitAnimation}
            color={LessonColors.PINK}
            contentText={
              'После прохождения модуля участники приобретут глубокие знания о современных угрозах информационной безопасности и освоят навыки анализа угроз, защиты данных и обнаружения инцидентов, готовясь применять их на практике для обеспечения безопасности автоматизированных систем.'
            }
            contentData={[
              'Основы безопасности информации.',
              'Основы сетевой безопасности.',
              'Безопасность при работе с программным обеспечением',
            ]}
          />
          <Lesson
            number='7'
            text='Анализ работы с активностями с помощью RPC'
            lesson='Теория'
            exitAnimation={exitAnimation}
            color={LessonColors.YELLOW}
            contentText={
              'После прохождения модуля участники приобретут глубокие знания о современных угрозах информационной безопасности и освоят навыки анализа угроз, защиты данных и обнаружения инцидентов, готовясь применять их на практике для обеспечения безопасности автоматизированных систем.'
            }
            contentData={[
              'Основы безопасности информации.',
              'Основы сетевой безопасности.',
              'Безопасность при работе с программным обеспечением',
            ]}
          />
        </div>
      </div>
    </AnimationBoxScroll>
  );
};

export default Section4;
