export const CartItem = () => {
  return (
    <div className="py-4 border-t">
      <div className="flex justify-between my-2">
        <p>1x 4 Açais com ou sem banana</p>
        <p className="whitespace-nowrap">R$85</p>
      </div>
      <p className="text-sm text-light-gray my-2">
        1x Brasil com bananas e morangos, 1x Leite em Pó,
      </p>
      <div className="flex gap-4">
        <button className="text-primary font-semibold text-sm">Editar</button>
        <button className="text-light-gray text-sm">Remover</button>
      </div>
    </div>
  );
};
