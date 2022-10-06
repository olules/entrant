import React, { useState, useEffect } from "react";

export default function CounterHook() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("This is a text");
  const [info, setInfo] = useState({ name: "", email: "" });
  const [articles, setArticles] = useState([
    "Article1",
    "Article2",
    "Article3",
    "Article4",
  ]);

  const addArticle = () => {
    setArticles([...articles,"New Article"]);
  };

  //useEffect(()=>{
    //console.log('Use effect is called')
 // },[count, text])

 useEffect(()=>{
    console.log('useEffect is called')
document.title=`You have clicked ${count} times`    
 })

  return (
    <div>
      <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)} className="btn btn-primary">
        Click
      </button>
      <h2>{text}</h2>
      <button
        onClick={() => setText("The text has changed")}
        className="btn btn-success"
      >
        Change Text
      </button>
      <br />
      <br />
      <input
        onChange={(e) => setInfo({ ...info, name: e.target.value })}
        type="text"
        className="form-control"
        value={info.name}
      />
      <br />
      <input
        onChange={(e) => setInfo({ ...info, email: e.target.value })}
        type="email"
        className="form-control"
        value={info.email}
      />
      <h2>Name is {info.name}</h2>
      <br></br>
      <h2>Email is {info.email}</h2>
      <br />
      {articles.map((article) => {
        return <h2 key={article} >{article}</h2>;
      })}
      <button onClick={addArticle} className="btn btn-secondary">
        Add Article
      </button>

      <button onClick={()=>setCount(count+1)} className="btn p-6 btn-primary">Change title</button>
    </div>
  );
}
