import "./App.css";
import Hello from "./components/Hello";

import MyClass from "./components/MyClass";
import Name from "./components/Name";
import Example from "./components/Example";
import Example2 from "./components/Example2";
import Form from "./components/Form";
import MyFragment from "./components/MyFragment";
import Counter from "./components/counter";
import CounterHook from "./components/counterHook";
import FetchData from './components/fetchData';
import ComponentD from './components/componentd';
import React from 'react';
import UseReducer from './components/usereducer'


function App() {
  function clicked() {
    alert("class conponent clicked");
  }
  return (
    <div className="container">
      {/*  <Name />
      <Example names={["python", "javascript", "c#"]} />
      <Example2 names={['react', 'django', 'kvlang']} />
      <Form/> 
      <MyFragment />}
      {/*<Counter/>}
        {/*<CounterHook/>*/}
      <FetchData />
     <UseReducer/>
    </div>
  );
}

export default App;
