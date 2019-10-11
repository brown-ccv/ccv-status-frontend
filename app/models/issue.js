import DS from 'ember-data';
const { Model, attr } = DS;

export default class IssueModel extends Model {
  @attr() title;
  @attr() created_at;
  @attr() updated_at;
  @attr() closed_at;
}
