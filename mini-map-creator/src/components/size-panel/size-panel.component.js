export default {
  data() {
    return {
      widthInput: null,
      heightInput: null,
      extend: null,
    }
  },
  props: ['map'],
  mounted() {
    this.createEventListeners();
  },
  destroyed() {
    this.clearListeners();
  },
  methods: {
    /**
     * Creates a extend without any properties
     */
    createExtend() {
      this.extend = document.createElement('div');
      this.extend.classList.add('extend');
      document.getElementById('map').appendChild(this.extend);
    },
    /**
     * Updates the size and position of the rect element
     * @param { number } width 
     * @param { number } height 
     */
    updateExtend(width, height) {
      if(!this.extend) {
        this.createExtend(width, height);
      }
      const left = (window.innerWidth * 0.5) - (width * 0.5);
      const top = (window.innerHeight * 0.5) - (height * 0.5);
      Object.assign(this.extend.style, {
        width: `${width}px`,
        height: `${height}px`,
        left: `${left}px`,
        top: `${top}px`,
      });
    },
    /**
     * Event handler for the size inputs
     */
    onSizeChanged() {
      const width = this.widthInput.value;
      const height = this.heightInput.value;
      this.updateExtend(width, height);
    },
    /**
     * Creates event listeners for the size-inputs
     */
    createEventListeners() {
      this.widthInput = document.getElementById('width-input');
      this.heightInput = document.getElementById('height-input');
      this.widthInput.addEventListener('change', () => this.onSizeChanged());
      this.heightInput.addEventListener('change', () => this.onSizeChanged());
    },
    /**
     * Cleans up all listeners attached to the inputs
     */
     clearListeners() {
      this.widthInput.removeEventListener('change', () => this.onSizeChanged());
      this.heightInput.removeEventListener('change', () => this.onSizeChanged());
    },
  }
}
