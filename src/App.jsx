import { Button } from "@/components/ui/button"
import MainLayout from "./layout/MainLayout"
import {BrowserRouter as Router ,Routes,Route} from "react-router-dom"
import Auth from "./pages/Auth"
export function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Auth />} />
      </Routes>
    </Router>
      
    </>
  )
}

export default App
