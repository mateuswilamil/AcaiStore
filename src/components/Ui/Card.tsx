export const Card = (props: any) => {
  return (
    <div className="border flex flex-col gap-8 shadow-sm rounded-xl border-slate-100 min-h-[378px] max-w-[398px] md:min-w-[398px] hover:scale-[102%] cursor-pointer">
      <img
        className="h-44 w-full object-cover rounded-t-xl"
        src={props.product.image}
        alt={props.product.title}
      />
      <div className="felx felx-col flex-grow">
        <div className="px-5 mb-5 gwor">
          <h3 className="text-lg mb-3">{props.product.title}</h3>
          <p className="text-sm mb-3">{props.product.description}</p>
        </div>
      </div>
      <p className="text-green-600 px-5 pb-3">R${props.product.price}</p>
    </div>
  );
};
