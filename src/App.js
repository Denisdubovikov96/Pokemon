import React, { Component } from "react";
import "./App.css";
import Pokemon from "./Pokemon/Pokemon";
import imgs from "./img";
class App extends Component {
  render() {
    console.log(imgs);
    return (
      <div className="App">
        <h1>Pokemon</h1>
        {imgs.map((img) => {
          // console.log(img.default);
          return <Pokemon img={img.default} />;
        })}
        <Pokemon />
      </div>
    );
  }
}

export default App;
