import { DOM } from './dom';

export const bootstrap = function(element, component) {
  DOM.patch(element, function() {
    let name = component.name();
    let element = DOM.void(name);

    if (element.update) {
      element.update();
    }
  });
};
