import React, { useState } from 'react';
import { hot } from 'react-hot-loader/root';

import 'styles';

const App: React.FC = () => {
  const [state, setState] = useState(0);

  const onClick = () => {
    setState((prev) => prev + 1);
  };

  return (
    <div>
      <h1>
        this is App component!
      </h1>
      <div>
        счетчик:
        &nbsp;
        {state}
      </div>
      <button onClick={onClick} type="button">
        USE
      </button>
    </div>
  );
};

export default hot(App);
