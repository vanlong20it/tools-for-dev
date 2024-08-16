import React, { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const PageTitle: FC<Props> = ({ children }) => {
  return <h1 className="text-3xl font-bold my-4">{children}</h1>;
};

export default PageTitle;
