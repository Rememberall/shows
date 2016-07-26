import React, {Component} from 'react';

export default class SearchForm extends Component {
  constructor() {
    super();

    this.state = {
      query: '',
    };

    this.trySelectingShow = this.trySelectingShow.bind(this);
  }

  trySelectingShow(query) {
    const {titles, onSubmit} = this.props;

    const index = titles.indexOf(query);

    if (index !== -1) {
      onSubmit(index);
    }
  }

  render() {
    const {titles} = this.props;

    return (
      <form className="form-inline pull-xs-right"
        onSubmit={() => this.trySelectingShow(this.state.query)}>

        <input type="text"
          className="form-control"
          placeholder="Search"
          onKeyUp={e => {
            console.log(e.which);

            const query = e.target.value;

            this.setState({query});

            if (e.which === 13) { // enter
              this.trySelectingShow(query);
            }
          }}
          data-provide="typeahead"
          data-source={JSON.stringify(titles)}/>
        <button className="btn btn-primary-outline"
          style={{
            marginLeft: 5,
          }}>
          Search
        </button>
      </form>
    );
  }
}
