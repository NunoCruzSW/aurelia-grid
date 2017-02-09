import 'bootstrap';

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('aurelia-grid');

  aurelia.start().then(a => a.setRoot('app'));
}
