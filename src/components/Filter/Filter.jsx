import { Component } from 'react';
import PropTypes from 'prop-types';
export default class Filter extends Component {
  state = {
    inputValue: '',
  };

  render() {
    return (
      <>
        <p>Find contacts by name</p>
        <input
          type="text"
          value={this.props.value}
          onChange={this.props.onChange}
        />
      </>
    );
  }
}
Component.propTypes = {
  state: PropTypes.shape({
    inputValue: PropTypes.string.isRequired,
  }),
};
