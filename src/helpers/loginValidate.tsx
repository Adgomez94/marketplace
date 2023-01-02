import * as yup from "yup";

export const loginValidate = yup.object().shape({
  email: yup.string().email().required('El correo no es valido'),
  password: yup.string().trim().required('El password es requerido')
})