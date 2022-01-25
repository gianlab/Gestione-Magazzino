import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
class Tabella extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        rows: this.props.movimenti.map((row) =>
          <tr key={row.id}>
            <th scope="row">{row.id}</th>
            <td>{row.today}</td>
            <td>{row.nome}</td>
            <td>{row.misura}</td>
            <td>{row.quantita}</td>
            <td>{row.giacenza}</td>
          </tr>),
  
      };
  
      this.handleClick = this.handleClick.bind(this);
      this.handleClickEvent = this.handleClickEvent.bind(this);
    }
  
    componentDidMount() {
      document.addEventListener('click', this.handleClickEvent)
    }
    componentWillUnmount() {
      document.removeEventListener('click', this.handleClickEvent)
    }
  
    handleClick() {
      this.setState({
        rows: this.props.movimenti.map((row) =>
          <tr key={row.id}>
            <th scope="row">{row.id}</th>
            <td>{row.today}</td>
            <td>{row.nome}</td>
            <td>{row.misura}</td>
            <td>{row.quantita}</td>
            <td>{row.giacenza}</td>
          </tr>)
      });
    }
  
    handleClickEvent(event) {
      this.handleClick();
    }
  
    render() {
  
      /* this.state.rows = this.props.movimenti.map((row) =>
        <tr key={row.id}>
          <th scope="row">{row.id}</th>
          <td>{row.today}</td>
          <td>{row.nome}</td>
          <td>{row.misura}</td>
          <td>{row.quantita}</td>
          <td>{row.giacenza}</td>
        </tr>); */
  
      return (
  
        <table className="table table-striped" >
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Data</th>
              <th scope="col">Nome articolo</th>
              <th scope="col">Misura</th>
              <th scope="col">Quantità</th>
              <th scope="col">Giacenza</th>
  
            </tr>
          </thead>
          <tbody>
            {this.state.rows}
          </tbody>
        </table>
  
  
      );
    }
  }
  export default Tabella;
  