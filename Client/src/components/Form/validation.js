const validator= (data) => {
 let errors={}

  if(!data.email.includes('@')){
    errors.e1= 'Ingresa un email válido.'
  }
  if(!data.email){
    errors.e2= 'Ingresa un email.'
  }
  if (data.email.length>35){
    errors.e3= 'Debe tener menos de 36 caracteres.'
  }

  if(!/\d/.test(data.password)){
    errors.p1= 'Al menos un número.'
  }

  if(data.password.length < 6 || data.password.length > 10 ) {
     errors.p2= 'Debe tener más de 6 y menos de diez caracteres.'
  }

 return errors;


}
export default validator;