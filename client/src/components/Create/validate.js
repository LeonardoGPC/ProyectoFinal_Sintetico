export const validate = (target, dispatchError, input) => {
    const formName = target.name;
    const formValue = target.value;
    let success = true;
  
    dispatchError({ type: formName, value: '' });
  
    if (formName === 'name') {
      if (formValue.length === 0) {
        success = false;
        dispatchError({ type: formName, value: 'El valor es requerido' });
      } else if (!/^[a-zA-Z\s]*$/.test(formValue)) {
        success = false;
        dispatchError({
          type: formName,
          value: '*Solo letras (A-Z)*',
        });
      }
    }
  
    if (formName === 'image') {
      if (formValue.length === 0) {
        success = false;
        dispatchError({ type: formName, value: 'El valor es requerido' });
      }
    }
  
    if (formName === 'price') {
      const hp = Number(formValue);
  
      if (formValue.length === 0) {
        success = false;
        dispatchError({ type: formName, value: 'El valor es requerido' });
      } else if (Number.isNaN(hp)) {
        success = false;
        dispatchError({ type: formName, value: 'El valor debe ser numérico' });
      } else if (formValue < 0) {
        success = false;
        dispatchError({ type: formName, value: 'El valor debe ser mayor a 0' });
      }
    }
  
    if (formName === 'openHour') {
      if (formValue.length === 0) {
        success = false;
        dispatchError({ type: formName, value: 'El valor es requerido' });
      }
    }
    if (formName === 'closeHour') {
      if (formValue.length === 0) {
        success = false;
        dispatchError({ type: formName, value: 'El valor es requerido' });
      }else if( formValue <= input.openHour){
        success= false;
        dispatchError({type: formName, value:'La hora debe ser mayor a la de apertura'})
      }
    }
  
    if (formName === 'city') {
      if (formValue.length === 0) {
        success = false;
        dispatchError({ type: formName, value: 'El valor es requerido' });
      }
    }
  
    if (formName === 'size') {
      if (formValue.length === 0) {
        success = false;
        dispatchError({ type: formName, value: 'El valor es requerido' });
      }
    }
    if (formName === 'address') {
      if (formValue.length === 0) {
        success = false;
        dispatchError({ type: formName, value: 'El valor es requerido' });
      }
    }
    
  
    if (formName === 'surface') {
      if (formValue.length === 0) {
        success = false;
        dispatchError({ type: formName, value: 'El valor es requerido' });
      }
    }
    if (formName === 'description') {
      if (formValue.length === 0) {
        success = false;
        dispatchError({ type: formName, value: 'El valor es requerido' });
      }
    }
  
    
    
  
    return success;
  };
  