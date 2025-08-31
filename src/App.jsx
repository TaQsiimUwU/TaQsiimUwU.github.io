import { BrowserRouter , Route, Routes} from 'react-router-dom'
import {StartUp} from './pages/StartUp.jsx'
import {Cards} from './pages/Cards'
import {Store} from './pages/Store'
import {NotFound} from './pages/404'
// import './Styles/App.css'

function App() {


  return (
    <>

    <BrowserRouter>
    <Routes>
    <Route index element={<StartUp />} />
    <Route path="/cards" element={<Cards />} />
    <Route path="/store" element={<Store />} />
    <Route path = "*" element = {<NotFound />} />
    </Routes>
    </BrowserRouter>

    </>

  )
}

export default App
