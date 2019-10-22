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

    let issueLabels = []
    this.args.issues.map((issue) => {
      if (!issue.closed_at) {
        console.log(issue.title)
        issue.labels.map((label) => {
          issueLabels.push(label.name)
        })
        console.log(issueLabels)
        if (issueLabels.includes('scheduled maintanance')) {
          statusClass = { border: 'border-primary',
          fa: 'wrench',
          faColor: 'color-primary',
          text: 'Scheduled Maintanance' }
        }
        if (issueLabels.includes('partial disruption')) {
          statusClass = { border: 'border-warning',
          fa: 'exclamation',
          faColor: 'color-warning',
          text: 'Partial Disruption' }
        }
        if (issueLabels.includes('disrupted')) {
          statusClass = { border: 'border-danger',
          fa: 'times',
          faColor: 'color-danger',
          text: 'Major Disruption' }
        }
      }




    })

    return statusClass
  }

}
