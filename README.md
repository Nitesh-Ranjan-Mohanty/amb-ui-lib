# amb-ui-lib

A minimalist React UI library built for modern apps with reusable components, CSS utilities, and design tokens.

## Install

```bash
npm install amb-ui-lib
```

## Quick Start

```tsx
import {
  Heading,
  Text,
  Stack,
  Row,
  Button,
  Card,
  Page,
} from 'amb-ui-lib';

export function Example() {
  return (
    <Page>
      <Page.Header>
        <Heading level={1}>Welcome</Heading>
      </Page.Header>
      <Page.Body>
        <Stack gap="lg">
          <Card>
            <Card.Content>
              <Text>This is a minimalist UI component system.</Text>
            </Card.Content>
          </Card>
          <Row gap="md" align="center">
            <Button variant="primary">Get Started</Button>
            <Button variant="secondary">Learn More</Button>
          </Row>
        </Stack>
      </Page.Body>
    </Page>
  );
}
```

## Features

- **Typography**: `Heading`, `Text`, `Label`, `Caption`, and `Typography`.
- **Layout**: `Stack`, `Row`, `Grid`, `Container`, `Section`, and `Page`.
- **Components**: `Button`, `Card`, `TextField`, `Select`, and more.
- **Utility CSS**: CSS Module utilities for spacing, layout, colors, and responsive styling.
- **Design tokens**: Shared palette, spacing, typography, and breakpoint tokens.
- **TypeScript friendly**: Built for React 19+ with strong typings.

## Utility CSS

The library publishes a branded utility bundle as a CSS Module at <code>styles/utils.module.css</code>.

```tsx
import styles from 'amb-ui-lib/styles/utils.module.css';

export function Example() {
  return (
    <div className={styles.grid}>
      <div className={styles.col}>Content</div>
    </div>
  );
}
```

### Utility categories

- Layout: `grid`, `col`, `row`, `flex`, `justifyBetween`, `itemsCenter`
- Spacing: `p3`, `px2`, `mb4`, `mt1`, `mx3`, `py2`
- Typography: `textBlue500`, `textSurface800`, `fontBold`, `textCenter`
- Backgrounds: `bgSurface50`, `bgSurface200`, `surfaceCard`, `surfaceSection`
- Borders: `border200`, `borderPrimary`, `roundedLg`
- Responsive: `smCol6`, `mdPx4`, `lgTextBlue500`, `xlGrid`

### CSS Modules camelCase behavior

Utility class names are defined with dashed CSS, but the module exports them in camelCase.

- CSS class: `bg-surface-200`
- JS access: `styles.bgSurface200`

```tsx
import styles from 'amb-ui-lib/styles/utils.module.css';

<div className={styles.bgSurface200}>
  Surface background
</div>
```

## Design Tokens

Raw design tokens are exported for JavaScript usage. Use <code>color</code> for the full shade palette and <code>spacing</code> for consistent layout spacing.

```ts
import { color, spacing } from 'amb-ui-lib';

console.log(color.blue500); // #3b82f6
console.log(color.surface200); // #EEEEEE
console.log(spacing.md); // 16
```

### Use tokens with utility classes

```tsx
import styles from 'amb-ui-lib/styles/utils.module.css';
import { color } from 'amb-ui-lib';

<div className={styles.bgSurface200} style={{ color: color.blue500 }}>
  Surface background with token color
</div>
```

## Theming

Use theme modules to switch the visual theme for your app.

```ts
import lightTheme from 'amb-ui-lib/styles/themes/one-light.module.css';
import darkTheme from 'amb-ui-lib/styles/themes/one-dark.module.css';

function App({ isDark }) {
  return (
    <div className={isDark ? darkTheme.root : lightTheme.root}>
      {/* app content */}
    </div>
  );
}
```

## Documentation site

Run locally:

```bash
npm run docs:dev
```

Build for production:

```bash
npm run docs:build
```
