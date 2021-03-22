import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('Default')
  const [preco, setPreco] = useState(999)
  const [preferencia, setPreferencia] = useState(1)
  const [product, setProduct] = useState([])
  const [orcamento, setOrcamento] = useState(0)
  const [buyList, setBuyList] = useState([])

  const handleAdd = async() => {
    await setProduct( previus => [...previus, [name, Number(preco), Number(preferencia), generateRandomColor()]] )
    setPreferencia(1)
  }

  function ProductList(props){
    const list = props.list;
    const listItems = list.map((product) => 
      <tr>
        <td className="tableName">{product[0]}</td>
        <td className="tablePreco">{product[1]}</td>
        <td className="tablePref">{product[2]}</td>
      </tr>
    );
    return(
      <table>
        <tr>
          <th className="tableName">Nome</th>
          <th className="tablePreco">Preço (R$)</th>
          <th className="tablePref">Preferência</th>
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

  const greed = async() => {
    await product.sort(function (a,b){
      return a[1]/a[2]-b[1]/b[2]
    });
    let total = orcamento;
    await setBuyList([]);
    for(var i = 0; i < product.length; i++){
      if(total - product[i][1] >= 0){
        total -= product[i][1];
        await setBuyList(previus => [...previus, product[i]])
      }
    }
  }

  function generateRandomColor() {
    return '#'+Math.floor(Math.random()*16777215).toString(16);
  }

  function ShowBar(props) {
    let products = props.list;
    let total = props.orcamento;
    let parts = products.map((product) => {
      var barStyle = {
        height: 100 + '%',
        width: Math.floor(product[1] / total * 100) + '%',
        backgroundColor: product[3]
      }
      return (
        <div className="itemBar" style={barStyle}>
          <spam className="whichItem">{product[0]}</spam>
        </div>
      );
    });
    return parts;
  }

  return (
    <div>
      <header className="App-header">Nice Buy</header>
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
            <button onClick={ handleAdd } >Adicionar</button>
          </div>
          <button onClick={ greed } className="result"> Resultado </button>
          <div className="show-bar">
            <ShowBar list={buyList} orcamento={orcamento}/>
          </div>
          <div className="helpText">
          A barra acima é preenchida com os itens da tabela que cabem no orçamento
          rankeados a partir do peso (Preço/Preferência).
          Após clicar no botão Resultado, passe o mouse por cima das 
          partes coloridas para saber o nome do item.
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
