import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {


  let number: number = 9;

  let names: string[] = ['hasna', 'hdjd'];

  let isSmart: true = true;

  // usesing interface

  interface Person {
    name: string,
    job?: string,
    age: number
  }

  let obj: Person = {
    name: 'tayeful',

    age: 21
  }


  return (
    <div className="App">



    </div>
  );
}

export default App;
