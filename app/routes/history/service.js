import Route from '@ember/routing/route';

export default class HistoryServiceRoute extends Route {
  model(params) {
    return this.modelFor('application').get('repositories')
      .then(repos => repos.findBy('name', params.repository_name));
  }
}
