import {useState} from "react";
function App() {
 const[news , setNews] = useState("");
 const[headline ,setheadline] = useState("");
const [result, setResult] = useState(""); 
const [category, setCategory] = useState("");

const displaynews
if (news[headline]) 
  {
setResult("enter a news"
setCategory("");
return;
}
};

const reset = () => {
setResult("");
setCategory("");
};

return ( <div className="container"> <div className="newscard"> <h1>headLines</h1>

```
    <div className="input-group">
      <label>Headline </label>
      <input
        type="text"
        placeholder="today News"
        value={headlene};
        onChange={(e) => headline (e.target.value)}
      />
    </div>

    <div className="buttons">
      <button onClick={News       }>Today headlines      </button>
      <button className="reset-btn" onClick={reset}>
        Reset
      </button>
    </div>

    {result && (
      <div className="result">
        <h2>TodayNews{result}</h2>
        <p>{category}</p>
      </div>
    )}
  </div>
</div>
```)

);
}

export default App;