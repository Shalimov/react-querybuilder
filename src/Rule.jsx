import React from 'react';

const Rule = ({
  id,
  parentId,
  field,
  operator,
  value,
  translations,
  schema: {
    classNames,
    controls,
    fields,
    getInputType,
    getLevel,
    getOperators,
    getValueEditorType,
    getValues,
    onPropChange,
    onRuleRemove
  }
}) => {
  const onElementChanged = (property, value) => {
    onPropChange(property, value, id);
  };

  const onFieldChanged = (value) => {
    onElementChanged('field', value);
  };

  const onOperatorChanged = (value) => {
    onElementChanged('operator', value);
  };

  const onValueChanged = (value) => {
    onElementChanged('value', value);
  };

  const removeRule = (event) => {
    event.preventDefault();
    event.stopPropagation();

    onRuleRemove(id, parentId);
  };

  const fieldData = fields.find((f) => f.name === field) || null;
  const level = getLevel(id);
  const fieldSelectorProps = {
    level,
    options: fields,
    value: field,
    title: translations.fields.title,
    className: `rule-fields ${classNames.fields}`,
    handleOnChange: onFieldChanged,
  }

  const operatorSelector = {
    field,
    fieldData,
    title: translations.operators.title,
    options: getOperators(field),
    value: operator,
    className: `rule-operators ${classNames.operators}`,
    handleOnChange: onOperatorChanged,
    level,
  }

  const valueEditorProps = {
    field,
    fieldData,
    title: translations.value.title,
    operator,
    value,
    type: getValueEditorType(field, operator),
    inputType: getInputType(field, operator),
    values: getValues(field, operator),
    className: `rule-value ${classNames.value}`,
    handleOnChange: onValueChanged,
    level,
  }

  const removeRuleActionProps = {
    level,
    label: translations.removeRule.label,
    title: translations.removeRule.title,
    className: `rule-remove ${classNames.removeRule}`,
    handleOnClick: removeRule,
  }

  return (
    <div className={`rule ${classNames.rule}`} data-rule-id={id} data-level={level}>
      <controls.ruleSection
        fieldSelectorProps={fieldSelectorProps}
        operatorSelector={operatorSelector}
        valueEditorProps={valueEditorProps}
        removeRuleActionProps={removeRuleActionProps}
        controls={controls}
      />
    </div>
  );
};

Rule.defaultProps = {
  id: null,
  parentId: null,
  field: null,
  operator: null,
  value: null,
  schema: null
};

Rule.displayName = 'Rule';

export default Rule;
