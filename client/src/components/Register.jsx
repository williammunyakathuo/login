import { Link } from "react-router-dom";
import { useState } from "react";
import { Toaster } from 'react-hot-toast'
import { useFormik } from 'formik'
import { registerValidation } from '../helper/Validate';
import convertToBase64 from '../helper/Convert';
import avatar from '../assets/profile.png'
import styles from '../styles/Username.module.css'


export default function Register() {

  const [file, setFile] = useState()

  const formik = useFormik({
    initialValues: {
      email: '',
      username: '',
      password: ''
    },
    validate: registerValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async values => {
      values = await Object.assign(values, { profile : file || ''}),
      console.log(values)
    }
  })

  const onUpload = async e => {
    const base64 = await convertToBase64(e.target.files[0]);
    setFile(base64);
  }

  return (
    <div className="container mx-auto">

      <Toaster position="top-center" reverseOrder={false}></Toaster>

      <div className="flex justify-center items-center h-screen">
        <div className={styles.glass}>
          <div className="title flex flex-col items-center">
            <h4 className="text-5xl font-bold">Hello Again</h4>
            <span className="py-4 text-xl w-2/3 text-center text-gray-500">
              Explore More by connecting with us
            </span>
          </div>


          <form className="py-1" onSubmit={formik.handleSubmit}>
            <div className="profile flex justify-center py-4">
              <label htmlFor="profile">
                <img src={file || avatar} className={styles.profile_img} alt="avatar" />
              </label>
              <input onChange={onUpload} type="file" id="profile" name="profile" />
            </div>

            <div className="textbox flex flex-col gap-6">
              <input {...formik.getFieldProps('email')} className={styles.textbox} type="text" placeholder="Email" />
              <input {...formik.getFieldProps('username')} className={styles.textbox} type="text" placeholder="Username" />
              <input {...formik.getFieldProps('password')} className={styles.textbox} type="password" placeholder="Password" />

              <button className={styles.btn} >Register</button>
            </div>

            <div className="text-center py-4">
              <span className='text-gray-500'>Already have an account <Link className='text-red-500' to="/">Login</Link></span>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}


