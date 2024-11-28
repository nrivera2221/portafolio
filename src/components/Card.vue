<script>
export default {
  props: {
    imgCard: {
      type: String,
      required: true
    },
    nombre: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    git: {
      type: String,
      required: true
    },
    gitpage: {
      type: String,
      required: true
    }
  }
};
</script>
<template>
  <div class="tarjeta col-sm-12 col-md-6 col-lg-4">
    <div class="project-card">
      <img :src="imgCard" alt="Imagen del proyecto" class="card-img">
      <div class="card-body">
        <h5 class="card-title">{{ nombre }}</h5>
        <div class="d-flex justify-content-center align-items-center gap-3 my-3 icono ">
          <div v-for="(tech, index) in description" :key="index" >
            <i :class="tech.icon"></i>
          </div>
        </div>
        <div class="d-flex justify-content-between align-items-center">
          <a :href="git" class="text-secondary" target="_blank" rel="noopener noreferrer">
            <i class="fa-brands fa-github fa-lg me-1"></i> GitHub
          </a>
          <a :href="gitpage" class="text-secondary" target="_blank" rel="noopener noreferrer">
            <i class="fa-brands fa-github fa-lg me-1"></i> GitHub Pages
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.tarjeta{
  width: 280px;
}
.project-card {
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px #0000001a;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
}
.project-card:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 16px #00000033;
}

.card-img {
  width: 100%;
  height: 180px; /* Ajustar altura para que sea más pequeña */
  object-fit: cover;
  border-bottom: 3px solid var(--vt-c-light-pink2);
}

.card-body {
  padding: 1rem;
  background-color: var(--vt-c-light-pink);
  color: var(--vt-c-deep-blue);
}

.card-body h5 {
  font-size: 1.125rem; /* Hacer el título más pequeño */
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.card-body p {
  font-size: 0.875rem; /* Hacer la descripción un poco más pequeña */
  margin-bottom: 1rem;
}

.card-body a {
  font-size: 0.85rem;
  text-decoration: none;
  transition: color 0.3s ease;
}

.card-body a:hover {
  color: var(--vt-c-soft-blue);
}
.icono {
  color: var(--vt-c-dark-purple);
  font-size: 1.5rem;
}

/* Responsividad */
@media (max-width: 767px) {
  .card-img {
    height: 150px; /* Hacer la imagen más pequeña en pantallas pequeñas */
  }

  .card-body h5 {
    font-size: 1rem; /* Hacer el título más pequeño */
  }

  .card-body p {
    font-size: 0.8rem; /* Hacer la descripción más pequeña */
  }
  
}
</style>