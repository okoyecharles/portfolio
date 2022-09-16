import AmazonClone from '../images/projects/amazon-clone.png';
import LavishCuisine from '../images/projects/lavish-cuisine.png';
import Nethub from '../images/projects/nethub.png';
import SaveAChild from '../images/projects/save-a-child.png';

export interface Project {
  index: number,
  title: string,
  image: string,
  note: string,
  description: string,
  stack: string[],
  links: {
    github: string,
    live: string,
  }
};

const projects: Project[] = [
  {
    index: 1,
    title: 'Amazon Clone',
    note: 'A full-stack e-commerce website inspired by amazon.com',
    image: AmazonClone,
    description: 'A Responsive Full-stack e-commerce website inspired by the Amazon website. Built with React, Redux, and Firebase. Including functionalities such as Creating/Signing in to an account, Adding items to the cart, Making payments and so on',
    stack: ['React', 'Redux', 'Firebase', 'Sass'],
    links: {
      github: 'https://github.com/OkoyeCharles/amazon-clone',
      live: 'https://clone-f50ae.web.app/',
    },
  },
  {
    index: 2,
    title: 'Lavish Cuisine',
    note: 'A meal-based website that gives you all the information you need about your favourite meals.',
    image: LavishCuisine,
    description: 'A meal-based website that gives you all the information you need about your favourite breakfast, lunch and dinner. built with react-typescript & redux.',
    stack: ['React', 'Typescript', 'Redux'],
    links: {
      github: 'https://github.com/OkoyeCharles/lavish-cuisine',
      live: 'https://lavish-cuisine.web.app/',
    }
  },
  {
    index: 3,
    title: 'Nethub',
    note: 'A Movie App that extracts information from an external API.',
    image: Nethub,
    description: 'A Movie WebApp that extracts information from an external API. Including functionalities like comments, likes, search, categories, and extra app info.',
    stack: ['Webpack', 'JS', 'Movie API'],
    links: {
      github: 'https://github.com/OkoyeCharles/Nethub',
      live: 'https://okoyecharles.github.io/Nethub/',
    },
  },
  {
    index: 4,
    title: 'Save A Child',
    note: 'A website built with JavaScript... focused on preserving the life of children who suffered during the COVID-19 outbreak.',
    image: SaveAChild,
    description: 'Save-a-child is one of my projects with the theme of giving the youth from different continents (especially the children) who have been inflicted mentally, physically, or psychologically by the COVID-19 Pandemic.',
    stack: ['Webpack', 'JS'],
    links: {
      github: 'https://github.com/OkoyeCharles/save-a-child',
      live: 'https://okoyecharles.github.io/save-a-child/',
    },
  },
];

projects.sort((a, b) => a.index - b.index);

export default projects;