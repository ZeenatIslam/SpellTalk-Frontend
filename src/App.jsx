import { Button } from "@/components/ui/button"
import MainLayout from "./layout/MainLayout"
import {BrowserRouter as Router ,Routes,Route} from "react-router-dom"
export function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />} />
      </Routes>
    </Router>
      
    </>
  )
}

export default App
