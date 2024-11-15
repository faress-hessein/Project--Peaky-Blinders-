let Landing = document.querySelector(".Landing");
let video = document.querySelector(".video");
let header = document.querySelector(".header");
let anim = document.querySelector(".anim");

if (video) {
  setTimeout(() => {
    video.classList.add("anim");
  }, 5000);

  setTimeout(() => {
    video.style.display = "none";
  }, 7000);
}

// handel manu bars
let bars = document.querySelector(".bars");
if (bars) {
  bars.onclick = function () {
    document.querySelector(".listBars").classList.toggle("active");
  };
}

// handel All Data Prodact
let arrProdact = [
  {
    id: 1,
    img: "suit-cream (2).jpg",
    name: "suit cream",
    rating: 5,
    price: 244,
  },
  {
    id: 2,
    img: "suit-brown (2).jpg",
    name: "suit brown",
    rating: 5,
    price: 240,
  },
  {
    id: 3,
    img: "suit-tweed (3).jpg",
    name: "suit tweed",
    rating: 5,
    price: 290,
  },
  {
    id: 4,
    img: "william-mens-leather (1).jpg",
    name: "william leather",
    rating: 5,
    price: 29,
  },
  {
    id: 5,
    img: "walter-mens-black (3).jpg",
    name: "walter mens black",
    rating: 5,
    price: 15,
  },
  {
    id: 6,
    img: "antonio-mens-shoes (1).jpg",
    name: "antonio mens shoes",
    rating: 5,
    price: 36,
  },
  {
    id: 7,
    img: "Belt-black (1).PNG",
    name: "Belt black",
    rating: 4,
    price: 10,
  },
  {
    id: 8,
    img: "Belt-brown  (1).PNG",
    name: "Belt brown",
    rating: 5,
    price: 14,
  },
  {
    id: 9,
    img: "classic-watch-with-chain-rose-gold (1).jpg",
    name: "classic watch ",
    rating: 5,
    price: 36,
  },
  {
    id: 10,
    img: "mechanical-pocket-watch (1).jpg",
    name: "mechanical watch",
    rating: 4,
    price: 29,
  },
];

let shopping = document.querySelector(".shopping");
let close = document.querySelector(".close");
let cart = document.querySelector(".cart");

if (cart) {
  // handel open shopping cart
  shopping.onclick = function () {
    cart.style.width = "340px";
  };

  // handel close shopping cart
  close.onclick = function () {
    cart.style.width = "0px";
  };
}

// handel product list
let productList = document.querySelector(".productList");
let cartList = document.querySelector(".cartList");
let checkOutList = [];
let quantity = document.querySelector(".quantity");
let total = document.querySelector(".total");

// handel function add arrProdact to Prodact list
if (productList) {
  function onInit() {
    arrProdact.forEach((item, key) => {
      let div = document.createElement("div");
      div.classList.add("box");

      let star = "";
      for (i = 0; i < item.rating; i++) {
        star += `<i class="fa-solid fa-star"></i>`;
      }

      div.innerHTML = `
      <a href="cart.html">
        <img src="media/product/${item.img}" loading="lazy"/>
        </a>
    <ul>
      ${star}
    </ul>
    <h3>${item.name}</h3>
    <div class="text">
      <p>$ ${item.price}</p>
     <i onclick="addtoCart(${key})" class="fa-solid fa-cart-plus cartShp"></i>
    </div>
    <i class="fa-regular fa-heart heart"></i>
    `;
      productList.appendChild(div);
    });
  }
  onInit();
}

// handell add product to cart
function addtoCart(Id) {
  if (checkOutList[Id] == null) {
    checkOutList[Id] = arrProdact[Id];
    checkOutList[Id].quantity = 1;
  } else {
    checkOutList[Id].quantity += 1;
  }
  relodCart();
}

// handel add prodact to tour cart
function relodCart() {
  cartList.innerHTML = "";
  let count = 0;
  let totalPrice = 0;

  checkOutList.forEach((item, key) => {
    totalPrice += parseInt(item.price * item.quantity);
    count += item.quantity;
    let li = document.createElement("li");
    li.classList.add("box");

    li.innerHTML = `
        <div class="box">
      <img src="media/product/${item.img}"/>
      <h4>${item.name}</h4>
      <p>$ ${item.price * item.quantity}</p>
      <div class="text">
        <button onclick="cheangQuantity(${key},${item.quantity - 1})">-</button>
        <span>${item.quantity}</span>
        <button onclick="cheangQuantity(${key},${item.quantity + 1})">+</button>
      </div>
    </div> `;
    cartList.appendChild(li);
  });
  quantity.innerHTML = count;
  total.innerHTML = `$${totalPrice}`;
}

// handel function cheangQuantity ()
function cheangQuantity(key, quantity) {
  if (quantity == 0) {
    delete checkOutList[key];
  } else {
    checkOutList[key].quantity = quantity;
  }
  relodCart();
}

// Handel Page Card
let card = document.querySelector(".card");
if (card) {
  document.querySelector(".card-number-input").oninput = () => {
    document.querySelector(".card-number-box").innerHTML =
      document.querySelector(".card-number-input").value;
  };

  document.querySelector(".card-holder-input").oninput = () => {
    document.querySelector(".card-name-box").innerHTML =
      document.querySelector(".card-holder-input").value;
  };

  document.querySelector(".month-input").oninput = () => {
    document.querySelector(".card-mm-box").innerHTML =
      document.querySelector(".month-input").value;
  };

  document.querySelector(".year-input").oninput = () => {
    document.querySelector(".card-yy-box").innerHTML =
      document.querySelector(".year-input").value;
  };

  document.querySelector(".card-ccv-input").onmouseenter = () => {
    document.querySelector(".front").style.transform =
      "perspective(1000px) rotateY(-180deg)";
    document.querySelector(".back").style.transform =
      "perspective(1000px) rotateY(0deg)";
  };

  document.querySelector(".card-ccv-input").onmouseleave = () => {
    document.querySelector(".front").style.transform =
      "perspective(1000px) rotateY(0deg)";
    document.querySelector(".back").style.transform =
      "perspective(1000px) rotateY(180deg)";
  };

  document.querySelector(".card-ccv-input").oninput = () => {
    document.querySelector(".ccv-box").innerHTML =
      document.querySelector(".card-ccv-input").value;
  };
}

// handel love prodacte (heart)
let hearts = document.querySelectorAll(".heart");

hearts.forEach((heart) => {
  heart.addEventListener("click", (event) => {
    event.target.classList.toggle("fa-solid");
    event.target.classList.toggle("fa-regular");
    if (event.target.classList.contains("fa-solid")) {
      event.target.style.color = "red";
    } else {
      event.target.style.color = "black";
    }
  });
});
