import { useState } from "react";
import Auth from "../Auth/Auth";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";
import NewFoter from "../Footer/newfoter";

function Main() {
    const [modalActive, setModalActive] = useState(false);
    const [burger, setBurger] = useState(false)
    return(
        <>
           <Header/>
           <NavBar setModalActive={setModalActive}/> 
           <Auth active={modalActive} setActive={setModalActive}/>
           {/* <Footer/> */}
           <NewFoter/>
        </>
    )
}

export default Main;