<script>
/**
 * Features component
 */
export default {
  name: 'Features'
};
</script>

<template>
  <!--START FEATURES-->
  <section class="section" id="features">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-5 order-2 order-lg-1">
          <div class="features-box mt-5 mt-lg-0">
            <h3>Somos una compañía con 17 años de experiencia en el segmento domicilios</h3>
            <p
              class="text-muted web-desc"
            >
              Disponemos de un portafolio de servicios para las marcas que ven en el canal domicilios 
              una oportunidad de generar ventas y rentabilidad:</p>
            <ul class="text-muted list-unstyled margin-t-30 features-item-list">
              <li class>Chatbots</li>
              <li class>Número Único Redireccionado</li>
              <li class>Marketing</li>
              <li class>Domisoft</li>
              <li class>Encuestas</li>
            </ul>
            <a href="http://domicity.com.co/" class="btn btn-custom margin-t-30">
              Ver más
              <i class="mdi mdi-arrow-right"></i>
            </a>
          </div>
        </div>
        <div class="col-lg-7 order-1 order-lg-2">
          <div class="features-img mx-auto mr-lg-0">
            <img src="@/assets/images/about.png" alt="macbook image" class="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--END FEATURES-->
</template>