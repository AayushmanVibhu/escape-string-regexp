# RepoRush training fork

Upstream: https://github.com/sindresorhus/escape-string-regexp
Revision: ba9a4473850cb367936417e97f1f2191b7cc67dd (v5.0.0)
Fork: https://github.com/AayushmanVibhu/escape-string-regexp

An intentionally introduced regression causes a literal search containing multiple special characters to behave like a regular expression. Trace the escaping pipeline and restore literal matching for every character.

## Expected behavior
Every regex metacharacter is escaped, while Unicode-safe hyphen escaping and the input type guard remain intact.

## Run the regression
Use Node.js 20 or newer. Run npm install --ignore-scripts.
Run node --test reporush/regression.test.mjs. Run npm test for the upstream suite.

Upstream source, documentation and licenses are retained. One intentional source mutation and this regression test were added for training.
Binary/oversized files omitted: none.

The browser Run/Submit buttons perform static patch checks; run the Node regression for behavioral verification.
