# Giorgio Manufacturas — giorgioclasic.com

Página principal de la marca. Es una página estática (un solo `index.html`) que Vercel publica con Vite.
La tienda, el carrito y los pagos viven en Shopify: **shop.giorgioclasic.com**.

## Estructura
- `index.html` — toda la página: estilos, contenido y scripts.
- `public/img/` — fotos de los zapatos (recortadas, en WebP) y detalles del cuero.
- `public/og-image.jpg` — imagen que aparece al compartir el enlace en WhatsApp o redes.
- `public/robots.txt`, `public/sitemap.xml` — para Google.

## Cambiar precios o productos
En `index.html`, busca `const P=[`. Cada producto tiene su nombre, precio, tallas y el `variant`
(el ID de la variante en Shopify) que usa el botón de compra.

## Probar en tu computador
```
npm install
npm run dev
```

## Publicar
Cada cambio que llega a la rama `main` en GitHub lo publica Vercel automáticamente.
