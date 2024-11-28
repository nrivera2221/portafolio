<script>
import logo from '../assets/img/Sin título.png'

export default {
    data() {
        return { logo }
    }
}
</script>
<template>

    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg fixed-top nav">
        <div class="container-fluid">
            <a class="navbar-brand" href="#header">
                <img :src="logo" alt="logo" class="image__nav">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link text-secondary" aria-current="page" href="#header">Inicio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-secondary" href="#skills">Mis Habilidades</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-secondary" aria-current="page" href="#project">Proyectos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-secondary" href="#contact">Contacto</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<style lang="scss" scoped>
.nav {
    display: block;
    background-color: #FFB0B0;
}

.image__nav {
    width: 100px;
    height: 40px;
}
</style>

83a