import React, { ReactNode } from "react";
type ILogoListItem = {
  companyIcon: ReactNode;
};

function LogoListItem({ companyIcon }: ILogoListItem) {
  return (
    <div className="flex justify-center items-center group">{companyIcon}</div>
  );
}

export default LogoListItem;
