import Component from '@glimmer/component';

export default class RepoBoxComponent extends Component {

  get statusClass() {
    let statusClass
    if (this.args.open === 0) {
      statusClass = { border: 'border-success',
      fa: 'check',
      faColor: 'color-success',
      text: 'Operational' }
    }

    
    if (this.args.repo.isDisrupted) {
      statusClass = { border: 'border-primary',
      fa: 'wrench',
      faColor: 'color-primary',
      text: 'Scheduled Maintanance' }
    }
    if (this.args.repo.isPartialDisruption) {
      statusClass = { border: 'border-warning',
      fa: 'exclamation',
      faColor: 'color-warning',
      text: 'Partial Disruption' }
    }
    if (this.args.repo.isDisrupted) {
      statusClass = { border: 'border-danger',
      fa: 'times',
      faColor: 'color-danger',
      text: 'Major Disruption' }
    }

    console.log(this.args.repo.name, statusClass);

    return statusClass
  }

}
