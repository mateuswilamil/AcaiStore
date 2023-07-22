import { PersonCircle, Cart3 } from "react-bootstrap-icons";
import { CartButton } from "../cart/CartButton";

export const Header = () => {
  return (
    <header className="flex gap-5 p-4 items-center">
      <img
        className="h-8 w-12"
        src="https://acai-store.vercel.app/assets/logo-2f1cb3b1.png"
        alt=""
      />
      <nav className="flex-grow">
        <ul className="flex gap-4 ">
          <li>Início</li>
          <li>Açais</li>
          <li>Bebidas</li>
          <li>Hamburguers</li>
        </ul>
      </nav>
      <div className="flex gap-2">
        <button>
          <PersonCircle />
        </button>
        <CartButton />
      </div>
    </header>
  );
};
