import type * as svgList from "@svgs";

export interface ClassBoxProps {
  title?: string;
  subTitle?: string;
  className?: string;
  classNumber?: string;
  classTime?: string;
  svgName: keyof typeof svgList;
  onSuccess: () => void;
}

interface ClassRoom {
  classNumber: string;
  className: string;
  professor: string;
  section: string;
  grade: string;
  credit: number;
  classTime: string;
}

export interface ClassListItem {
  classRoom: ClassRoom;
}

export type ClassList = ClassListItem[];
