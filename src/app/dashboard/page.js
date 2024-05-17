"use client";
import HeaderDashboard from "@/components/HeaderDashboard";
import Pending from "@/components/Pending";
import Rejected from "@/components/Rejected";
import Profileform from "@/components/Profileform";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
const fetchURL='http://localhost:5000'
// const fetchURL='https://next-travel-backend-vercel.vercel.app'

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
        `${fetchURL}/api/v1/supplier/getsupplier`,
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
        if(json.user.isvarified==='accepted'){
            router.push('/dashboard/accepted');
        }
        else{
        setUserdata(json.user);}
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
        backgroundImage: "url('/beluns.jpg')",
        backgroundSize: "cover",
        height: "115vh",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {userdata.isvarified === "not-filled" ? (
        <Profileform name={userdata.name} fetchagain={fetchagain}></Profileform>
      ) : (
        userdata.isvarified === "pending"?<Pending></Pending>:(userdata.isvarified === "rejected"?<Rejected></Rejected>:'')
      )}
        </section>
    </>
  );
}
