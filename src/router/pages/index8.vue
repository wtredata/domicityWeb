<script>
import Navbar from "@/components/navbar";
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
 * Index-8 component
 */
export default {
  components: {
    Navbar,
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
  }
};
</script>
<template>
  <div>
    <Navbar />

    <div v-scroll-spy>
      <!--START HOME-->
      <section
        class="section section-lg home-half"
        id="home"
        :style="{'background-image': 'url(' + require('@/assets/images/img-2.jpg') + ')', 'background-size': 'cover','background-position': 'center' }"
      >
        <div class="bg-overlay"></div>
        <div class="container">
          <div class="row">
            <div class="col-lg-8 offset-lg-2 text-white text-center">
              <h4 class="home-small-title">Awesome Design</h4>
              <h1 class="home-title">We love make things amazing and simple</h1>
              <p
                class="padding-t-15 home-desc mx-auto"
              >Maecenas class semper class semper sollicitudin lectus lorem iaculis imperdiet aliquam vehicula tempor auctor curabitur pede aenean ornare.</p>
              <div class="mt-5">
                <iframe
                  src="//player.vimeo.com/video/69988283?color=f15b72&amp;title=0&amp;byline=0&amp;portrait=0"
                  width="555"
                  height="321"
                  class="frame-border"
                ></iframe>
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
