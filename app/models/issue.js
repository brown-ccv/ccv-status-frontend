import DS from 'ember-data';
import { computed } from '@ember/object';
const { Model, attr, belongsTo, hasMany } = DS;

export default class IssueModel extends Model {
  @attr() title;
  @attr() state;
  @attr() body;
  @attr('number') number;
  @attr('date') created_at;
  @attr('date') updated_at;
  @attr('date') closed_at;
  @attr() repo_name;
  @hasMany() notes;
  @hasMany('label') labels;
  @belongsTo() repository;

  get date() {
    return new Intl.DateTimeFormat('en-US', {
         year: 'numeric', month: 'long', day: 'numeric'
       }).format(this.created_at)
     }
  
  @computed('labels.@each.name')
  get worstLabelName() {
    const labelNames = this.labels.map(label => label.name);
    if (labelNames.includes('disrupted')) return 'disrupted';
    if (labelNames.includes('partial disruption')) return 'partial disruption';
    if (labelNames.includes('scheduled maintanance')) return 'scheduled maintanance';
  }

  @computed('worstLabelName')
  get isDisrupted() {
    return this.worstLabelName === 'disrupted';
  }

  @computed('worstLabelName')
  get isPartialDisruption() {
    return this.worstLabelName === 'partial disruption';
  }

  @computed('worstLabelName')
  get isScheduledMaintanance() {
    return this.worstLabelName === 'scheduled maintanance';
  }
}
