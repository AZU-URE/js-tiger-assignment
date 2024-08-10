"use client";
import BookingCard from "@/components/dashboard/BookingCard";
import PieChartComp from "@/components/dashboard/PieChartComp";
import DocumentCard from "@/components/dashboard/DocumentCard";
import MapComp from "@/components/dashboard/Map";
import { useState, useEffect } from "react";
export default function page() {
  const Booking = {
    img: "/dashboard/totalB.png",
    title: "Total Bookings",
    detail: "501 Bookings",
    color: "bg-Cmaroon",
  };
  const portAnalysis = [
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
  const milestoneAnalysis = {
    title: "Milestone",
    data: [
      { name: "ARRIVED", value: 20 },
      { name: "BOOKED", value: 10 },
      { name: "DISCHARGED", value: 16 },
      { name: "RETURNED", value: 104 },
      { name: "DELIVERED", value: 10 },
    ],
  };
  const Documents = [
    {
      title: "Document1",
      detail: "lorem ipsum lorem ipsum lorem ipsum",
      date: "2024-02-23 ",
    },
    {
      title: "Document1",
      detail: "lorem ipsum lorem ipsum lorem ipsum",
      date: "2024-02-23 ",
    },
    {
      title: "Document1",
      detail: "lorem ipsum lorem ipsum lorem ipsum",
      date: "2024-02-23 ",
    },
    {
      title: "Document1",
      detail: "lorem ipsum lorem ipsum lorem ipsum",
      date: "2024-02-23 ",
    },
    {
      title: "Document1",
      detail: "lorem ipsum lorem ipsum lorem ipsum",
      date: "2024-02-23 ",
    },
  ];
  const locations = [
    {
      id: 1,
      location: "YANTIAN, CHINA",
      lat: 22.5590503,
      long: 114.2324407,
    },
    {
      id: 2,
      location: "LONG BEACH, CA",
      lat: 33.7701,
      long: -118.1937,
    },
    {
      id: 3,
      location: "SHANGHAI, CHINA",
      lat: 31.2304,
      long: 121.4737,
    },
    {
      id: 4,
      location: "LOS ANGELES, CA",
      lat: 34.0522,
      long: -118.2437,
    },
    {
      id: 5,
      location: "NINGBO, CHINA",
      lat: 29.8683,
      long: 121.544,
    },
  ];
  useEffect(() => {
    const result = async () => {
      try {
        const response = await fetch("/api/getShipment", {
          method: "GET",
        });
        // )  .json();
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    result();
  }, []);
  return (
    <div className="w-full min-h-fit flex flex-col space-y-5 flex-grow items-center justify-start bg-bgClr p-10">
      <div className="grid grid-cols-4 gap-5 w-full ">
        <BookingCard {...Booking} />
        <BookingCard {...Booking} />
        <BookingCard {...Booking} />
        <BookingCard {...Booking} />
      </div>
      <div className="w-full h-[50vh] rounded-[1.5rem] relative bg-white flex items-center justify-center">
        {/* <MapComp {...locations}></MapComp> */}
        <p>Google Map</p>
        <div className="flex flex-col h-fit w-fit items-center justify-center absolute top-0 right-0 p-5 space-y-3">
          <div className="bg-Corange  rounded-[6px] shadow-lg shadow-[#1010101A] p-2">
            <img
              src="/sea.png"
              className="sepia contrast-200 brightness-200"
            ></img>
          </div>
          <div className="bg-white rounded-[6px] shadow-lg shadow-[#1010101A] p-2">
            <img src="/air.png"></img>
          </div>
          <div className="bg-white rounded-[6px] shadow-lg shadow-[#1010101A] p-2">
            <img src="/truck.png"></img>
          </div>
        </div>
      </div>
      <div className="bg-white flex flex-col w-full p-5 rounded-[1.5rem] space-y-5 items-center justify-between shadow-lg shadow-[#1010101A]">
        <div className="w-full flex items-center justify-center relative">
          <p className="text-Cblack font-bold text-lg absolute left-0">
            Pie Chart Analysis
          </p>
          <div className="flex items-center border-b-4 rounded-sm border-Corange mr-[2rem] p-2  ">
            <img src="/sea.png"></img>
            <p className={`ml-2 text-Corange`}>Sea</p>
          </div>
          <div className="flex items-center p-2 ">
            <img src="/air.png" className=""></img>
            <p className={`mr-[2rem] ml-2`}>Air</p>
          </div>
          <div className="flex items-center p-2  ">
            <img src="/truck.png"></img>
            <p className={`ml-2`}>Land</p>
          </div>
        </div>
        <div className="grid grid-cols-5 gap-[3rem] w-full">
          {portAnalysis.map((el, id) => (
            <PieChartComp key={id} {...el} />
          ))}
          <PieChartComp {...milestoneAnalysis} />
        </div>
      </div>
      <div className="w-full grid grid-cols-2 gap-5">
        <div className="bg-white h-[50vh] flex flex-col w-full py-5 px-2 border-r-4 border-r-white rounded-[1.5rem] items-center justify-between shadow-lg shadow-[#1010101A]">
          <h1 className="font-semibold text-Cblack text-lg w-full text-left mb-5 px-3">
            Latest Documents
          </h1>
          <div className="w-full h-full flex flex-col overflow-y-scroll px-3">
            {Documents.map((el) => (
              <DocumentCard {...el} />
            ))}
          </div>
        </div>
        <div className="h-full bg-white flex flex-col w-full p-5 rounded-[1.5rem] items-center justify-between shadow-lg shadow-[#1010101A]">
          <h1 className="font-semibold text-Cblack text-lg w-full text-left mb-5">
            Announcements
          </h1>
          <p className="font-medium text-Cblack text-base w-full text-left">
            Soon you will see latest announcements/new in this section.
          </p>
          <div className="flex flex-grow items-center justify-center w-full">
            <img
              src="/dashboard/announcement.png"
              className="w-[20%] h-auto"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}
