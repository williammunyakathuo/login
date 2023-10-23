import { Link } from "react-router-dom";
import styles from '../styles/Username.module.css'
import { Toaster } from 'react-hot-toast'


export default function Password() {
 
  return (
    <div className="container mx-auto">

      <Toaster position="top-center" reverseOrder={false}></Toaster>

      <div className="flex justify-center items-center h-screen">
        <div className={styles.glass}>
          <div className="title flex flex-col items-center">
          <h4 className='text-5xl font-bold'>Recovery</h4>
            <span className='py-4 text-xl w-2/3 text-center text-gray-500'>
                Enter OTP to recover password.
            </span>
          </div>


          <form className="py-1" >

            <div className="textbox flex flex-col gap-6">
              <input  className={styles.textbox} type="text" placeholder="OTP" />
              <button className={styles.btn} >Recover</button>
            </div>

            <div className="text-center py-4">
              <span className='text-gray-500'>Didn't recieve yet <Link className='text-red-500' to="/recovery">Resend</Link></span>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}


