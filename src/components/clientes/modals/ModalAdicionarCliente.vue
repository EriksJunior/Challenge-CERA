<!-- HTML -->
<template>
  <section :class="valueOpenTheModal ? 'modal mostrar' : 'modal'">
    <!-- Background -->
    <div class="background"></div>
    <!-- Quadro -->
    <div class="quadro">
      <!-- Título -->
      <div class="titulo">
        <div class="texto">
          <h2><span>Novo</span></h2>
          <h2>CLIENTE</h2>
        </div>
        <button type="button" @click="closeModal">Fechar</button>
      </div>
      <!-- Nome -->
      <label>Nome <span>*</span></label>
      <div class="input cinza">
        <input
          v-model="dataClienteObj.name"
          type="text"
          autocomplete="false"
          spellcheck="false"
          placeholder="Digite aqui..."
        />
      </div>
      <!-- Whatsapp -->
      <label>Whatsapp <span>*</span></label>
      <div class="input cinza">
        <input
          v-model="dataClienteObj.whatsapp"
          type="tel"
          autocomplete="false"
          spellcheck="false"
          placeholder="(99) 99999-9999"
        />
      </div>
      <button type="button" @click="saveCliente" class="principal">
        Salvar Cliente
      </button>
    </div>
  </section>
</template>

<!-- JS -->
<script setup>
import { mapActions, storeToRefs } from "pinia";
import { useMainStore } from "../../../store/mains";

const main = useMainStore();
const { valueOpenTheModal, dataCliente } = storeToRefs(main);
const { closeModal } = mapActions(useMainStore, ["closeModal"]);

const dataClienteObj = {
  name: "",
  whatsapp: "",
};

function saveCliente() {
  main.dataCliente.push({ ...dataClienteObj });
  main.$state.valueOpenTheModal = false;
}

function clearInputs() {
  dataClienteObj.name = "";
  dataClienteObj.whatsapp = "";
}
</script>

<!-- CSS -->
<style scoped>
section.modal {
  z-index: 10;
}
/* Label */
.quadro label {
  margin: 20px 0 10px 0;
}
/* Linha */
input.endereco {
  margin: 10px 0 0 0;
}
/* Data */
.quadro .data #seletorCalendario {
  position: absolute;
  top: 70px;
  left: -10px;
}
button.principal {
  margin: 20px 0 0 0;
}
/* Responsivo */
@media screen and (max-width: 1000px) {
}
</style>
