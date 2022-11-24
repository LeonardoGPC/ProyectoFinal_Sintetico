import React from "react";
import Cards from "../Cards/cards.jsx";
import Navbar from '../NavBar/Navbar.jsx';
import Filters from "./Filters/filters.jsx";
import home from "./home.module.css";
import { useEffect, useState } from "react";
import MiniFooter from '../MiniFooter/MiniFooter.jsx'
import { useSelector, useDispatch } from "react-redux"
import {getFields} from "../../redux/actions/index.js"
import logo from '../img/LogoSintetico.png'


export default function Home(){
const[list,setList] = useState({
    name:'',
    city:'',
    size:'',
    surface: []
})

function handleResetFilter(){
    dispatch(getFields())
    document.getElementById("searchBar").value = ""       
    document.getElementById("select1").value = "Title"        
    document.getElementById("select2").value = "Title"
    document.getElementById("1").checked = false;
    document.getElementById(`2`).checked = false;
    document.getElementById(`3`).checked = false;
    document.getElementById(`4`).checked = false;   
    setList({
        name:'',
        city:'',
        size:'',
        surface: []
    })     
}

const dispatch = useDispatch()
const errors = useSelector((s)=>s.errors)
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
// function handleErrors(){
//     dispatch(getFields())

// }
    return(
        <div>
            <div className={home.container}>
                <Navbar/>
                <div className={home.div}>
                    <Filters handleResetFilter={handleResetFilter} list={list} setList={setList}/>
                   { errors ? 
                    <div className={home.errors}>
                        <h1 className={home.noResults}>Sin resultados</h1>
                        <div className={home.noResults_Options}>
                            <h4>  Los filtros ingresados no se adecuan a ninguna cancha disponible  </h4>
                            <h4> ● Prueba cambiar los filtros</h4>
                            <h4> ● Prueba refrescar la pagina</h4>
                        </div>
                        <button className={home.button} onClick={() => handleResetFilter()}>
                            Borrar todos los filtros
                        </button>
                    </div>:
                    <Cards/>}
                </div>
            </div>
            <MiniFooter/>
        </div>
    )
    // return(
    //     <div>
            
    //         {
    //             errors ? 
    //             <div>
    //                 <Navbar/>
    //                     <div className={home.errors}>
    //                         <h1 className={home.noResults}>Sin resultados</h1>
    //                         <div className={home.noResults_Options}>
    //                             <h4>  Los filtros ingresados no se adecuan a ninguna cancha disponible  </h4>
    //                             <h4> ● Prueba cambiar los filtros</h4>
    //                             <h4> ● Prueba refrescar la pagina</h4>
    //                         </div>
    //                         <button className={home.button} onClick={() => handleErrors()}>
    //                             Volver a las canchas
    //                         </button>
    //                     </div>
    //                 <MiniFooter/>
    //             </div>
    //             :
    //             <>
    //             <div className={home.container}>
    //                 <Navbar/>
    //                 <div className={home.div}>
    //                     <Filters/>
    //                     <Cards/>
    //                 </div>
    //             </div>
    //             <MiniFooter/>
    //             </>
    //         }
    //     </div>
    // )
}