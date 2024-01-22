import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import logo2 from "../assets/logo2.jpg";
import { toast } from "react-toastify";
// import logo1 from "../assets/logo1.png";

const Contact = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);

    try {
      const contactsCollection = collection(db, "contacts");
      await addDoc(contactsCollection, {
        name,
        number,
      });

      setLoader(false);
      // alert("Your details have been submitted");
      toast.success("Your details have been submitted", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });

      // Clear form fields
      setName("");
      setNumber("");
    } catch (error) {
      // console.error("Error adding contact:", error);
      // alert("Error submitting details: Please try again.");
      toast.error("Error submitting details: Please try again.", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setLoader(false);
    }
  };

  return (
    <div className="h-screen w-screen flex flex-col items-center gap-7 pt-24">
      <img src={logo2} alt="Logo" className="max-w-[350px] my-8" />
      <form className="mt-8 max-w-[350px]" onSubmit={handleSubmit}>
        <label className="text-xl text-center mt-6 font-semibold">Name</label>
        <input
          placeholder="Name"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
          type="text"
          className="w-full mb-4 px-4 py-2 text-xl text-gray-600 bg-white rounded-xl border transition ease-in-out"
        />

        <label className="text-xl text-center mt-6 font-semibold">
          Phone Number
        </label>
        <input
          placeholder="Number"
          value={number}
          required
          min={1000000000}
          max={10000000000}
          onChange={(e) => setNumber(e.target.value)}
          type="number"
          className="w-full mb-4 px-4 py-2 text-xl text-gray-600 bg-white rounded-xl border transition ease-in-out"
        />

        <button
          type="submit"
          className="w-full px-4 py-2 text-xl text-white bg-blue-700 rounded-xl border-none shadow-lg hover:text-white hover:bg-green-500 transition duration-200 ease-in-out"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
