class Header {
  handlerOpenShoppingPage() {
    shoppingPage.render();
  }

  render(count) {
    const html = `

          <div class="header-container">

          

          
            <div div class="header-counter">

              <a href="https://salesk.ru/1_Power/" class="btn">Электродвигатели</a>
              <a href="https://salesk.ru/2_Ventilation_gas/" class="btn">Вентиляционные и газовые</a>    
              <a href="https://salesk.ru/3_Electronics/" class="btn">Электроника</a>    
              <a href="https://salesk.ru/4_Mechanical/" class="btn">Техника</a> 
              <p>Актуальную стоимость и наличие уточняйте по телефону</p>
              
            </div>
          </div>

            <div class="header-number">
                <div >
                    
                    <strong>
                    <img  src="./img/Whatsapp.png" />
                      <a class="btn-number number"  href="tel:+79056132557" rel="nofollow"> +7(905)-613-25-57
                      </a>
                      <a href="mailto:info@salesk.ru&body=Здравствуйте"> info@salesk.ru </a>
                      
                      
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
