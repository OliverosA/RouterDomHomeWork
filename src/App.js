import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RInfo from './pages/RInfo';
import Core from './pages/Core';
import Layout from './pages/Layout';
import Hello from './pages/Hello';

const App = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const getData = async () => {
      const response = await fetch('data.json');
      const jsonData = await response.json();
      setData(jsonData);
    };
    getData();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />} />
        <Route path='/react' element={<RInfo info={data.ReactInformation} />} />
        <Route
          path='/core'
          element={<Core info={data.CoreCodeInformation} />}
        />
        <Route path='/hello' element={<Hello info={data.HelloInformation} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
