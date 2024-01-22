import React, { useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { CSVLink } from "react-csv";
import logo2 from "../assets/logo2.jpg";
import { toast } from "react-toastify";

const Dataset = () => {
  const [allDocs, setAllDocs] = useState([]);

  const getAllDocs = async () => {
    try {
      const contactsRef = collection(db, "contacts");
      const snapshot = await getDocs(contactsRef);

      if (!snapshot.empty) {
        const allDocsArray = snapshot.docs.map((doc) => doc.data());
        setAllDocs(allDocsArray);
        // console.log(allDocsArray);
        toast.success("Data fetched successfully", {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      } else {
        toast.info("No documents found", {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        // console.log("No documents found");
      }
    } catch (error) {
      // console.error("Error fetching documents:", error);
      toast.error("Error fetching documents", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };
  const csvData = allDocs;

  return (
    <div className="h-screen w-screen flex flex-col items-center gap-7 pt-24">
      <img src={logo2} alt="Logo" className="max-w-[350px] my-8" />
      <div className="my-8 max-w-[350px] flex flex-col gap-10">
        <button
          onClick={getAllDocs}
          className="w-60 px-4 py-3 text-xl text-white bg-blue-600 rounded-xl border-none shadow-lg hover:bg-blue-800 transition duration-200 ease-in-out"
        >
          Fetch Docs
        </button>
        <CSVLink
          data={csvData}
          className="w-60 px-4 py-3 text-xl text-center text-white bg-blue-600 rounded-xl border-none shadow-lg hover:bg-blue-800 transition duration-200 ease-in-out"
        >
          Download CSV
        </CSVLink>
      </div>
    </div>
  );
};

export default Dataset;
