import alexPhoto from './../../src/assets/img/alex.png';
import nastyaPhoto from './../../src/assets/img/nastya.png';
import katyaPhoto from './../../src/assets/img/katya.png';
import { DevelopersData } from '../types/types';
import { Role } from '../types/enum';

const developers: DevelopersData[] = [
  {
    name: 'Анастасия',
    image: nastyaPhoto,
    role: Role.developer,
    github: 'nyurasheva',
    contribution: ['Приветствие', 'Дизайн', 'Редактор', 'Подвал'],
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
    github: 'massaracsh7',
    contribution: ['Регистрация', 'Вход'],
  },
];

export default developers;
