# @amb/ui-typography

A small React typography system built with a fixed scale, semantic variants, and tokenized styles.

## Features

- Fixed font-size scale: `xs`, `sm`, `base`, `lg`, `xl`, `2xl`, `3xl`, `4xl`
- Semantic variants: `display`, `heading`, `title`, `body`, `label`, `caption`
- Tokenized fonts, weights, line heights, and letter spacing
- Simple React components: `Typography`, `Heading`, `Text`, `Label`, `Caption`

## Usage

```tsx
import { Typography, Heading, Text, Label, Caption } from '@amb/ui-typography';

export function Example() {
  return (
    <>
      <Heading level={1}>Hero title</Heading>
      <Text>Body text uses the same consistent scale and line-height rules.</Text>
      <Label>Username</Label>
      <Caption>Helper text or meta information.</Caption>
    </>
  );
}
```

## Documentation site

Run the docs app locally:

```bash
npm run docs:dev
```

Build the docs for production:

```bash
npm run docs:build
```

## Layout primitives

This library now includes foundational layout primitives:

- `Container` — max width, horizontal padding, centering
- `Stack` — vertical spacing and simple flex layout
- `Section` — content grouping with consistent padding
- `Page` — composition layer for page structure with header/body/footer
