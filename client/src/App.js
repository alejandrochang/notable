import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    physicians: [],
    appointments: [],
    selectedPhysician: '',
  };

  componentDidMount() {
    this.fetchData()
      .then((res) =>
        this.setState({ physicians: res.express, selectedPhysician: res.express[0].name })
      )
      .catch((err) => console.log(err));
  }

  fetchData = async () => {
    const response = await fetch("/physicians");
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    const { physicians, selectedPhysician } = this.state;
    console.log({ selectedPhysician });
    return (
      <div className="App">
        <div className="left-container">
          <h3>Notable</h3>
          <h2>Physicians</h2>
          <ul>
            {physicians.map(({ id, name }) => {
              return <li key={id}>{name}</li>;
            })}
          </ul>
        </div>
        <div className="right-container">
          <h1>{selectedPhysician}</h1>
        </div>
      </div>
    );
  }
}

export default App;
