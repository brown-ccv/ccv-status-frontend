import ApplicationSerializer from './application';
import DS from 'ember-data';

export default class IssueSerializer extends ApplicationSerializer.extend(DS.EmbeddedRecordsMixin) {
  attrs = {
    labels: { embedded: 'always' }
  }

  normalize(type, payload) {

    payload.links = {
      notes: payload.comments_url
    }
    return super.normalize(...arguments);
  }
}
