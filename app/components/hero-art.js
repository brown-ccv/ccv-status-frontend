import Component from '@glimmer/component';

export default class HeroArtComponent extends Component {
  get hasOpenIssues() {
    let hasOpenIssues = 'disabled'
    this.args.repos.map((repo) => {
      if (repo.open_issues_count > 0) {
        hasOpenIssues = 'active'
      }
    })
    return hasOpenIssues
  }
 }
