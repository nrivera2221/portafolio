
<script>
import meetCoffe from '../assets/img/meetcoffee.png'
</script>

<template>
    <section id="project" class="proyect">
            <div class="container py-4 my-2">
                <h2 class="fw-bold text-center" id="title">Mis Proyectos</h2>
                <div class="row my-2 py-4 d-flex justify-content-center">
                    <!--Card-->
                    <div class="card col-md-3 col-6 mx-2  mb-2 border-0" style="width: 18rem;">
                        <img :src="meetCoffe" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Meet & Coffee</h5></a>
                        </div>
                    </div>
                    <div class="card col-md-3 col-6 mx-2  mb-2 border-0" style="width: 18rem;">
                        <img src="./assets/img/meetcoffee.png" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Meet & Coffee</h5></a>
                        </div>
                    </div>
                    <div class="card col-md-3 col-6 mx-2  mb-2 border-0" style="width: 18rem;">
                        <img src="./assets/img//meetcoffee.png" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Meet & Coffee</h5></a>
                        </div>
                    </div>
                    <div class="card col-md-3 col-6 mx-2  mb-2 border-0" style="width: 18rem;">
                        <img src="./assets/img/meetcoffee.png" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Meet & Coffee</h5></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
</template>
<style scoped>
.proyect{
    h2{
        color:  #001F3F;
    }
    .card-title{
        color: #6A9AB0;
        font-weight: 600;
    }
}
</style>