export type SidebarItemType = {
  img: string;
  name: string;
  arrow: boolean;
};
// ----------------dashboard-------------------
export type BookingCardType = {
  img: string;
  title: string;
  detail: string;
  color: string;
};
export type AnalysisdataType = {
  name: string;
  value: number;
};
export type PieChartAnalysisType = {
  title: string;
  data: AnalysisdataType[];
};
export type DocumentType = {
  title: string;
  detail: string;
  date: string;
};
export type LocationType = {
  id: number;
  location: string;
  lat: number;
  long: number;
};
