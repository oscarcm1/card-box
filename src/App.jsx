import "./App.css"
import { Logo , Hamburguer} from "./Icons";



function App() {

  function active() {
    document.querySelector(".menu").classList.toggle("active");
  }

  return (
    <header className="navbar">

      <div className="logo">
         <Logo/>
        <button onClick={active}>< Hamburguer/></button>
      </div>

      <nav className="menu">
        <ul>
          <li><a href="">Home</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Mission</a></li>
          <li><a href="">Prices</a></li>
          <li><a href="" className="color">Contact</a></li>
        </ul>
      </nav>

    </header>
  )
}

export default App
