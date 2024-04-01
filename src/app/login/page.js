// import Image from "next/image"

export default function page() {
  return (
<section className=" dark:bg-gray-900" style={{backgroundImage: "url('/sunset.jpg')"}}>
      <div className="flex flex-col items-center justify-center px-6 py-2 mx-auto md:h-screen lg:py-0">
        {/* <Image
          src={"/gd logo.gif"}
          style={{ margin: "10px", cursor: "pointer" }}
          height={100}
          width={100}
          unoptimized
        ></Image> */}

        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <h1 className=" font-home font-extrabold text-lg md:text-2xl  mt-10 bg-gradient-to-t text-center from-amber-800 to-yellow-500 text-transparent bg-clip-text">GlobalDuniya</h1>
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight font-home tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Please  Login using your account.
            </h1>
            <form className="space-y-4 md:space-y-4" action="#">
            
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 font-home text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your Email Id
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your email id"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 font-home text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
           
              <button
                type="submit"
                className="w-full  text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                 Login
              </button>
              <div className="flex items-center ">
               
               <p className=" mr-3 font-home text-sm">Don't have an account?</p>
                 <a
                  href="/signup"
                  className="text-sm font-home  font-medium text-blue-800 hover:underline dark:text-primary-500"
                >
                 Sign Up  
                </a>
            
              </div>
              <div className="flex items-center ">
               
               <p className=" mr-3 font-home text-sm">By proceeding, you agree to our <a
                  href="#"
                  className="text-sm font-home  font-medium text-blue-800 hover:underline dark:text-primary-500"
                >Terms of Use</a>  and confirm you have read our <a
                  href="#"
                  className="text-sm font-home  font-medium text-blue-800 hover:underline dark:text-primary-500"
                >Privacy Policy</a>. </p>
                
            
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
