import ApplicationSerializer from './application';

export default class NoteSerializer extends ApplicationSerializer {
  normalize(type, payload) {

    payload.author = payload.user.login

    delete payload.user

    return super.normalize(...arguments);
  }
}
