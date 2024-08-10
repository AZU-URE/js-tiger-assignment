"use client";
import { useState } from "react";
import PieChartComp from "@/components/analytics/PieCartComp";
import CategoryList from "@/components/analytics/CateoryList";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
export default function Analytics() {
  const milestone = [
    { name: "ARRIVED", value: 20 },
    { name: "BOOKED", value: 10 },
    { name: "DISCHARGED", value: 16 },
    { name: "RETURNED", value: 104 },
    { name: "DELIVERED", value: 10 },
  ];

  const timelines = [
    { name: "ON TIME", value: 200 },
    { name: "LATE", value: 10 },
  ];
  const categoryData = [
    {
      title: "Origin Port",
      data: [
        { name: "NHAVA SHEVA, INDIA", value: 20 },
        { name: "HONG KONG, HONG KONG", value: 10 },
        { name: "YANTIAN, CHINA", value: 16 },
        { name: "DALIAN, CHINA", value: 104 },
        { name: "LONDON GATEWAY PORT, UK", value: 10 },
        { name: "OTHER", value: 50 },
      ],
    },
    {
      title: "Destination Port",
      data: [
        { name: "NHAVA SHEVA, INDIA", value: 20 },
        { name: "HONG KONG, HONG KONG", value: 10 },
        { name: "YANTIAN, CHINA", value: 16 },
        { name: "DALIAN, CHINA", value: 104 },
        { name: "LONDON GATEWAY PORT, UK", value: 10 },
        { name: "OTHER", value: 10 },
      ],
    },
    {
      title: "Destination Port",
      data: [
        { name: "NHAVA SHEVA, INDIA", value: 20 },
        { name: "HONG KONG, HONG KONG", value: 10 },
        { name: "YANTIAN, CHINA", value: 16 },
        { name: "DALIAN, CHINA", value: 104 },
        { name: "LONDON GATEWAY PORT, UK", value: 10 },
        { name: "OTHER", value: 10 },
      ],
    },
    {
      title: "Destination Port",
      data: [
        { name: "NHAVA SHEVA, INDIA", value: 20 },
        { name: "HONG KONG, HONG KONG", value: 10 },
        { name: "YANTIAN, CHINA", value: 16 },
        { name: "DALIAN, CHINA", value: 104 },
        { name: "LONDON GATEWAY PORT, UK", value: 10 },
        { name: "OTHER", value: 10 },
      ],
    },
  ];
  const [shipment, setShipment] = useState(true);
  const [inTrans, setInTrans] = useState(0);
  return (
    <div className="w-full min-h-fit flex flex-col flex-grow items-center justify-start bg-bgClr space-y-6 p-10">
      <div className="w-full flex items-center justify-center ">
        <div className="flex items-center border-b-4 rounded-sm border-Corange mr-[2rem] p-2  ">
          <img src="/sea.png"></img>
          <p className={`ml-2 text-Corange text-sm`}>Sea</p>
        </div>
        <div className="flex items-center p-2 ">
          <img src="/air.png" className=""></img>
          <p className={`mr-[2rem] ml-2 text-sm`}>Air</p>
        </div>
        <div className="flex items-center p-2  ">
          <img src="/truck.png"></img>
          <p className={`ml-2 text-sm`}>Land</p>
        </div>
      </div>
      <div className="w-fit p-3 rounded-[0.5rem] flex items-center justify-between bg-white shadow-lg shadow-[#1010101A] space-x-[2rem]">
        <button
          className={`${
            shipment ? "text-Cbrown bg-Cbrown/20" : "text-Cgrey bg-transparent"
          } rounded-[0.5rem] p-2 text-base font-semibold`}
          onClick={() => setShipment(true)}
        >
          Shipments
        </button>
        <button
          className={`${
            !shipment ? "text-Cbrown bg-Cbrown/20" : "text-Cgrey bg-transparent"
          } rounded-[0.5rem] p-2 text-base font-semibold`}
          onClick={() => setShipment(false)}
        >
          Containers
        </button>
      </div>
      {shipment ? (
        <div className="w-full flex flex-col flex-grow items-center justify-start space-y-6  ">
          <form className="bg-white flex items-center justify-around w-full rounded-[0.5rem] p-3 space-x-5 shadow-lg shadow-[#1010101A] ">
            <div className="w-full space-x-3 flex items-center">
              <label
                htmlFor="type"
                className="font-semibold text-Cblack tracking-wide"
              >
                Type
              </label>
              <select
                name="type"
                className=" p-2 rounded-full border-2 border-Cgrey text-Cgrey w-[80%]"
                defaultValue="select"
              >
                <option value="select" className="hidden">
                  Select
                </option>
                <option value="import" className="text-Cblack">
                  Import
                </option>
              </select>
            </div>
            <div className="w-full space-x-3 flex items-center">
              <label
                htmlFor="date"
                className="font-semibold text-Cblack tracking-wide"
              >
                Date
              </label>
              <select
                name="date"
                className=" p-2 rounded-full border-2 border-Cgrey text-Cgrey w-[80%]"
              >
                <option value="" className="hidden">
                  Select
                </option>
                <option value="import">Import</option>
              </select>
            </div>
            <div className="w-full space-x-3 flex items-center">
              <label
                htmlFor="period"
                className="font-semibold text-Cblack tracking-wide"
              >
                Period
              </label>
              <select
                name="type"
                className=" p-2 rounded-full border-2 border-Cgrey text-Cgrey w-[80%] "
              >
                <option value="" className="hidden">
                  Select
                </option>
                <option value="all" className="text-Cblack">
                  All
                </option>
                <option value="this_week" className="text-Cblack">
                  This Week
                </option>
                <option value="last_week" className="text-Cblack">
                  Last Week
                </option>
                <option value="today" className="text-Cblack">
                  Today
                </option>
              </select>
            </div>
            <div className="flex items-center space-x-3">
              <button className="py-2 px-5 rounded-[2rem] border-2 border-Cmaroon text-Cmaroon font-semibold">
                Cancel
              </button>
              <button className="py-2 px-5 rounded-[2rem] bg-Cmaroon text-white font-semibold">
                Go
              </button>
            </div>
          </form>
          <div className="grid grid-cols-2 gap-5 w-full">
            <div className="h-full bg-white flex flex-col w-full p-5 rounded-[1.5rem] items-center justify-between shadow-lg shadow-[#1010101A]">
              <div className="flex items-center justify-between w-full text-left mb-5">
                <h1 className="font-semibold text-Cblack text-lg ">
                  Milestones
                </h1>
                <div className="p-1 px-3 rounded-md border-[1px] border-Cgrey text-greyHeading text-sm flex items-center ">
                  IN-TRANSIT ({inTrans})
                </div>
              </div>
              <PieChartComp el={milestone} />
            </div>
            <div className="h-full bg-white flex flex-col w-full p-5 rounded-[1.5rem] space-y-3 items-center justify-between shadow-lg shadow-[#1010101A]">
              <div className="flex items-center justify-between w-full text-left mb-5">
                <h1 className="font-semibold text-Cblack text-lg ">
                  Timelines
                </h1>
                <div className="p-1 px-3 rounded-md border-[1px] border-Cgrey text-greyHeading text-sm flex items-center ">
                  IN-TRANSIT ({inTrans})
                </div>
              </div>
              <PieChartComp el={timelines} />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-5 w-full">
            {categoryData.map((el) => (
              <CategoryList {...el} />
            ))}
          </div>
          <div className="bg-white h-[40vh] flex flex-col w-full py-5 px-2 border-r-4 border-r-white rounded-[1.5rem] items-center justify-between shadow-lg shadow-[#1010101A]">
            <div className="w-full flex items-center justify-end">
              <button className="flex items-center justify-center space-x-2 bg-Corange rounded-full py-2 px-5">
                <img src="/download.png"></img>
                <p className="font-semibold text-sm text-white">Download</p>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <p>Nothing Present Here</p>
      )}
    </div>
  );
}
