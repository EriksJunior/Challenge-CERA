<!-- HTML -->
<template>
  <section class="titulo">
    <button type="button" @click="openModal" class="adicionar">
      <p>Adicionar novo cliente</p>
    </button>
  </section>
</template>

<!-- JS -->
<script setup>
import { mapActions, storeToRefs } from "pinia";
import { useMainStore } from "../../../store/mains";

const main = useMainStore();

const { valueOpenTheModal } = storeToRefs(main);
const { openModal } = mapActions(useMainStore, ["openModal"]);
</script>

<!-- CSS -->
<style scoped>
.tela {
  margin: 0 50px 0 0;
}
.input {
  max-width: 400px;
}
button.adicionar {
  margin-left: auto;
}
/* Responsivo */
@media screen and (max-width: 1000px) {
  .input {
    margin: 20px 0;
  }
  button.adicionar {
    margin-left: 0;
  }
}
</style>
