import { Header } from "../../components/Header";
import background from "../../assets/background.png";
import "./styles.css";
import ItemList from "../../components/ItemList"
import profile from "../../assets/naruto.jpg";

function App() {
  return (
    <div className="App">
      <Header />

      <div className="conteudo">
        <img src={background} className="background" alt="background app" />

        <div className="info">
          <div className="input-container">
            <input name="usuario" placeholder="@Username" />
            <button>Buscar</button>
          </div>
          <div className="perfil">
            <img src={profile} alt="foto de perfil" className="profile" />
            <div>
              <h3>Naruto Uzumaki</h3>
              <span>@narutoUzumaki</span>
              <p>Descrição</p>
            </div>
          </div>
          <hr />
          <div>
            <h4 className="repositorio">Repositórios</h4>
                <ItemList title="Teste1" description="teste de descrição"   />
                <ItemList title="Teste2" description="teste de descrição"   />
                <ItemList title="Teste3" description="teste de descrição"   />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
