import { Button } from "@/components/ui/button"
import MainLayout from "./layout/MainLayout"
import {BrowserRouter as Router ,Routes,Route} from "react-router-dom"
import Auth from "./pages/Auth"
import Profile from "./pages/Profile"
export function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Profile />} />
      </Routes>
    </Router>
      
    </>
  )
}

export default App
