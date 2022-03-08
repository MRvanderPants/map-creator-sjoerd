import html2canvas from 'html2canvas';
import ControlPanelButton from '../control-panel-button/control-panel-button.component.vue';
import LayerControlPanel from '../layers-panel/layer-panel.component.vue';
import SizeControlPanel from '../size-panel/size-panel.component.vue';

export default {
  components: {
    ControlPanelButton,
    LayerControlPanel,
    SizeControlPanel,
  },
  props: ['map'],
  data() {
    return {
      animationDuration: 500,
      layerPanelIsOpen: false,
      tools: [
        { id: 0, icon: 'photo', callback: this.saveScreenshot },
        { id: 1, icon: 'add', callback: this.zoomIn },
        { id: 2, icon: 'remove', callback: this.zoomOut },
        { id: 3, icon: 'layers', callback: this.toggleLayerPanel },
      ]
    }
  },
  methods: {
    /**
     * Triggers an automatic download of the provided file
     * @param { string } url 
     * @param { string } filename 
     */
    saveAs(url, filename) {
      const link = document.createElement('a');
      if (typeof link.download === 'string') {
        // Create a ghost element to trigger the download
        link.href = url;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        window.open(url);
      }
    },
    /**
     * Creates a download for a screenshot of the map
     */
    async saveScreenshot() {
      const mapDom = document.getElementById('map');
      const canvas = await html2canvas(mapDom, this.getCanvasExtend());
      document.body.appendChild(canvas);
      this.saveAs(canvas.toDataURL(), 'screenshot.jpg');
      document.body.removeChild(canvas);
    },
    getCanvasExtend() {
      const width = document.getElementById('width-input').value;
      const height = document.getElementById('height-input').value;
      // We add one pixel here to make sure the border isn't captured
      const x = (window.innerWidth * 0.5) - (width * 0.5) + 1;
      const y = (window.innerHeight * 0.5) - (height * 0.5) + 1;
      return { width, height, x, y };
    },
    toggleLayerPanel() {
      this.layerPanelIsOpen = !this.layerPanelIsOpen;
    },
    zoomIn() {
      this.map.zoomIn({ duration: this.animationDuration });
    },
    zoomOut() {
      this.map.zoomOut({ duration: this.animationDuration });
    }
  }
};
