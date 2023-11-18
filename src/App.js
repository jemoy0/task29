import {Buttons} from "./components/buttons"
function App() {
  const buttons = [
    {sign: "+"},
    {sign: "-"},
    {sign: "/"},
    {sign: "*"},
    {sign: "^"}
  ]

  return (
    <>
      <input id="1" type="number"></input>
      <input id="2" type="number"></input>
      <input id="result" disabled></input>
      <Buttons buttons={buttons}/>
    </>
  );
}

export default App;
