import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Axios } from "../../config";
import { toast } from "react-toastify";
import { userStore } from "../helper";

const Register = () => {
  const [values, setValues] = useState({
    fullname: "",
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
    
  });

  const [termsChecked, setTermsChecked] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();

    if (!termsChecked) {
      toast.error("Please accept the Terms and Conditions.");
      return;
    }

    if(values.password != values.confirmPassword){
      toast.error(`Passwords does not match.`);
    }

    const { confirmPassword, ...requestData } = values;

   await Axios.post('/register', requestData).then(res => {
      if(res.status === 200){
        console.log(res);
        userStore(res.data)
        navigate(`/dashboard`);
        toast.success(`${res.data.msg}`);
        window.location.reload();
      }else{
        toast.warn("Something went wrong. Please try again.");
      }
     }).catch(error => {
      console.log(error);
      if(error.response.data.msg){
        toast.error(error.response.data.msg);
      }else if(error.response.data.err){
        toast.error(error.response.data.err);
      }else{
        toast.error(error.response.message);
      }
     })
    
  }
  return (
    <>
      <section className="bg-white  w-full">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
              <Link to="#" className="flex items-center mb-6 text-2xl font-semibold text-black dark:text-gray-600">
                  ICT Help Desk    
              </Link>
              <div className="w-full md:w-1/2 bg-gray-800 rounded-lg shadow dark:border md:mt-0 sm:max-w-2xl xl:p-0  dark:border-black">
                  <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                      <h1 className="text-xl font-bold leading-tight tracking-tight text-black md:text-2xl dark:text-white">
                          Create an account
                      </h1>
                      <form className="space-y-4 md:space-y-6 w-full" action="#" onSubmit={handleSubmit}>

                        <div className="md:flex gap-4 ">
                          <div className="w-full ">
                                <label htmlFor="fullname" className="block mb-2 text-sm font-medium text-black dark:text-white">Fullname</label>
                                <input type="text" name="fullname" id="fullname" className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-orange-600 focus:border-orange-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John Doe " required onChange={(e) => setValues({...values, fullname: e.target.value})}/>
                            </div>
                        </div>

                        <div className="md:flex gap-4 ">
                          <div className="w-full md:w-3/4">
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-black dark:text-white">Your email</label>
                                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-orange-600 focus:border-orange-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required onChange={(e) => setValues({...values, email: e.target.value})}/>
                            </div>
                            <div className="w-full md:w-3/4">
                                <label htmlFor="username" className="block mb-2 text-sm font-medium text-black dark:text-white">Username</label>
                                <input type="text" name="username" id="username" placeholder="johndoe095" className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-orange-600 focus:border-orange-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" onChange={(e) => setValues({...values, username: e.target.value})}/>
                            </div>
                        </div>

                        <div className="md:flex gap-4">
                          <div className="w-full md:w-3/4">
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-black dark:text-white">Password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-orange-600 focus:border-orange-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" onChange={(e) => setValues({...values, password: e.target.value})}/>
                          </div>
                          <div className="w-full md:w-3/4">
                                <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-black dark:text-white">Confirm password</label>
                                <input type="password" name="confirmPassword" id="confirm-password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-orange-600 focus:border-orange-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" onChange={(e) => setValues({...values, confirmPassword: e.target.value})}  />
                            </div>
                        </div>
                          
                          
                          <div className="flex items-start">
                              <div className="flex items-center h-5">
                                <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-orange-600 dark:ring-offset-gray-800" required="" onChange={(e) => setTermsChecked(e.target.checked)} />
                              </div>
                              <div className="ml-3 text-sm">
                                <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <Link className="font-medium text-orange-600 hover:underline dark:text-primary-500" to="/terms">Terms and Conditions</Link></label>
                              </div>
                          </div>
                          <button type="submit" className="w-full cursor-pointer text-white bg-orange-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-primary-700 " >Create an account</button>
                          <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                              Already have an account? <Link to="/login" className="font-medium text-orange-600 hover:underline dark:text-primary-500">Login here</Link>
                          </p>
                      </form>
                  </div>
              </div>
          </div>
      </section>
    </>
  )
}

export default Register