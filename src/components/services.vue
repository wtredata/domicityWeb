<script>

export default {
  name: 'Services',
}
</script>

<template>
  <div>
    <!--START SERVICES-->
    <section class="section bg-light" id="services">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 offset-lg-2">
            <h1 class="section-title text-center">Nuestros Servicios</h1>
            <div class="section-title-border margin-t-20"></div>
            <p
              class="section-subtitle text-dark text-center padding-t-30 font-secondary"
            >Como queremos enfocarnos en la experiencia del cliente, haciéndola más ágil y liviana, nos concentraremos en productos más que en establecimientos.</p>
          </div>
        </div>
        <div class="row margin-t-30" id="myservices">
          <div v-on:click="$refs['domicity_club'].show()" class="col-lg-6 margin-t-20">
            <div class="services-box">
              <div class="media">
                <i class="pe-7s-diamond text-custom"></i>
                <div class="media-body ml-4">
                  <h4 class="color-primary">DomiCity Club</h4>
                  <p
                    class="pt-2 text-dark"
                  >Es una membresía de pago anual para los usuarios, que les otorgará ciertos beneficios especiales.</p>
                </div>
              </div>
            </div>
          </div>
          <div v-on:click="$refs['billetera'].show()" class="col-lg-6 margin-t-20">
            <div class="services-box">
              <div class="media">
                <i class="pe-7s-wallet text-custom"></i>
                <div class="media-body ml-4">
                  <h4 class="color-primary">Billetera</h4>
                  <p
                    class="pt-2 text-dark"
                  >Es el monedero virtual que tendrá cada usuario y en el cual se acumulará el saldo que obtiene por sus compras.</p>
                </div>
              </div>
            </div>
          </div>
          <div v-on:click="$refs['entregas'].show()" class="col-lg-6 margin-t-20">
            <div class="services-box">
              <div class="media">
                <i class="pe-7s-gift text-custom"></i>
                <div class="media-body ml-4">
                  <h4 class="color-primary">Entregas</h4>
                  <p
                    class="pt-2 text-dark"
                  >Tus domiciliarios harán uso de nuestro módulo logístico para informarles acerca del estado y localización del pedido.</p>
                </div>
              </div>
            </div>
          </div>
          <div v-on:click="$refs['pagos'].show()" class="col-lg-6 margin-t-20">
            <div class="services-box">
              <div class="media">
                <i class="pe-7s-piggy text-custom"></i>
                <div class="media-body ml-4">
                  <h4 class="color-primary">Pagos</h4>
                  <p
                    class="pt-2 text-dark"
                  >También queremos diferenciarnos en el sistema de recaudación y pagos, ofrecienco pagos en efectivo y en línea.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="row">
          
          <div class="col-lg-4 margin-t-20">
            <div class="services-box">
              <div class="media">
                <i class="pe-7s-news-paper text-custom"></i>
                <div class="media-body ml-4">
                  <h4>Plan de Marketing</h4>
                  <p
                    class="pt-2 text-dark"
                  >Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 margin-t-20">
            <div class="services-box">
              <div class="media">
                <i class="pe-7s-plane text-custom"></i>
                <div class="media-body ml-4">
                  <h4>Tarifas</h4>
                  <p
                    class="pt-2 text-dark"
                  >Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-4 margin-t-20">
            <div class="services-box">
              <div class="media">
                <i class="pe-7s-arc text-custom"></i>
                <div class="media-body ml-4">
                  <h4>Pixel Perfect Design</h4>
                  <p
                    class="pt-2 text-dark"
                  >There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 margin-t-20">
            <div class="services-box">
              <div class="media">
                <i class="pe-7s-tools text-custom"></i>
                <div class="media-body ml-4">
                  <h4>Perfect Toolbox</h4>
                  <p
                    class="pt-2 text-dark"
                  >Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 margin-t-20">
            <div class="services-box">
              <div class="media">
                <i class="pe-7s-timer text-custom"></i>
                <div class="media-body ml-4">
                  <h4>Awesome Design</h4>
                  <p
                    class="pt-2 text-dark"
                  >All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p>
                </div>
              </div>
            </div>
          </div>
        </div>-->
      </div> 
    </section>
    <!--START SERVICES-->

    <!--START WEBSITE-DESCRIPTION-->
    <!-- <section
      class="section bg-web-desc"
      :style="{'background-image': 'url(' + require('@/assets/images/img-1.jpg') + ')', 'background-size': 'cover','background-position': 'center'}"
    >
      <div class="bg-overlay"></div>
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h2 class="text-white">Build your dream website today</h2>
            <p
              class="padding-t-15 home-desc mx-auto"
            >But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her.</p>
            <a
              href="#"
              class="btn btn-bg-white margin-t-30"
            >View Plan & Pricing</a>
          </div>
        </div>
      </div>
    </section> -->
    <!--END WEBSITE-DESCRIPTION-->
    <b-modal
        id="domicity_club"
        ref="domicity_club"
        dialog-class="modal-dialog-top"
        body-class="p-0"
        size="lg"
        hide-footer
        hide-header
        :no-close-on-backdrop="true"
      >
        <div class="block block-themed block-transparent mb-0">
          <div class="block-header header_modal">
            <h3 class="text-center padding-t-15">Domicity Club</h3>
            <br>
          </div>
          <b-container fluid class="p-4">   
            Es una membresía de pago anual para los usuarios, que les otorgará los siguientes beneficios: <br><br>

            <ol>
              <li>Descuentos de mínimo el 5% en cualquier producto que compre en la plataforma.</li>
              <br>
              <li>Abono del 1% de la compra al usuario para redimirlo en compras futuras, a cargo de DomiCity, sin fecha de caducidad mientras la afiliación esté activa.</li>
              <br>
              <li>Producto adicional, obsequios o cualquier otro beneficio que cada comercio quiera libremente asignar y que represente un valor tangible y apreciable para el usuario.</li>
              <br>
              <li>Entrega del 10% del valor recaudado por nuestra membresía a la fundación Alimentar. No concebimos nuestro emprendimiento en ausencia de alguna contribución social a una causa meritoria.</li>
            </ol>

            Y lo que encontrarás de mayor valor para tu negocio con relación a la membresía:  te conviertes en socio de DomiCity porque en marzo de cada año entregaremos a los comercios el 50% del valor recaudado de la membresía del período enero-diciembre del año inmediatamente anterior, de forma proporcional según tu participación en las ventas de toda la plataforma. 
            <br><br>
            Así que no solo le pagas a DomiCity por sus servicios, sino que DomiCity te paga por los tuyos. Cuanto más exitoso sea tu establecimiento en la plataforma, mayor ingreso recibes en retorno.
          </b-container>
          <div class="block-content block-content-full text-center border-top padding-b-10 padding-t-15">
            <b-button
              variant="danger"
              size="sm"
              v-on:click="$bvModal.hide('domicity_club')"
            >
              <i class="fa fa-laugh-squint mr-1"></i> Cerrar
            </b-button>
          </div>
        </div>
      </b-modal>
      <b-modal
        id="billetera"
        ref="billetera"
        dialog-class="modal-dialog-top"
        body-class="p-0"
        size="lg"
        hide-footer
        hide-header
        :no-close-on-backdrop="true"
      >
        <div class="block block-themed block-transparent mb-0">
          <div class="block-header header_modal">
            <h3 class="text-center padding-t-15">Domicity Club</h3>
            <br>
          </div>
          <b-container fluid class="p-4">   
            Es el monedero virtual que tendrá cada usuario y en el cual se acumulará el saldo que obtiene por sus compras. 
            <br> Allí mismo cargaremos saldo adicional obsequiado por nosotros o por los comercios que lo deseen a usuarios 
            seleccionados según criterios elegidos (consumo frecuente, montos superiores de compra, cumpleaños, etc.)
          </b-container>
          <div class="block-content block-content-full text-center border-top padding-b-10 padding-t-15">
            <b-button
              variant="danger"
              size="sm"
              v-on:click="$bvModal.hide('billetera')"
            >
              <i class="fa fa-laugh-squint mr-1"></i> Cerrar
            </b-button>
          </div>
        </div>
      </b-modal>
      <b-modal
        id="entregas"
        ref="entregas"
        dialog-class="modal-dialog-top"
        body-class="p-0"
        size="lg"
        hide-footer
        hide-header
        :no-close-on-backdrop="true"
      >
        <div class="block block-themed block-transparent mb-0">
          <div class="block-header header_modal">
            <h3 class="text-center padding-t-15">Domicity Club</h3>
            <br>
          </div>
          <b-container fluid class="p-4">   
            Es posible que en una segunda fase de desarrollo del producto lleguemos a agregar la entrega como componente encadenado de nuestro servicio, pero para comenzar, dejaremos en manos de cada comercio vinculado la entrega de sus productos. <br>
            <br>
            Ahora bien, tus clientes no estarán a ciegas. Tus domiciliarios harán uso de nuestro módulo logístico para informarles acerca del estado y localización del pedido.
            <br><br>
            Lo que sí tenemos claro es que no queremos emplear sistemas de entrega por demanda desprovistos de la debida cobertura laboral a la fuerza logística. Es de público conocimiento el grado de desprotección que enfrentan los domiciliarios que trabajan para las plataformas más reconocidas del mercado y la manera deficiente en que muchas veces se entregan los domicilios a través de esta fuerza de trabajo. Es un esquema que no queremos replicar.
          </b-container>
          <div class="block-content block-content-full text-center border-top padding-b-10 padding-t-15">
            <b-button
              variant="danger"
              size="sm"
              v-on:click="$bvModal.hide('entregas')"
            >
              <i class="fa fa-laugh-squint mr-1"></i> Cerrar
            </b-button>
          </div>
        </div>
      </b-modal>
      <b-modal
        id="pagos"
        ref="pagos"
        dialog-class="modal-dialog-top"
        body-class="p-0"
        size="lg"
        hide-footer
        hide-header
        :no-close-on-backdrop="true"
      >
        <div class="block block-themed block-transparent mb-0">
          <div class="block-header header_modal">
            <h3 class="text-center padding-t-15">Domicity Club</h3>
            <br>
          </div>
          <b-container fluid class="p-4">   
            También queremos diferenciarnos en el sistema de recaudación y pagos:
            <ol>
              <br><li>Pago en efectivo: como tu comercio entrega los domicilios con tus propios repartidores, cuando el pago sea en esta modalidad o con datáfono, recibirás de forma directa el pago del pedido.</li> <br>
              <li>Pago en línea: no recaudaremos el dinero para entregarlo posteriormente a los comercios según el plazo acordado. Recibirás directamente el dinero de tus pedidos y nosotros facturaremos periódicamente nuestro servicio de contacto entre consumidores y establecimientos.</li>
            </ol>
          </b-container>
          <div class="block-content block-content-full text-center border-top padding-b-10 padding-t-15">
            <b-button
              variant="danger"
              size="sm"
              v-on:click="$bvModal.hide('pagos')"
            >
              <i class="fa fa-laugh-squint mr-1"></i> Cerrar
            </b-button>
          </div>
        </div>
      </b-modal>
  </div>
</template>

<style lang="scss">
  #myservices div:hover {
    background-color: #D32B35 !important;
    color: white !important;
    cursor: pointer;
    p.text-dark, i, h4 {
      color: white !important;
    }
    
  }

  .header_modal {
    background-color: #D32B35 !important;
    color: white !important;
  }
</style>
