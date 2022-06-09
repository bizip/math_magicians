import renderer from 'react-test-renderer';
import Calculator from './components/Calculator';

describe('Test for all component', () => {
  it('It should render calculator component', () => {
    const tree = renderer.create(<Calculator />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
