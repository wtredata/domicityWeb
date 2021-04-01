<script>
import Features from "@/components/features";
import Services from "@/components/services";
import About from "@/components/about";
import Pricing from "@/components/pricing";
import Testimonial from "@/components/testimonial";
import GetStarted from "@/components/getstarted";
import Blog from "@/components/blog";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Switcher from "@/components/switcher";

/**
 * Index-1 component
 */
export default {
  components: {
    Features,
    Services,
    About,
    Pricing,
    Testimonial,
    GetStarted,
    Blog,
    Contact,
    Footer,
    Switcher
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
          <i class="mdi mdi-alien"></i>Domicity
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
              >Home</a>
            </li>
            <li class="nav-item">
              <a
                v-scroll-to="{ el:'#features', offset: -5  }"
                class="nav-link"
                data-scroll-spy-id="features"
                href="javascript: void(0);"
              >Features</a>
            </li>
            <li class="nav-item">
              <a
                v-scroll-to="{ el:'#services', offset: -5 }"
                class="nav-link"
                data-scroll-spy-id="services"
                href="javascript: void(0);"
              >Services</a>
            </li>
            <li class="nav-item">
              <a
                v-scroll-to="{ el:'#about', offset: -5 }"
                class="nav-link"
                data-scroll-spy-id="about"
                href="javascript: void(0);"
              >About</a>
            </li>
            <li class="nav-item">
              <a
                v-scroll-to="{ el:'#pricing', offset: -5 }"
                class="nav-link"
                data-scroll-spy-id="pricing"
                href="javascript: void(0);"
              >Pricing</a>
            </li>
            <li class="nav-item">
              <a
                v-scroll-to="{ el:'#blog'}"
                class="nav-link"
                data-scroll-spy-id="blog"
                href="javascript: void(0);"
              >Blog</a>
            </li>
            <li class="nav-item">
              <a
                v-scroll-to="{ el:'#contact' }"
                class="nav-link"
                data-scroll-spy-id="contact"
                href="javascript: void(0);"
              >Contact</a>
            </li>
          </ul>
          <div class="nav-button ml-auto">
            <ul class="nav navbar-nav navbar-right">
              <li>
                  <button type="button" class="btn btn-custom navbar-btn btn-rounded">Try it Free</button><!-- @click="$router.push('login')" -->
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
        style="background-size: cover;background-position: center;"
        :style="{'background': 'url(' + require('@/assets/images/bg-home.jpg') + ')'}"
      >
        <div class="bg-overlay"></div>
        <div class="container">
          <div class="row">
            <div class="col-lg-8 offset-lg-2 text-white text-center">
              <h4 class="home-small-title">Awesome Design</h4>
              <h1 class="home-title">We love make things amazing and simple</h1>
              <p class="padding-t-15 home-desc mx-auto">
                Maecenas class semper class semper sollicitudin lectus lorem
                iaculis imperdiet aliquam vehicula tempor auctor curabitur pede
                aenean ornare.
              </p>
              <p class="play-shadow margin-l-r-auto">
                <a v-b-modal.modal class="play-btn video-play-icon">
                  <i class="mdi mdi-play text-center"></i>
                </a>
                <b-modal id="modal" hide-footer size="lg" centered header-close-variant="white">
                  <youtube video-id="lG0Ys-2d4MA" ref="youtube" width="900" height="500"></youtube>
                </b-modal>
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
              <div class="client-images my-3 my-md-0">
                <img
                  src="@/assets/images/clients/1.png"
                  alt="logo-img"
                  class="mx-auto img-fluid d-block"
                />
              </div>
            </div>

            <div class="col-md-3">
              <div class="client-images my-3 my-md-0">
                <img
                  src="@/assets/images/clients/2.png"
                  alt="logo-img"
                  class="mx-auto img-fluid d-block"
                />
              </div>
            </div>

            <div class="col-md-3">
              <div class="client-images my-3 my-md-0">
                <img
                  src="@/assets/images/clients/3.png"
                  alt="logo-img"
                  class="mx-auto img-fluid d-block"
                />
              </div>
            </div>

            <div class="col-md-3">
              <div class="client-images my-3 my-md-0">
                <img
                  src="@/assets/images/clients/4.png"
                  alt="logo-img"
                  class="mx-auto img-fluid d-block"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Features />
      <Services />
      <About />
      <Pricing />
      <Testimonial />
      <GetStarted />
      <Blog />
      <Contact />
      <Footer />
      <Switcher />
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