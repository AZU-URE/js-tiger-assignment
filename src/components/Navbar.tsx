"use client";
import { usePathname } from "next/navigation";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import { Avatar } from "@mui/material";
import { PathHeading } from "@/helper/functions";
export default function Navbar() {
  const path = usePathname();
  const pathName = PathHeading(path);

  // console.log(pathName);

  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      backgroundColor: "#44b700",
      color: "#44b700",
      "&::after": {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        border: "1px solid white",
        content: '""',
      },
    },
  }));

  return (
    <div className="w-full px-[3rem] py-[0.5rem] border-b-2 border-b-Cgrey flex items-center justify-between bg-bgClr">
      <p className="text-Cblack font-semibold text-2xl">{pathName}</p>
      <div className="flex items-center justify-center">
        <Avatar className="relative bg-bgClr mr-3">
          <div className="w-[12px] rounded-full h-[12px] bg-Corange top-[0.5rem] right-[0.5rem] absolute border-[2px] border-white"></div>
          <NotificationsNoneIcon className="text-[#616C76] text-2xl" />
        </Avatar>
        <div className="flex items-center justify-around h-full space-x-3 mr-6">
          <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            variant="dot"
          >
            <Avatar
              alt="User"
              src="/navbar/user.png"
              className="border-2 border-white"
            />
          </StyledBadge>
          <div className="flex flex-col items-start justify-between h-full">
            <p className="font-semibold text-Cblack">Edward William</p>
            <p className="font-semibold text-Cblack/40 text-xs">Admin</p>
          </div>
        </div>
        <img src="/navbar/arrow_down.png" className=""></img>
      </div>
    </div>
  );
}
