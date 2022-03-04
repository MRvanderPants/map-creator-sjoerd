<script src="./control-panel-button.component.js"></script>
<style src="./control-panel-button.component.css"></style>
<template>
  <button class="button" @click="onClick">
    <span class="material-icons button__icon">
      {{ icon }}
    </span>
  </button>
</template>