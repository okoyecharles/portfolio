import Experience from '../images/about/exp.webp';
import Paint from '../images/about/hobbies.webp';

export interface About {
  title: string;
  image: string;
  imgDims: {
    width: string,
    height: string,
  }
  description: string;
}

const aboutCards: About[] = [
  {
    title: 'Experience',
    image: Experience,
    imgDims: {
      width: "1920",
      height: "1277",
    },
    description: `I'm an experienced software engineer with <strong>a year of experience</strong> developing and enhancing existing and new systems, including both client and server side development, whilst designing <strong>efficiencies and cost-saving</strong> systems.<br /><br />

    I embrace the <strong>latest technologies</strong>, including React, Redux, Ruby on rails, together with a demonstrated track record of <strong>professional development and technical skills.</strong>`,
  },
  {
    title: 'Hobbies',
    image: Paint,
    imgDims: {
      width: "1920",
      height: "1280",
    },
    description: `
    Everyone has hobbies they perform now and then to <strong>pass time</strong>...
    <br />Here are some of those situations I <strong>most frequently</strong> find myself in: <br />

    <br />&nbsp;- Writing and publishing articles.
    <br />&nbsp;- Reading.
    <br />&nbsp;- Volunteering for mentor positions.
    <br />&nbsp;- Watching and making videos (<em>apparently programming-related</em>).
    <br />&nbsp;- Discovering new things.
    <br />&nbsp;- Listening to podcasts.
    `,
  }
];

export default aboutCards;