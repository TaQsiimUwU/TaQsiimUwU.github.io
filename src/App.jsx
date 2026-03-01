import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { StartUp } from './pages/StartUp.jsx'
import { NotFound } from './pages/404'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<StartUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
