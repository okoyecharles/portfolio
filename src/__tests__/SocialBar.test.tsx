import renderer from 'react-test-renderer';
import SocialBar from '../components/SocialBar';

it('<Social /> component renders properly', () => {
  const component = renderer.create(
    <SocialBar/>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});