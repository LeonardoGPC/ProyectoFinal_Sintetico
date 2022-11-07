import axios from "axios"

export const validate = (target, setError, error, register) => {
    const inputName = target.name
    const inputValue = target.value
    let user;

    const validateUser = async () => {
        let users = await axios.get('http://localhost:3001/users')
        user = users.data.find(e => e.userName === inputValue)
        if(user){
            setError({...error, userName: 'Ya hay un usuario con ese nombre'});
        }
    }

    if(inputName === 'name'){
        if (inputValue.length === 0) {
            setError({...error, name: 'El valor es requerido'});
          } else if (!/^[a-zA-Z\s]*$/.test(inputValue)) {
            setError({...error, name: 'Solo se permiten letras'});
          } else {
            setError({...error, name: ''});
          }
    }
    if(inputName === 'lastName'){
        if (inputValue.length === 0) {
            setError({...error, lastName: 'El valor es requerido'});
          } else if (!/^[a-zA-Z\s]*$/.test(inputValue)) {
            setError({...error, lastName: 'Solo se permiten letras'});
          } else {
            setError({...error, lastName: ''});
          }
    }
    if(inputName === 'phone'){
        if (inputValue.length === 0) {
            setError({...error, phone: 'El valor es requerido'});
          } else if (!/^\d+$/.test(inputValue)) {
            setError({...error, phone: 'Solo se permiten números'});
          } else if (inputValue.length !== 10) {
            setError({...error, phone: 'Se requieren 10 digitos'});
          } else {
            setError({...error, phone: ''});
          }
    }
    if(inputName === 'userName'){
        validateUser()
        if (inputValue.length === 0) {
            setError({...error, userName: 'El valor es requerido'});
          } else {
            setError({...error, userName: ''});
          }
    }
    if(inputName === 'email'){
        if(inputValue.length === 0){
            setError({...error, email: 'El valor es requerido'});
        } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(inputValue)){
            setError({...error, email: 'No es un Mail válido'});
        } else {
            setError({...error, email: ''});
        }
    }
    if(inputName === 'password'){
        if(inputValue.length === 0){
            setError({...error, password: 'El valor es requerido'});
        } else {
            setError({...error, password: ''});
        }
    }
    if(inputName === 'confirmPassword'){
        if(inputValue.length === 0){
            setError({...error, confirmPassword: 'El valor es requerido'});
        } else if(inputValue !== register.password){
            setError({...error, confirmPassword: 'Debe coincidir con la contraseña'});
        } else {
            setError({...error, confirmPassword: ''});
        }
    }
}