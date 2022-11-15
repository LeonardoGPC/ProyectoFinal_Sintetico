import React, {useState} from 'react'
import Cropper from 'react-easy-crop'
import style from './profileAvatar.module.css'
import {Slider} from '@material-ui/core';
import { getCroppedImg } from './canvasUtils';
import{URL} from '../../../utils/utils.js'
import axios from 'axios';

function ProfileAvatar(prop) {
    const [state, setState] = useState({
    imageSrc:
    prop.userData.image,
    })
    const [crop, setCrop] = useState({ x: 0, y: 0 })
    const [zoom, setZoom] = useState(1.6)
    const [rotation, setRotation] = useState(0);
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

    const cropComplete = (croppedArea, croppedAreaPixels) => {
        setCroppedAreaPixels(croppedAreaPixels);
      };

    const[previewSource, setPreviewSource] = useState();

    const handleFileInputChange = (e) =>{
        const file = e.target.files[0];
        const {type} = file;
        if(type.endsWith ('jpeg') || type.endsWith ('jpg') || type.endsWith ('png')){
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

    const cropImage = async () => {
      try {
          const file = await getCroppedImg(
          state.imageSrc,
          croppedAreaPixels,
          rotation
          );
          const cloudinaryImg = await uploadImage(file)
          prop.setUserData({...prop.userData, image: cloudinaryImg})
          return (prop.userData)
      } catch (error) {
          console.log(error);
      }
    };

    const uploadImage = async (base64EncondedImage) =>{
      try {
          const data = await fetch (`${URL}/uploads`,{
              method: 'POST',
              body: JSON.stringify({
                  data: base64EncondedImage
              }),
              headers: {'Content-type':'application/json'},
          })
          const response = await data.json()
          imageSaveDb(response.url)
          return (response.url)
      } catch (error) {
          console.log(error)            
      }
    }

    const imageSaveDb = async (url) => {
      axios.put('/users/' + prop.idUser, {
          image: url
      })
      // .then(response => {
      //     window.location.reload()
      // })
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
          cropSize={{width: 250, height: 250}}
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
            min={0.5}
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
            <button onClick={() => {prop.setModal(false); cropImage()}} className={style.imageUpload}>Aceptar</button>
            <button onClick={() => prop.setModal(false) } className={style.imageUpload}>Cancelar</button>
        </div>
      </div>
    )
  }


export default ProfileAvatar;