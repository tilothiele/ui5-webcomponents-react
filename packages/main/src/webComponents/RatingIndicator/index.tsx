import { withWebComponent } from '@ui5/webcomponents-react/lib/withWebComponent';
import '@ui5/webcomponents/dist/RatingIndicator';
import React, { FC } from 'react';
import { WithWebComponentPropTypes } from '../../internal/withWebComponent';

export interface RatingIndicatorPropTypes extends Omit<WithWebComponentPropTypes, 'onChange'> {
  /**
   * Defines whether the <code>ui5-rating-indicator</code> is disabled.
   */
  disabled?: boolean;
  /**
   * The number of displayed rating symbols
   */
  maxValue?: number;
  /**
   *
   */
  readonly?: boolean;
  /**
   * The indicated value of the rating <br><br> <b>Note:</b> If you set a number which is not round, it would be shown as follows: <ul> <li>1.0 - 1.2 -> 1</li> <li>1.3 - 1.7 -> 1.5</li> <li>1.8 - 1.9 -> 2</li> <ul>
   */
  value?: number;
  /**
   * The event is fired when the value changes.
   */
  onChange?: (event: CustomEvent<{}>) => void;
}

/**
 * <code>import { RatingIndicator } from '@ui5/webcomponents-react/lib/RatingIndicator';</code>
 * <br />
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/RatingIndicator" target="_blank">UI5 Web Components Playground</a>
 */
const RatingIndicator: FC<RatingIndicatorPropTypes> = withWebComponent<RatingIndicatorPropTypes>(
  'ui5-rating-indicator',
  ['maxValue', 'value'],
  ['disabled', 'readonly'],
  [],
  ['change']
);

RatingIndicator.displayName = 'RatingIndicator';

RatingIndicator.defaultProps = {
  disabled: false,
  maxValue: 5,
  readonly: false,
  value: 0
};

export { RatingIndicator };