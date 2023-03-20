import React from "react";

function App() {
  let [typing, setTyping] = React.useState("");
  let [arr, setArr] = React.useState([]);

  let onChange = (event) => setTyping(event.target.value);
  let onSubmit = (event) => {
    event.preventDefault();
    if (typing === "") return;
    else {
      setArr((currentArr) => {
        let newArr = [typing, ...currentArr];
        console.log(newArr);
        return newArr;
      });
      setTyping("");
    }
  };

  return (
    <div className="App">
      <h1>현재 나의 ToDo List는 {arr.length}개</h1>
      <form onSubmit={onSubmit}>
        <input
          value={typing}
          type="text"
          placeholder="해야할 것"
          onChange={onChange}
        />

        <button>추가</button>
      </form>
      <hr />
      <ul>
        {arr.map((index, i) => (
          <li key={i}>{index}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
