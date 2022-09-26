import renderer from 'react-test-renderer';
import Projects from '../components/Projects';

it('<Projects /> component renders properly', () => {
  const component = renderer.create(
    <Projects mediaWidth={1000}/>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});