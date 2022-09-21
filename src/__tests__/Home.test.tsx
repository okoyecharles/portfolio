import renderer from 'react-test-renderer';
import Home from '../components/Home';

it('<Home /> component renders properly', () => {
  const component = renderer.create(
    <Home mediaWidth={200}/>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});