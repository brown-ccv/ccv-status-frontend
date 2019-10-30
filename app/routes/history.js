import Route from '@ember/routing/route';
import { hash, all } from 'rsvp';

export default class HistoryRoute extends Route {
  model() {
    return hash({
      repos: this.modelFor('application').get('repositories'),
      issues: this.modelFor('application').get('repositories')
        .then(repos => all(repos.map(repo => repo.issues)))
        .then(issuesArrays => issuesArrays.map(issueArray => issueArray.map(issue => issue)))
        .then(issues => issues.flat())
    })
  }
}
