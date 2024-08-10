"use client";
import { useState, useEffect } from "react";
import { DocumentType } from "@/types/types";
export default function DocumentCard(el: DocumentType) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Oct",
    "Nov",
    "Dec",
  ];
  //   2024-06-24
  const [date, setDate] = useState("");
  useEffect(() => {
    var date = new Date(el.date);
    var newdate = date.toDateString().split(" ");
    // console.log(newdate[1] + "," + newdate[2] + "," + newdate[3]);
    setDate(newdate[1] + "," + newdate[2] + "," + newdate[3]);
  }, [el.date]);

  return (
    <div className="flex items-start pb-3 border-b-2 mb-3 border-b-Cgrey justify-start w-full">
      <img
        src="/dashboard/pngLogo.png"
        className="w-[2rem] h-auto mr-[1rem]"
      ></img>
      <div className="flex flex-col items-start justify-between h-full space-y-2">
        <h5 className="text-Cblack font-bold text-base">{el.title}</h5>
        <p className="text-Cblack text-xs">{el.detail}</p>
      </div>
      <div className="w-full text-end text-Cblack text-base">
        <h5>{date}</h5>
      </div>
    </div>
  );
}
