import ApplicationSerializer from './application';
import DS from 'ember-data';

export default class IssueSerializer extends ApplicationSerializer.extend(DS.EmbeddedRecordsMixin) {
  attrs = {
    labels: { embedded: 'always' }
  }

  normalize(type, payload) {
    // console.log(payload.labels);
    payload.repo_name = payload.repository_url.split('/').slice(-1)[0],
    payload.links = {
      notes: payload.comments_url
    }

    return super.normalize(...arguments);
  }

}
