import Header from "@/components/Header";
import Image from "next/image";
import Announcement from "@/components/Announcement";
import Footer from "../components/Footer";
import Listing from "@/components/Listing";
import Faq from "@/components/Faq";

export default function Home() {
  return (
    <>
      <Header></Header>
      <div style={{ position: "relative", height: "600px" }}>
        <Image src={"/sunset.jpg"} fill style={{ objectFit: "cover" }}></Image>
        <div
          style={{
            position: "absolute",
            display: "flex",
            top: "100px",
            left: "60%",
            transform: "translateX(-50%)",
            width: "80%",
            // maxWidth: "500px",
            flexDirection: "column",
            gap: "10px",
            // padding: "5px 15px",
            zIndex: "1",
            // boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h1 className=" font-home  font-extrabold text-4xl text-white">
            Journey Through Life.
          </h1>
          <h2 className=" font-home  font-extrabold text-3xl text-white">
            The Realm of Visitors.
          </h2>
          {/* <p className="font-home text-white text-xl">
            Join us to sell your tours, activities and attraction tickets and
            promote your business to millions of travelers worldwide.
          </p> */}
        </div>
      </div>
      <Announcement></Announcement>
      <Listing></Listing>
      <Faq></Faq>
      <Footer></Footer>
      
    </>
  );
}
