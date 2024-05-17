import React from 'react'
import HeaderDashboard from "@/components/HeaderDashboard";

export default function page() {
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

</section>
    </>
  )
}
