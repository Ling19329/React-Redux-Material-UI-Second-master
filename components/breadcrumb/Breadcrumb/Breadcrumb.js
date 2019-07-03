import React, { Children } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import CollapsedItem from '../CollapsedItem/CollapsedItem';
import { DefaultSeparator } from './DefaultSeparator';
import { styles } from './styles';

const defaultMaxItems = 8;


class Breadcrumb extends React.PureComponent {
  state = {
    expanded: false,
  };

  getSeparator(props) {
    const { separator: Separator } = this.props;
    if (Separator) {
      let className = props.className;
      if (typeof Separator === 'function') {
        return <Separator {...props} className={className} />;
      }
      if (React.isValidElement(Separator)) {
        className = classNames(className, Separator.props.className);
        return React.cloneElement(Separator, {
          ...props,
          className,
        });
      }
    }
    return <DefaultSeparator {...props} />;
  }

  insertSeparators(items) {
    const { classes, separatorText, separator } = this.props;

    return items.reduce((arr, v, i, source) => {
      return i < source.length - 1
        ? arr.concat(
          v,
          this.getSeparator(
            separator
              ? {
                key: `separator-${i}`,
                className: classes.separator,
              }
              : {
                key: `separator-${i}`,
                className: classes.separator,
                separatorText,
              },
          ),
        )
        : arr.concat(v);
    }, []);
  }

  expand(e) {
    e.preventDefault();
    this.setState({ expanded: true });
  }

  renderAllItems() {
    const { children } = this.props;
    const allNonEmptyItems = Children.toArray(children);
    return allNonEmptyItems.map(child => React.cloneElement(child, {}));
  }

  renderItemsBeforeAndAfter() {
    const { itemsBeforeCollapse, itemsAfterCollapse } = this.props;
    const allItems = this.renderAllItems();
    // This defends against someone passing weird data, to ensure that if all
    // items would be shown anyway, we just show all items without the EllipsisItem
    if (itemsBeforeCollapse + itemsAfterCollapse >= allItems.length) {
      return allItems;
    }

    const beforeItems = allItems.slice(0, itemsBeforeCollapse);
    const afterItems = allItems.slice(
      allItems.length - itemsAfterCollapse,
      allItems.length,
    );

    return [
      ...beforeItems,
      <CollapsedItem key='ellipsis' onClick={e => this.expand(e)} />,
      ...afterItems,
    ];
  }

  render() {
    const {
      classes,
      children,
      maxItems,
      itemsBeforeCollapse,
      itemsAfterCollapse,
      separator,
      separatorText,
      ...rest
    } = this.props;

    const { expanded } = this.state;

    if (!children) return <div className={classes.root} {...rest} />;

    return (
      <div className={classes.root} {...rest}>
        {expanded
          || (maxItems && Children.toArray(children).length <= maxItems)
          ? this.insertSeparators(this.renderAllItems())
          : this.insertSeparators(this.renderItemsBeforeAndAfter())}
      </div>
    );
  }
}

Breadcrumb.propTypes = {
  classes: PropTypes.object.isRequired,
  maxItems: PropTypes.number,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  itemsBeforeCollapse: PropTypes.number,
  itemsAfterCollapse: PropTypes.number,
  separator: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.element,
  ]),
  separatorText: PropTypes.string,
};

Breadcrumb.defaultProps = {
  children: null,
  maxItems: defaultMaxItems,
  itemsBeforeCollapse: 1,
  itemsAfterCollapse: 1,
  separatorText: '/',
  separator: '/',
};

export default withStyles(styles, { name: 'MuiBreadcrumb' })(Breadcrumb);
