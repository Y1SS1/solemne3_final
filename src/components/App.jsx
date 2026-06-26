import Menu from './Menu'
import Rutas from './Rutas'
import Footer from "./Footer"
import "../css/Styles.scss"

function App() {
  return (
    <div className="app-layout">
      <Menu />
      <main>
        <Rutas />
      </main>
      <Footer />
    </div>
  )
}
export default App;