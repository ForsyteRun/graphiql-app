import editor from '../assets/img/editor.png';
import header from '../assets/img/header.png';
import vary from '../assets/img/var.png';
import api from '../assets/img/APIs.png';
import schema from '../assets/img/schema.png';

export const welcomePageContentList = {
  Efficiency: 'Clients get exactly the data they need, no more, no less',
  Flexibility: 'Clients can request multiple resources in a single query',
  Versioning: 'No need for versioning as clients have control',
  'Strongly Typed': 'Type checking at the query level',
};

export const welcomePlus = {
  label: [
    'Эффективность',
    'Гибкость',
    'Управление версиями',
    'Строгая типизация',
  ],
  description: [
    'Клиенты получают именно те данные, которые им нужны, ни больше, ни меньше',
    'Клиенты могут запрашивать несколько ресурсов в одном запросе',
    'В контроле версий нет необходимости',
    'Проверка типов на уровне запроса',
  ],
};

export const aboutData = [
  {
    img: editor,
    title: 'Удобный редактор',
    description:
      'Это легковесная и интерактивная среда разработки GraphQL в браузере, которая предлагает интуитивно понятный интерфейс, что облегчает исследование и экспериментирование с GraphQL API.',
    date: 'Sep 11, 2023',
  },
  {
    img: header,
    title: 'Изменяемый заголовок',
    description:
      'Вы можете параметризовать свои запросы, делая их более динамичными и многократно используемыми.',
    date: 'Sep 11, 2023',
  },
  {
    img: vary,
    title: 'Переменные',
    description:
      'Вместо хардкодинга значений непосредственно в запросе вы можете определить переменные и передавать их значения во время выполнения.',
    date: 'Sep 11, 2023',
  },
  {
    img: api,
    title: 'Изменение Api',
    description: 'Можно использовать различные API.',
    date: 'Sep 11, 2023',
  },
  {
    img: schema,
    title: 'Интерактивная документация',
    description:
      'Изучите документацию схемы, включая типы, поля и аргументы, предоставляющие полезную информацию при составлении ваших запросов.',
    date: 'Sep 11, 2023',
  },
];
