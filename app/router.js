import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('history', function() {
    this.route('service', { path: '/:repository_name' });
  });
  this.route('banner');
});
