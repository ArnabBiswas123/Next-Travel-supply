import Image from "next/image";

export default function Listing() {
  return (
    <div
      className=" flex flex-col"
      style={{
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "5%",
        // paddingLeft: "5%",

        gap: "6%",
      }}
    >
      <div
        className=" flex flex-col"
        style={{
          width: "100%",
        }}
      >
        <h1 className=" text-center mb-10 font-home font-bold text-2xl">
          Selling with us is easy. Here's how.
        </h1>
        <div
          className=" flex flex-row p-10"
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            gap: "15%",
          }}
        >
            <span className="hidden md:block">

          <Image src={"/todo.png"} width={200} height={200}></Image>
            </span>
          <span className=" sm:w-full lg:w-1/2">
            <h1 className=" text-left mb-8 font-home font-bold text-xl">
              1. Establish your TripAdvisor listing.
            </h1>
            <p className=" font-home text-left">
              Start by creating your TripAdvisor listing. Enter your details to
              set up a new listing or locate your existing one. Effortlessly
              manage your reviews to build trust with travelers and boost your
              sales.
            </p>
          </span>
        </div>
      </div>
      <div
        className=" flex flex-row bg-gray-100 mt-8 p-10"
        style={{
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          gap: "15%",
        }}
      >
        <span className=" sm:w-full lg:w-1/2">
          <h1 className=" text-left mb-8 font-home font-bold text-xl">
            2. Craft products at your own speed.
          </h1>
          <p className=" font-home text-left">
            Utilize the Management Center to craft products, incorporating
            photos, pricing, availability, and more. Save your progress as you
            work and publish when you're prepared
          </p>
        </span>
        <span className="hidden md:block">

        <Image src={"/product.png"} width={200} height={200}></Image>
        </span>
      </div>
      <div
        className=" flex flex-row  mt-8 p-10"
        style={{
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          gap: "15%",
        }}
      >
        <span className="hidden md:block">

        <Image src={"/money.png"} width={200} height={200}></Image>
        </span>
        <span className=" sm:w-full lg:w-1/2" 
        // style={{ width: "50%" }}
        >
          <h1 className=" text-left mb-8 font-home font-bold text-xl">
            3. Begin earning while maintaining control.
          </h1>
          <p className=" font-home text-left">
            Set your desired earnings per booking and manage your business on
            your own terms. Enjoy simplicity, hassle-free operation, and
            flexibility.
          </p>
        </span>
      </div>
    </div>
  );
}
