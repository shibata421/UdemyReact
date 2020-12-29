import './App.css';
import Comentario from './components/Comentario'
import { Component } from 'react';

class App extends Component {
  state = {
    comentarios: [
      {
        nome: 'João',
        email: 'joao@mail.com',
        data: new Date(2020, 3, 19),
        mensagem: 'Olá, tudo bem?'
      },
      {
        nome: 'Pedro',
        email: 'pedro@mail.com',
        data: new Date(2020, 3, 21),
        mensagem: 'Olá, tudo bem?'
      }
    ]
  }

  adicionarComentario = () => {
    console.log("Adicionando comentário")

    const novoComentario = {
      nome: 'Maria',
      email: 'maria@mail.com',
      data: new Date(),
      mensagem: 'Olá pessoal !!!!!'
    }

    this.setState({ comentarios: [...this.state.comentarios, novoComentario] })
  }

  render() {
    return (
      <div className="App">
        <h1>Meu projeto</h1>

        {this.state.comentarios.map((comentario, index) => (
          <Comentario
            key={index} 
            nome={comentario.nome} 
            email={comentario.email} 
            data={comentario.data}>
            {comentario.mensagem}
          </Comentario>
        ))}

        <button onClick={this.adicionarComentario}>Adicionar um comentário</button>
      </div>
    );
  } 
}

export default App;
