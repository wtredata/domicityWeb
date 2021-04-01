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
 * Index-4 component
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
          <i class="mdi mdi-alien"></i>Hiric
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
                v-scroll-to="{ el:'#blog',  offset: -70 }"
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
                <button type="button" class="btn btn-custom navbar-btn btn-rounded">Try it Free</button>
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
        class="section bg-home home-half home-registration"
        id="home"
        :style="{'background-image': 'url(' + require('@/assets/images/bg-home.jpg') + ')', 'background-size': 'cover','background-position': 'center' }"
      >
        <div class="bg-overlay"></div>
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-7 text-white text-left">
              <h4 class="home-small-title">Awesome Design</h4>
              <h1 class="home-title">We love make things amazing and simple</h1>
              <p
                class="padding-t-15 home-desc"
              >Maecenas class semper class semper sollicitudin lectus lorem iaculis imperdiet aliquam vehicula tempor auctor curabitur pede aenean ornare.</p>
              <a href="#" class="btn btn-custom margin-t-30">
                Get Started
                <i class="mdi mdi-arrow-right"></i>
              </a>
            </div>
            <div class="col-lg-4 offset-lg-1 mt-5 mt-lg-0">
              <div class="home-registration-form bg-white">
                <h4 class="form-heading text-center mt-2">Get 30 day FREE Trial</h4>
                <form class="registration-form" id="registration-form">
                  <input
                    type="text"
                    id="exampleInputName1"
                    class="form-control registration-input-box"
                    placeholder="Name"
                  />
                  <input
                    type="email"
                    id="exampleInputEmail1"
                    class="form-control registration-input-box"
                    placeholder="Email"
                  />
                  <textarea
                    class="form-control registration-textarea-box"
                    rows="4"
                    placeholder="Message"
                  ></textarea>
                  <button class="btn btn-custom home-btn-width">Send Detail</button>
                </form>
              </div>
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
