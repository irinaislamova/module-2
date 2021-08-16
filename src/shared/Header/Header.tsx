import React from 'react';
import { hot } from 'react-hot-loader/root';

import './Header.less';

const Header: React.FC = () => (
  <div>
    <h1>
      Hello react-webpack with SSR
    </h1>
  </div>
);

export default hot(Header);
