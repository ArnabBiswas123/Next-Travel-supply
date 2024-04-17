"use client";
import HeaderDashboard from "@/components/HeaderDashboard";
import Pending from "@/components/Pending";
import Profileform from "@/components/Profileform";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function page() {
  const [userdata, setUserdata] = useState("");
  const [fetchAgainData,setFetchAgainData]=useState(false)
  const router = useRouter();


  const fetchagain=()=>{
        setFetchAgainData((prev)=>!prev);
  }

  const fetchData = async (token) => {
    try {
      const result = await fetch(
        `https://next-travel-backend-vercel.vercel.app/api/v1/supplier/getsupplier`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const json = await result.json();
    
      if (json.success === false) {
        localStorage.removeItem('token')
        return router.push("/login");
      } else {
        setUserdata(json.user);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      return router.push("/login");
    }
    fetchData(token);
  }, [fetchAgainData]);

  return (
    <>
      <HeaderDashboard></HeaderDashboard>
      <section
      className=" pt-5 "
      style={{
        backgroundImage: "url('/ocean.jpg')",
        backgroundSize: "cover",
        height: "115vh",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {userdata.isvarified === "not-filled" ? (
        <Profileform name={userdata.name} fetchagain={fetchagain}></Profileform>
      ) : (
        userdata.isvarified === "pending"?<Pending></Pending>:''
      )}
        </section>
    </>
  );
}
