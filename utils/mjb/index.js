export const mjbPlugin = {
  install: (app, options) => {
    app.config.globalProperties.$mjb = (key) => {
      return key.split('.').reduce((o, i) => {
        return o ? o[i] : '';
      }, options);
    };
    app.provide('mjb', options);
  }
};

export function loadPackFactory(pack) {
  return import(`./${pack}.js`)
    .then((module) => module.default)
    .catch((error) => console.error(error));
}
