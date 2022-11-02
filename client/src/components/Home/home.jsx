import React from "react";
import Cards from "../Cards/cards.jsx";
import Navbar from '../NavBar/Navbar.jsx';
import Filters from "./Filters/filters.jsx";
import home from "./home.module.css";
import { useEffect } from "react";
import MiniFooter from '../MiniFooter/MiniFooter.jsx'
import { useSelector, useDispatch } from "react-redux"
import { cleanErrors } from "../../redux/actions/index.js"


export default function Home(){
const dispatch = useDispatch()
const errors = useSelector((s)=>s.errors)
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
function handleErrors(){
    dispatch(cleanErrors())
}
    return(
        <div>
            
            {
                errors ? 
                <div>
                    <Navbar/>
                        <div className={home.errors}>
                            <h1 className={home.noResults}>Sin resultados</h1>
                            <div className={home.noResults_Options}>
                                <h4>  Los filtros ingresados no se adecuan a ninguna cancha disponible  </h4>
                                <h4> ● Prueba cambiar los filtros</h4>
                                <h4> ● Prueba refrescar la pagina</h4>
                            </div>
                            <button className={home.button} onClick={() => handleErrors()}>
                                Volver a las canchas
                            </button>
                        </div>
                    <MiniFooter/>
                </div>
                :
                <div className={home.container}>
                    <Navbar/>
                    <div className={home.div}>
                        <Filters/>
                        <Cards/>
                    </div>
                    <MiniFooter/>
                </div>
            }
        </div>
    )
}