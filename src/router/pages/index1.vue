<script>
import Features from "@/components/features";
import Services from "@/components/services";
import Pricing from "@/components/pricing";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

/**
 * Index-1 component
 */
export default {
  components: {
    Features,
    Services,
    Pricing,
    Contact,
    Footer
  },
  methods: {
    /**
     * Toggle menu
     */
    toggleMenu() {
      document.getElementById("navbarCollapse").classList.toggle("show");
    }
  }
};
</script>
<template>
  <div>
    <!-- STRAT NAVBAR -->
    <nav
      class="navbar navbar-expand-lg fixed-top navbar-white navbar-custom sticky sticky-dark"
      id="navbar"
    >
      <div class="container">
        <!-- LOGO -->
        <a class="navbar-brand logo text-uppercase" href="/">
          <img src="../../assets/images/logo-1.png" width="70">
        </a>

        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
          @click="toggleMenu()"
        >
          <i class="mdi mdi-menu"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul
            class="navbar-nav navbar-center"
            id="mySidenav"
            v-scroll-spy-active="{class: 'active'}"
          >
            <li class="nav-item">
              <a
                v-scroll-to="{ el:'#home' }"
                class="nav-link"
                data-scroll-spy-id="home"
                href="javascript: void(0);"
              >Inicio</a>
            </li>
            <li class="nav-item">
              <a
                v-scroll-to="{ el:'#features', offset: -5  }"
                class="nav-link"
                data-scroll-spy-id="features"
                href="javascript: void(0);"
              >¿Quiénes somos?</a>
            </li>
            <li class="nav-item">
              <a
                v-scroll-to="{ el:'#services', offset: -5 }"
                class="nav-link"
                data-scroll-spy-id="services"
                href="javascript: void(0);"
              >Servicios</a>
            </li>
            <!-- <li class="nav-item">
              <a
                v-scroll-to="{ el:'#about', offset: -5 }"
                class="nav-link"
                data-scroll-spy-id="about"
                href="javascript: void(0);"
              >Pagos</a>
            </li> -->
            <li class="nav-item">
              <a
                v-scroll-to="{ el:'#pricing', offset: -5 }"
                class="nav-link"
                data-scroll-spy-id="pricing"
                href="javascript: void(0);"
              >Servicio al cliente</a>
            </li>
            <!-- <li class="nav-item">
              <a
                v-scroll-to="{ el:'#blog'}"
                class="nav-link"
                data-scroll-spy-id="blog"
                href="javascript: void(0);"
              >Plan de marketing</a>
            </li> -->
           <!--  <li class="nav-item">
              <a
                v-scroll-to="{ el:'#contact' }"
                class="nav-link"
                data-scroll-spy-id="contact"
                href="javascript: void(0);"
              >Aliado</a>
            </li> -->
          </ul>
          <div class="nav-button ml-auto">
            <ul class="nav navbar-nav navbar-right">
              <li>
                  <button v-scroll-to="{ el:'#contact' }"
                class="btn btn-custom navbar-btn btn-rounded"
                data-scroll-spy-id="contact"
                href="javascript: void(0);">Ser Aliado</button><!-- @click="$router.push('login')" -->
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    <!-- END NAVBAR -->
    <div v-scroll-spy>
      <!--START HOME-->
      <section
        class="section bg-home home-half"
        id="home"
        style="background-repeat: no-repeat !important; background-size: cover;background-position: center;"
        :style="{'background': 'url(' + require('@/assets/images/banner.png') + ')'}"
      >
        <div class="container">
          <div class="row">
            <div class="col-lg-8 text-white text-left">
              <h6 class="home-title offset-lg-1">¿Qué es DOMICITY?</h6>
              <p class="padding-t-15 home-desc mx-auto text-white">
                Es una plataforma de domicilios con énfasis en restaurantes, <br>
                productos alimenticios y más.
              </p>
            </div>
          </div>
        </div>
      </section>
      <!--END HOME-->

      <section class="section-sm bg-light">
        <div class="container">
          <div class="row">
            <div class="col-md-3">
              <div class="client-images my-3 my-md-0 align-center">
                <img
                  src="@/assets/images/icons/icon-marketing.png"
                  class="mx-auto img-fluid d-block"
                />
                Marketing
              </div>
            </div>

            <div class="col-md-3">
              <div class="client-images my-3 my-md-0 align-center">
                <img
                  src="@/assets/images/icons/icon-chat-bot.png"
                  class="mx-auto img-fluid d-block"
                />
                Chat Bot
              </div>
            </div>

            <div class="col-md-3">
              <div class="client-images my-3 my-md-0 align-center">
                <img
                  src="@/assets/images/icons/icon-call-center.png"
                  class="mx-auto img-fluid d-block"
                />
                Call center
              </div>
            </div>

            <div class="col-md-3">
              <div class="client-images my-3 my-md-0 align-center">
                <img
                  src="@/assets/images/icons/icon-app.png"
                  class="mx-auto img-fluid d-block"
                />
                Aplicación móvil
              </div>
            </div>
          </div>
        </div>
      </section>

      <Features />
      <Services />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  </div>
</template>

<style scoped>
::v-deep .modal-content {
  background-color: #000000;
  color: white;
  background: none;
  border: none;
}
::v-deep .modal-header {
  border: none;
}
::v-deep .modal-backdrop {
  opacity: 0.5;
}
</style>