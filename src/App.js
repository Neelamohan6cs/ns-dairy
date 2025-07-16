import React from 'react';
import { BrowserRouter} from 'react-router-dom';

import Header from './components/Header';
import Paths from './path/Paths';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="p-4">
        <Paths/>
      </div>
    </BrowserRouter>
  );
}

export default App;
