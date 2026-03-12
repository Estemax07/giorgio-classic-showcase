interface ProductCardProps {
  name: string;
  price: string;
  image: string;
  category: string;
}

const ProductCard = ({ name, price, image, category }: ProductCardProps) => {
  return (
    <div className="group cursor-pointer">
      <div className="relative overflow-hidden bg-secondary mb-4 aspect-square">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-500" />
      </div>
      <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-1 font-body">
        {category}
      </p>
      <h3 className="font-display text-lg font-medium text-foreground mb-1">
        {name}
      </h3>
      <p className="text-accent font-semibold font-body">{price}</p>
    </div>
  );
};

export default ProductCard;
