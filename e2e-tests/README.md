## DevDependencies

- `@axe-core/playwright`

## Project Structure

- Add e2e tests without mocked backends in app project dirs

- Add integration tests with mocked backends in shell and feature libs project dirs

- Add `e2e` target to the app project project.json for it to be considered
  during Nx affected computations.

- WIP: considerations for ui-e2e and api-e2e.

## Test Suite

A test suite is defined by a `test.describe(...)` block

## Grep tags

- `@smoke`

  - Examples:
    - Check that the shell html element of an UI feature loaded and rendered.

- `@functional`

  - checks user-flow meets business requirements

- `@api`

  - checks a backend service's endpoint request and response

- `@performance`

  - Test non-functional requirements
  - Examples:
    - Check ui loading time
    - Check network requests

- `@security`

  - Examples:
    - Check network requests and their properties
    - Check Storage and Cookies contents

- `@accessibility`

  - Examples:
    - Check whether there are any WCAG violations
    - Check keyboard-navigation user-flows
    - Check the accessibility DOM tree.

- `@visual`
  - May mock backend services. TODO: consider must
  - May check a screenshot
  - May check an element's css style

Note Sometimes, visual tests can share responsability with @accessibility tests.
How to chose the right tag for my test?

- If failure to the test violates accessibility, but the user still can
  see the feature, even if styles and UI is not pleasant, consider tagging
  the test as @accessibility.

## Runner Config & Best Practices

Run tests in parallel mode by default

- Set global default config to run tests inside of a test suite in parallel by
  default. If a particular test suite has tests that need to run in series (sequentially), override the global configuration within the specific test suite.

- This helps test authors think in terms of composing parallelizable tests first,
  and reduce tests that are tightly couple to other tests (and thus needed to be
  run in series). We understand that some tests need to be run in series.
