class Header {
  handlerOpenShoppingPage() {
    shoppingPage.render();
  }

  render(count) {
    const html = `

          <div class="header-container">
            <div div class="header-counter" >
            <a class="header-link" href="/1_Power/">Электродвигатели</a> 
            <a class="header-link" href="/2_Ventilation_gas/">Вентиляционные и газовые</a>
            <a class="header-link" href="/3_Electronics/">Электроника</a>
            <a class="header-link" href="/4_Mechanical/">Механообработка</a>
            </div>
          </div>

            <div class="header-container2">
                <div >
                    <strong><a class="number" href="tel:+79056132557" rel="nofollow">+7(905)-613-25-57</a></strong>
                </div>  

                <div class="header-counter" onclick="headerPage.handlerOpenShoppingPage();" >
                    🔥 Корзина: ${count}
                </div>
            </div>

            <a href="#" title="Вернуться к началу" class="topbutton">^</a>
        `;
    ROOT_HEADER.innerHTML = html;
  }
}

const headerPage = new Header();
