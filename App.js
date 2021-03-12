import React from 'react';
import Providers from './src/navigation';
import { LoaderProvider } from './src/contexts/LoaderProvider';

const App = () => {
  return (
    <LoaderProvider>
      <Providers />
    </LoaderProvider>
  );
};

export default App;
