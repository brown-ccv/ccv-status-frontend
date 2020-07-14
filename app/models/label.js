import DS from 'ember-data';
const { Model, attr } = DS;

export default class LabelModel extends Model {
  @attr() name;
  @attr() color;
}
