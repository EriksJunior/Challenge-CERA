<template>
  <div id="clientes">
    <SectionTitulo />
    <ModalAdicionarCliente />
    <SectionClientes />
  </div>
</template>

<script setup>
import SectionTitulo from "./partials/SectionTitulo.vue";
import ModalAdicionarCliente from "./modals/ModalAdicionarCliente.vue";
import SectionClientes from "./partials/SectionClientes.vue";
</script>

<style scoped>
#clientes {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
  background-color: var(--cor-fundo-tela);
}
</style>
