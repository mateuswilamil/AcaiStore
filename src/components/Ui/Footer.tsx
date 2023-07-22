import { Facebook, Twitter, Instagram, Youtube } from "react-bootstrap-icons";

export const Footer = () => {
  return (
    <footer className="flex gap-5 items-center p-4">
      <img
        className="h-8 w-12"
        src="https://acai-store.vercel.app/assets/logo-2f1cb3b1.png"
        alt=""
      />
      <p className="w-1/2 text-xs text-zinc-500">
        © Copyright 2023 - Açai - Todos os direitos reservados Açai com Agência
        de Restaurantes Online S.A. CNPJ 16.883.256/0001-91 / Avenida dos
        Motoristas, nº 122, Vila Maria, Niteroi/Rj - CEP 08.062-902
      </p>
      <div className="flex-grow text-center">
        <h2>Açai</h2>
        <ul>
          <li>Site Institucional</li>
          <li>Fale Conosco</li>
          <li>Carreiras</li>
        </ul>
      </div>
      <div>
        <h2>Social</h2>
        <ul className="flex gap-2">
          <li>
            <Facebook />
          </li>
          <li>
            <Twitter />
          </li>
          <li>
            <Instagram />
          </li>
          <li>
            <Youtube />
          </li>
        </ul>
      </div>
    </footer>
  );
};
