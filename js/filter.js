window.addEventListener("load", function () {
  fetch("fake.json").then(async (res) => {
    const data = await res.json();

    let container = document.createElement("div");
    container.className = "container";

    document.getElementById("cards").appendChild(container);

    displayProductsItems(data);
    function displayProductsItems(data) {
      let displayProducts = data.map(function (item) {
        return `
          <div class="card card-body mb-3">
          <div class ="row">
           <div class="col-md-4">
           <img src="${item.img}" class="img-thumbnail mb-2" style="height: 250px">
           </div>
           <div class="col-md-8">
            <ul class="list-group">
             <h3 class="list-group-item text-center ">${item.title}</h3>
             <p class="list-group-item ">${item.desc}</p>
             <p class="list-group-item text-center"> Цена ${item.price} сом</p>
            </ul>
           </div>
          </div>

            </div>
          </div>
        `;
      });

      displayProducts = displayProducts.join("");
      container.innerHTML = displayProducts;
    }

    // data.forEach(show);
    // function show(elem) {
    //   let cards = document.createElement("div");
    //   cards.className = "card card-body mb-3";
    //   container.appendChild(cards);

    //   let left = document.createElement("div");
    //   left.className = "row";
    //   cards.appendChild(left);

    //   let divleft = document.createElement("div");
    //   divleft.className = "col-md-4";
    //   left.appendChild(divleft);

    //   let img = document.createElement("img");
    //   img.src = elem.img;
    //   img.className = "img-thumbnail mb-2";
    //   img.style = "height: 250px";
    //   divleft.appendChild(img);

    //   let divriht = document.createElement("div");
    //   divriht.className = "col-md-8";
    //   left.appendChild(divriht);

    //   let ul = document.createElement("ul");
    //   ul.className = "list-group";
    //   divriht.appendChild(ul);

    //   let title = document.createElement("h3");
    //   title.innerText = elem.title;
    //   title.className = "list-group-item text-center ";
    //   ul.appendChild(title);

    //   let desc = document.createElement("p");
    //   desc.className = "list-group-item ";
    //   desc.innerText = elem.desc;
    //   ul.appendChild(desc);

    //   let price = document.createElement("p");
    //   price.innerText = `Цена ` + elem.price + ` сом`;
    //   price.className = "list-group-item text-center";
    //   ul.appendChild(price);
    // }

    //document.getElementById("cards").appendChild(container);

    const filterBtns = document.querySelectorAll(".btn");

    filterBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const category = e.currentTarget.dataset["filter"];
        const productCategory = data.filter((item) => {
          if (item.category === category) {
            return item;
          }
        });

        if (category === "all") {
          displayProductsItems(data);
        } else {
          displayProductsItems(productCategory);
        }
      });
    });
  });
});
