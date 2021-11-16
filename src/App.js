// import logo from './logo.svg';
import './App.css';

function Header(props) {
  return (
    <header>
      <h1>{props.name}'s Kitchen</h1>
    </header>
  );
}

function Main(props) {
  return (
    <section>
      <p>We serve the most { props.adjective } food around.</p>
    </section>
  );
}

function Footer(props) {
  return (
    <footer>
      <p>Copyright &copy; { props.year } Eve's Kitchen</p>
    </footer>
  )
}

function App() {
  return (
    <div className="App">
      <Header name="Cindy" />
      <Main adjective="amazing" />
      <Footer year={ new Date().getFullYear() } />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
