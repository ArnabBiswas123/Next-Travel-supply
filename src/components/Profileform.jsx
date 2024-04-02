export default function Profileform() {
  return (
    <section
      className=" pt-5 overflow-hidden"
      style={{
        backgroundImage: "url('/ocean.jpg')",
        backgroundSize: "cover",
        height: "100vh",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
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
          Arnab Please Complete your Profile!!
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
          />
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
            // style={{ width: "80%" }}
          />
        </div>
        <div
          style={{ width: "100%", display: "flex", flexDirection: "column" }}
        >
          <label className=" font-home ">Company registration Number</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Company registration Number"
            // style={{ width: "80%" }}
          ></input>
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
            // style={{ width: "80%" }}
          ></input>
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
            // style={{ width: "80%" }}
          ></input>
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
            // style={{ width: "80%" }}
          ></input>
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
          <input
            type="checkbox"
            id="informationCorrect"
            name="informationCorrect"
            className="w-8 h-8"
            // style={{ width: "20px", height: "20px" }}
            // Add necessary styles for checkbox if needed
          />
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
        >
          Submit
        </button>
      </div>
    </section>
  );
}
