<script src="./size-panel.component.js"></script>
<style src="./size-panel.component.css"></style>
<template>
  <div class="size-panel">
    <h3 class="size-panel__title">Export size</h3>
    <div class="size-input">
      <label for="width-input">Width</label>
      <input id="width-input"
             type="number"
             min="200"
             max="1000"
             value="800" />
    </div>

    <div class="size-input">
      <label for="height-input">Height</label>
      <input id="height-input"
             type="number"
             min="200"
             max="1000"
             value="600" />
    </div>
  </div>
</template>
