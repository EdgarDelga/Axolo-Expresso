import logoAxolo from "./assets/AxoloLogo.png"

export default function NavBar() {  

  const clickMenu = () => {
    window.location.href = "/"
  }

  const clickCombos = () => {
    window.location.href = "/Combos"
  }

  return (
    <>
      <div className="NavBar">

      <img src={logoAxolo} alt="Axolo Expresso" className="AxoloLogo"  onClick={() => clickMenu()}/>
      <h1 onClick={() => clickMenu()}>MENÚ</h1>
      <button onClick={() => clickCombos()}>COMBOS</button>

      </div>
    </>
  )
}

