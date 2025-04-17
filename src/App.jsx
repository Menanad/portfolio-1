import { useEffect, useState } from "react"
import Header from "./components/1-header/header"
import Hero from "./components/2-hero/hero"
import Main from "./components/3-main/main"
import ContactUs from "./components/4-contactUs/contactUs"
import Footer from "./components/5-footer/footer"
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
function App() {
  const [scroll, setScroll] = useState(0)
  const [close, setClose] = useState(true)
//  handle scroll btnUp
  useEffect(() => {

    window.onscroll = () => {
      setScroll(window.scrollY)
      if (Number(scroll) > 200) {
        setClose(false)
      } else if(Number(scroll) < 200){
        setClose(true)
      }
    }
  }, [window.onscroll])


  return (
    <div id="up" className="container">
      <Header />
      <Hero />
      <div className="devider"></div>
      <Main />
      <div className="devider"></div>
      <ContactUs />
      <div className="devider"></div>
      <Footer />
     
         
        <a href="#up" style={{opacity:close?'0':'1' }}>
          <button className="scroll2top">
            <MdOutlineKeyboardArrowUp />
          </button>
        </a>
       
    </div>
  )
}
export default App
