import Component from '@glimmer/component';

export default class RepoBoxComponent extends Component {
  get statusClass() {
    const statusClass = (this.args.open > 0)
    ? { border: 'border-danger', fa: 'times', faColor: 'color-danger' }
    : { border: 'border-success', fa: 'check', faColor: 'color-success' }

    return statusClass
  }

}
