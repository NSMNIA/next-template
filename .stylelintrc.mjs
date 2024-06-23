const CUSTOM_AT_RULES = [
  "apply",
  "layer",
  "responsive",
  "screen",
  "tailwind",
  "variants",
  "define-mixin",
  "mixin",
]

const ONLY_ALLOW_CAMEL_CASE_SELECTORS = [
  /^(?:[a-z]+(?:[A-Z][a-z]*)*)$/,
  { message: (s) => `Expected '${s}' to be in camelCase` },
]

export default {
  extends: ["stylelint-config-standard"],
  plugins: ["stylelint-order", "stylelint-selector-bem-pattern"],
  rules: {
    "selector-class-pattern": ONLY_ALLOW_CAMEL_CASE_SELECTORS,
    "selector-id-pattern": ONLY_ALLOW_CAMEL_CASE_SELECTORS,
    "at-rule-no-unknown": [true, { ignoreAtRules: CUSTOM_AT_RULES }],
    "selector-pseudo-class-no-unknown": [
      true,
      { ignorePseudoClasses: ["global"] },
    ],
    "order/properties-alphabetical-order": true,
    "no-descending-specificity": null,
    "media-feature-range-notation": "prefix",
    "import-notation": "string",
  },
}
