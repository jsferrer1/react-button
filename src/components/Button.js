import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import './Button.css';

export default class Button extends Component {
  render() {
    const btnClass = classnames('btn', this.props.className, {
      'btn-secondary': this.props.issecondary
    });

    return (
      <button
        className={btnClass}
        disabled={this.props.disabled}
        {...this.props}
      >
        {this.props.text && (
          <span className='btn-text'>{this.props.text}</span>
        )}
      </button>
    );
  }
}

Button.propTypes = {
  btnClass: PropTypes.string,
  issecondary: PropTypes.bool,
  disabled: PropTypes.bool,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
};

Button.defaultProps = {
  disabled: false,
  text: 'Button'
};
