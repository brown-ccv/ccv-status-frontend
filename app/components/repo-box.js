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

    this.args.issues.map((issue) => {
      issue.labels.map((label) => {
        if (label.name === 'scheduled maintanance') {
          statusClass = { border: 'border-primary',
          fa: 'clock',
          faColor: 'color-primary',
          text: 'Scheduled Maintanance' }
        }
        if (label.name === 'partial disruption') {
          statusClass = { border: 'border-warning',
          fa: 'exclamation',
          faColor: 'color-warning',
          text: 'Partial Disruption' }
        }
        if (label.name === 'full disruption') {
          statusClass = { border: 'border-danger',
          fa: 'times',
          faColor: 'color-danger',
          text: 'Full Disruption' }
        }
      })
    })

    return statusClass
  }

}
