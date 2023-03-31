import { useState } from "react";
import Auth from "../Auth/Auth";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";
import NewFoter from "../Footer/Footer";

function Main() {
    const [modalActive, setModalActive] = useState(false);
    return(
        <>
           <Header/>
           <NavBar setModalActive={setModalActive}/> 
           <Auth active={modalActive} setActive={setModalActive}/>
           <Footer/>
        </>
    )
}

export default Main;