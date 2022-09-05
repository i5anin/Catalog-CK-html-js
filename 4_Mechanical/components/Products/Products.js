class Products {
  constructor() {
    this.classNameActive = "products-element__btn_active";
    this.labelAdd = "Добавить в корзину";
    this.labelRemove = "Удалить из корзины";
  }

  handlerSetLocatStorage(element, id) {
    const { pushProduct, products } = localStorageUtil.putProducts(id);

    if (pushProduct) {
      element.classList.add(this.classNameActive);
      element.innerText = this.labelRemove;
    } else {
      element.classList.remove(this.classNameActive);
      element.innerText = this.labelAdd;
    }

    headerPage.render(products.length);
  }

  render() {
    const productsStore = localStorageUtil.getProducts();
    let htmlCatalog = "";

    CATALOG.forEach(({ id, name, price, img }) => {
      let activeClass = "";
      let activeText = "";

      if (productsStore.indexOf(id) === -1) {
        activeText = this.labelAdd;
      } else {
        activeClass = " " + this.classNameActive;
        activeText = this.labelRemove;
      }

      htmlCatalog += `
                <li class="products-element">
                    <span class="products-element__name">${name} </span>
                    
                    <p>
                      <a target = "_blank" href="https://aliexpress.ru/item/${id
                        .split("ID:")
                        .join(
                          ""
                        )}.html"><img class="products-element__img" src="${img}" />
                      </a>
                    </p>

                    <span class="products-element__price">
                        ⚡️ ${price.toLocaleString()} ₽
                    </span>

                    <p>
                      <a target = "_blank" href="https://aliexpress.ru/item/${id
                        .split("ID:")
                        .join("")}.html"> AliExpress
                      </a>
                    </p>

                    <button class="products-element__btn${activeClass}" onclick="productsPage.handlerSetLocatStorage(this, '${id}');">
                        ${activeText}
                    </button>
                </li>
            `;
    });

    const html = `
            <ul class="products-container">
                ${htmlCatalog}
            </ul>
        `;

    ROOT_PRODUCTS.innerHTML = html;
  }
}

const productsPage = new Products();
