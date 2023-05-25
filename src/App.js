import React, {useState} from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Currencies from './components/Currencies';
import Search from './components/Search';
import RenderByDate from './components/RenderByDate';

function App() {
  const [ currencies, setCurrencies ] = useState([]);
  const [ filteredCurrencies, setFilteredCurrencies ] = useState([]);
  const [ value, setValue ] = useState('');
  const [ date, setDate ] = useState('');

  return (
    <div className="app">
      <h1>Hello</h1>
      <div className='d-flex justify-content-between mb-3'>
        <RenderByDate setDate={setDate} />
        <Search currencies={currencies} setFilteredCurrencies={setFilteredCurrencies} setValue={setValue} />
      </div>
      <Currencies currencies={currencies} setCurrencies={setCurrencies} 
      filteredCurrencies={filteredCurrencies} value={value} date={date} />
    </div>
  );
}

export default App;
