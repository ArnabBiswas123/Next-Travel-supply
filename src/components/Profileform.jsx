"use client";

import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

export default function Profileform({ name,fetchagain }) {
  const router = useRouter();
  const [director_name, setDirector_name] = useState("");
  const [errormsg,setErrormsg]=useState('');
  const [open, setOpen] = useState(false);
  const [company_name, setCompany_name] = useState("");
  const [registration, setRegistration] = useState("");
  const [business_name, setBusiness_name] = useState("");
  const [tax, setTax] = useState("");
  const [website, setWebsite] = useState("");
  const [checkBox, setCheckBox] = useState(false);
  const [errors, setErrors] = useState({
    director_name: "",
    company_name: "",
    registration: "",
    business_name: "",
    tax: "",
    website: "",
    checkBox: "",
  });

  const handleClose = (event, reason) => {
    // if (reason === 'clickaway') {
    //   return;
    // }
  
    setOpen(false);
  };

  const submitHandler = async () => {
    let newErrors = {};
    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
    if (director_name === "") newErrors.director_name = "Enter director name";
    if (company_name === "") newErrors.company_name = "Enter company name";
    if (registration === "")
      newErrors.registration = "Enter registration number";
    if (business_name === "") newErrors.business_name = "Enter business name";
    if (tax === "") newErrors.tax = "Enter tax";
    if (!urlRegex.test(website)) newErrors.website = "Enter website url";
    if (checkBox === false) newErrors.checkBox = "required";
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {

      const token=localStorage.getItem('token');
      if(!token){
      return  router.push('/login');
      }



      const response = await fetch(
        "https://next-travel-backend-vercel.vercel.app/api/v1/supplier/detailsform",
        {
          method: "put",
          headers: {
            "Content-Type": "application/json",
            Authorization:`Bearer ${token}`
          },
          body: JSON.stringify({
            owner_name: director_name,
            company_name: company_name,
            business_name: business_name,
            registration: registration,
            website: website,
            tax: 'x',
          }),
        }
      );

      const json = await response.json();
      if (json.success === true) {
            fetchagain();
        //
      } else {
        if (json.msg === "Token is not correct") {
          localStorage.removeItem("token");
          router.push("/login");
        } else {
          setErrormsg(json.msg)
          setOpen(true);
        }
      }
    }
  };



  

  return (
    // <section
    //   className=" pt-5 "
    //   style={{
    //     backgroundImage: "url('/ocean.jpg')",
    //     backgroundSize: "cover",

    //     height: "115vh",
    //     backgroundPosition: "center",
    //     backgroundRepeat: "no-repeat",
    //   }}
    // >
      <>
      <Snackbar
        open={open}
        autoHideDuration={5000}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        onClose={handleClose}
        message="This Snackbar will be dismissed in 5 seconds."
      >
        <Alert severity="error">{errormsg}</Alert>
      </Snackbar>
      <div
        className="  mx-auto bg-white rounded-lg shadow p-8 space-y-4 w-full  my-5 sm:w-3/4 md:w-1/2 lg:w-2/5 xl:1/3"
        style={{
          display: "flex",
          justifyContent: "center",
          // alignItems: "flex-start",
          flexDirection: "column",
          // width: "50%",
        }}
      >
        <h1 className=" font-home text-center mt-4  font-semibold text-orange-600">
          {name} Please Complete your Profile!!
        </h1>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <label className=" font-home ">
            Name of the director/ owner/ CEO
          </label>
          <input
            className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Enter Name of the director/ owner/ CEO"
            value={director_name}
            onChange={(e) => {
              setDirector_name(e.target.value);
              setErrors({ ...errors, director_name: "" });
            }}
          />
          {errors.director_name ? (
            <p className=" text-red-600 text-xs font-home m-0 p-0">
              Director name is required
            </p>
          ) : (
            ""
          )}
        </div>
        <div
          style={{ width: "100%", display: "flex", flexDirection: "column" }}
        >
          <label className=" font-home ">company Legal name</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="company Legal name"
            value={company_name}
            onChange={(e) => {
              setCompany_name(e.target.value);
              setErrors({ ...errors, company_name: "" });
            }}
          />
          {errors.company_name ? (
            <p className=" text-red-600 text-xs font-home m-0 p-0">
              Company name is required
            </p>
          ) : (
            ""
          )}
        </div>
        <div
          style={{ width: "100%", display: "flex", flexDirection: "column" }}
        >
          <label className=" font-home ">Company registration Number</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="number"
            placeholder="Company registration Number"
            value={registration}
            onChange={(e) => {
              setRegistration(e.target.value);
              setErrors({ ...errors, registration: "" });
            }}
          ></input>
          {errors.registration ? (
            <p className=" text-red-600 text-xs font-home m-0 p-0">
              Registration Number is required
            </p>
          ) : (
            ""
          )}
        </div>

        <div
          style={{ width: "100%", display: "flex", flexDirection: "column" }}
        >
          <label className=" font-home ">Doing business name</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Doing business name"
            value={business_name}
            onChange={(e) => {
              setBusiness_name(e.target.value);
              setErrors({ ...errors, business_name: "" });
            }}
          ></input>
          {errors.business_name ? (
            <p className=" text-red-600 text-xs font-home m-0 p-0">
              Business name is required
            </p>
          ) : (
            ""
          )}
        </div>
        <div
          style={{ width: "100%", display: "flex", flexDirection: "column" }}
        >
          <label className=" font-home ">Tax document</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="file"
            placeholder="Upload Tax document"
            value={tax}
            onChange={(e) => {
              setTax(e.target.value);
              setErrors({ ...errors, tax: "" });
            }}
          ></input>
          {errors.tax ? (
            <p className=" text-red-600 text-xs font-home m-0 p-0">
              Tax document is required
            </p>
          ) : (
            ""
          )}
        </div>

        <div
          style={{ width: "100%", display: "flex", flexDirection: "column" }}
        >
          <label className=" font-home ">Website</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Website"
            value={website}
            onChange={(e) => {
              setWebsite(e.target.value);
              setErrors({ ...errors, website: "" });
            }}
          ></input>
          {errors.website ? (
            <p className=" text-red-600 text-xs font-home m-0 p-0">
             Enter valid website url 
            </p>
          ) : (
            ""
          )}
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* <input
            type="checkbox"
            id="informationCorrect"
            name="informationCorrect"
            className={`w-8 h-8 ` }
            style={{outline:'1px solid red'}}
      
            value={checkBox}
            onChange={() => {
              setCheckBox((prev)=>!prev);
              setErrors({...errors,checkBox:!errors.checkBox})
            }}
          /> */}
          <Checkbox
            sx={{ color: errors.checkBox ? "red" : "" }}
            onChange={() => {
              setCheckBox((prev) => !prev);
              setErrors({ ...errors, checkBox: "" });
            }}
          ></Checkbox>
          <p className="text-sm font-home text-gray-500 mt-2 ml-2">
            By submitting this form, you acknowledge that providing false
            information may result in account closure and for future of
            commission payments.
          </p>
        </div>
        <button
          className=" font-home"
          style={{
            backgroundColor: "#3B82F6", // Tailwind CSS blue-500
            color: "#FFFFFF", // White color
            padding: "0.5rem 1rem", // Padding
            borderRadius: "0.375rem", // Rounded corners
            cursor: "pointer", // Pointer cursor on hover
            transition: "background-color 0.3s ease-in-out", // Smooth background color transition on hover
          }}
          type="submit"
          onClick={submitHandler}
        >
          Submit
        </button>
      </div>
      </>
    // </section>
  );
}
