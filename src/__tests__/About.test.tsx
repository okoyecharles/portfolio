import renderer from 'react-test-renderer';
import About from '../components/About';

it('<About /> component renders properly', () => {
  const component = renderer.create(
    <About />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});