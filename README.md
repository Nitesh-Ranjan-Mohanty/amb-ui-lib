# amb-ui-lib

A small React UI library with typography and layout primitives.

## Install

```bash
npm install amb-ui-lib
```

## Usage

```tsx
import {
  Heading,
  Text,
  Label,
  Caption,
  Container,
  Stack,
  Section,
  Page,
} from 'amb-ui-lib';

export function Example() {
  return (
    <Page>
      <Section>
        <Container>
          <Heading level={1}>Hero title</Heading>
          <Text>Body text uses the same consistent scale and line-height rules.</Text>
          <Label>Username</Label>
          <Caption>Helper text or meta information.</Caption>
        </Container>
      </Section>
    </Page>
  );
}
```

## Features

- React typography components: `Heading`, `Text`, `Label`, `Caption`
- Layout primitives: `Container`, `Stack`, `Section`, `Page`
- Tokenized styles for typography and layout
- Built for React 19 with TypeScript support

## Documentation site

Run locally:

```bash
npm run docs:dev
```

Build for production:

```bash
npm run docs:build
```
