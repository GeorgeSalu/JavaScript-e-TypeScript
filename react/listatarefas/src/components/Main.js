import React, {Component} from 'react'

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      novaTarefa: '',
    };

    this.inputMudou = this.inputMudou.bind(this)
  }

  inputMudou(e) {
    this.setState({
      novaTarefa: e.target.value
    })
  }

  render() {
    const {novaTarefa} = this.state
    return (
      <div className="main">
        <h1>Lista de tarefas</h1>
        {novaTarefa}
        <form action="#">
          <input type="text" onChange={this.inputMudou} />
          <button type="submit">Enviar</button>
        </form>
      </div>
    )
  }
}
