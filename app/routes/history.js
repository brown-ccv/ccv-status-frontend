import Route from '@ember/routing/route';

export default class HistoryRoute extends Route {
  model() {
    return this.modelFor('application').get('repositories')
  }
}
