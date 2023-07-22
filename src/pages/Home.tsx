import { Card } from "../components/Ui/Card";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    title: "4 Açais com ou sem banana",
    description:
      "Isso mesmo!!! 4 açaís 300ml cristal, com ou sem banana e com ou sem granola",
    image: "https://flordejambu.com/wp-content/uploads/2022/05/acai.png",
    price: 85,
    category: "destaques",
  },
  {
    id: "p2",
    title: "Hambúrguer + Batata Frita + Coca 250ml",
    description:
      "Especial Bland Bovino 160g, queijo prato, bacon e maionese da casa + Batata Frita + Coca cola 250 ml.",
    image:
      "https://s2-casavogue.glbimg.com/GRF9KCq-1hiz5uSs-xX9Go_KqIc=/0x0:2048x1365/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_d72fd4bf0af74c0c89d27a5a226dbbf8/internal_photos/bs/2022/p/X/eb4KQdToys327cGqnRGg/receita-ceboloni-bacon.jpg",
    price: 47.5,
    category: "destaques",
  },
  {
    id: "p3",
    title: "Crepe + Mini Salada + Coca 250 ml",
    description:
      "Crepe de filé de frango, queijo mussarela e tomate confit + Mini Salada + Coca cola 250ml.",
    image: "https://pubimg.band.uol.com.br/files/7f1502da3207996519dc.png",
    price: 35,
    category: "destaques",
  },
  {
    id: "p4",
    title: "Ver o Peso",
    description: "Baguete de filé mignon com queijo do reino.",
    image:
      "https://www.receitasdecomida.com.br/wp-content/uploads/2015/06/baquete-de-tomate-seco-e-alcachofra-9304.jpg",
    price: 40,
    category: "Promoções Impedíveis",
  },
  {
    id: "p5",
    title: "Tapioca de Carne Seca",
    description: "Tapioca com carne seca desfiada e creeam chease",
    image:
      "https://www.sabornamesa.com.br/media/k2/items/cache/d95ac1e7d6d78552526cbaae66d68531_XL.jpg",
    price: 29,
    category: "Promoções Impedíveis",
  },
  {
    id: "p6",
    title: "Suco de morando 400ml",
    description: "Suco refrescante de morango ",
    image:
      "https://nutripao.com/wp-content/uploads/2022/08/Suco-de-Laranja-500ml.png",
    price: 14,
    category: "Promoções Impedíveis",
  },
];

export const HomePage = () => {
  return (
    <>
      <section className="mb-6 w-fit mx-auto">
        <h2 className="text-lg sm:text-2xl pt-4 sm:pt-8 pb-5 sm:text-left text-center">
          Mais Populares
        </h2>
        <div className="flex flex-wrap gap-8 justify-center lg:justify-evenly">
          {DUMMY_PRODUCTS.filter(
            (product) => product.category === "destaques"
          ).map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      </section>
      <section className="mb-6 w-fit mx-auto">
        <h2 className="text-lg sm:text-2xl pt-4 sm:pt-8 pb-5 sm:text-left text-center">
          Mais Populares
        </h2>
        <div className="flex flex-wrap gap-8 justify-center lg:justify-evenly">
          {DUMMY_PRODUCTS.filter(
            (product) => product.category === "Promoções Impedíveis"
          ).map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      </section>
    </>
  );
};
