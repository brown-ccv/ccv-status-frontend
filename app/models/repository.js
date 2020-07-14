import DS from 'ember-data';
import { computed } from '@ember/object';
const { Model, attr, hasMany, belongsTo } = DS;

export default class RepositoryModel extends Model {
  @attr() full_name;
  @attr() language;
  @attr() name;
  @attr('boolean') has_issues;
  @attr('number') open_issues_count;
  @hasMany() issues;
  @belongsTo() org;

  @computed('issues.@each.closed_at')
  get openIssues() {
    return this.issues.filter(issue => !issue.closed_at);
  }

  @computed('openIssues.@each.isDisrupted')
  get isDisrupted() {
    return !!this.openIssues.find(issue => issue.isDisrupted);
  }

  @computed('openIssues.@each.isPartialDisruption')
  get isPartialDisruption() {
    return !!this.openIssues.find(issue => issue.isPartialDisruption);
  }

  @computed('openIssues.@each.isScheduledMaintanance')
  get isScheduledMaintanance() {
    return !!this.openIssues.find(issue => issue.isScheduledMaintanance);
  }
}
