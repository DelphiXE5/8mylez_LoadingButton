import AddToCart from "src/plugin/add-to-cart/add-to-cart.plugin";
import Iterator from 'src/helper/iterator.helper';
import DomAccess from "src/helper/dom-access.helper";

export default class QuantityFieldPlugin extends AddToCart {
  init() {
    super.init();
    this.cartButton = DomAccess.querySelector(this.el, ".btn-buy");
    this.buttonNormalState = this.cartButton.innerHTML;
    console.log(this.buttonNormalState);
  }

  /**
     * @override
     * 
     * @param {string} requestUrl
     * @param {{}|FormData} formData
     * @private
     */

  _openOffCanvasCarts(requestUrl, formData) {

    this.cartButton.classList.add("btn-loading");
    this.cartButton.innerHTML = '<div class="loader"></div><span>Wird in den Warenkorb gelegt</span>';

    setTimeout(() => {
      this.cartButton.classList.remove("btn-loading");
      this.cartButton.innerHTML = this.buttonNormalState;
      super._openOffCanvasCarts(requestUrl, formData);
    }, 1000);
  }

}
