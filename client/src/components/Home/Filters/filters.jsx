import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    getCities,
    getSizes,
    getSurfaces,
    getFields,
    filterFieldByCity,
    filterFieldBySize,
    // filterFieldByTime,
    filterFieldBySurface,
  } from "../../../redux/actions/index.js";
import s from "./filters.module.css";
// import Flatpickr from 'react-flatpickr'
import "flatpickr/dist/themes/material_green.css"
// import Fields from "../../Cards/cards.jsx"



export default function Filters(){
    
    const dispatch = useDispatch();
    const cities = useSelector((s) => s.cities);
    const sizes = useSelector((s) => s.sizes);
    const surfaces = useSelector((s) => s.surfaces);
    // const fields = useSelector((s)=>s.fields)

    

    // const [date, setDate] = useState({date: new Date()})

    
    useEffect(() => {
        dispatch(getCities());
        dispatch(getSizes());
        dispatch(getSurfaces());
        dispatch(getFields());
     }, [dispatch]);

    
    function handleCityFilter (e) {
        e.preventDefault()
        dispatch(filterFieldByCity(e.target.value))
    }

    function handleSizeFilter(e) {
        e.preventDefault()
        dispatch(filterFieldBySize(e.target.value))
    }

    function handleSurfaceFilter(e){
        if (e.target.checked) {
            dispatch(filterFieldBySurface(e.target.value))
         } 
    }
    

    // function handleTimeFilter(e) {
    //     e.preventDefault()
    //     dispatch(filterFieldByTime(e.target.value))
    // }

    function handleResetFilter(){
        dispatch(getFields())
        document.getElementById("select1").value = "Title"
        document.getElementById("select2").value = "Title"
        document.getElementById("select3").value = "Title"
        document.getElementById(`1`).checked = false;
        document.getElementById(`2`).checked = false;
        document.getElementById(`3`).checked = false;
        document.getElementById(`4`).checked = false;
    }
    // function handleCalendarChange (e) {
    //     setDate({
    //         value: e.target.value
    //     })
    // }
    
    
    return(
        <div className={s.container}>
            <div className={s.filtros}>
                <h1 className={s.h1}>Filtros</h1>
                <select defaultValue="Title" onChange={(e) => handleCityFilter(e)} id={"select1"} className={s.select}>
                    <option value="Title" disabled> Localidad </option>
                    {
                        cities?.map( (c) => {
                            
                            return (
                                <option key={c.id} value={c.id}>
                                    {c.name} 
                                </option>
                            )
                        })
                    }
                </select>
                <select defaultValue="Title" onChange={(e) => handleSizeFilter(e)} id={"select2"} className={s.select}>
                    <option value="Title" disabled> Tamaño </option>
                    {
                        sizes?.map( (s) => {
                            return (
                                <option value={s.id} key={s.id}>
                                    {s.name}
                                </option>
                            )
                        })
                    }
                </select>
                <div className={s.checkbox}>
                {surfaces.map((e) => (
                    <div className={s.check}>
                        <label id={`${e.name}`}>{e.name}
                        <input
                            className={s.check_input}
                            type="checkbox"
                            id={`${e.id}`}
                            value={e.id}
                            onChange={(f) => handleSurfaceFilter(f)}
                        />
                        <span className={s.checkmark}></span>
                        </label>
                    </div>
                    ))}
                </div>
                {/* <select defaultValue="Title" onChange ={(e) => handleTimeFilter(e) } id={"select3"} className={s.select}>
                    <option value="Title" disabled> Hora </option>
                    <option value="8" > 8:00 </option>
                    <option value="9" > 9:00 </option>
                    <option value="10" > 10:00 </option>
                    <option value="11" > 11:00 </option>
                    <option value="12" > 12:00 </option>
                    <option value="13" > 13:00 </option> 
                    <option value="14" > 14:00 </option>
                    <option value="15" > 15:00 </option>
                    <option value="16" > 16:00 </option>
                    <option value="17" > 17:00 </option>
                    <option value="18" > 18:00 </option>
                    <option value="19" > 19:00 </option>
                    <option value="20" > 20:00 </option>
                    <option value="21" > 21:00 </option>
                    <option value="22" > 22:00 </option>
                    <option value="23" > 23:00 </option>
                </select> */}
                
                    {/* <Flatpickr
                    className={s.select}
                    placeholder='Fecha'
                    value={date}
                    options={{
                            disable:["2022-10-30", "2022-11-06", "2022-11-13", "2022-11-20", "2022-11-27", "2022-12-04", "2022-12-11", "2022-12-18", "2022-12-25"],
                            minDate: 'today',
                            altFormat: "F j, Y",
                            dateFormat: "Y-m-d",
                            maxDate: "2022-12-31",
                            altInput:true,
                        }}
                    onChange={e => handleCalendarChange(e)}
                    /> */}
                    <button onClick={() => handleResetFilter()} className={s.button}>
                        resetear filtros
                    </button>
            </div>
            {/* <div className={s.fields}>
                <Fields/>
            </div> */}
            
        </div>
        
    )
}

