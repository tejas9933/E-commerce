let productsel = document.querySelector(".row");
let cartitemsel = document.querySelector(".modal-body");
let subtotal=document.querySelector(".subtotal");
let itemsincartel=document.querySelector(".btn-light span")

const products = [{
    tag: 1,
    name: 'Pizza Vegano Delux with Mushrooms',
    desc: 'Broccoli, Mushrooms, Bell pepper, Corn, Onion, Mozzarella, Parmesan',
    price: 112.99,
    stock: 10,
    qty: 0

  },
  {
    tag: 2,
    name: 'Pizza Peperoni with Tomatoes',
    desc: 'Broccoli, Mushrooms, Bell pepper, Corn, Onion, Mozzarella, Parmesan',
    price: 114.99,
    stock: 8,
    qty: 0
  },
  {
    tag: 3,
    name: 'Pizza with Salami and Olives',
    desc: 'Broccoli, Mushrooms, Bell pepper, Corn, Onion, Mozzarella, Parmesan',
    price: 115.99,
    stock: 5,
    qty: 0
  },
  {
    tag: 4,
    name: 'Pizza Quattro Formaggi',
    desc: 'Broccoli, Mushrooms, Bell pepper, Corn, Onion, Mozzarella, Parmesan',
    price: 117.99,
    stock: 6,
    qty: 0
  },
  {
    tag: 5,
    name: 'Pizza Vegano Delux with Mushrooms',
    desc: 'Broccoli, Mushrooms, Bell pepper, Corn, Onion, Mozzarella, Parmesan',
    price: 112.99,
    stock: 10,
    qty: 0

  },
  {
    tag: 6,
    name: 'Pizza Peperoni with Tomatoes',
    desc: 'Broccoli, Mushrooms, Bell pepper, Corn, Onion, Mozzarella, Parmesan',
    price: 114.99,
    stock: 8,
    qty: 0
  },
  {
    tag: 7,
    name: 'Pizza with Salami and Olives',
    desc: 'Broccoli, Mushrooms, Bell pepper, Corn, Onion, Mozzarella, Parmesan',
    price: 115.99,
    stock: 5,
    qty: 0
  },
  {
    tag: 8,
    name: 'Pizza Quattro Formaggi',
    desc: 'Broccoli, Mushrooms, Bell pepper, Corn, Onion, Mozzarella, Parmesan',
    price: 117.99,
    stock: 6,
    qty: 0
  }


];

function displayproducts() {
  products.forEach((product) => {
    productsel.innerHTML += `
        <div class="card h-80">
        <img src="${product.tag}.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${product.name}</h5><br>
          <p>${product.desc}</p>
          <p class="card-text">
            <div class="d-flex gap-2 btn-group" role="group" aria-label="Basic radio toggle button group">
              <input type="radio" class="btn-check" name="bt1" id="btnradio1" autocomplete="off" checked>
              <label class="btn btn-outline-dark" for="btnradio1">Small</label>

              <input type="radio" class="btn-check" name="bt1" id="btnradio2" autocomplete="off">
              <label class="btn btn-outline-dark" for="btnradio2">Medium</label>

              <input type="radio" class="btn-check" name="bt1" id="btnradio3" autocomplete="off">
              <label class="btn btn-outline-dark" for="btnradio3">Large</label>
            </div> <br> <br>
            <div class="btn-group d-flex gap-3" role="group" aria-label="Basic radio toggle button group">
              <input type="radio" class="btn-check" name="bt2" id="btnradio4" autocomplete="off" checked>
              <label class="btn btn-outline-danger" for="btnradio4">Standard</label>

              <input type="radio" class="btn-check" name="bt2" id="btnradio5" autocomplete="off">
              <label class="btn btn-outline-danger" for="btnradio5">Thin</label>
            </div>
          </p> <br>
          <div class="d-flex justify-content-evenly">
            <h3 style="color: blue;">₹${product.price}</h3>
            <button type="button" class=" btn btn-danger" onclick="addtocart(${product.tag})"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                <path
                  d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
              </svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                class="bi bi-cart-plus" viewBox="0 0 16 16">
                <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z" />
                <path
                  d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
              </svg></button>
          </div>
        </div>
      </div>`;
  });
}
displayproducts();
let cart =JSON.parse(localStorage.getItem("CART")) || [];
updatecart();

function addtocart(tag) {
  if(cart.some((item)=>item.tag===tag))
  {
    changeqty("plus",tag);
  }
  else
  {
     const items = products.find((product) => product.tag === tag);
  cart.push({
    ...items,
    qty: 1
  });
 }

  updatecart();
}

function updatecart()
 {
  rendercartitems();
  rendersubtotal();
  localStorage.setItem("CART",JSON.stringify(cart));
}

function rendercartitems() {
  cartitemsel.innerHTML = "";
  cart.forEach((item) => {
    cartitemsel.innerHTML += `<table class="table">
    <tbody>
      <tr><td><img src="${item.tag}.jpg" height="50" width="50" alt=""></td>
      <td><p style="font-size: 13px;">${item.name}</p></td>
      <td>${item.price}</td>
      <td><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-circle" viewBox="0 0 16 16" onclick="changeqty('minus',${item.tag})">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
        <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
      </svg>${item.qty}
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16" onclick="changeqty('plus',${item.tag})">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
      </svg>
    </td>
    <td><button class="btn btn-sm btn-primary" onclick="removeitem(${item.tag})">Remove</button></td>
      </tr>
    </tbody>
    </table>`

  })
}

function changeqty(action, tag) {
  cart=cart.map((item)=>{
    let qty=item.qty;
    if (item.tag===tag) {
      if (action==="minus" && qty>1) 
      {
        qty--;
      } 
      else if (action === "plus" && qty<item.stock) 
      {
        qty++;
      }
    }
    return {
      ...item,
      qty,
    };
  })
  updatecart();
}

function  rendersubtotal()
{
  let totalprice=0,totalitems=0;
  cart.forEach((item)=>{
    totalprice+=item.price*item.qty;
    totalitems+=item.qty;
  });
  subtotal.innerHTML= `Subtotal(${totalitems} items):₹ ${totalprice.toFixed(2)}`
  itemsincartel.innerHTML= totalitems;
}
function removeitem(tag)
{
  cart=cart.filter((item)=>item.tag!==tag);
  updatecart();
}