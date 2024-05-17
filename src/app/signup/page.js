"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Snackbar from "@mui/material/Snackbar";
import Alert from '@mui/material/Alert';
const fetchURL='http://localhost:5000'
// const fetchURL='https://next-travel-backend-vercel.vercel.app'
export default function page() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [open, setOpen] = useState(false);
  const [errormsg,setErrormsg]=useState('');
  const router = useRouter();

  const nameChange = (e) => {
    setName(e.target.value);
    setErrors({ ...errors, name: "" });
  };

  const emailChange = (e) => {
    setEmail(e.target.value);
    setErrors({ ...errors, email: "" });
  };

  const passwordChange = (e) => {
    setpassword(e.target.value);
    setErrors({ ...errors, password: "" });
  };

  const submitHandler = async (e) => {
    e.preventDefault();



    let newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const alphaNumericRegex = /^[a-zA-Z0-9]+$/;
    if (name === "") newErrors.name = "Enter valid name";
    if(!emailRegex.test(email)) newErrors.email = "Enter valid email"
    if(password.length<5 || !alphaNumericRegex.test(password)){
      newErrors.password = "Enter valid password"
    }

    // if (password === "") newErrors.password = "Enter valid password";
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const response = await fetch(
        `${fetchURL}/api/v1/supplier/signup`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name,
            email: email,
            password: password,
          }),
        }
      );
      const json = await response.json();
      if (json.success === true) {
        localStorage.setItem("token", json.token);
        router.push("/dashboard");
      } else {
        setErrormsg(json.msg)
        setOpen(true);
      }
    }
  };

  const handleClose = (event, reason) => {
    // if (reason === 'clickaway') {
    //   return;
    // }

    setOpen(false);
  };


  return (
    <section
      style={{
        backgroundImage: "url('/sunset.jpg')",
        backgroundSize: "cover",
        height: "100vh",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Snackbar
        open={open}
        autoHideDuration={5000}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        onClose={handleClose}
        message="This Snackbar will be dismissed in 5 seconds."
      >
       <Alert severity="error">{errormsg}</Alert>
       </Snackbar>
      <div className="flex flex-col items-center justify-center px-6 py-2 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow mt-20 md:mt-5 sm:max-w-md xl:p-0">
          <h1 className=" font-home font-extrabold text-lg md:text-2xl  mt-10 bg-gradient-to-t text-center from-amber-800 to-yellow-500 text-transparent bg-clip-text">
            GlobalDuniya
          </h1>
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight font-home tracking-tight text-gray-900 md:text-2xl">
              Create a new account
            </h1>
            <form className="space-y-4 md:space-y-4" onSubmit={submitHandler}>
              <div>
                <label
                  htmlFor="email"
                  className="block font-home  mb-2 text-sm font-medium text-gray-900"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={name}
                  onChange={nameChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  placeholder="Enter your name"
                  // required
                />
                {errors.name ? (
                  <p className=" text-red-600 text-xs font-home m-0 p-0">
                    Name is required
                  </p>
                ) : (
                  ""
                )}
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 font-home text-sm font-medium text-gray-900"
                >
                  Your Email Id
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={emailChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  placeholder="Enter your email id"
                  // required
                />
                {errors.email ? (
                  <p className=" text-red-600 text-xs font-home m-0 p-0">
                    Enter a valid Email
                  </p>
                ) : (
                  ""
                )}
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 font-home text-sm font-medium text-gray-900 "
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={passwordChange}
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  // required
                />
                {errors.password ? (
                  <p className=" text-red-600 text-xs font-home m-0 p-0">
                  Password should be atleast 5 character long
                  </p>
                ) : (
                  ""
                )}
              </div>

              <button
                type="submit"
                className="w-full  text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
              >
                Sign Up
              </button>
              <div className="flex items-center ">
                <p className=" mr-3 font-home text-sm">
                  Already have an account?
                </p>
                <a
                  href="/login"
                  className="text-sm font-home  font-medium text-blue-800 hover:underline"
                >
                  Login
                </a>
              </div>
              <div className="flex items-center ">
                <p className=" mr-3 font-home text-sm">
                  By proceeding, you agree to our{" "}
                  <a
                    href="#"
                    className="text-sm font-home  font-medium text-blue-800 hover:underline "
                  >
                    Terms of Use
                  </a>{" "}
                  and confirm you have read our{" "}
                  <a
                    href="#"
                    className="text-sm font-home  font-medium text-blue-800 hover:underline"
                  >
                    Privacy Policy
                  </a>
                  .{" "}
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
