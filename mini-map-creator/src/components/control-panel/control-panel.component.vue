<script src="./control-panel.component.js"></script>
<style src="./control-panel.component.css"></style>
<template>
  <navigation class="nav">
    <ControlPanelButton v-for="tool in tools"
                        :key="tool.id"
                        :icon="tool.icon"
                        :onClick="tool.callback" />
    <LayerControlPanel v-if="layerPanelIsOpen"
                       :map="map" />
    <SizeControlPanel :map="map" />
  </navigation>
</template>
