import "./App.css"

const Icon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
  </svg>
)

function App() {


  //Optimizar
  let click = true;
  function activeMenu() {
    if (click) {
      click = !click;
      document.querySelector(".menu").classList.add("active");
    } else {
      click = !click;
      document.querySelector(".menu").classList.remove("active");
    }
  }
  //++++++++++++++++++++++++++++

  return (
    <header className="navbar">

      <div className="logo">
        <h1>Logo</h1>
        <button onClick={activeMenu}><Icon /></button>
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
