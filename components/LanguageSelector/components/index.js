import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import {
  ALLOWED_LANGUAGES,
} from 'utils/language';

import './styles.css';

class LanguageSelector extends Component {
  static propTypes = {
    direction: PropTypes.string,
    setLanguage: PropTypes.func.isRequired,
  }

  static defaultProps = {
    direction: 'right',
  }

  state = {
    anchorEl: null,
  };

  handleLanguageSelection = (lang) => {
    const { setLanguage } = this.props;
    this.handleClose();
    setLanguage(lang);
  }

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleClick = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  render() {
    const {
      direction,
    } = this.props;
    const { anchorEl } = this.state;
    return (
      <div className={`language-selector ${direction}`}>
        <IconButton
          aria-owns={anchorEl ? 'lang-menu' : undefined}
          aria-haspopup='true'
          onClick={this.handleClick}
        >
          <Icon classes={{ root: 'language-selector__icon' }}>language</Icon>
        </IconButton>
        <Menu
          id='lang-menu'
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          {ALLOWED_LANGUAGES.map((lang, index) => (
            <MenuItem key={index} onClick={() => this.handleLanguageSelection(lang)}>
              <img
                alt={`img-${lang}`}
                title={`${lang.code.toUpperCase()}`}
                src={require(`assets/images/lang-${lang.code}.png`)}
                className='language-selector__img'
              />
              <span className='language-selector__label'>{lang.label}</span>
            </MenuItem>

          ))}
        </Menu>
      </div>
    );
  }
}

export default LanguageSelector;
