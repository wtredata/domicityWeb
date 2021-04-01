<script>
/**
 * Contact component
 */
export default {
  name: "Contact",
};
</script>

<template>
  <!-- CONTACT FORM START-->
  <section class="section" id="contact">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 offset-lg-2">
          <h1 class="section-title text-center">Get In Touch</h1>
          <div class="section-title-border margin-t-20"></div>
          <p
            class="section-subtitle text-muted text-center font-secondary padding-t-30"
          >
            We thrive when coming up with innovative ideas but also understand
            that a smart concept should be supported with measurable results.
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4">
          <div class="mt-4 pt-4">
            <p class="mt-4">
              <span class="h5">Office Address 1:</span>
              <br />
              <span class="text-muted d-block mt-2"
                >4461 Cedar Street Moro, AR 72368</span
              >
            </p>
            <p class="mt-4">
              <span class="h5">Office Address 2:</span>
              <br />
              <span class="text-muted d-block mt-2">
                2467 Swick Hill Street
                <br />New Orleans, LA 70171
              </span>
            </p>
            <p class="mt-4">
              <span class="h5">Working Hours:</span>
              <br />
              <span class="text-muted d-block mt-2">9:00AM To 6:00PM</span>
            </p>
          </div>
        </div>
        <div class="col-lg-8">
          <div class="custom-form mt-4 pt-4">
            <div id="message"></div>
            <b-form @submit.prevent="sendForm()">
              <!-- General -->
              <b-row>
                <b-col lg="4">
                  <b-form-group>
                    <b-form-input
                      name="name"
                      v-model="form.name"
                      placeholder="Tu Nombre*"
                      required
                    ></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col lg="4">
                  <b-form-group>
                    <b-form-input
                      name="surname"
                      v-model="form.surname"
                      placeholder="Tu apellido*"
                      required
                    ></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col lg="4">
                  <b-form-group>
                    <b-form-input
                      name="name_business"
                      v-model="form.name_business"
                      placeholder="Nombre de la empresa*"
                      required
                    ></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col lg="4">
                  <b-form-group>
                    <b-form-input
                      name="phone"
                      v-model="form.phone"
                      placeholder="Tu telefono*"
                      required
                    ></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col lg="4">
                  <b-form-group>
                    <b-form-input
                      name="email"
                      v-model="form.email"
                      placeholder="Tu correo electrónico*"
                      type="email"
                      required
                    ></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col lg="4">
                  <b-form-group>
                    <b-form-input
                      name="direction"
                      v-model="form.direction"
                      placeholder="Tu dirección*"
                      required
                    ></b-form-input>
                  </b-form-group>
                </b-col>
                <!-- <b-col lg="4">
                  <b-form-group>
                    <b-form-input
                      name="city_id"
                      v-model="form.city_id"
                      placeholder="Ciudad*"
                      type="number"
                      required
                    ></b-form-input>
                  </b-form-group>
                </b-col> -->
                <b-col lg="4">
                <b-form-group>
                <template>
                    <i class="text-primary">Departamento</i>
                    <span class="text-danger">*</span>
                  </template>
                  <b-form-select
                    v-model="state_id"
                    :options="states"
                    value-field="id"
                    text-field="name"
                    disabled-field="notEnabled"
                    v-on:change="changeState()"
                    required
                  ></b-form-select>
                </b-form-group>
              </b-col>
              <b-col lg="4">
                <template>
                    <i class="text-primary">Ciudad</i>
                    <span class="text-danger">*</span>
                  </template>
                <b-form-select
                    v-model="form.city_id"
                    :options="cities"
                    value-field="id"
                    text-field="name"
                    disabled-field="notEnabled"
                    :disabled="state_id==null"
                    required
                  ></b-form-select>
              </b-col>
              </b-row>
              <b-row>
                <b-col lg="12">
                  <b-form-group>
                    <b-textarea
                      name="description"
                      v-model="form.description"
                      placeholder="Descripcion*"
                      rows="3"
                      required
                    ></b-textarea>
                  </b-form-group>
                </b-col>
              </b-row>
              <div class="block-content block-content-full text-right">
                <b-button variant="primary" size="sm" type="submit">
                  <i class="fa fa-smile-wink mr-1"></i> Enviar
                </b-button>
              </div>
            </b-form>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- CONTACT FORM END-->
</template>

<script>
import ApiService from "../services/api.service";
import Swal from "sweetalert2/dist/sweetalert2.js";
export default {
  data() {
    return {
      form: {
        name: "",
        surname: "",
        name_business: "",
        phone: "",
        email: "",
        direction: "",
        description: "",
        city_id: null,
      },
      states: [],
      cities: [],
      state_id: null,
    };
  },
  methods: {
    sendForm() {
      console.log(this.form);
      const data = {
        method: "POST",
        url: "solicitude",
        data: this.form,
      };
      ApiService.customRequest2(data)
        .then(() => {
          let form = {
            name: "",
            surname: "",
            name_business: "",
            phone: "",
            email: "",
            direction: "",
            description: "",
            city_id: null,
          };
          Swal.fire({
            icon: "success",
            title: "Enviado",
            text: "Se ha enviado la solicitud",
            showConfirmButton: false,
            timer: 3500
          });
        })
        .catch((error) => {
          Swal.fire({
            icon: "error",
            title: "¡Error!",
            text: "Ocurrió un problema en la comunicación.",
            timer: 3500
          });
          console.log(error);
        });
    },
    getStates() {
      const data = {
        method: "GET",
        url: "department",
      };
      ApiService.customRequest(data)
        .then((response) => {
          console.log(response.data);
          this.states = response.data.data;
          if ( this.states.length >0) {
            this.state_id = this.states[0].id;
            this.changeState();
          }
          console.log(this.states);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    changeState() {
      const data = {
        method: "GET",
        url: "stateCity/" + this.state_id,
      };
      ApiService.customRequest(data)
        .then((response) => {
          this.cities = response.data.data;
          if ( this.cities.length > 0) {
            this.form.city_id = this.cities[0].id;
          }
          console.log(this.cities);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created() {
    this.getStates();
  },
};
</script>