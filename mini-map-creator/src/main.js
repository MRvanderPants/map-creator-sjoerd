import { createApp } from 'vue'
import App from './App.vue'

/**
 * This is a fix on the Canvas.getContext method to make sure that the
 * 'preserveDrawingBuffer' property is enabled. Without this, it would be
 * impossible to capture the canvas contents. Due to the map being dynamicly
 * created by mapbox, its contents will not be captured by html2canvas, but
 * instead a blank page will be shown. This resolves that issue.
 * Taken from: https://stackoverflow.com/questions/55760121/html2canvas-captures-everything-except-the-content-of-an-inner-canvas
 */
HTMLCanvasElement.prototype.getContext = function(origFn) {
  return function(type, attribs) {
    attribs = attribs || {};
    attribs.preserveDrawingBuffer = true;
    return origFn.call(this, type, attribs);
  };
}(HTMLCanvasElement.prototype.getContext);

createApp(App).mount('#app')
