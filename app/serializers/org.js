import ApplicationSerializer from './application';

export default class OrgSerializer extends ApplicationSerializer {
  primaryKey = 'login'

  normalize(type, payload) {
    payload.links = {
      repositories: payload.repos_url
    }
    return super.normalize(...arguments);
  }
}
