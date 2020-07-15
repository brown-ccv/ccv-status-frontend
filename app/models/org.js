import DS from 'ember-data';
const { Model, attr, hasMany } = DS;
import { computed } from '@ember/object';

export default class OrgModel extends Model {
  @attr() name;
  @hasMany() repositories;


  @computed('repositories.@each.isDisrupted')
  get isDisrupted() {
    return !!this.repositories.find(repo => repo.isDisrupted);
  }

  @computed('repositories.@each.isPartialDisruption')
  get isPartialDisruption() {
    return !!this.repositories.find(repo => repo.isPartialDisruption);
  }

  @computed('repositories.@each.isScheduledMaintanance')
  get isScheduledMaintanance() {
    return !!this.repositories.find(repo => repo.isScheduledMaintanance);
  }
}
