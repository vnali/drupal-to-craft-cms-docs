<template>
  <figure :class="">
    <img :src="imagesrc" alt="" />
    <figcaption>{{ caption }}</figcaption>
  </figure>
</template>
<script>
export default {
  props: ['src', 'caption'],
  computed: {
    imagesrc () {
      return './assets/img/' + this.src
    }
  }
}
</script>
<style>
img {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.img-50 {
  width: 50%;
}
.img-70 {
  width: 70%;
}
figcaption {
  font-size:12px;
  text-align: center;
}
</style>