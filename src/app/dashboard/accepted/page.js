"use client"
import React from "react";
import HeaderDashboard from "@/components/HeaderDashboard";
import { useRouter } from "next/navigation";
import Cards from "@/components/Cards";

export default function page() {
  const router = useRouter();
  const handleUpload=()=>{
    router.push('/dashboard/accepted/upload_product')
  }


  return (
    <>
      <HeaderDashboard></HeaderDashboard>
      <section
        className=" pt-5"
        style={{
          backgroundImage: "url('/beluns.jpg')",
          backgroundSize: "cover",
          height: "115vh",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
        className=" mx-auto my-10 flex justify-center gap-6 flex-wrap"
        style={{
          width: "80%",
        }}
      >
        <Cards name={"My Profile"} onclick={handleUpload}></Cards>
        <Cards name={"My Products"} onclick={handleUpload}></Cards>
        <Cards name={"Upload Product"} onclick={handleUpload}></Cards>
        <Cards name={"My Bookings"} onclick={handleUpload}></Cards>
        {/* <Cards ></Cards> */}
      </div>
      </section>
    </>
  );
}
