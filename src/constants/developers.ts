import alexPhoto from './../../src/assets/img/alex.png';
import nastyaPhoto from './../../src/assets/img/nastya.png';
import katyaPhoto from './../../src/assets/img/katya.png';
import { DevelopersData } from '../types/types';
import { Role } from '../types/enum';

const developersRu: DevelopersData[] = [
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

const developersEn: DevelopersData[] = [
  {
    name: 'Anastasiia',
    image: nastyaPhoto,
    role: Role.developer,
    github: 'nyurasheva',
    contribution: ['Welcome', 'Disain', 'Editor', 'Footer'],
  },
  {
    name: 'Aleksandr',
    image: alexPhoto,
    role: Role.lead,
    github: 'forsyterun',
    contribution: ['Shema'],
  },
  {
    name: 'Katsiaryna',
    image: katyaPhoto,
    role: Role.developer,
    github: 'massaracsh7',
    contribution: ['Registration', 'Login'],
  },
];

export { developersRu, developersEn };
