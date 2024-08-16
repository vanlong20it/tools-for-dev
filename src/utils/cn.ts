import { ClassNameValue, twMerge } from "tailwind-merge";

const cn = (...str: ClassNameValue[]) => {
  return twMerge(str);
};

export default cn;
