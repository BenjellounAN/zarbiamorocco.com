# zarbiamorocco.com
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Beauty Store</title>
    <style>
        /* تنسيق عام */
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background: #f8f8f8;
        }

        /* شريط التنقل */
        header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: #0099cc;
            color: white;
            padding: 15px;
        }

        .logo {
            font-size: 22px;
            font-weight: bold;
        }

        .icons {
            display: flex;
            gap: 15px;
            font-size: 20px;
            cursor: pointer;
            position: relative;
        }

        .cart-icon {
            position: relative;
        }

        #cart-count {
            position: absolute;
            top: -5px;
            right: -10px;
            background: red;
            color: white;
            font-size: 12px;
            border-radius: 50%;
            padding: 3px 7px;
        }

        /* قسم العروض مع خلفية صور متغيرة */
        .hero {
            text-align: center;
            padding: 100px 20px;
            color: white;
            position: relative;
            overflow: hidden;
            height: 400px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            transition: background-image 1s ease-in-out;
        }

        /* زر Shop Now */
        .shop-now {
            background: #ff4081;
            color: white;
            padding: 12px 24px;
            border: none;
            cursor: pointer;
            border-radius: 5px;
            font-size: 20px;
            font-weight: bold;
        }

        .shop-now:hover {
            background: #e6006f;
        }

        /* شبكة المنتجات */
        .products {
            padding: 20px;
            text-align: center;
        }

        .product-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
            margin-top: 20px;
        }

        .product {
            background: white;
            padding: 15px;
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .product img {
            width: 100%;
            border-radius: 10px;
        }

        .add-to-cart {
            background: #0099cc;
            color: white;
            border: none;
            padding: 8px 15px;
            cursor: pointer;
            border-radius: 5px;
        }

        /* عربة التسوق */
        .cart-modal {
            position: fixed;
            top: 0;
            right: -300px;
            width: 300px;
            height: 100%;
            background: white;
            box-shadow: -2px 0 5px rgba(0, 0, 0, 0.2);
            transition: right 0.3s ease-in-out;
            padding: 20px;
        }

        .cart-modal.open {
            right: 0;
        }

        .close-cart {
            background: red;
            color: white;
            padding: 10px;
            border: none;
            cursor: pointer;
            border-radius: 5px;
            width: 100%;
        }

        /* الفوتر */
        footer {
            text-align: center;
            padding: 20px;
            background: #0099cc;
            color: white;
            margin-top: 20px;
        }
    </style>
</head>
<body>

<header>
    <div class="logo">Beauty Store</div>
    <div class="icons">
        <div class="cart-icon" onclick="toggleCart()">
            🛒 <span id="cart-count">0</span>
        </div>
    </div>
</header>

<section class="hero">
    <h1>Welcome to Our Beauty Store</h1>
    <button class="shop-now">Shop Now</button>
</section>

<section class="products">
    <h2>Our Products</h2>
    <div class="product-grid">
        <div class="product">
            <img src="https://source.unsplash.com/200x200/?makeup" alt="Product">
            <button class="add-to-cart" onclick="addToCart()">Add to Cart</button>
        </div>
        <div class="product">
            <img src="https://source.unsplash.com/200x200/?skincare" alt="Product">
            <button class="add-to-cart" onclick="addToCart()">Add to Cart</button>
        </div>
    </div>
</section>

<div class="cart-modal" id="cart">
    <button class="close-cart" onclick="toggleCart()">Close</button>
    <h3>Your Cart</h3>
    <p>No items added yet.</p>
</div>

<footer>
    &copy; 2025 Beauty Store. All rights reserved.
</footer>

<script>
    let cartCount = 0;

    function addToCart() {
        cartCount++;
        document.getElementById("cart-count").innerText = cartCount;
    }

    function toggleCart() {
        document.getElementById("cart").classList.toggle("open");
    }

    const images = [
        "https://media.allure.com/photos/636c23d7d869a8e3f2d1c59f/3:4/w_748%2Cc_limit/Bubble%2520Overnight%2520Hydrating%2520Sleep%2520Mask.png",
        "https://media.ulta.com/i/ulta/2630686?w=600&$ProductCardNeutralBGLight$&fmt=auto",
        "https://www.byrdie.com/thmb/GK2xgwI5KvFg4wXMVDwgK2xQnBQ=/400x0/filters:no_upscale():max_bytes(150000):strip_icc()/bubble7-506b184a64f14876a64205b858da33b8.jpg",
        "https://i5.walmartimages.com/seo/Bubble-Skincare-Water-Slide-Hydration-Boosting-Serum-Hyaluronic-Acid-Peptides-1-fl-oz-30ml_8a26f54e-03f3-4de6-b7e7-6f06cc44812e.987b93b8629f2bf985927ad955932b1c.jpeg"
    ];

    let currentIndex = 0;
    const heroSection = document.querySelector(".hero");

    function changeBackground() {
        heroSection.style.backgroundImage = `url('${images[currentIndex]}')`;
        currentIndex = (currentIndex + 1) % images.length;
    }

    setInterval(changeBackground, 2000);
    changeBackground();
</script>

</body>
</html>
