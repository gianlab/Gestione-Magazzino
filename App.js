import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Articoli from './Componenti/Articoli';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articoli: [
        { id: 1, nome: 'Pomodori', giacenza: '10', misura: 'Kg' },
        { id: 2, nome: 'Patate', giacenza: '10', misura: 'Kg' }
      ]
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      articoli: event.target.value,
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <title>Gestione Magazzino </title>

        <h1 className="text-center text-primary">Gestione Magazzino </h1>
        <h2 className="text-center text-secondary">con React 17.0.2 e Bootstrap 5.1.3</h2>

        <Articoli articoli={this.state.articoli} />


      </div>

    );
  }
}
export default App;
