import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('Default')
  const [preco, setPreco] = useState(999)
  const [preferencia, setPreferencia] = useState(1)
  const [product, setProduct] = useState([])
  const [orcamento, setOrcamento] = useState(0)
  
  const handleAdd = async() => {
    await setProduct( previus => [...previus, [name, preco, preferencia]] )
    setPreferencia(1)
  }

  function ProductList(props){
    const list = props.list;
    const listItems = list.map((product) => 
      <tr>
        <td>{product[0]}</td>
        <td>{product[1]}</td>
        <td>{product[2]}</td>
      </tr>
    );
    return(
      <table>
        <tr>
          <th>Nome</th>
          <th>Preço (R$)</th>
          <th>Preferência</th>
        </tr>
        {listItems}
      </table>
    );
  }

  function ListOptions(){
    const list = [...Array(10).keys()].map(i => i+1)
    const listOptions = list.map((option) =>
      <option value={option}>
        {option}
      </option>
    )
    return listOptions
  }

  return (
    <div>
      <header className="App-header"></header>
      <div className="App-body">
        <div className="divider">
          <div className="input-area">
            <label for="orcamento" className="input-orcamento">Orçamento:</label>
            <input type="number" id="orcamento" className="input-orcamento" onChange={(event) => {setOrcamento(Number(event.target.value))}}></input>
            <label for="nome" className="input-nome">Nome:</label>
            <input type="text" id="nome" className="input-nome" onChange={(event) => {setName(event.target.value)}}></input>
            <label for="preco" className="input-preco">Preço:</label>
            <input type="number" id="preco" className="input-preco" onChange={(event) => {setPreco(Number(event.target.value))}}></input>
            <label for="preferencia" className="input-preferencia" id="preferencia-label">Preferência:</label>
            <select id="preferencia" className="input-preferencia" value={preferencia} onChange={(event)=>{setPreferencia(event.target.value)}}>
              <ListOptions></ListOptions>
            </select>
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
