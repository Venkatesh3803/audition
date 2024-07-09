
import AuditionPage from "./Pages/AuditionPage"
import Homepage from "./Pages/Homepage"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/audition" element={<AuditionPage />} />
        </Routes>

      </div>
    </>
  )
}

export default App
