<script>
import myPhoto from '../assets/img/Imagen1.png';

export default {
  data() {
    return { myPhoto }
  }
}
</script>

<template>
  <main>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 col-md-2 text-center py-4">
          <img :src="myPhoto" alt="photo" class="img-fluid">
        </div>
        <div class="col-12 col-md-10">
          <div class="card w-100">
            <div class="card-body text-center pt-5">
              <h1 class="fw-bold">Noemy Rivera Madrid</h1>
              <h3 class="text-primary">Desarrolladora FrontEnd</h3>
              <p class="text-p">- 🎓 Soy Gerente de proyectos, Especialista en Servicio al Cliente,
                Diseñadora UX, Programadora Front-End, Asistente Técnica Administrativa/Contable/Logistica/RRHH,
                Emprendedora.

                - 🌱 Actualmente estoy aprendiendo habilidades de programación Full Stack
                , especialmente todas las funcionalidades de JavaScript y Vue.Js, Google Analytics,
                Ingeniería en Prompt I+D. Marketing Digital. Inglés y Chino Mandarín.

                - 👯 Encantadamente estoy dispuesta a colaborar con empresas innovadoras que
                busquen ir hacia el otro nivel en la tecnología y el mercado digital.

                - 🙆‍♀️ Estoy abierta a las oportunidades de crecimiento, experiencia y colaboración.
                Especialmente en Proyectos Front-End, aplicaciones web innovadoras y vanguardistas.

                - 💬 Preguntame sobre Desarrollo web, JavaScript, CSS, Bootstrap, Vue.Js, etc.

                - ⚡ "Defiendo que el usuario disfrute explorando nuevas herramientas y
                técnicas para optimizar la experiencia de usuario en diseño web, aplicando siempre
                las mejores prácticas en programación."
              </p>
              <button type="button" class="btn btn-danger" href="#" target="_blank">Contáctame</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
