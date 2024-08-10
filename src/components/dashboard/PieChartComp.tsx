"use client";
import { PieChartAnalysisType } from "@/types/types";
import { colorList } from "@/constants/pieChartAnalysisColor";
import { PieChart } from "@mui/x-charts";
import { colorListChart } from "@/helper/functions";
export default function PieChartComp(el: PieChartAnalysisType) {
  var colors: string[] = colorListChart(el.data);

  return (
    <div className="flex flex-col items-start justify-start ">
      <div className="w-full flex items-center justify-center">
        <div className="mb-2 w-[10.75rem] h-[10rem] ">
          <PieChart
            tooltip={{ trigger: "none" }}
            skipAnimation
            colors={colors}
            series={[
              {
                data: el.data,
                innerRadius: 40,
                outerRadius: 70,
                paddingAngle: 0,
                // cornerRadius: -2,
                // startAngle: 359,
                // endAngle: -1,
                cx: "120%",
                cy: "50%",
              },
            ]}
          />
        </div>
      </div>

      <div className="w-full mb-4">
        <h1 className="text-center text-sm font-medium ">{el.title}</h1>
      </div>
      <div className="flex flex-col items-start justify-normal space-y-2">
        {el.data.map((item, id) => (
          <ListItem {...item} key={id} />
        ))}
      </div>
    </div>
  );
}

function ListItem(prop: { name: string }) {
  const colorItem = colorList.find((el) => el.key === prop.name);
  return (
    <div className="flex items-center justify-start space-x-2">
      <div
        className={`w-[0.5rem] h-[0.5rem] rounded-full `}
        style={{ backgroundColor: colorItem?.color }}
      />
      <p className="text-[10px] text-Cblack">{prop.name}</p>
    </div>
  );
}
