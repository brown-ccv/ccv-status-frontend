import DS from 'ember-data';
const { Model, attr, belongsTo } = DS;

export default class NoteModel extends Model {
  @belongsTo() issue;
  @attr() created_at;
  @attr() updated_at;
  @attr() body;
  @attr() author; 
}
