import Component from '@glimmer/component';

export default class IncidentComponent extends Component {
  get incidentType() {
    let incidentType
    this.args.issues.map((issue) => {
      issue.labels.map((label) => {
        if (label.name === 'scheduled maintanance') {
          incidentType = 'scheduled'
        }
        if (label.name === 'partial disruption') {
          incidentType = 'partial'
        }
        if (label.name === 'disrupted') {
          incidentType = 'full'
        }
      })
    })
    return incidentType
  }
}
