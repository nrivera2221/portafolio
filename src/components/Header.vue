
<script>
import myPhoto from '../assets/img/Imagen1.png'
</script>
export
<template>
    <header id="header" class="header">
        <div class="container py-5 mt-3">
            <div class="row">
                <!-- Columna para la ilustración -->
                <div class="col-md-6 col-12">
                    <img :src="myPhoto" alt="photo" class="img-fluid">
                </div>
                <!-- Columna para el texto y el botón -->
                <div class="card mb-3 custom-card">
                    <div class="row g-0">
                    <div class="col-md-6 d-flex flex-column justify-content-center align-items-center order-2 order-md-1">
                        <div class="card-body text-center mx-md-5 pt-5">
                        <p class="card-text"><h1 class="fw-bold">Noemy Rivera Madrid</h1></p>
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
                    <button type="button" class="btn btn-danger col-md-3" href="" target="_blank">Contáctame</button>
                </div>
            </div>
        </div>
    </header>
</template>
<style lang="scss" scoped>
header {
    padding-top: 5%;
    .img-fluid {
        max-width: 90%;
        height: auto;
        border-radius: 10px 10px;
        margin-top: 10px;
        margin-left:20%;
        box-shadow: 4px solid #001F3F;
    }

    h1 {
        color: #001F3F;
    }
    p{
        color: #6A9AB0;
        justify-content: center;
        text-align: left;
        padding-right: 6%;
    }
}
.custom-card {
  border: none; /* Elimina el borde de la tarjeta */
}

.card-body {
  padding: 30px; /* Espaciado interno más cómodo */
}

img {
  width: 80%;
  height: auto;
  max-width: 300px;
  border-radius: 50%;
  border: 4px solid var(--vt-c-light-purple);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.card-text {
  font-size: 1.1rem;
  line-height: 1.2;
  color: var(--vt-c-deep-blue);
}

.button {
  background-color: var(--vt-c-soft-pink);
  color: var(--vt-c-deep-blue);
}

.button:hover {
  background-color: var(--vt-c-light-pink2); /* El color que deseas cuando el botón es hover */
  border: var(--vt-c-light-pink2); /* El color de borde cuando se pasa el ratón */
  cursor: pointer; /* Cambia el cursor para indicar que el botón es interactivo */
}

/* Media query para pantallas pequeñas */
/* Media query para pantallas pequeñas */
@media (max-width: 767px) {
  .card-body {
    padding: 20px; /* Reducir el padding en pantallas pequeñas */
    margin: 0;
  }

  .row {
    text-align: center;
  }

  img {
    width: 150px; /* Tamaño reducido de la imagen para móviles */
    height: 200px; /* Hacer la imagen cuadrada */
    margin-bottom: 5px; /* Separar la imagen del texto */
    border-radius: 10px; /* Menos redondeo para móviles */
  }

  .card-text {
    font-size: 1rem; /* Ajustar el tamaño de la fuente */
    line-height: 1.2;
  }

  .button {
    width: 100%; /* Botón más grande para móviles */
  }
}
</style>
