import React,{useState,useEffect} from 'react'
import "./nav.css"

function Nav() {
    const [show,handleShow]=useState(false);
    useEffect(() => {
        window.addEventListener("scroll",()=>{
            if(window.scrollY>100){
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        }
    }, [])
    return (
        <div className={`nav ${show && "nav__black"}` }>
            <img className='nav__logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Logonfx.png/1200px-Logonfx.png' alt="Netflix logo "/ >
            <img className='nav__avatar' src='https://i.pinimg.com/originals/ce/1a/68/ce1a68b494cd4914a8e724d40645ac6c.png' alt="Netflix avatar "/ >
            
        </div>
    )
}

export default Nav
