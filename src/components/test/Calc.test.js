import renderer from 'react-test-renderer';
import Calc from '../../pages/Calc';

describe('Test for Calc  Page', () => {
  it('It should render calc page', () => {
    const tree = renderer.create(<Calc />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
