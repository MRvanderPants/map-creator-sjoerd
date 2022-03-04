<script src="./layer-panel.component.js"></script>
<style src="./layer-panel.component.css"></style>
<template>
  <div class="layer-panel">
    <div class="layer"
        v-for="layer in layers"
        :key="layer.id">
      <label class="layer__label">
        {{ layer.id }}
      </label>
      <input :id="sliderId + layer.id"
             type="range"
             min="0"
             max="100"
             step="0"
             value="100">
    </div>
  </div>
</template>
