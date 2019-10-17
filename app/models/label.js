import DS from 'ember-data';
const { Model, attr, belongsTo } = DS;

export default class LabelModel extends Model {
  @belongsTo() issue;
  @attr() name;
  @attr() color;
}
