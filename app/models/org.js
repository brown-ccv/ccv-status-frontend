import DS from 'ember-data';
const { Model, attr, hasMany } = DS;

export default class OrgModel extends Model {
  @attr() name;
  @hasMany() repositories;
}
