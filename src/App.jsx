import { BrowserRouter , Route, Routes} from 'react-router-dom'
import {Leading} from './pages/Leading'
import {Home} from './pages/Home'
import {NotFound} from './pages/404'
// import './Styles/App.css'

function App() {


  return (
    <>

    <BrowserRouter>
    <Routes>
    <Route index element={<Home />} />
    <Route path = "*" element = {<NotFound />} />
    </Routes>
    </BrowserRouter>

    </>

  )
}

export default App
