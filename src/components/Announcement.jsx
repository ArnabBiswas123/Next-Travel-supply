import React from "react";
import Image from "next/image";

export default function Announcement() {
  return (
    <div
      className=" bg-gray-100 flex flex-col lg:flex-row"

      style={{
        // display: "flex",
        width: "100%",
        // flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginBottom:'5%',
        //   margin: "5%",
        padding: "5%",
        gap: "4%",
      }}
    >
      <div
      className="mb-8  sm:mb-8 "
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth:'400px',
          justifyContent: "center",
          alignItems: "center",

        }}
      >
        <Image src={"/megaphone.png"} width={80} height={80}></Image>
        <h2 className=" font-home font-bold text-lg  m-2">
        100+ million visitors
        </h2>
        <p className=" font-home text-slate-800 text-center">
        Reach global customers: Sell on TripAdvisor, Viator, 3500+ partners
        </p>
      </div>

      <div
      className="mb-8  sm:mb-8"
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth:'400px',
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image src={"/list.png"} width={80} height={80}></Image>
        <h2 className=" font-home font-bold text-lg  m-2">
        Free TripAdvisor listing
        </h2>
        <p className=" font-home text-slate-800 text-center">
        Boost your reputation with reviews by creating or updating your listing on TripAdvisor.
        </p>
      </div>

      <div
      className="mb-8  sm:mb-8"
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth:'400px',
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image src={"/growth.png"} width={80} height={80}></Image>
        <h2 className=" font-home font-bold text-lg  m-2">
        Connect, sell, and thrive.
        </h2>
        <p className=" font-home text-slate-800 text-center">
        Streamline your bookings effortlessly with scalable solutions tailored to your business growth.
        </p>
      </div>
    </div>
  );
}
