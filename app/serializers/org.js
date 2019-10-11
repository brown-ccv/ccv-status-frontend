import ApplicationSerializer from './application';

export default class OrgSerializer extends ApplicationSerializer {
  primaryKey = 'login'
  normalizeFindRecordResponse(store, type, payload) {
    console.log(payload.issues_url)

    payload.links = {
      repositories: payload.repos_url,
      issues: payload.issues_url
    }
    return super.normalizeFindRecordResponse(...arguments);
  }
}
