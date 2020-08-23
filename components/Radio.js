import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import MUIRadio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";

export const Radio = ({
  checked,
  color,
  disabled,
  id,
  inputRef,
  label,
  onChange,
  value,
  className
}) => (
  <FormControlLabel
    control={
      <MUIRadio
        checked={checked}
        color={color}
        disabled={disabled}
        id={id}
        inputRef={inputRef}
        value={value}
        onChange={onChange}
        className={classNames({ [className]: className })}
        data-testid="radio"
      />
    }
    label={label}
    labelPlacement="end"
  />
);

Radio.propTypes = {
  /**
   * If `true`, the component is checked.
   */
  checked: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: PropTypes.oneOf(["primary", "secondary", "default"]),
  /**
   * If `true`, the switch will be disabled.
   */
  disabled: PropTypes.bool,
  /**
   * The id of the `input` element.
   */
  id: PropTypes.string,
  /**
   * Use that property to pass a ref callback to the native input component.
   */
  inputRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  /**
   * The label for the component
   */
  label: PropTypes.string.isRequired,
  /**
   * Callback fired when the state is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.checked`.
   * @param {boolean} checked The `checked` value of the switch
   */
  onChange: PropTypes.func,
  /**
   * The value of the component.
   */
  value: PropTypes.any,
  /** Override or extend the styles applied to the component. */
  className: PropTypes.string
};

Radio.defaultProps = {
  color: "default"
};

export default Radio;
