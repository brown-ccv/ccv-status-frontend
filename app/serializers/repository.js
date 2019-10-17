import ApplicationSerializer from './application';

export default class RepositorySerializer extends ApplicationSerializer {
  normalize(type, payload) {
    let url = payload.issues_url.replace('{/number}', '')
    payload.links = {
      issues: `${url}?filter=all&state=all`
    }
    return super.normalize(...arguments);
  }
}
