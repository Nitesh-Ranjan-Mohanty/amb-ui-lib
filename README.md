# amb-ui-lib

A minimalist, performance-focused React UI library with typography and layout primitives.

## Install

```bash
npm install amb-ui-lib
```

## Usage

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

- **Typography**: `Heading`, `Text`, `Label`, `Caption`, and the base `Typography` primitive.
- **Layout**: `Stack`, `Row`, `Grid`, `Container`, `Section`, and `Page` for structured, responsive layouts.
- **Components**: Polished primitives like `Button` and `Card`.
- **Tokenized**: Shared tokens for spacing, typography, and radii.
- **Modern**: Built for React 19+ with full TypeScript support.
- **Performant**: Minimal runtime overhead and small bundle size.

## Documentation site

Run locally:

```bash
npm run docs:dev
```

Build for production:

```bash
npm run docs:build
```
