import React, { useState } from "react";
import { useDispatch} from 'react-redux'
import emailjs from "emailjs-com";
import { Formik, Form, Field, ErrorMessage } from "formik";
import style from "./ContactForm.module.css";
import { FiInstagram, FiFacebook, FiMail } from 'react-icons/fi';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import Faq from "../Info/FAQ/Faq";
import { sendInquiryEmail } from "../../../redux/actions/index"


const ContactForm = () => {

  const [altura, setAltura] = useState('100px')
  const [formularioEnviado, setFormularioEnviado] = useState(false);
  const dispatch = useDispatch();

  const sendEmail = (object) => {
    emailjs
      .send("service_5eok4w9", "template_16chfn4", object, "SsZ4eLleWyNfpeo4b")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
      
    // <div className={style.contact}>
    //     <h1>Contáctanos</h1>
    //   <div className={style.container}>
          
    //       <div className={style.cardContainer}>
    //         {/* <div className={style.info}>
    //         <h3>Información de contacto</h3>
    //         <p> <FiMail className={style.social} /> sintetico@gmail.com</p>
    //         <p><AiOutlineWhatsApp className={style.social} /> 011-9911991</p>
    //         <p><FiInstagram  className={style.social}/> Instagram</p>
            
            

    //         </div>   */}
    //         <Faq/>
    //       </div>
    //     <div className={style.formContainer}>
    //       <Formik
    //         initialValues={{
    //           nombre: "",
    //           email: "",
    //           mensaje: "",
    //         }}
    //         validate={(valores) => {
    //           let errores = {};
    //           //validacion nombre
    //           if (!valores.nombre) {
    //             errores.nombre = "Por favor ingresa un nombre";
    //           } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
    //             errores.nombre =
    //               "El nombre puede contener solo letras y espacios";
    //           }
    //           //validacion correo
    //           if (!valores.email) {
    //             errores.email = "Por favor ingrese un correo electrónico";
    //           } else if (
    //             !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
    //               valores.email
    //             )
    //           ) {
    //             errores.email =
    //               "Por favor ingrese un correo electrónico válido";
    //           }

    //           if (!valores.mensaje) {
    //             errores.mensaje = "Por favor ingrese un mensaje";
    //           }

    //           return errores;
    //         }}
    //         onSubmit={(valores, { resetForm }) => {
    //           resetForm();
    //           console.log(valores);
    //           console.log("Correo enviado exitosamente");
    //           sendEmail(valores);
    //           setFormularioEnviado(true);
    //           dispatch(sendInquiryEmail(valores.email))
    //           setTimeout(() => setFormularioEnviado(false), 10000);
    //         }}
    //       >
    //         {({ values, handleSubmit, errors }) => (
    //           <Form onSubmit={handleSubmit}>
    //             <div>
    //               <label htmlFor="nombre">
    //                 Nombre:
    //               </label>
    //               <Field
    //                 type="text"
    //                 id="nombre"
    //                 name="nombre" 
    //                 values={values.nombre}
                    
    //               />
    //               <ErrorMessage
    //                 name="nombre"
    //                 component={() => (
    //                   <div className={style.error}>{errors.nombre}</div>
    //                 )}
    //               />

    //               <div>
    //                 <label htmlFor="email" >
    //                   Correo Electrónico:
    //                 </label>
    //                 <Field
    //                   type="email"
    //                   id="email"
    //                   name="email"
    //                   values={values.email}
                      
    //                 />
    //                 <ErrorMessage
    //                   name="email"
    //                   component={() => (
    //                     <div className={style.error}>{errors.email}</div>
    //                   )}
    //                 />
    //               </div>
    //               <div>
    //                 <label htmlFor="mensaje" >
    //                   Mensaje:
    //                 </label>
    //                 <Field
    //                   as="textarea"
    //                   id="mensaje"
    //                   name="mensaje"
    //                   values={values.mensaje}
    //                   placeholder="Escriba su mensaje..."
    //                 />
    //                 <ErrorMessage
    //                   name="mensaje"
    //                   component={() => (
    //                     <div className={style.error}>{errors.mensaje}</div>
    //                   )}
    //                 />
    //               </div>
    //               <button type="submit" className={style.btn} >Enviar</button>

    //               {formularioEnviado && (
    //                 <p className={style.exito}>Correo enviado con éxito!</p>
    //               )}
    //             </div>
    //           </Form>
    //         )}
    //       </Formik>

    //     </div>
    //   </div>
    // </div>
    <div className={style.main} style={{height: altura}}>
      <div className={style.container}>
        <div className={style.title} onClick={() => {altura === '100px' ? setAltura('800px') : setAltura('100px')}}>
          <h1>Contacto y preguntas frecuentes</h1>
        </div>
        <div className={style.infoContainer}>
        <Faq/>
          <div className={style.formContainer}>
           <Formik
            initialValues={{
              nombre: "",
              email: "",
              mensaje: "",
            }}
            validate={(valores) => {
              let errores = {};
              //validacion nombre
              if (!valores.nombre) {
                errores.nombre = "Por favor ingresa un nombre";
              } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
                errores.nombre =
                  "El nombre puede contener solo letras y espacios";
              }
              //validacion correo
              if (!valores.email) {
                errores.email = "Por favor ingrese un correo electrónico";
              } else if (
                !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
                  valores.email
                )
              ) {
                errores.email =
                  "Por favor ingrese un correo electrónico válido";
              }

              if (!valores.mensaje) {
                errores.mensaje = "Por favor ingrese un mensaje";
              }

              return errores;
            }}
            onSubmit={(valores, { resetForm }) => {
              resetForm();
              console.log(valores);
              console.log("Correo enviado exitosamente");
              sendEmail(valores);
              setFormularioEnviado(true);
              dispatch(sendInquiryEmail(valores.email))
              setTimeout(() => setFormularioEnviado(false), 10000);
            }}
          >
            {({ values, handleSubmit, errors }) => (
              <Form onSubmit={handleSubmit}>
                <div className={style.formik}>
                  <h1 style={{color: "white"}}>Contáctanos</h1>
                  <div className={style.div_camp}>
                  <label htmlFor="nombre" className={style.name_label}>
                    Nombre:
                  </label>
                  <Field
                    type="text"
                    id="nombre"
                    name="nombre" 
                    values={values.nombre}
                    
                  />
                  <ErrorMessage
                    name="nombre"
                    component={() => (
                      <div className={style.error}>{errors.nombre}</div>
                    )}
                  />
                  </div>
                  <div className={style.div_camp}>
                    <label htmlFor="email" className={style.email_label}>
                      Correo Electrónico:
                    </label>
                    <Field
                      type="email"
                      id="email"
                      name="email"
                      values={values.email}
                      
                    />
                    <ErrorMessage
                      name="email"
                      component={() => (
                        <div className={style.error}>{errors.email}</div>
                      )}
                    />
                  </div>
                  <div className={style.div_camp}>
                    <label htmlFor="mensaje" >
                      Mensaje:
                    </label>
                    <Field
                      as="textarea"
                      id="mensaje"
                      name="mensaje"
                      values={values.mensaje}
                      placeholder="Escriba su mensaje..."
                    />
                    <ErrorMessage
                      name="mensaje"
                      component={() => (
                        <div className={style.error}>{errors.mensaje}</div>
                      )}
                    />
                  </div>
                  <button type="submit" className={style.btn} >Enviar</button>

                  {formularioEnviado && (
                    <p className={style.exito}>Correo enviado con éxito!</p>
                  )}
                </div>
              </Form>
            )}
          </Formik>
        </div>

        </div>
      </div>
    </div>
  );
};

export default ContactForm;
