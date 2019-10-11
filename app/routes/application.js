import Route from '@ember/routing/route';

export default class ApplicationRoute extends Route {
  model() {
    return this.store.findRecord('org', 'brown-ccv'); // or any other user
  }
}
