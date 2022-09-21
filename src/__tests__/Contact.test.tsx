import renderer from 'react-test-renderer';
import Contact from '../components/Contact';

it('<Contact /> component renders properly', () => {
  const component = renderer.create(
    <Contact testmode={true} />
  )
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});