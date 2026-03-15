import atlasImg from "@/assets/Atlas.jpeg";
import aureoImg from "@/assets/Aureo.jpeg";
import auroraImg from "@/assets/Aurora.jpeg";
import stilletosImg from "@/assets/Stilletos1.png";
import terraImg from "@/assets/Terra.jpeg";
import valienteImg from "@/assets/Valiente.jpeg";
import veronaImg from "@/assets/Verona.jpeg";

export const products = {
  atlas: {
    slug: "atlas",
    name: "Atlas",
    category: "Formal",
    price: "$130.000",
    image: atlasImg,
    buyLink: "/cart/43741050241121:1",
    shopifyLink: "/products/atlas",
    description: [
      "Fuerza y distinción en cada detalle. Atlas es un zapato formal elaborado en cuero 100% natural, combinando acabado pulido y textura granulada para un contraste elegante y moderno.",
      "Su diseño de líneas definidas y punta estructurada proyecta presencia, mientras el ajuste con cordones brinda soporte y comodidad durante toda la jornada.",
      "Perfecto para negocios, eventos formales y ocasiones donde el estilo y la seguridad marcan la diferencia."
    ]
  },

  aureo: {
    slug: "aureo",
    name: "Aureo",
    category: "Formal",
    price: "$140.000",
    image: aureoImg,
    buyLink: "/cart/43741066854497:1",
    shopifyLink: "/products/aureo",
    description: [
      "Distinción clásica con carácter contemporáneo. Aureo está elaborado en cuero 100% natural con acabado pulido y detalles texturizados que realzan su diseño elegante.",
      "Su silueta estilizada y líneas refinadas proyectan presencia, mientras el ajuste de cordones garantiza comodidad y firmeza en cada paso.",
      "Ideal para oficina, reuniones y ocasiones formales donde el estilo marca la diferencia."
    ]
  },

  aurora: {
    slug: "aurora",
    name: "Aurora",
    category: "Tacones",
    price: "$149.000",
    image: auroraImg,
    buyLink: "/cart/43741093822561:1",
    shopifyLink: "/products/aurora",
    description: [
      "Clásica, firme y sofisticada. Aurora es un tacón elaborado en cuero 100% natural con textura suave y acabado refinado que eleva cualquier look.",
      "Su diseño cerrado de líneas limpias estiliza el pie, mientras el tacón ancho aporta altura con estabilidad y comodidad durante todo el día.",
      "Perfecta para oficina, eventos formales y ocasiones donde la elegancia discreta marca presencia."
    ]
  },

  stilletos: {
    slug: "stilletos",
    name: "Stilletos",
    category: "Tacones",
    price: "$139.000",
    image: stilletosImg,
    buyLink: "/cart/43741039624289:1",
    shopifyLink: "/products/stilletos",
    description: [
      "Sofisticación que se nota en cada paso. Nuestros Stilletos están elaborados en cuero 100% natural con textura fina y acabado impecable que realza su estilo refinado.",
      "Su diseño de punta estilizada alarga la silueta del pie, mientras el tacón aporta altura con estabilidad y confort.",
      "Ideales para ocasiones formales, oficina o eventos especiales, combinan presencia, comodidad y durabilidad en un clásico imprescindible del guardarropa."
    ]
  },

  terra: {
    slug: "terra",
    name: "Terra",
    category: "Sneakers",
    price: "$90.000",
    image: terraImg,
    buyLink: "/cart/43741191897185:1",
    shopifyLink: "/products/terra",
    description: [
      "Comodidad urbana con carácter resistente. Terra es un tenis casual elaborado en cuero 100% natural con acabado suave tipo gamuza que aporta un estilo moderno y versátil.",
      "Su diseño de líneas limpias se adapta a cualquier outfit, mientras la suela robusta de alto agarre brinda estabilidad y seguridad en cada paso.",
      "Ideal para el día a día, caminatas largas y looks casuales con personalidad."
    ]
  },

  valiente: {
    slug: "valiente",
    name: "Valiente",
    category: "Tacones",
    price: "$159.000",
    image: valienteImg,
    buyLink: "/cart/43741030350945:1",
    shopifyLink: "/products/valiente",
    description: [
      "Elegancia firme para mujeres que pisan con seguridad. Valiente es un tacón clásico confeccionado en cuero 100% natural, con acabado suave y sofisticado que realza cualquier look.",
      "Su silueta estilizada y punta fina aportan distinción, mientras el tacón ancho brinda estabilidad y comodidad durante todo el día.",
      "Diseñado para acompañarte en jornadas de trabajo, eventos formales o salidas especiales, combinando carácter, estilo y durabilidad en cada paso."
    ]
  },

  verona: {
    slug: "verona",
    name: "Verona",
    category: "Tacones",
    price: "$169.000",
    image: veronaImg,
    buyLink: "/cart/43741056139361:1",
    shopifyLink: "/products/verona",
    description: [
      "Delicadeza y estilo que iluminan cada paso. Verona es un tacón femenino confeccionado en cuero 100% natural con acabado suave y tono neutro sofisticado que combina con todo.",
      "Su punta estilizada aporta un toque refinado, mientras la pulsera al tobillo brinda ajuste seguro y una silueta elegante.",
      "El tacón ancho ofrece estabilidad y comodidad durante todo el día, ideal para eventos, oficina o celebraciones especiales."
    ]
  }
} as const;
