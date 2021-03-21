import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('Default')
  const [preco, setPreco] = useState(999)
  const [product, setProduct] = useState([])
  
  const handleAdd = async() => {
    await setProduct( previus => [...previus, [name, preco]] )
  }

  function ProductList(props){
    const list = props.list;
    const listItems = list.map((product) => 
      <tr>
        <td>{product[0]}</td>
        <td>{product[1]}</td>
      </tr>
    );
    return(
      <table>
        <tr>
          <th>Nome</th>
          <th>Preço (R$)</th>
        </tr>
        {listItems}
      </table>
    );
  }

  return (
    <div>
      <header className="App-header"></header>
      <div className="App-body">
        <div className="divider">
          <div className="input-area">
            <label for="nome" className="input-nome">Nome:</label>
            <input type="text" id="nome" className="input-nome" onChange={(event) => {setName(event.target.value)}}></input>
            <label for="preco" className="input-preco">Preço:</label>
            <input type="number" id="preco" className="input-preco" onChange={(event) => {setPreco(Number(event.target.value))}}></input>
            <button onClickCapture={ handleAdd } >Adicionar</button>
          </div>
          <div className="show-bar">
          </div>
        </div>
        <div className="divider">
          <div className="show-items">
            <ProductList list={product}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
