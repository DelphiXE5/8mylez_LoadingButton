import AddToCart from "src/plugin/add-to-cart/add-to-cart.plugin";
import Iterator from 'src/helper/iterator.helper';

export default class QuantityFieldPlugin extends AddToCart {
  init() {
    super.init();
  }

  /**
     *
     * @param {string} requestUrl
     * @param {{}|FormData} formData
     * @private
     */
  _openOffCanvasCarts(requestUrl, formData) {

    console.log("Shake it off")

    setTimeout(() => {
      const offCanvasCartInstances = PluginManager.getPluginInstances('OffCanvasCart');
      Iterator.iterate(offCanvasCartInstances, instance => this._openOffCanvasCart(instance, requestUrl, formData));
    }, 3000);
  }

}
