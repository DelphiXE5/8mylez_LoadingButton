import LoadingButtonPlugin from "./script/loading-button";

window.PluginManager.override('AddToCart', LoadingButtonPlugin, '[data-add-to-cart]')

