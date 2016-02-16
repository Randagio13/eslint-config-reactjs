module.exports = {
  extends: 'eslint:recommended',
  parser: 'babel-eslint',
  plugins: [
    'react',
    'objects'
  ],
  env: {
    browser: true,
    node: true,
    es6: true,
    mocha: true
  },
  ecmaFeatures: {
    arrowFunctions: true,
    blockBindings: true,
    classes: true,
    defaultParams: true,
    destructuring: true,
    forOf: true,
    generators: false,
    modules: true,
    objectLiteralComputedProperties: true,
    objectLiteralDuplicateProperties: false,
    objectLiteralShorthandMethods: true,
    objectLiteralShorthandProperties: true,
    spread: true,
    superInFunctions: true,
    templateStrings: true,
    jsx: true
  },
  globals: {
    React: true
  },
  rules: {
    'no-unused-labels': 2,
    'no-self-assign': 2,
    'no-new-symbol': 2,
    'arrow-spacing': [2, {'before': true, 'after': true}],
    'block-scoped-var': 2,
    'brace-style': [2, '1tbs', {'allowSingleLine': true}],
    'camelcase': [1, {'properties': 'always'}],
    'comma-dangle': [2, 'never'],
    'comma-spacing': [2, {'before': false, 'after': true}],
    'comma-style': [2, 'last'],
    'consistent-return': 2,
    'curly': [2, 'multi-line'],
    'default-case': 2,
    'dot-notation': [2, {'allowKeywords': true}],
    'eol-last': 2,
    'eqeqeq': 2,
    'func-names': 1,
    'guard-for-in': 2,
    'indent': [2, 2, { 'SwitchCase': 1 }],
    'init-declarations': [2, 'always'],
    'jsx-quotes': [2, 'prefer-double'],
    'key-spacing': [2],
    'max-len': [1, 80, 4],
    'new-cap': [2, {'newIsCap': true}],
    'no-alert': 1,
    'no-caller': 2,
    'no-class-assign': 2,
    'no-cond-assign': [2, 'always'],
    'no-console': 1,
    'no-const-assign': 2,
    'no-constant-condition': 1,
    'no-debugger': 1,
    'no-dupe-keys': 2,
    'no-duplicate-case': 2,
    'no-else-return': 2,
    'no-empty': 2,
    'no-eq-null': 2,
    'no-eval': 2,
    'no-ex-assign': 2,
    'no-extend-native': 2,
    'no-extra-bind': 2,
    'no-extra-boolean-cast': 0,
    'no-extra-parens': 0,
    'no-extra-semi': 2,
    'no-fallthrough': 2,
    'no-floating-decimal': 2,
    'no-func-assign': 2,
    'no-implicit-coercion': 2,
    'no-implied-eval': 2,
    'no-inner-declarations': 2,
    'no-invalid-regexp': 2,
    'no-irregular-whitespace': 2,
    'no-lone-blocks': 2,
    'no-loop-func': 2,
    'no-multi-str': 2,
    'no-multiple-empty-lines': [2, {'max': 2}],
    'no-native-reassign': 2,
    'no-nested-ternary': 2,
    'no-new-func': 2,
    'no-new-object': 2,
    'no-new-wrappers': 2,
    'no-new': 2,
    'no-obj-calls': 2,
    'no-octal-escape': 2,
    'no-octal': 2,
    'no-param-reassign': 2,
    'no-proto': 2,
    'no-redeclare': 2,
    'no-return-assign': 2,
    'no-script-url': 2,
    'no-self-compare': 2,
    'no-sequences': 2,
    'no-shadow-restricted-names': 2,
    'no-shadow': 2,
    'no-spaced-func': 2,
    'no-sparse-arrays': 2,
    'no-throw-literal': 2,
    'no-trailing-spaces': 2,
    'no-underscore-dangle': 0,
    'no-unreachable': 2,
    'no-unused-vars': [2, {'vars': 'local', 'args': 'after-used'}],
    'no-use-before-define': 2,
    'no-var': 2,
    'no-with': 2,
    'one-var': [2, 'never'],
    'padded-blocks': [2, 'never'],
    'prefer-reflect': [2],
    'prefer-spread': 2,
    'quote-props': [2, 'consistent-as-needed'],
    'quotes': [2, 'single', 'avoid-escape'],
    'radix': 2,
    'semi-spacing': [2, {'before': false, 'after': true}],
    'semi': [2, 'always'],
    'keyword-spacing': 2,
    'space-before-blocks': 2,
    'space-before-function-paren': [2, 'never'],
    'space-infix-ops': 2,
    'spaced-comment': 2,
    'strict': [2, 'never'],
    'use-isnan': 2,
    'vars-on-top': 2,
    'wrap-iife': [2, 'any'],
    'yoda': 2,
    'react/display-name': 0,
    'react/forbid-prop-types': 0,
    'react/jsx-boolean-value': 2,
    'react/jsx-closing-bracket-location': 2,
    'react/jsx-curly-spacing': [2, 'never'],
    'react/jsx-handler-names': 0,
    'react/jsx-indent-props': [2, 2],
    'react/jsx-indent': [2, 2],
    'react/jsx-key': 2,
    'react/jsx-max-props-per-line': 0,
    'react/jsx-no-bind': 2,
    'react/jsx-no-duplicate-props': 2,
    'react/jsx-no-literals': 2,
    'react/jsx-no-undef': 2,
    'react/jsx-pascal-case': 2,
    'react/jsx-sort-prop-types': 0,
    'react/jsx-sort-props': 0,
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
    'react/no-danger': 0,
    'react/no-deprecated': 2,
    'react/no-did-mount-set-state': [2, 'allow-in-func'],
    'react/no-did-update-set-state': 2,
    'react/no-direct-mutation-state': 2,
    'react/no-is-mounted': 2,
    'react/no-multi-comp': 2,
    'react/no-set-state': 0,
    'react/no-string-refs': 2,
    'react/no-unknown-property': 2,
    'react/prefer-es6-class': 2,
    'react/prop-types': 2,
    'react/react-in-jsx-scope': 2,
    'react/require-extension': 0,
    'react/self-closing-comp': 2,
    'react/wrap-multilines': 2,
    'react/sort-comp': [2, {
      'order': [
        'constructor',
        'lifecycle',
        'everything-else',
        'render'
      ],
      'groups': {
        'lifecycle': [
          'displayName',
          'propTypes',
          'defaultProps',
          'contextTypes',
          'state',
          'childContextTypes',
          'mixins',
          'statics',
          'getDefaultProps',
          'getInitialState',
          'getChildContext',
          'componentWillMount',
          'componentDidMount',
          'componentWillReceiveProps',
          'shouldComponentUpdate',
          'componentWillUpdate',
          'componentDidUpdate',
          'componentWillUnmount'
        ]
      }
    }]
  }
};
