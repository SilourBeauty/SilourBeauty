README - SÍLOUR BEAUTY
======================

1. ESTRUCTURA DE ARCHIVOS
-------------------------
/index.html             → Página principal (catálogo)
/checkout.html          → Página de pago con Wompi
/productos.js           → Lista de productos
/styles.css             → Estilos CSS
/img/                   → Imágenes originales (JPG/PNG) + logo + favicon
/img_optimized/         → Versiones WebP optimizadas
/iconos/                → Iconos de métodos de pago

2. NOMBRADO DE IMÁGENES
-----------------------
Todas las imágenes deben estar en minúsculas y con guiones:
  temptation-men.jpg
  temptation-woman.jpg
  cielo-en-rosa.jpg
  osadia-men.jpg
  dendur.jpg
  ohm-black.jpg
  all-black-cyzone.jpg
  mystic-star.jpg
  exfoliante-facial.jpg
  crema-triple-accion-esika.jpg

3. OPTIMIZACIÓN DE IMÁGENES
---------------------------
Genera WebP de cada imagen original y guárdalas en /img_optimized/ con el mismo nombre pero extensión .webp
Ejemplo: temptation-men.webp

Puedes usar: https://convertio.co/es/jpg-webp/

4. SUBIR AL HOSTING
-------------------
- Hosting recomendado: Hostinger, SiteGround o cualquier que soporte HTML estático.
- Sube todo el contenido de la carpeta del proyecto a la carpeta raíz del hosting (public_html).
- Asegúrate de mantener la estructura de carpetas.

5. CONECTAR DOMINIO
-------------------
- Ve al panel de tu proveedor de dominio.
- Cambia los registros DNS para apuntar al hosting.
- Ejemplo: 
  Tipo A → IP del servidor
  Tipo CNAME → tu dominio apuntando a www.

6. ACTIVAR HTTPS
----------------
- Usa el SSL gratuito Let’s Encrypt desde el panel de tu hosting.
- También puedes activar Cloudflare para seguridad extra.

7. WOMPI - CAMBIAR A PRODUCCIÓN
-------------------------------
Actualmente el checkout está en modo PRUEBAS con:
  const WOMPI_PUBLIC_KEY = "pub_test_key_here";

Para cobrar de verdad:
  1. Crea cuenta en Wompi: https://comercios.wompi.co/
  2. Ve a "Configuración" → "Llaves API".
  3. Copia tu Public Key de PRODUCCIÓN.
  4. Reemplaza en checkout.html:
     const WOMPI_PUBLIC_KEY = "pub_production_tuclave";
  5. Guarda y sube al hosting.

8. PRUEBA DE COMPRA
-------------------
- Abre index.html en tu navegador.
- Agrega productos al carrito.
- Ve a checkout.html.
- Paga en modo pruebas para verificar el flujo.

