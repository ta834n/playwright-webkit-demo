## Only Ubuntu LTS supported!

https://github.com/microsoft/playwright/issues/19862

# Install

- `npm install` install dependencies.
- `npx playwright install` install playwright.

# Commands

- `npx playwright test` run all Tests.
- `npx playwright test --trace on` run all tests with trace mode.
- `npx playwright test --update-snapshots` creates new snapshots for the tests
- `sh ./autoTest.sh <testFile>` run the current test config of playwright 100 times

NOTE: on the first try of the tests they will `fail`. run again (snapshots are now taken)

---
# Test Results:

## Ubuntu 22.04 LTS
* playwright **chromium** version: `110.0.5481.38`
* playwright **webkit** version: `16.4`
* legend:
  - `DA`: Disabled Animations

using `.toMatchSnapshot(name)`

| sample                     | Chromium | DA  | WebKit | DA  | tries |
|----------------------------|----------|-----|--------|-----|-------|
| Landing Page               | ✅        | ✅   | ❌      | ❌   | 100   |
| Theme Toggle (transitions) | ❌        | ✅   | ❌      | ❌   | 200   |

using `.toHaveScreenShot(name)`

| sample                     | Chromium | DA  | WebKit | DA  | tries |
|----------------------------|----------|-----|--------|-----|-------|
| Landing Page               | ✅        | ✅   | ✅      | ✅   | 100   |
| Theme Toggle (transitions) | ✅        | ✅   | ✅      | ✅   | 200   |


---
# Behavior `toHaveScreenshot` vs `toMatchSnapshot`
`Source Code`: https://github.com/microsoft/playwright/blob/91da67fab16d76fbf1c174cd7f335f805cd16833/packages/playwright-test/src/matchers/toMatchSnapshot.ts <br>
## toHaveScreenshot
DOC: https://playwright.dev/docs/api/class-pageassertions#page-assertions-to-have-screenshot-2 <br>
This function will wait until two consecutive page screenshots yield the same result,
and then compare the last screenshot of them with the expectation screenshot stored in the snapshots.

## toMatchSnapshot
DOC: https://playwright.dev/docs/api/class-snapshotassertions <br>
Ensures that passed value, either a `string` or a `Buffer`, matches the expected snapshot stored in the test snapshots directory. <br>
there is no public callable method to take a sequence of screenshots like in `toHaveScreenshot`. you must either use your own method for
this or use the given toHaveScreenshot assertion
