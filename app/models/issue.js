import DS from 'ember-data';
const { Model, attr } = DS;

export default class IssueModel extends Model {
  @attr() title;
}
