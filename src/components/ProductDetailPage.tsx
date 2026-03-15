import { motion } from "framer-motion";

interface ProductDetailPageProps {
  product: {
    name: string;
    category: string;
    price: string;
    image: string;
    buyLink: string;
    description: string[];
  };
}

const ProductDetailPage = ({ product }: ProductDetailPageProps) => {
  return (
    <section className="section-padding bg-secondary/20 min-h-screen">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-card shadow-luxury overflow-hidden"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="section-label">{product.category}</p>
            <h1 className="section-title mb-4">{product.name}</h1>
            <div className="gold-underline mb-8" />

            <div className="space-y-5 text-muted-foreground text-lg leading-relaxed">
              {product.description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <p className="text-4xl font-display text-foreground mt-10 mb-8">
              {product.price}
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href={product.buyLink}
                className="btn-luxury"
              >
                Comprar
              </a>

              <a
                href="/"
                className="inline-block px-6 py-3 text-sm tracking-[0.25em] uppercase text-muted-foreground hover:text-foreground transition"
              >
                Volver
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailPage;
