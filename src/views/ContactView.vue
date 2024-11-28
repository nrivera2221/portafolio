<script setup>

</script>
<template>
    <div class="container py-4">
        <h2 class="fw-bold text-center">Contáctame</h2>
        <div class="row  my-2 py-4">
            <!--Formulario-->
            <div class="col-md-6 col-12 mb-2">
                <form>
                    <div class="row">
                        <div class="col-6 mb-3">
                            <input type="text" class="form-control" id="name" aria-describedby="Nombre"
                                placeholder="Nombre">
                        </div>
                        <div class="col-6 mb-3">
                            <input type="text" class="form-control" id="last-name" aria-describedby="Apellido"
                                placeholder="Apellido">
                        </div>
                    </div>
                    <div class="mb-3">
                        <input type="email" class="form-control" id="email" aria-describedby="Email"
                            placeholder="Tu Email">
                    </div>
                    <div class="mb-3">
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                            placeholder="Escribe tu Mensaje"></textarea>
                    </div>
                    <button type="submit" class="btn btn-danger col-md-3 col-12">Enviar</button>
                </form>
            </div>
            <!--Datos de contacto-->
            <div class="container col-md-6 col-12">
                <div class="row my-2 mx-2">
                    <div class="d-flex">
                        <i class="fa fa-phone"></i>
                        <p class="text-secondary m-0 mx-2">+56920299429</p>
                    </div>
                    <div class="d-flex my-2">
                        <i class="fa fa-envelope"></i>
                        <p class="text-secondary m-0 mx-2">n.rivera2221@gmail.com</p>
                    </div>
                    <div class="d-flex my-2">
                        <i class="fa fa-linkedin"></i>
                        <a href="https://www.linkedin.com/in/noemy-rivera-madrid-08086233/" target="_blank"
                            class="m-0 mx-2">Mi Linkedin</a>
                    </div>
                    <div class="d-flex my-2">
                        <i class="fa fa-github"></i>
                        <a href="https://github.com/nrivera2221" target="_blank" class="m-0 mx-2">Mi GitHub</a>
                    </div>
                    <div class="d-flex my-2">
                        <i class="fa fa-instagram"></i>
                        <a href="https://www.instagram.com/mystical.sheep/" target="_blank" class="m-0 mx-2">Mi
                            Instagram</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style></style>
