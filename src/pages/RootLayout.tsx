import { Footer } from "../components/Ui/Footer";
import { Header } from "../components/Ui/Header";
import { HomePage } from "./Home";

export const RootLayoutPage = () => {
  return (
    <>
      <Header />
      <HomePage />
      <Footer />
    </>
  );
};
