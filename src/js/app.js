import Boot from './Framework/Bootstrap';


/**
 * Make all global objects ready upon bootstrap
 * before toggling the switch.
 */

let boot = new Boot();
boot.init();

export default boot.render;
