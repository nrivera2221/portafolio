<script>
export default {
  props: {
    imageSrc: { type: String, required: true },
    link: { type: String, required: true },
    nombre: { type: String, required: true },
  },
};
</script>

<template>
  <a :href="link" target="_blank" class="text-decoration-none">
    <div class="card h-100 shadow-sm">
      <img
        :src="imageSrc"
        :alt="nombre"
        class="card-img-top img-fluid"
        style="object-fit: cover; height: 200px"
      />
      <div class="card-body text-center">
        <h5 class="card-title">{{ nombre }}</h5>
      </div>
    </div>
  </a>
</template>

<style scoped>
.card {
  width: 100%;
  max-width: 250px;
  border-radius: 10px;
  overflow: hidden;
  height: auto;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}
.card-img-top {
  height: 150px;
  width: 100%;
  object-fit: contain;
}
.card-title {
  color: var(--vt-c-deep-blue);
}
</style>