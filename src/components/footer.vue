<script>
/**
 * Footer component
 */
export default {
  name: 'Footer'
}
</script>

<template>
  <div>
    <!--START FOOTER-->
    <footer class="footer">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 margin-t-20">
            <h4>EMPRESAS</h4>
            <div class="color-primary margin-t-20">
              <ul class="list-unstyled footer-list">
                <li>
                  <a href="http://domicity.com.co/call-center/">Call center</a>
                </li>
                <li>
                  <a href="http://domicity.com.co/chat-bot/">Chat bot</a>
                </li>
                <li>
                  <a href="http://domicity.com.co/nur/">Número único</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-6 margin-t-20">
            <h4>COMPLEMENTARIOS</h4>
            <div class="color-primary margin-t-20">
              <ul class="list-unstyled footer-list">
                <li>
                  <a href="http://domicity.com.co/marketing/">Marketing</a>
                </li>
                <li>
                  <a href="http://domicity.com.co/encuestas/">Encuestas</a>
                </li>
                <!-- <li>
                  <a href="#">Jobs</a>
                </li>
                <li>
                  <a href="#">Bookmarks</a>
                </li> -->
              </ul>
            </div>
          </div>
          <!-- <div class="col-lg-3 margin-t-20">
            <h4>Support</h4>
            <div class="color-primary margin-t-20">
              <ul class="list-unstyled footer-list">
                <li>
                  <a href>FAQ</a>
                </li>
                <li>
                  <a href>Contact</a>
                </li>
                <li>
                  <a href>Disscusion</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 margin-t-20">
            <h4>Subscribe</h4>
            <div class="color-primary margin-t-20">
              <p>In an ideal world this text wouldn’t exist, a client would acknowledge the importance of having web copy before the design starts.</p>
            </div>
            <form class="form subscribe">
              <input placeholder="Email" class="form-control" required />
              <a href="#" class="submit">
                <i class="pe-7s-paper-plane"></i>
              </a>
            </form>
          </div> -->
        </div>
      </div>
    </footer>
    <!--END FOOTER-->

    <!--START FOOTER ALTER-->
    <div class="footer-alt">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="float-left pull-none">
              <p
                class="copy-rights color-primary mb-3 mb-sm-0"
              >2004 - {{ new Date().getFullYear()}} © DOMICITY</p>
            </div>
            <div class="float-right pull-none">
              <ul class="list-inline social m-0">
                <li class="list-inline-item">
                  <a href="https://www.facebook.com/domicitylaciudad" class="social-icon">
                    <i class="mdi mdi-facebook"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="https://www.instagram.com/domicity.co/?hl=es-la" class="social-icon">
                    <i class="mdi mdi-instagram"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="https://api.whatsapp.com/send?phone=573212366880&text=Bienvenido_a_la_ciudad_de_los_domicilios" class="social-icon">
                    <i class="mdi mdi-whatsapp"></i>
                  </a>
                </li>
                <!-- <li class="list-inline-item">
                  <a href class="social-icon">
                    <i class="mdi mdi-google-plus"></i>
                  </a>
                </li> -->
                <!-- <li class="list-inline-item">
                  <a href class="social-icon">
                    <i class="mdi mdi-dribbble"></i>
                  </a>
                </li> -->
              </ul>
            </div>
            <div class="clearfix"></div>
          </div>
        </div>
      </div>
    </div>
    <!--START FOOTER ALTER-->
  </div>
</template>