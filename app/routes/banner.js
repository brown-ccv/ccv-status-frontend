import Route from '@ember/routing/route';

export default class BannerRoute extends Route {
    model() {
        return this.modelFor('application')
      }
}
