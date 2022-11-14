import React, {useState} from 'react'
import Cropper from 'react-easy-crop'
import style from './profileAvatar.module.css'
import {Slider} from '@material-ui/core';
import { getCroppedImg } from './canvasUtils';

function ProfileAvatar({ photoURL, setOpenCrop, setPhotoURL, setFile }) {
    const [state, setState] = useState({
    imageSrc:
    'https://img.huffingtonpost.com/asset/5ab4d4ac2000007d06eb2c56.jpeg?cache=sih0jwle4e&ops=1910_1000',
    })
    const [crop, setCrop] = useState({ x: 0, y: 0 })
    const [zoom, setZoom] = useState(1.3)
    const [rotation, setRotation] = useState(0);
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

    const cropComplete = (croppedArea, croppedAreaPixels) => {
        setCroppedAreaPixels(croppedAreaPixels);
      };
    
    const cropImage = async () => {
    try {
        const { file, url } = await getCroppedImg(
        photoURL,
        croppedAreaPixels,
        rotation
        );
        setPhotoURL(url);
        setFile(file);
        setOpenCrop(false);
    } catch (error) {
        console.log(error);
    }
    };

    const[previewSource, setPreviewSource] = useState();

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
            setState({imageSrc : reader.result});
        }
    }



    return (
      <div className={style.cropper}>
        <div className={style.cropContainer}>
        <Cropper
          image={state.imageSrc}
          crop={crop}
          zoom={zoom}
          rotation={rotation}
          aspect={1}
          cropSize={{width: 200, height: 200}}
          onCropComplete={cropComplete}
          cropShape="round"
          showGrid={false}
          onCropChange={setCrop}
          onZoomChange={setZoom}
          onRotationChange={setRotation}
        />
        </div>
        <div className={style.controls}>
            <p>Zoom</p>
            <Slider
            min={1.3}
            max={3}
            step={0.1}
            value={zoom}
            onChange={(e, zoom) => setZoom(zoom)}
            />
        </div>
        <div className={style.controls}>
            <p>Girar</p>
            <Slider
            min={0}
            max={360}
            value={rotation}
            onChange={(e, rotation) => setRotation(rotation)}
            />
        </div>
        <div>
            <label htmlFor="field" className={style.imageUpload}> Añadir foto </label>
            <input type="file" id="field" accept="image/png, image/jpeg" onChange={handleFileInputChange} className={style.input} />
            <button onClick={cropImage} className={style.imageUpload}>Aceptar</button>
            <button onClick={() => setOpenCrop(false) } className={style.imageUpload}>Cancelar</button>
        </div>
      </div>
    )
  }


export default ProfileAvatar;