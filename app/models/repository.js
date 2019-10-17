import DS from 'ember-data';
const { Model, attr, hasMany, belongsTo } = DS;

export default class RepositoryModel extends Model {
  @attr() fullName;
  @attr() language;
  @attr() name;
  @attr('number') open_issues;
  @attr('number') stargazersCount;
  @hasMany() issues;
  @belongsTo() org;
}
