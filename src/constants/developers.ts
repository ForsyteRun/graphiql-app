import { DevelopersData, Role } from '../types';

import alexPhoto from './../../src/assets/img/alex.png';
import nastyaPhoto from './../../src/assets/img/nastya.png';
import katyaPhoto from './../../src/assets/img/katya.png';

const developers: DevelopersData[] = [
  {
    name: 'Анастасия',
    image: nastyaPhoto,
    role: Role.developer,
    github: 'nyurasheva',
    contribution: ['Дизайн', 'Главная страница', 'Редактор', 'Подвал'],
  },
  {
    name: 'Александр',
    image: alexPhoto,
    role: Role.lead,
    github: 'forsyterun',
    contribution: ['Схема'],
  },
  {
    name: 'Екатерина',
    image: katyaPhoto,
    role: Role.developer,
    github: 'Katsiaryna',
    contribution: ['Вход', 'Регистрация'],
  },
];

export default developers;
