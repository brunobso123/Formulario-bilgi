import "./styles.css";
import "../../assets/global.css";

import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";

export const LayoutComponents = (props: { children: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }) => {
  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">{props.children}</div>
      </div>
    </div>
  );
};
