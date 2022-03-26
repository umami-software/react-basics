import { hot } from 'react-hot-loader/root';
import Button from 'components/input/Button';

function App(): JSX.Element {
  return (
    <div>
      <h1>hi</h1>
      <div>
        <Button onClick={() => alert('clicked!')}>Button</Button>
      </div>
    </div>
  );
}

export default hot(App);
