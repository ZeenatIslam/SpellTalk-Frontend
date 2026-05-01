import { Button } from "@/components/ui/button"
import MainLayout from "./layout/MainLayout"
import {BrowserRouter as Router ,Routes,Route} from "react-router-dom"
import Auth from "./pages/Auth"
import Chat from "./pages/Chat"
import Profile from "./pages/Profile"
export function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/webapp" element={<MainLayout/>} />
        <Route path="/" element={<Auth/>}/>
       
      </Routes>
    </Router>
      
    </>
  )
}

export default App
