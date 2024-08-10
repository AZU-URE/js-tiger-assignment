import { AnalysisdataType } from "@/types/types";
import { colorList } from "@/constants/pieChartAnalysisColor";
export function PathHeading(path: string) {
  const pathname = (path.length > 1 && path.split("/")) || [];
  const pathArr = pathname[1].split("-");
  //   console.log(pathArr);
  var ans = "";
  pathArr.map((el) => {
    ans += el[0].toUpperCase() + el.substring(1, el.length) + " ";
  });
  return ans.substring(0, ans.length - 1);
}

export function colorListChart(arr: AnalysisdataType[]) {
  // console.log(arr);

  const colors: string[] = [];
  arr.forEach((element) => {
    const clr = colorList.find((item) => item.key === element.name) || {
      key: "OTHER",
      color: "rgb(133, 101, 98)",
    };

    colors.push(clr?.color);
    // console.log(element);
  });
  return colors;
}
