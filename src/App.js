import { useState } from 'react';

var url = "https://www.dmoe.cc/random.php";
function Picture() {
  return (<img src={url} alt="img" title="img" style={{ width: "50%" }} />);
}

var Jishuqi = () => {
  let [count, setCount] = useState(0);

  return (<
    div>
      <Picture />
      <button onClick={() => setCount(count + 1)} style={{color : "red"}}>{count}</button>
    </div>
  );
}

function App() {
  return (
    <div className="App">  
      <Jishuqi />
    </div>
  
  );
}

export default App;
