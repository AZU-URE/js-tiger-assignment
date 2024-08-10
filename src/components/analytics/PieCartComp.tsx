import { PieChart } from "@mui/x-charts";
import { colorListChart } from "@/helper/functions";
import { AnalysisdataType } from "@/types/types";
import { colorList } from "@/constants/pieChartAnalysisColor";
export default function PieChartComp(prop: { el: AnalysisdataType[] }) {
  // console.log(prop.el);

  const colors: string[] = colorListChart(prop.el);
  return (
    <div className="flex items-center justify-center w-full h-fit space-x-3">
      <div className="mb-2 w-[10.75rem] h-[10rem] ">
        <PieChart
          tooltip={{ trigger: "none" }}
          skipAnimation
          colors={colors}
          series={[
            {
              data: prop.el,
              innerRadius: 40,
              outerRadius: 70,
              paddingAngle: 0,
              cx: "120%",
              cy: "50%",
            },
          ]}
        />
      </div>
      <div className="flex flex-col items-start justify-normal space-y-2">
        {prop.el.map((item, id) => (
          <ListItem {...item} key={id} />
        ))}
      </div>
    </div>
  );
}

function ListItem(prop: AnalysisdataType) {
  const colorItem = colorList.find((el) => el.key === prop.name);
  return (
    <div className="flex items-center justify-start space-x-2">
      <div
        className={`w-[0.5rem] h-[0.5rem] rounded-full `}
        style={{ backgroundColor: colorItem?.color }}
      />
      <p className="text-[10px] text-Cblack">
        {prop.name} ({prop.value})
      </p>
    </div>
  );
}
