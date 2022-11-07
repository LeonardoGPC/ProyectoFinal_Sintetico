import React from "react";
import style from './upload.module.css'
export default function Upload(props){
    


    const handleFileInputChange = (e) =>{
        const file = e.target.files[0];
        const {type} = file;
        if(type.endsWith ('jpeg' || type.endsWith ('jpg') || type.endsWith ('png'))){
             previewFile(file);
        }
    } 

    const previewFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            props.setPreviewSource(reader.result);
        }
    }

    
    
    return(
        <div className={style.selectFieldContainer}>
            <div className={style.selectFieldImgContainer}>
                {!props.previewSource? 
                <img
                    className={style.image}
                    src="https://res.cloudinary.com/deirkmhyd/image/upload/v1667591343/sintetico/canchas-futbol-5_mcwq4s.webp"
                    alt="cancha"
                />
                :              
                <img 
                    src={props.previewSource} alt="chosen" className={style.image}
                />
                }
            </div>
            <label htmlFor="field" className={style.imageUpload}> Añadir foto </label>
            <input type="file" id="field" accept="image/png, image/jpeg" onChange={handleFileInputChange} value={props.fileInputState} className={style.input} />
        </div>
    )
}