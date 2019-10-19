import Route from '@ember/routing/route';

export default class HistoryServiceRoute extends Route {
  model(params) {
    return this.modelFor('history').findBy('name', params.repository_name);
  }
}
