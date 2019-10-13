
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const RuleSection = ({
  fieldSelectorProps,
  operatorSelector,
  valueEditorProps,
  removeRuleActionProps,
  controls,
}) => {
  return (
    <Fragment>
      <controls.fieldSelector {...fieldSelectorProps} />
      <controls.operatorSelector {...operatorSelector} />
      <controls.valueEditor {...valueEditorProps} />
      <controls.removeRuleAction {...removeRuleActionProps} />
    </Fragment>
  );
};

RuleSection.displayName = 'RuleSection';

export default RuleSection;
