import Footer from "./Footer";
import "./Header.css"

const Header = ()=>{
    return(
        <div>
            <h1 className="header">Header</h1>
            <p id ="xam">hey what's up </p>
            <p style={{backgroundColor:"#915454" , color:"#6592a3"}}>My name is xam</p>


           <Footer/>
        </div>
    )
}

export default Header;