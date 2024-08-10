import { BookingCardType } from "@/types/types";
export default function BookingCard(el: BookingCardType) {
  return (
    <div className="border-[1px] bg-white border-[#ECECEC] flex w-full p-5 rounded-[1.5rem] items-center justify-between shadow-lg shadow-[#1010101A]">
      <div className="flex flex-col items-start justify-between h-full space-y-4">
        <h1 className="text-sm text-Cblack font-medium">{el.title}</h1>
        <p className="text-xl text-Cblack font-bold">{el.detail}</p>
      </div>
      <div
        className={`${el.color} h-full w-[30%] rounded-xl p-5 flex items-center justify-center`}
      >
        <img src={el.img}></img>
      </div>
    </div>
  );
}
