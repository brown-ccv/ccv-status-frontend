import Component from '@glimmer/component';

export default class IncidentComponent extends Component {
  get incidentType() {
    let incidentType
    this.args.issues.map((issues) => {
      issues.labels.map((label) => {
        if (label.name === 'scheduled maintanance') {
          incidentType = 'scheduled'
        }
        if (label.name === 'partial disruption') {
          incidentType = 'partial'
        }
        if (label.name === 'full disruption') {
          incidentType = 'full'
        }
      })
    })
    return incidentType
  }
}
