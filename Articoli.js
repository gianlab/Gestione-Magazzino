
import 'bootstrap/dist/css/bootstrap.min.css';
import Movimenti from './Movimenti';
import React from 'react';
import ModalView from './ModalView';

class Articoli extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      inputArticolo: "",
      inputGiacenza: "",
      inputMisura: "",
      counter: 2,
      show: false,
      message: ''
    };
    this.handleClickNuovo = this.handleClickNuovo.bind(this);
    this.handleClickSalva = this.handleClickSalva.bind(this);
    this.handleChangeArticolo = this.handleChangeArticolo.bind(this);
    this.handleChangeGiacenza = this.handleChangeGiacenza.bind(this);
    this.handleChangeMisura = this.handleChangeMisura.bind(this);
    this.handleClose = this.handleClose.bind(this);



  }



  handleChangeArticolo(event)
  {
    this.setState({
      inputArticolo: event.target.value,
    });
  }

  handleChangeGiacenza(event)
  {
    this.setState({
      inputGiacenza: event.target.value,
    });
  }

  handleChangeMisura(event)
  {
    this.setState({
      inputMisura: event.target.value,
    });
  }

  handleClickNuovo(event)
  {

    this.setState({
      inputArticolo: "",
      inputGiacenza: "",
      inputMisura: "",
      show: false,
    });
  }

  handleClickSalva(event)
  {

    if (this.state.inputArticolo === "" ||
      this.state.inputGiacenza === "" ||
      this.state.inputMisura === "")
    {
      this.setState({
        show: true,
        message: 'Tutti i campi devono essere compilati: articolo,giacenza e misura'
      })
    }

    else if (isNaN(parseInt(this.state.inputGiacenza)))
    {
      this.setState({
        show: true,
        message: 'La giacenza è un numero intero!'
      })
    } else
    {

      this.setState({
        show: true,
        message: 'Articolo aggiunto!'
      });
      this.state.counter = this.state.counter + 1;
      this.props.articoli.push({
        id: this.state.counter,
        nome: this.state.inputArticolo,
        giacenza: this.state.inputGiacenza,
        misura: this.state.inputMisura
      });
    }
    //console.log(articoli);
  }

  handleClose(event)
  {

    this.setState({
      show: false,
    });
  }

  render()
  {
    return (
      <div class="row">
        <div className="col-md-12">
          <div className="card" >
            <div className="card-body">
              <h5 className="card-title">Articoli:</h5>
              <div className="input-group mb-3">
                <span className="input-group-text">Nome articolo:</span>
                <input

                  type="text"
                  className="form-control"
                  value={this.state.inputArticolo}
                  onChange={this.handleChangeArticolo}
                />
                <span className="input-group-text">Giacenza:</span>
                <input

                  type="text"
                  className="form-control"
                  value={this.state.inputGiacenza}
                  onChange={this.handleChangeGiacenza}
                />
                <span className="input-group-text">Unità di misura:</span>
                <input

                  type="text"
                  className="form-control"
                  value={this.state.inputMisura}
                  onChange={this.handleChangeMisura}
                />

              </div>



              <button onClick={this.handleClickNuovo} className="btn btn-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-vector-pen" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M10.646.646a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1 0 .708l-1.902 1.902-.829 3.313a1.5 1.5 0 0 1-1.024 1.073L1.254 14.746 4.358 4.4A1.5 1.5 0 0 1 5.43 3.377l3.313-.828L10.646.646zm-1.8 2.908-3.173.793a.5.5 0 0 0-.358.342l-2.57 8.565 8.567-2.57a.5.5 0 0 0 .34-.357l.794-3.174-3.6-3.6z" />
                  <path fill-rule="evenodd" d="M2.832 13.228 8 9a1 1 0 1 0-1-1l-4.228 5.168-.026.086.086-.026z" />
                </svg> Nuovo
              </button>
              <button onClick={this.handleClickSalva} className="btn btn-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-save2" viewBox="0 0 16 16">
                  <path d="M2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9.5a1 1 0 0 0-1 1v4.5h2a.5.5 0 0 1 .354.854l-2.5 2.5a.5.5 0 0 1-.708 0l-2.5-2.5A.5.5 0 0 1 5.5 6.5h2V2a2 2 0 0 1 2-2H14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h2.5a.5.5 0 0 1 0 1H2z" />
                </svg> Salva
              </button>


              <ModalView
                message={this.state.message} show={this.state.show} handleClose={this.handleClose}
              />
            </div>
          </div>
          <Movimenti articoli={this.props.articoli}
          />

        </div>



      </div>

    );
  }
}

export default Articoli;