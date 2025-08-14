import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export interface Ipost {
  title: string;
  description: string;
  images: string[];
  location: string;
  city: string;
  dateFound: string;
  status: string;
  isReported: boolean;
  reportCount: number;
  category: string;
  user: string;
  questions: string[];
  _id: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
