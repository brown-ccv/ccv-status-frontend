import DS from 'ember-data';
const { Model, attr, hasMany, belongsTo } = DS;

export default class RepositoryModel extends Model {
  @attr() full_name;
  @attr() language;
  @attr() name;
  @attr('boolean') has_issues;
  @attr('number') open_issues_count;
  @hasMany() issues;
  @belongsTo() org;
}
