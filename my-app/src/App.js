import "./App.css";
import Hello from "./components/Hello";

import MyClass from "./components/MyClass";
import Name from "./components/Name";
import Example from "./components/Example";
import Example2 from './components/Example2';
import Form from './components/form'

function App() {
  function clicked() {
    alert("class conponent clicked");
  }
  return (
    <div className="container">
      <Name />
      <Example names={["python", "javascript", "c#"]} />
      <Example2 names={['react', 'django', 'kvlang']} />
      <Form/>
    </div>
  );
}

export default App;
