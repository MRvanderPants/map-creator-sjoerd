import ControlPanel from './components/control-panel/control-panel.component.vue';

export default {
  components: {
    Map,
    ControlPanel,
  },
  data() {
    return { map: null }
  },
  mounted() {
    this.createMap();
  },
  methods: {
    /**
     * Creates a new Mapbox map instance.
     * @returns Mapboxgl.Map
     */
    createMap() {
      mapboxgl.accessToken = 'pk.eyJ1Ijoic2pvZXJkMjE2IiwiYSI6ImNsMGNtNDA0MDAwazkzZHA5c241NXRjYzcifQ.ZlT4PBy71T7XEZS5iagVAg';
      this.map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [12.554729, 55.70651],
        zoom: 9
      });

      this.map.on('load', () => {
        this.registerMapEvents();
      });
    },
    /**
     * Creates a marker on the map at the specified location
     * @param { number[2] } lngLat 
     * @returns mapboxgl.Marker
     */
    createMarker(lngLat) {
      return new mapboxgl.Marker()
        .setLngLat(lngLat)
        .addTo(this.map);
    },
    /**
     * Registers any events on the map
     */
    registerMapEvents() {
      this.map.on('click', (e) => this.createMarker(e.lngLat));
    }
  },
};
