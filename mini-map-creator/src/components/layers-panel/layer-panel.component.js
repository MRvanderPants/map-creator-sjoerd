export default {
  props: ['map', 'isOpen'],
  data() {
    return {
      isOpen: false,
      layers: [],
      sliderId: 'slider_',
    }
  },
  mounted() {
    this.layers = this.getLayers(10);
    setTimeout(() => {
      this.listenToSliders();
    });
  },
  destroyed() {
    this.clearListeners();
  },
  methods: {
    /**
     * Returns all layers available in the map
     * By default 100+ layers are active, so I limited it to 10 for demo purposes.
     * @param { number } limit
     * @returns Mapboxgl.Layer[]
     */
    getLayers(limit) {
      return this.map.getStyle().layers.splice(0, limit);
    },
    /**
     * Creates listeners for all opacity-sliders
     */
    listenToSliders() {
      this.layers.forEach((layer) => {
        const id = this.sliderId + layer.id;
        const slider = document.getElementById(id);
        slider.addEventListener('input', (e) => this.setOpacity(e, layer));
      });
    },
    /**
     * Cleans up all listeners attached to the opacity-sliders
     */
    clearListeners() {
      this.layers.forEach((layer) => {
        const id = this.sliderId + layer.id;
        const slider = document.getElementById(id);
        slider.removeEventListener('input', (e) => this.setOpacity(e, layer));
      });
    },
    /**
     * Updates the opacity of per layer
     * @param { event } event 
     * @param { Mapboxgl.Layer } layer 
     */
    setOpacity(event, layer) {
      const settingName = `${layer.type}-opacity`;
      const opacity = parseInt(event.target.value, 10) / 100;
      this.map.setPaintProperty(layer.id, settingName, opacity);
    }
  }
}
