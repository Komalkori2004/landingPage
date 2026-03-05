import Home from "./watch/home"
 import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react"

function App() {

  useEffect(()=>{
    AOS.init({
      duration:1000,
      once:true
    })
  },[])
  return (
    <>
    <Home/>
    </>
  )
}

export default App
