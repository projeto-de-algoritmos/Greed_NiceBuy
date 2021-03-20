import './App.css';

function App() {
  return (
    <div>
      <header className="App-header"></header>
      <div className="App-body">
        <div className="divider">
          <div className="input-area">
            <label for="nome" className="input-nome">Nome:</label>
            <input type="text" id="nome" className="input-nome"></input>
            <label for="preco" className="input-preco">Preço:</label>
            <input type="number" id="preco" className="input-preco"></input>
            <button>Adicionar</button>
          </div>
          <div className="show-bar">
          </div>
        </div>
        <div className="divider">
          <div className="show-items">
            <div>Itens</div>
            <table>
              <tr>
                <th>Nome</th>
                <th>Preço</th>
              </tr>
              <tr>
                <td>Kit Arduino</td>
                <td>120.00</td>
              </tr>
              <tr>
                <td>Playstation 5</td>
                <td>5000.00</td>
              </tr>
              <tr>
                <td>Playstation 5</td>
                <td>5000.00</td>
              </tr>
              <tr>
                <td>Playstation 5</td>
                <td>5000.00</td>
              </tr>
              <tr>
                <td>Playstation 5</td>
                <td>5000.00</td>
              </tr>
              <tr>
                <td>Playstation 5</td>
                <td>5000.00</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
