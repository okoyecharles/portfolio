import Experience from '../images/about/exp.jpg';
import Paint from '../images/about/hobbies.jpg';

export interface About {
  title: string;
  image: string;
  description: string;
}

const aboutCards: About[] = [
  {
    title: 'Experience',
    image: Experience,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    title: 'Hobbies',
    image: Paint,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  }
];

export default aboutCards;