import React, {Component} from 'react'
import {FaPlus, FaEdit, FaWindowClose} from 'react-icons/fa'
import './Main.css'

export default class Main extends Component {

  state = {
    novaTarefa: '',
    tarefas: [
      'fazer cafe',
      'beber agua',
      'estudar'
    ]
  };

  handleChange = (e) => {
    this.setState({
      novaTarefa: e.target.value
    })
  }

  render() {
    const {novaTarefa, tarefas} = this.state
    return (
      <div className="main">
        <h1>Lista de tarefas</h1>
        
        <form action="#" className="form">
          <input 
            type="text" 
            onChange={this.handleChange} 
            value={novaTarefa}/>
          <button type="submit">
            <FaPlus />
          </button>
        </form>

        <ul className="tarefas">
          {tarefas.map(tarefa => (
            <li key={tarefa}>{tarefa}
              <div>
                <FaEdit />
                <FaWindowClose />
              </div>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
