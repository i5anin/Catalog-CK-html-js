class Header {
  handlerOpenShoppingPage() {
    shoppingPage.render();
  }

  render(count) {
    const html = `

    <nav id="navbar" class="navbar">
      <div class="container">
        <a href="https://salesk.ru/" class="navbar__brand"><img class="logo" width="100" height="100"  src="./img/favicon.png" /></a>
        
        <ul class="navbar__nav hamburger noselect">

          <li class="line"><a class="bold" href="https://salesk.ru/page/motors/#1">Электродвигатели</a></li>
          <li class="line"><a class="bold" href="https://salesk.ru/page/ventilation-gas/#2">Вентиляционные и газовые</a></li>
          <li class="line"><a class="bold" href="https://salesk.ru/page/electronics/#3">Электроника</a></li>
          <li class="line"><a class="bold" href="https://salesk.ru/page/mechanical/#4">Техника</a></li>

          <li class="line"><a>|</a></li>
          <li class="line"><a href="https://salesk.ru/page/info/">О нас</a></li>
          <li class="line"><a>|</a></li>
          <li class="line"><a class="header-counter" onclick="headerPage.handlerOpenShoppingPage();">🔥 Корзина: ${count}</a></li>
        </ul>
      </div>
    </nav>

          <div class="header-container">
          </div>

            <div class="header-number">
                <div >
                    
                    <strong>
                    <img class="whatsapp"  src="./img/Whatsapp.png" />
                      <a class="btn-number number"  href="tel:+79056132557" rel="nofollow"> +7(905)-613-25-57
                      </a>
                      <a class="email" href="mailto:info@salesk.ru&body=Здравствуйте"> info@salesk.ru </a>
                    </strong>
                </div>  
            </div>

            <div class="header-cart">
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
