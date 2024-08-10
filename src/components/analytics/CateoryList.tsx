import { PieChartAnalysisType } from "@/types/types";
export default function CategoryList(el: PieChartAnalysisType) {
  return (
    <div className="bg-white h-[40vh] flex flex-col w-full py-5 px-2 border-r-4 border-r-white rounded-[1.5rem] items-start justify-between shadow-lg shadow-[#1010101A]">
      <h1 className="font-semibold text-Cblack text-lg w-full text-left mb-5 px-3">
        {el.title}
      </h1>
      <div className="w-full h-full flex flex-col overflow-y-scroll px-3">
        {el.data.map((item) => (
          <div className="flex items-center justify-between border-b-[1px] border-Cgrey p-2 mb-2">
            <p className="font-medium text-xs text-Cblack">{item.name}</p>
            <p className="font-medium text-xs text-Cblack">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
