import { DOM } from './dom';

export const bootstrap = function(element, component) {
  DOM.patch(element, function() {
    let name = component.componentName();
    DOM.void(name);
  });
};
