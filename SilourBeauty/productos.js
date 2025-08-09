<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Sílour Beauty</title>
  <link rel="stylesheet" href="styles.css"/>
  <link rel="icon" type="image/png" href="img/favicon.png"/>
</head>
<body>
  <!-- Header -->
  <header>
    <div class="logo">
      <img src="img/logo.png" alt="Sílour Beauty" />
    </div>
    <nav>
      <a href="#">Inicio</a>
      <a href="#catalogo">Catálogo</a>
      <a href="checkout.html">Carrito</a>
    </nav>
  </header>

  <!-- Catálogo -->
  <main id="catalogo">
    <h1>Catálogo</h1>
    <div class="product-grid" id="productGrid">
      <!-- Productos generados por JS -->
    </div>
  </main>

  <script src="productos.js"></script>
  <script>
    const grid = document.getElementById("productGrid");

    products.forEach(product => {
      const finalPrice = calculateFinalPrice(product.price, product.discount);
      const card = document.createElement("div");
      card.classList.add("product-card");

      card.innerHTML = `
        <picture>
          <source srcset="${product.image.replace('img/', 'img_optimized/').replace('.jpg', '.webp')}" type="image/webp">
          <img src="${product.image}" alt="${product.name}" loading="lazy">
        </picture>
        <h2>${product.name}</h2>
        <p class="brand">${product.brand}</p>
        <p class="price">
          <span class="old-price">$${product.price.toLocaleString()}</span>
          <span class="final-price">$${finalPrice.toLocaleString()}</span>
        </p>
        <p class="desc">${product.description}</p>
        <button onclick="addToCart('${product.name}')">Agregar al carrito</button>
        <button onclick="buyNow('${product.name}')">Comprar ahora</button>
      `;
      grid.appendChild(card);
    });

    function addToCart(productName) {
      let cart = JSON.parse(localStorage.getItem('cart')) || [];
      const product = products.find(p => p.name === productName);
      cart.push(product);
      localStorage.setItem('cart', JSON.stringify(cart));
      alert(`${productName} agregado al carrito`);
    }

    function buyNow(productName) {
      localStorage.setItem('cart', JSON.stringify([products.find(p => p.name === productName)]));
      window.location.href = 'checkout.html';
    }
  </script>
</body>
</html>
