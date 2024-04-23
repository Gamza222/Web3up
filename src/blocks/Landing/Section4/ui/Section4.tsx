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
            text='Вводная лекция'
            lesson='Теория'
            exitAnimation={exitAnimation}
            color={LessonColors.YELLOW}
            contentText={
              'После прохождения модуля участники приобретут глубокие знания о современных угрозах информационной безопасности и освоят навыки анализа угроз, защиты данных и обнаружения инцидентов, готовясь применять их на практике для обеспечения безопасности автоматизированных систем.'
            }
            contentData={['Установка ПО', 'Установка библиотек']}
          />
          <Lesson
            number='2'
            text='Знакомство с интерфейсом Project Maker'
            lesson='Теория'
            exitAnimation={exitAnimation}
            color={LessonColors.YELLOW}
            contentText={
              'После прохождения модуля участники приобретут глубокие знания о современных угрозах информационной безопасности и освоят навыки анализа угроз, защиты данных и обнаружения инцидентов, готовясь применять их на практике для обеспечения безопасности автоматизированных систем.'
            }
            contentData={[
              'Знакомство с основными элементами интерфейса',
              'Настройки Project Maker',
              'Настройка рабочего пространства Project Maker',
            ]}
          />
          <Lesson
            number='3'
            text='Знакомство с интерфейсом ZennoPoster'
            lesson='Теория'
            exitAnimation={exitAnimation}
            color={LessonColors.YELLOW}
            contentText={
              'После прохождения модуля участники приобретут глубокие знания о современных угрозах информационной безопасности и освоят навыки анализа угроз, защиты данных и обнаружения инцидентов, готовясь применять их на практике для обеспечения безопасности автоматизированных систем.'
            }
            contentData={[
              'Знакомство с основными элементами интерфейса',
              'Настройки ZennoPoster',
            ]}
          />
          <Lesson
            number='4'
            text='Создание нового проекта в Project Maker. О переменных. Разбор меню ‘Данные’'
            lesson='Теория'
            exitAnimation={exitAnimation}
            color={LessonColors.YELLOW}
            contentText={
              'После прохождения модуля участники приобретут глубокие знания о современных угрозах информационной безопасности и освоят навыки анализа угроз, защиты данных и обнаружения инцидентов, готовясь применять их на практике для обеспечения безопасности автоматизированных систем.'
            }
            contentData={[
              'Создание проекта. Типы проектов',
              'Разбор подменю ‘Файлы’',
              'Разбор подменю ‘Директории’',
              'Разбор подменю ‘Рандом’',
              'Разбор подменю ‘Обработка изображений’',
              'Разбор подменю ‘СМС’',
            ]}
          />
          <Lesson
            number='5'
            text='О переменных. Разбор меню ‘Данные’ (часть 2)'
            lesson='Теория'
            exitAnimation={exitAnimation}
            color={LessonColors.YELLOW}
            contentText={
              'После прохождения модуля участники приобретут глубокие знания о современных угрозах информационной безопасности и освоят навыки анализа угроз, защиты данных и обнаружения инцидентов, готовясь применять их на практике для обеспечения безопасности автоматизированных систем.'
            }
            contentData={[
              'Разбор подменю ‘Обработка текста’',
              'Регулярные выражения. Конструктор выражений и где применяются.',
              'Разбор подменю ‘Обработка JSON/XML’',
              'Разбор подменю ‘Обработка переменных’',
            ]}
          />
          <Lesson
            number='6'
            text='Работа со списками в Project Maker'
            lesson='Теория'
            exitAnimation={exitAnimation}
            color={LessonColors.YELLOW}
            contentText={
              'После прохождения модуля участники приобретут глубокие знания о современных угрозах информационной безопасности и освоят навыки анализа угроз, защиты данных и обнаружения инцидентов, готовясь применять их на практике для обеспечения безопасности автоматизированных систем.'
            }
            contentData={[
              'Создание/подключение списков',
              'Глобальные и локальные списки',
              'Основные операции со списками',
            ]}
          />
          <Lesson
            number='7'
            text='Работа с таблицами в Project Maker'
            lesson='Теория'
            exitAnimation={exitAnimation}
            color={LessonColors.YELLOW}
            contentText={
              'После прохождения модуля участники приобретут глубокие знания о современных угрозах информационной безопасности и освоят навыки анализа угроз, защиты данных и обнаружения инцидентов, готовясь применять их на практике для обеспечения безопасности автоматизированных систем.'
            }
            contentData={[
              'Создание/подключение таблицы',
              'Основные операции со таблицами',
              'Google таблицы. За и Против!',
            ]}
          />
          <Lesson
            number='8'
            text='Начало работы с Браузером в Project Maker'
            lesson='Теория'
            exitAnimation={exitAnimation}
            color={LessonColors.YELLOW}
            contentText={
              'После прохождения модуля участники приобретут глубокие знания о современных угрозах информационной безопасности и освоят навыки анализа угроз, защиты данных и обнаружения инцидентов, готовясь применять их на практике для обеспечения безопасности автоматизированных систем.'
            }
            contentData={[
              'Разбор подменю ‘Настройки’ браузера',
              'Работа с прокси',
              'Разбор работы запуска/загрузки профилей',
              'Работа с cookie (экспорт/импорт)',
              'Работа со вкладками',
              'Работа с расширениями (установка/запуск)',
            ]}
          />
          <Lesson
            number='9'
            text='Что такое XPath? Основные приемы и правила написания качественных Xpath для работы с HTML-разметкой сайтов'
            lesson='Теория'
            exitAnimation={exitAnimation}
            color={LessonColors.YELLOW}
            contentText={
              'После прохождения модуля участники приобретут глубокие знания о современных угрозах информационной безопасности и освоят навыки анализа угроз, защиты данных и обнаружения инцидентов, готовясь применять их на практике для обеспечения безопасности автоматизированных систем.'
            }
            contentData={[
              'Все об Xpath с примерами',
              'Готовые универсальные XPath',
            ]}
          />
          <Lesson
            number='10'
            text='Работа во вкладках (на сайтах) в Project Maker. Работа с веб-элементами'
            lesson='Теория'
            exitAnimation={exitAnimation}
            color={LessonColors.YELLOW}
            contentText={
              'После прохождения модуля участники приобретут глубокие знания о современных угрозах информационной безопасности и освоят навыки анализа угроз, защиты данных и обнаружения инцидентов, готовясь применять их на практике для обеспечения безопасности автоматизированных систем.'
            }
            contentData={[
              'Разбор подменю ‘Переход на страницу’',
              'Разбор подменю ‘Получение/установка значений’',
              'Разбор подменю ‘Выполнить событие (click, touch, swipe, focus)’',
              'Проверка наличия текста',
            ]}
          />
          <Lesson
            number='11'
            text='Работа во вкладках (на сайтах) в Project Maker. Эмуляция на сайтах'
            lesson='Теория'
            exitAnimation={exitAnimation}
            color={LessonColors.YELLOW}
            contentText={
              'После прохождения модуля участники приобретут глубокие знания о современных угрозах информационной безопасности и освоят навыки анализа угроз, защиты данных и обнаружения инцидентов, готовясь применять их на практике для обеспечения безопасности автоматизированных систем.'
            }
            contentData={[
              'Эмуляция мыши',
              'Эмуляция клавиатуры',
              'Прокрутки страниц и имитации просмотров',
            ]}
          />
          <Lesson
            number='12'
            text='Работа во вкладках (на сайтах) в Project Maker. Распознавание CAPTCHA на сайтах'
            lesson='Теория'
            exitAnimation={exitAnimation}
            color={LessonColors.YELLOW}
            contentText={
              'После прохождения модуля участники приобретут глубокие знания о современных угрозах информационной безопасности и освоят навыки анализа угроз, защиты данных и обнаружения инцидентов, готовясь применять их на практике для обеспечения безопасности автоматизированных систем.'
            }
            contentData={[
              'Разбор подменю ‘Распознать капчу’',
              'Разбор подменю ‘Распознать reCaptcha’',
              'Разбор подменю ‘Распознать hCaptcha’',
            ]}
          />
          <Lesson
            number='13'
            text='Логика и циклы - важные элементы любого проекта'
            lesson='Теория'
            exitAnimation={exitAnimation}
            color={LessonColors.YELLOW}
            contentText={
              'После прохождения модуля участники приобретут глубокие знания о современных угрозах информационной безопасности и освоят навыки анализа угроз, защиты данных и обнаружения инцидентов, готовясь применять их на практике для обеспечения безопасности автоматизированных систем.'
            }
            contentData={[
              'Разбор меню ‘Логика’',
              'Примеры правильного построения логики',
              'Циклы и примеры их применения',
            ]}
          />
          <Lesson
            number='14'
            text='Прием почты (без веб-интерфейса) в Ваших проектах '
            lesson='Теория'
            exitAnimation={exitAnimation}
            color={LessonColors.YELLOW}
            contentText={
              'После прохождения модуля участники приобретут глубокие знания о современных угрозах информационной безопасности и освоят навыки анализа угроз, защиты данных и обнаружения инцидентов, готовясь применять их на практике для обеспечения безопасности автоматизированных систем.'
            }
            contentData={[
              'Разбор меню ‘Прием почты’',
              'Разбор конструктора приема почт',
            ]}
          />
          <Lesson
            number='15'
            text='Работа с POST/GET запросами в Project Maker'
            lesson='Теория'
            exitAnimation={exitAnimation}
            color={LessonColors.YELLOW}
            contentText={
              'После прохождения модуля участники приобретут глубокие знания о современных угрозах информационной безопасности и освоят навыки анализа угроз, защиты данных и обнаружения инцидентов, готовясь применять их на практике для обеспечения безопасности автоматизированных систем.'
            }
            contentData={[
              'Типы запросов',
              'Отправка запросов',
              'Получение и обработка ответов',
            ]}
          />
          <Lesson
            number='16'
            text='Запуск кода в Project Maker'
            lesson='Теория'
            exitAnimation={exitAnimation}
            color={LessonColors.YELLOW}
            contentText={
              'После прохождения модуля участники приобретут глубокие знания о современных угрозах информационной безопасности и освоят навыки анализа угроз, защиты данных и обнаружения инцидентов, готовясь применять их на практике для обеспечения безопасности автоматизированных систем.'
            }
            contentData={[
              'Разбор подменю ‘C# Код’',
              'Разбор подменю ‘JavaScript’',
              'Запуск внешних приложений',
              'Подключение библиотек',
            ]}
          />
          <Lesson
            number='17'
            text='Безопасность Ваших данных и средств'
            lesson='Теория + Практика'
            exitAnimation={exitAnimation}
            color={LessonColors.PINK}
            contentText={
              'После прохождения модуля участники приобретут глубокие знания о современных угрозах информационной безопасности и освоят навыки анализа угроз, защиты данных и обнаружения инцидентов, готовясь применять их на практике для обеспечения безопасности автоматизированных систем.'
            }
            contentData={[
              'Основные тезисы и приемы для обеспечения безопасности',
            ]}
          />
          <Lesson
            number='18'
            text='Продвинутая логика и рандомизация'
            lesson='Теория + Практика'
            exitAnimation={exitAnimation}
            color={LessonColors.PINK}
            contentText={
              'После прохождения модуля участники приобретут глубокие знания о современных угрозах информационной безопасности и освоят навыки анализа угроз, защиты данных и обнаружения инцидентов, готовясь применять их на практике для обеспечения безопасности автоматизированных систем.'
            }
            contentData={[
              'Все о расширенной логике',
              'Все о рандомизации с примерами',
            ]}
          />
          <Lesson
            number='20'
            text='Логирование'
            lesson='Теория + Практика'
            exitAnimation={exitAnimation}
            color={LessonColors.PINK}
            contentText={
              'После прохождения модуля участники приобретут глубокие знания о современных угрозах информационной безопасности и освоят навыки анализа угроз, защиты данных и обнаружения инцидентов, готовясь применять их на практике для обеспечения безопасности автоматизированных систем.'
            }
            contentData={[
              'Все о логировании: как, куда, зачем?',
              'Разбор вариаций ведения логов',
            ]}
          />
          <Lesson
            number='21'
            text='Примеры работы с RPC запросами в Project Maker'
            lesson='Теория + Практика'
            exitAnimation={exitAnimation}
            color={LessonColors.PINK}
            contentText={
              'После прохождения модуля участники приобретут глубокие знания о современных угрозах информационной безопасности и освоят навыки анализа угроз, защиты данных и обнаружения инцидентов, готовясь применять их на практике для обеспечения безопасности автоматизированных систем.'
            }
            contentData={[
              'Что такое RPC?',
              'Отправка основных запросов и обработка ответов',
            ]}
          />
          <Lesson
            number='22'
            text='Работа в Project Maker. Пишем свой проект №1'
            lesson='Практика'
            exitAnimation={exitAnimation}
            color={LessonColors.BLUE}
            contentText={
              'После прохождения модуля участники приобретут глубокие знания о современных угрозах информационной безопасности и освоят навыки анализа угроз, защиты данных и обнаружения инцидентов, готовясь применять их на практике для обеспечения безопасности автоматизированных систем.'
            }
            contentData={[
              'Создание проекта по импорту/входу в кошельки Метамаск',
              'Работа с профилями',
            ]}
          />
          <Lesson
            number='23'
            text='Работа в Project Maker. Пишем свой проект №2'
            lesson='Практика'
            exitAnimation={exitAnimation}
            color={LessonColors.BLUE}
            contentText={
              'После прохождения модуля участники приобретут глубокие знания о современных угрозах информационной безопасности и освоят навыки анализа угроз, защиты данных и обнаружения инцидентов, готовясь применять их на практике для обеспечения безопасности автоматизированных систем.'
            }
            contentData={[
              'Вход/импорт в профиля на основе проекта №1',
              'Создание проекта SWAPов ETH → USD* на одной из популярных площадок',
            ]}
          />
          <Lesson
            number='24'
            text='Запуск созданных проектов в ZennoPoster'
            lesson='Практика'
            exitAnimation={exitAnimation}
            color={LessonColors.BLUE}
            contentText={
              'После прохождения модуля участники приобретут глубокие знания о современных угрозах информационной безопасности и освоят навыки анализа угроз, защиты данных и обнаружения инцидентов, готовясь применять их на практике для обеспечения безопасности автоматизированных систем.'
            }
            contentData={[
              'Запуск проектов с Входными настройками',
              'Отладка проектов',
            ]}
          />
        </div>
      </div>
    </AnimationBoxScroll>
  );
};

export default Section4;
