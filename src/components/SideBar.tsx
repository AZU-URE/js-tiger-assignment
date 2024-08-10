"use client";
import { sideBarList } from "@/constants/sidebar";
import { SidebarItemType } from "@/types/types";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { PathHeading } from "@/helper/functions";
export default function SideBar() {
  const path = usePathname();
  const [active, setActive] = useState(PathHeading(path));
  useEffect(() => {
    const pathName = PathHeading(path) || "";
    // console.log(pathName);
    setActive(pathName);
  }, []);
  // console.log(active);

  const router = useRouter();
  return (
    <div className="w-[20%] h-screen bg-sideBar rounded-r-[2.25rem] text-white flex flex-col items-center justify-between py-[3rem] px-[1rem]">
      <div className="w-full h-full flex flex-col items-start justify-center space-y-1">
        {sideBarList.map((el) => (
          <div
            key={el.name}
            className={`w-full rounded-xl cursor-pointer ${
              active === el.name ? "bg-white/20" : ""
            }`}
            onClick={() => {
              setActive(el.name);
              const route = el.name.toLowerCase().replace(" ", "-");
              router.push(`/${route}`);
            }}
          >
            <SidebarItem el={el} />
          </div>
        ))}
      </div>
      <img src="/sidebar/rightArrow.png"></img>
    </div>
  );
}

function SidebarItem(props: { el: SidebarItemType }) {
  const [close, setClose] = useState(true);

  return (
    <div
      className={`flex items-center justify-between w-full p-4 py-5  `}
      onClick={() => setClose((prev) => !prev)}
    >
      <div className="flex items-center justify-start space-x-3">
        <img src={props.el.img} alt={props.el.name.substring(0, 3)}></img>
        <p className="font-bold">{props.el.name}</p>
      </div>
      {props.el.arrow ? (
        <img
          src="/sidebar/down_arrow.png"
          className={`${close ? "" : "rotate-180"}`}
        ></img>
      ) : null}
    </div>
  );
}
