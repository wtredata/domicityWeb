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
 * Index-7 component
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
  },
  data() {
    return {
      rotateindex: 0,
      rotate: [
        {
          item: 0,
          text: "We love make things amazing and simple",
          name: "zoom",
          duration: 4000
        },
        {
          item: 1,
          text: "Perfect solution for small businesses",
          name: "zoom",
          duration: 4000
        },
        {
          item: 2,
          text: "We help startups launch their products",
          name: "zoom",
          duration: 3500
        }
      ]
    };
  },
  mounted() {
    setInterval(() => {
      this.textRotate();
    }, this.rotate[this.rotateindex].duration);
  },

  methods: {
    /**
     * Text show one after another
     */
    textRotate() {
      setTimeout(() => {
        this.rotateindex += 1;
        if (this.rotateindex >= this.rotate.length) {
          this.rotateindex = 0;
        }
      }, 0);
    }
  }
};
</script>
<template>
  <div>
    <Navbar />

    <div v-scroll-spy>
      <!--START HOME-->

      <section
        class="section section-lg height-100vh"
        id="home"
        :style="{'background-image': 'url(' + require('@/assets/images/bg-home.jpg') + ')', 'background-size': 'cover','background-position': 'center' }"
      >
        <div class="bg-overlay"></div>
        <div class="display-table">
          <div class="display-table-cell">
            <div class="container">
              <div class="row">
                <div class="col-lg-8 offset-lg-2 text-white text-center">
                  <h4 class="home-small-title">Awesome Design</h4>
                  <transition appear :name="rotate[rotateindex].name" mode="out-in">
                    <h1
                      class="home-title text-rotate"
                      :key="rotateindex"
                    >{{ rotate[rotateindex].text }}</h1>
                  </transition>
                  <p
                    class="padding-t-15 home-desc mx-auto"
                  >Maecenas class semper class semper sollicitudin lectus lorem iaculis imperdiet aliquam vehicula tempor auctor curabitur pede aenean ornare.</p>
                  <p class="play-shadow margin-t-30 margin-l-r-auto">
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