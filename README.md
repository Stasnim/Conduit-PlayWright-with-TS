# Playwright Automation Framework (TypeScript)

A scalable end-to-end test automation framework built with **Playwright** and **TypeScript** following modern SDET best practices.

## Features

- Playwright with TypeScript
- Page Object Model (POM)
- API Authentication
- UI Testing
- API Testing
- Cross-browser execution
- Automatic waiting
- HTML Reports
- Screenshots on failure
- Trace Viewer support
- Environment configuration
- CI/CD ready

---

## Tech Stack

| Technology | Version |
|------------|----------|
| Playwright | Latest |
| TypeScript | Latest |
| Node.js | 18+ |
| npm | Latest |

---

## Project Structure

```
.
├── tests/
│   ├── articles/
│   ├── auth/
│   └── ...
│
├── pages/
│   ├── HomePage.ts
│   ├── LoginPage.ts
│   └── ...
│
├── utils/
├── fixtures/
├── playwright.config.ts
├── package.json
└── README.md
```

---

## Installation

Clone the repository

```bash
git clone https://github.com/<your-username>/<repository-name>.git
```

Go to project directory

```bash
cd <repository-name>
```

Install dependencies

```bash
npm install
```

Install Playwright browsers

```bash
npx playwright install
```

---

## Running Tests

Run all tests

```bash
npx playwright test
```

Run headed mode

```bash
npx playwright test --headed
```

Run a single test

```bash
npx playwright test tests/articles/tagFilter.spec.ts
```

Run a specific browser

```bash
npx playwright test --project=chromium
```

Debug tests

```bash
npx playwright test --debug
```

UI Mode

```bash
npx playwright test --ui
```

---

## Reports

Generate HTML report

```bash
npx playwright show-report
```

Playwright also provides:

- HTML Report
- Trace Viewer
- Screenshots
- Videos (optional)

---

## Framework Design

This framework follows:

- Page Object Model (POM)
- Reusable locators
- Reusable page methods
- Separation of test and page logic
- Playwright locator best practices
- API-first authentication
- Maintainable assertions

---

## Best Practices Used

- Prefer `getByRole()` when possible
- Use `getByText()` for visible text
- Avoid brittle CSS selectors
- Avoid hard waits (`waitForTimeout`)
- Use Playwright auto-waiting
- Use explicit assertions
- Keep tests independent
- Reuse page objects
- Use meaningful test names

---

## Sample Test

```typescript
test('Filter articles by tag', async ({ page }) => {
  const homePage = new HomePage(page);

  await homePage.goto();
  await homePage.selectTag('Test');
  await homePage.verifyArticlesVisible();
});
```

---

## Current Test Coverage

- User Authentication
- Article Creation
- Article Filtering
- Tag Filtering
- Feed Verification
- API Authentication
- UI Validation


## Author

**Sifat-E-Tasnim**
