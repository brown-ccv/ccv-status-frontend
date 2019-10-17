import DS from 'ember-data';
const { Model, attr, hasMany, belongsTo } = DS;

export default class RepositoryModel extends Model {
  @attr() fullName;
  @attr() language;
  @attr('number') stargazersCount;
  @hasMany() issues;
  @belongsTo() org;
}
