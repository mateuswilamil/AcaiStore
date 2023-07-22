import { Cart3 } from "react-bootstrap-icons";
import { CartTab } from "./CartTab";
import { useState } from "react";

export const CartButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const showCartTab = () => {
    setIsVisible(true);
  };

  const hideCartTab = () => {
    setIsVisible(false);
  };

  return (
    <>
      <button onClick={showCartTab}>
        <Cart3 />
      </button>
      {isVisible && (
        <>
          <div
            className="fixed top-0 right-0 w-full h-full z-20 bg-neutral-900/25"
            onClick={hideCartTab}
          ></div>
          <CartTab onCloseClick={hideCartTab} />
        </>
      )}
    </>
  );
};
