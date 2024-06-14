import React, { ReactNode } from "react";


type ReactProps = {
  children: ReactNode;
  modal: any;
}
export default function NewsDeatailsLayout({ children, modal }: ReactProps) {
  return (
    <>
      {modal}
      {children}
    </>
  );
}
