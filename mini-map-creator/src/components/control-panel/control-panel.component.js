import ControlPanelButton from '../control-panel-button/control-panel-button.component.vue';
import LayerControlPanel from '../layers-panel/layer-panel.component.vue';
import html2canvas from 'html2canvas';

export default {
  components: {
    ControlPanelButton,
    LayerControlPanel,
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
      if (typeof link.download === 'string') {
        // Create a ghost element to trigger the download
        const link = document.createElement('a');
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
      const canvas = await html2canvas(mapDom);
      document.body.appendChild(canvas);
      this.saveAs(canvas.toDataURL(), 'screenshot.jpg');
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
