'use strict';

module.exports = {
  extends: 'recommended',
  rules: {
    quotes: false,
    'no-curly-component-invocation': { allow: ['x-file-input'] },
    'no-positive-tabindex': false
  },
};