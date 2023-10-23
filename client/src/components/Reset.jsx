import { Link } from "react-router-dom";
import styles from '../styles/Username.module.css'
import { Toaster } from 'react-hot-toast'
import { useFormik } from 'formik'
import { resetPasswordValidation } from "../helper/Validate";


export default function Reset() {
  const formik = useFormik({
    initialValues: {
      password: '',
      confirm_pwd: ''
    },
    validate: resetPasswordValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit : async values => {
      console.log(values)
    }
  })

  return (
    <div className="container mx-auto">

      <Toaster position="top-center" reverseOrder={false}></Toaster>

      <div className="flex justify-center items-center h-screen">
        <div className={styles.glass}>
          <div className="title flex flex-col items-center">
            <h4 className="text-5xl font-bold">New password</h4>
            <span className="py-4 text-xl w-2/3 text-center text-gray-500">
              Enter new password
            </span>
          </div>


          <form className="py-1" onSubmit={formik.handleSubmit}>
            

            <div className="textbox flex flex-col gap-6">
              <input {...formik.getFieldProps('password')} className={styles.textbox} type="text" placeholder="New Password" />
              <input {...formik.getFieldProps('confrim_pwd')} className={styles.textbox} type="text" placeholder="Re-enter Password" />
              <button className={styles.btn} >Change password</button>
            </div>

            <div className="text-center py-4">
              <span className='text-gray-500'>Forgot password <Link className='text-red-500' to="/recovery">Reset password</Link></span>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}


