import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    physicians: [],
    appointments: [],
    selectedPhysician: {},
  };

  componentDidMount() {
    this.fetchPhysicians()
      .then((res) =>
        this.setState({
          physicians: res.express,
          selectedPhysician: res.express[0],
        })
      )
      .catch((err) => console.log(err));

    this.fetchAppointments(this.state.selectedPhysician.id)
      .then((res) =>
        this.setState({
          appointments: res.express,
        })
      )
      .catch((err) => console.log(err));
  }

  fetchPhysicians = async () => {
    const response = await fetch("/physicians");
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  fetchAppointments = async (id) => {
    const response = await fetch("/appointments", { id });
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    const { physicians, selectedPhysician, appointments } = this.state;
    console.log({ selectedPhysician, appointments });
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
          <h1>{selectedPhysician.name}</h1>
        </div>
      </div>
    );
  }
}

export default App;
