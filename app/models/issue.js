import DS from 'ember-data';
const { Model, attr, belongsTo, hasMany } = DS;

export default class IssueModel extends Model {
  @attr() title;
  @attr() state;
  @attr() body;
  @attr('number') number;
  @attr('date') created_at;
  @attr('date') updated_at;
  @attr('date') closed_at;
  @hasMany() notes;
  @hasMany() labels;
  @belongsTo() repository;
}
