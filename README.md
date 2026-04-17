# amb-ui-lib

A minimalist, fully-typed React UI library for modern applications. Ships with reusable components, a CSS utility module, design tokens, a class-name helper, and light/dark theme support — all with zero runtime dependencies beyond React 19+.

---

## Table of Contents

- [Installation](#installation)
- [Quick Start](#quick-start)
- [Features](#features)
- [Components](#components)
  - [Typography](#typography)
  - [Heading](#heading)
  - [Text](#text)
  - [Label](#label)
  - [Caption](#caption)
  - [Button](#button)
  - [Input](#input)
  - [Textarea](#textarea)
  - [Select](#select)
  - [TextField](#textfield)
  - [Switch](#switch)
  - [Checkbox](#checkbox)
  - [Radio](#radio)
  - [Stack](#stack)
  - [Row](#row)
  - [Grid](#grid)
  - [Container](#container)
  - [Section](#section)
  - [Page](#page)
  - [Card](#card)
- [Utility CSS](#utility-css)
- [Class-Name Helper — csx](#class-name-helper--csx)
- [Design Tokens](#design-tokens)
- [Theming](#theming)
- [TypeScript](#typescript)
- [Peer Dependencies](#peer-dependencies)
- [License](#license)

---

## Installation

```bash
npm install amb-ui-lib
```

---

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

export function App() {
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

---

## Features

| Category | What you get |
|---|---|
| **Typography** | `Typography`, `Heading`, `Text`, `Label`, `Caption` |
| **Layout** | `Stack`, `Row`, `Grid`, `Container`, `Section`, `Page` |
| **Form Controls** | `Button`, `Input`, `Textarea`, `Select`, `TextField`, `Switch`, `Checkbox`, `Radio` |
| **Surfaces** | `Card` (elevated / outlined / ghost) |
| **Utility CSS** | CSS Module with 700+ utility classes for spacing, color, layout, and responsive design |
| **Design Tokens** | JS objects for colors, spacing, typography, breakpoints, radii, and max-widths |
| **Theming** | Light and dark CSS Module themes with 140+ CSS custom properties each |
| **`csx` helper** | Tiny classnames utility for composing class strings |
| **TypeScript** | Full type definitions for every component, prop, and token |

---

## Components

Every component uses `React.forwardRef`, spreads remaining props onto the root element, and accepts `className` / `style` overrides.

---

### Typography

The base typography primitive. All other text components (`Heading`, `Text`, `Label`, `Caption`) delegate to this.

```tsx
import { Typography } from 'amb-ui-lib';

<Typography variant="heading" size="2xl" weight="bold">
  Custom heading
</Typography>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | `'display' \| 'heading' \| 'title' \| 'body' \| 'label' \| 'caption'` | `'body'` | Selects base font styles from the variant map |
| `as` | `React.ElementType` | `'span'` | HTML element to render |
| `size` | `'xs' \| 'sm' \| 'base' \| 'lg' \| 'xl' \| '2xl' \| '3xl' \| '4xl'` | from variant | Override font size |
| `weight` | `'normal' \| 'medium' \| 'semibold' \| 'bold'` | from variant | Override font weight |
| `letterSpacing` | `'tight' \| 'normal' \| 'wide'` | from variant | Override letter spacing |
| `lineHeight` | `number` | from variant | Override line height |

**Variant style defaults:**

| Variant | Size | Weight | Letter Spacing | Line Height | Font |
|---|---|---|---|---|---|
| `display` | `4xl` | `bold` | `tight` | `1.1` | Poppins (accent) |
| `heading` | `2xl` | `semibold` | `tight` | `1.25` | Poppins (accent) |
| `title` | `lg` | `semibold` | `normal` | `1.3` | Poppins (accent) |
| `body` | `base` | `normal` | `normal` | `1.6` | Inter (primary) |
| `label` | `sm` | `medium` | `wide` | `1.4` | Inter (primary) |
| `caption` | `xs` | `normal` | `normal` | `1.4` | Inter (primary) |

---

### Heading

Renders `<h1>` through `<h6>` based on the `level` prop.

```tsx
import { Heading } from 'amb-ui-lib';

<Heading level={1}>Page Title</Heading>
<Heading level={3}>Section Title</Heading>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `level` | `1 \| 2 \| 3 \| 4 \| 5 \| 6` | `1` | Heading level; maps to `<h1>`–`<h6>` |

**Level → font size mapping:** 1 → `4xl`, 2 → `3xl`, 3 → `2xl`, 4 → `xl`, 5 → `lg`, 6 → `base`

---

### Text

A paragraph component. Renders `<p>` with the `body` variant by default.

```tsx
import { Text } from 'amb-ui-lib';

<Text>Default body text.</Text>
<Text size="lg" weight="semibold">Larger emphasized text.</Text>
```

Accepts all `Typography` props except `as`.

---

### Label

A semantic `<label>` element styled with the `label` variant.

```tsx
import { Label } from 'amb-ui-lib';

<Label htmlFor="email">Email address</Label>
```

Extends `React.ComponentPropsWithoutRef<'label'>`.

---

### Caption

An inline `<span>` styled with the `caption` variant. Ideal for help text, timestamps, and secondary descriptions.

```tsx
import { Caption } from 'amb-ui-lib';

<Caption>Last updated 2 hours ago</Caption>
```

Extends `React.ComponentPropsWithoutRef<'span'>`.

---

### Button

A styled `<button>` with four variants, three sizes, loading state, and icon support.

```tsx
import { Button } from 'amb-ui-lib';

<Button variant="primary" size="lg">Save</Button>
<Button variant="danger" loading>Deleting…</Button>
<Button variant="ghost" leftIcon={<SearchIcon />}>Search</Button>
<Button variant="secondary" fullWidth>Full Width</Button>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | `'primary' \| 'secondary' \| 'ghost' \| 'danger'` | `'primary'` | Visual style |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Controls font size, padding, and min-height |
| `loading` | `boolean` | `false` | Shows a loading indicator and sets `aria-busy` |
| `fullWidth` | `boolean` | `false` | Stretches to 100% width |
| `leftIcon` | `ReactNode` | — | Icon placed before the label |
| `rightIcon` | `ReactNode` | — | Icon placed after the label |

**Size breakdown:**

| Size | Font Size | Min Height |
|---|---|---|
| `sm` | 14px | 32px |
| `md` | 16px | 40px |
| `lg` | 18px | 48px |

When `loading` or `disabled`, the button shows `opacity: 0.65` and `cursor: not-allowed`.

---

### Input

A styled `<input>` element with hover and focus states.

```tsx
import { Input } from 'amb-ui-lib';

<Input placeholder="Enter your name" size="md" />
<Input type="email" fullWidth />
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Controls font size, padding, and min-height |
| `fullWidth` | `boolean` | `false` | Stretches to 100% width |

Extends `React.InputHTMLAttributes<HTMLInputElement>` (minus native `size`).

---

### Textarea

A styled `<textarea>` with vertical resize and the same size/fullWidth API as `Input`.

```tsx
import { Textarea } from 'amb-ui-lib';

<Textarea placeholder="Write a message…" size="lg" fullWidth />
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Controls font size, padding, and min-height |
| `fullWidth` | `boolean` | `false` | Stretches to 100% width |

**Size min-heights:** `sm` → 96px, `md` → 120px, `lg` → 148px.

---

### Select

A styled native `<select>` with custom chevron overlay.

```tsx
import { Select } from 'amb-ui-lib';

<Select
  options={[
    { label: 'React', value: 'react' },
    { label: 'Vue', value: 'vue' },
    { label: 'Svelte', value: 'svelte' },
  ]}
  value={framework}
  onChange={(e) => setFramework(e.target.value)}
/>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `options` | `{ label: string; value: string }[]` | **(required)** | Selectable options |
| `value` | `string` | **(required)** | Current value |
| `onChange` | `ChangeEventHandler<HTMLSelectElement>` | **(required)** | Change handler |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Controls font size and padding |
| `fullWidth` | `boolean` | `false` | Stretches to 100% width |

---

### TextField

A composition component that wires together a `Label`, a form control (`Input` / `Textarea` / `Select`), and optional help text or error message with proper `aria-*` attributes.

```tsx
import { TextField, Input, Textarea, Select } from 'amb-ui-lib';

<TextField label="Email" helpText="We'll never share your email.">
  <Input type="email" />
</TextField>

<TextField label="Bio" error="Bio is required.">
  <Textarea />
</TextField>

<TextField label="Country">
  <Select options={countries} value={country} onChange={handleChange} />
</TextField>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `label` | `string` | — | Label text |
| `helpText` | `string` | — | Help text shown below the control |
| `error` | `string` | — | Error message; sets `aria-invalid` on the control |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Propagated to the child control |
| `fullWidth` | `boolean` | `false` | Propagated to the child control |
| `id` | `string` | auto-generated | Wired to `htmlFor` and `aria-describedby` |

`TextField` automatically:
- Generates an `id` and wires it between `<label>` and the control
- Sets `aria-describedby` pointing to help/error text
- Sets `aria-invalid` when `error` is provided
- Clones the child to inject `size` and `fullWidth`

---

### Switch

A toggle switch built on a hidden `<input type="checkbox">`.

```tsx
import { Switch } from 'amb-ui-lib';

<Switch checked={enabled} onChange={(e) => setEnabled(e.target.checked)}>
  Enable notifications
</Switch>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `checked` | `boolean` | — | Controlled checked state |
| `defaultChecked` | `boolean` | — | Uncontrolled initial state |
| `onChange` | `ChangeEventHandler<HTMLInputElement>` | **(required)** | Change handler |
| `disabled` | `boolean` | `false` | Disables the switch |
| `fullWidth` | `boolean` | `false` | Spreads the row to full width |
| `children` | `ReactNode` | — | Label text |

Track dimensions: 44 × 24px. Thumb: 20 × 20px circle.

---

### Checkbox

A styled checkbox with a hidden native `<input type="checkbox">`.

```tsx
import { Checkbox } from 'amb-ui-lib';

<Checkbox checked={agreed} onChange={(e) => setAgreed(e.target.checked)}>
  I agree to the terms
</Checkbox>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `ReactNode` | **(required)** | Label text |

Extends `React.InputHTMLAttributes<HTMLInputElement>` (minus `type` and `size`). Shows a `✓` checkmark when checked.

---

### Radio

A styled radio button with a hidden native `<input type="radio">`.

```tsx
import { Radio } from 'amb-ui-lib';

<Radio name="plan" value="free" checked={plan === 'free'} onChange={handleChange}>
  Free
</Radio>
<Radio name="plan" value="pro" checked={plan === 'pro'} onChange={handleChange}>
  Pro
</Radio>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `name` | `string` | **(required)** | Radio group name |
| `children` | `ReactNode` | **(required)** | Label text |

Shows a filled inner circle when checked.

---

### Stack

Vertical flex layout.

```tsx
import { Stack } from 'amb-ui-lib';

<Stack gap="lg" align="center">
  <div>Item 1</div>
  <div>Item 2</div>
</Stack>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `gap` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Space between children |
| `align` | `'start' \| 'center' \| 'end' \| 'stretch'` | `'start'` | Cross-axis alignment |

---

### Row

Horizontal flex layout.

```tsx
import { Row } from 'amb-ui-lib';

<Row gap="md" align="center" justify="between">
  <span>Left</span>
  <span>Right</span>
</Row>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `gap` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Space between children |
| `align` | `'start' \| 'center' \| 'end' \| 'stretch'` | `'start'` | Cross-axis alignment |
| `justify` | `'start' \| 'center' \| 'end' \| 'between'` | `'start'` | Main-axis justification |

---

### Grid

CSS Grid layout with a responsive `Grid.Item` sub-component.

```tsx
import { Grid } from 'amb-ui-lib';

<Grid columns={12} gap="md">
  <Grid.Item span={{ base: 12, md: 6, lg: 4 }}>Column A</Grid.Item>
  <Grid.Item span={{ base: 12, md: 6, lg: 4 }}>Column B</Grid.Item>
  <Grid.Item span={{ base: 12, md: 12, lg: 4 }}>Column C</Grid.Item>
</Grid>
```

**Grid props:**

| Prop | Type | Default | Description |
|---|---|---|---|
| `columns` | `number` | `12` | Number of grid columns |
| `gap` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Gap between items |
| `align` | `'start' \| 'center' \| 'end' \| 'stretch'` | `'stretch'` | Vertical alignment |
| `justify` | `'start' \| 'center' \| 'end' \| 'stretch'` | `'stretch'` | Horizontal alignment |

**Grid.Item props:**

| Prop | Type | Default | Description |
|---|---|---|---|
| `span` | `number \| { base?: number; sm?: number; md?: number; lg?: number; xl?: number }` | `12` | Column span — pass an object for responsive layouts |

When `span` is an object, `Grid.Item` dynamically generates a `<style>` tag with media queries for each breakpoint.

**Breakpoints:** `sm` = 640px, `md` = 768px, `lg` = 1024px, `xl` = 1280px.

---

### Container

Centers and constrains content width.

```tsx
import { Container } from 'amb-ui-lib';

<Container maxWidth="content" padding="lg" center>
  <p>Centered content</p>
</Container>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `maxWidth` | `'narrow' \| 'content' \| 'page' \| 'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'page'` | Max width constraint |
| `padding` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'lg'` | Horizontal padding |
| `center` | `boolean` | `true` | Centers with `margin: auto` |

**Max width values:** `narrow` = 720px, `content` = 980px, `page` = 1200px, `xs` = 640px, `sm` = 840px, `md` = 980px, `lg` = 1200px, `xl` = 1440px.

---

### Section

A semantic `<section>` wrapper with configurable padding.

```tsx
import { Section } from 'amb-ui-lib';

<Section padding="xl" as="article">
  <p>Content here</p>
</Section>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `as` | `React.ElementType` | `'section'` | HTML element to render |
| `padding` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'lg'` | Internal padding |

---

### Page

A full-page layout component with header, body, and footer slots. Renders `<main>` containing a `Container > Stack`.

```tsx
import { Page, Heading, Text } from 'amb-ui-lib';

<Page fullHeight containerMaxWidth="content">
  <Page.Header>
    <Heading level={1}>Dashboard</Heading>
  </Page.Header>
  <Page.Body>
    <Text>Main content area</Text>
  </Page.Body>
  <Page.Footer>
    <Text size="sm">© 2026</Text>
  </Page.Footer>
</Page>
```

**Page props:**

| Prop | Type | Default | Description |
|---|---|---|---|
| `fullHeight` | `boolean` | `false` | Sets `min-height: 100vh` |
| `containerMaxWidth` | `MaxWidthKey` | `'lg'` | Max width of the inner container |
| `containerPadding` | `SpacingKey` | `'lg'` | Padding of the inner container |
| `containerCenter` | `boolean` | `true` | Center the inner container |

**Sub-components:**

| Sub-component | Renders | Description |
|---|---|---|
| `Page.Header` | `<header>` | Top section of the page |
| `Page.Body` | `<section>` | Main content area |
| `Page.Footer` | `<footer>` | Bottom section of the page |

---

### Card

A surface component with three visual variants and clickable support.

```tsx
import { Card, Heading, Text, Button } from 'amb-ui-lib';

<Card variant="elevated" padding="lg" radius="md">
  <Card.Header>
    <Heading level={3}>Plan</Heading>
  </Card.Header>
  <Card.Content>
    <Text>Professional plan with all features.</Text>
  </Card.Content>
  <Card.Footer>
    <Button variant="primary">Upgrade</Button>
  </Card.Footer>
</Card>

<Card variant="outlined" clickable onClick={handleClick}>
  <Card.Content>
    <Text>Click me</Text>
  </Card.Content>
</Card>
```

**Card props:**

| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | `'elevated' \| 'outlined' \| 'ghost'` | `'elevated'` | Visual style |
| `padding` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Internal padding |
| `radius` | `'sm' \| 'md' \| 'lg'` | `'md'` | Border radius |
| `clickable` | `boolean` | `false` | Adds `role="button"`, hover lift, and `tabIndex=0` |
| `as` | `React.ElementType` | `'article'` | HTML element to render |

**Sub-components:**

| Sub-component | Renders | Description |
|---|---|---|
| `Card.Header` | `<header>` | Top section |
| `Card.Content` | `<div>` | Main content |
| `Card.Footer` | `<footer>` | Bottom section |

**Radius values:** `sm` = 8px, `md` = 16px, `lg` = 24px.

---

## Utility CSS

The library ships a comprehensive CSS Module at `styles/utils.module.css` with 700+ utility classes for spacing, colors, layout, typography, and responsive design.

```tsx
import styles from 'amb-ui-lib/styles/utils.module.css';

<div className={styles.grid}>
  <div className={styles.col}>Content</div>
</div>
```

### Utility categories

| Category | Examples |
|---|---|
| **Layout** | `grid`, `col`, `row`, `flex`, `justifyBetween`, `itemsCenter`, `flexWrap` |
| **Spacing** | `p1`–`p6`, `px1`–`px6`, `py1`–`py6`, `m1`–`m6`, `mx1`–`mx6`, `my1`–`my6`, `mt1`–`mt6`, `mb1`–`mb6` |
| **Typography** | `textBlue500`, `textSurface800`, `fontBold`, `fontMedium`, `textCenter`, `textLeft`, `textRight` |
| **Backgrounds** | `bgSurface0`–`bgSurface900`, `bgBlue50`–`bgBlue900`, `surfaceCard`, `surfaceSection`, `surfaceGround` |
| **Borders** | `border100`–`border900`, `borderPrimary`, `roundedSm`, `roundedMd`, `roundedLg` |
| **Text colors** | `textSurface0`–`textSurface900`, `textBlue50`–`textBlue900`, etc. for all palette scales |
| **Border colors** | `borderSurface100`–`borderSurface900`, `borderBlue500`, etc. |
| **Responsive** | Prefix any class with `sm`, `md`, `lg`, or `xl`: `smCol6`, `mdPx4`, `lgTextBlue500`, `xlGrid` |

### CSS Modules camelCase mapping

Class names are defined in kebab-case CSS but exported as camelCase in JavaScript:

| CSS class | JS access |
|---|---|
| `bg-surface-200` | `styles.bgSurface200` |
| `text-blue-500` | `styles.textBlue500` |
| `border-primary` | `styles.borderPrimary` |
| `rounded-lg` | `styles.roundedLg` |
| `sm-col-6` | `styles.smCol6` |

### Combining utilities

```tsx
import styles from 'amb-ui-lib/styles/utils.module.css';
import { csx } from 'amb-ui-lib';

<div className={csx(styles.bgSurface100, styles.p4, styles.roundedMd)}>
  Styled with utilities
</div>
```

---

## Class-Name Helper — `csx`

A tiny utility for conditionally joining class names. Filters out `false`, `null`, and `undefined` values.

```ts
import { csx } from 'amb-ui-lib';

csx('card', isActive && 'card-active', className);
// → "card card-active" (if isActive is true)
// → "card" (if isActive is false)
```

**Signature:**

```ts
function csx(...classNames: Array<string | false | null | undefined>): string;
```

Works great with CSS Module utility classes:

```tsx
import styles from 'amb-ui-lib/styles/utils.module.css';
import { csx } from 'amb-ui-lib';

<div className={csx(
  styles.p4,
  styles.roundedMd,
  isHighlighted && styles.bgBlue50,
  isDark && styles.bgSurface900,
)}>
  Conditionally styled
</div>
```

---

## Design Tokens

All design tokens are exported as JavaScript objects for use in inline styles, theme customization, or any context where you need raw values.

```ts
import { color, spacing, breakpoints, maxWidths, radii } from 'amb-ui-lib';
import { fontSizes, fontWeights, lineHeights, letterSpacings, fonts } from 'amb-ui-lib';
```

### Color Tokens

The `color` object contains the full palette — 130+ named color values:

```ts
import { color } from 'amb-ui-lib';

color.primary     // '#3B82F6'
color.text        // '#495057'
color.background  // '#f8fafc'
color.surface     // '#ffffff'
color.border      // '#dee2e6'
color.danger      // '#dc3545'
color.accent      // '#6366f1'

// Full shade scales (50–900):
color.blue500     // '#3b82f6'
color.green300    // '#76db9b'
color.red900      // '#661814'
color.surface200  // '#EEEEEE'
color.primary700  // '#295bac'
```

**Available color scales:** `surface`, `blue`, `green`, `yellow`, `cyan`, `pink`, `indigo`, `teal`, `orange`, `bluegray`, `purple`, `red`, `primary`, `gray` — each with shades `50` through `900`.

### Spacing Tokens

```ts
import { spacing } from 'amb-ui-lib';

spacing.xs  // 4
spacing.sm  // 8
spacing.md  // 16
spacing.lg  // 24
spacing.xl  // 32
```

### Typography Tokens

```ts
import { fontSizes, fontWeights, lineHeights, letterSpacings, fonts } from 'amb-ui-lib';

fontSizes.xs    // 12
fontSizes.sm    // 14
fontSizes.base  // 16
fontSizes.lg    // 18
fontSizes.xl    // 20
fontSizes['2xl'] // 24
fontSizes['3xl'] // 30
fontSizes['4xl'] // 36

fontWeights.normal    // 400
fontWeights.medium    // 500
fontWeights.semibold  // 600
fontWeights.bold      // 700

lineHeights.display  // 1.1
lineHeights.heading  // 1.25
lineHeights.title    // 1.3
lineHeights.body     // 1.6
lineHeights.label    // 1.4
lineHeights.caption  // 1.4

letterSpacings.tight   // '-0.02em'
letterSpacings.normal  // '0em'
letterSpacings.wide    // '0.02em'

fonts.primary  // 'Inter, ui-sans-serif, system-ui, …'
fonts.accent   // 'Poppins, ui-sans-serif, system-ui, …'
```

### Layout Tokens

```ts
import { breakpoints, maxWidths, radii } from 'amb-ui-lib';

breakpoints.sm  // 640
breakpoints.md  // 768
breakpoints.lg  // 1024
breakpoints.xl  // 1280

maxWidths.narrow   // 720
maxWidths.content  // 980
maxWidths.page     // 1200
maxWidths.xl       // 1440

radii.sm  // 8
radii.md  // 16
radii.lg  // 24
```

### Using tokens with utility CSS

```tsx
import styles from 'amb-ui-lib/styles/utils.module.css';
import { color } from 'amb-ui-lib';

<div className={styles.bgSurface200} style={{ color: color.blue500 }}>
  CSS utility background + JS token text color
</div>
```

---

## Theming

The library ships two scoped CSS Module themes — light and dark — each defining 140+ CSS custom properties (`--amb-*`).

### Applying a theme

```tsx
import lightTheme from 'amb-ui-lib/styles/themes/amb-light.module.css';
import darkTheme from 'amb-ui-lib/styles/themes/amb-dark.module.css';
import { useState } from 'react';

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className={isDark ? darkTheme.root : lightTheme.root}>
      <button onClick={() => setIsDark(!isDark)}>Toggle Theme</button>
      {/* All children will inherit theme variables */}
    </div>
  );
}
```

### Theme CSS custom properties

Both themes set the same custom property names with different values:

| Property | Light | Dark |
|---|---|---|
| `--amb-text-color` | `#495057` | `rgba(255,255,255,0.87)` |
| `--amb-text-muted-color` | `#6c757d` | `rgba(255,255,255,0.6)` |
| `--amb-primary-color` | `#3B82F6` | `#93C5FD` |
| `--amb-primary-contrast-color` | `#ffffff` | `hsl(213,16%,13%)` |
| `--amb-surface-0` … `--amb-surface-900` | Light scale | Dark scale |
| `--amb-blue-50` … `--amb-blue-900` | Full blue palette | Full blue palette |
| `--amb-green-*`, `--amb-red-*`, `--amb-yellow-*`, etc. | Full palettes | Full palettes |
| `--amb-gray-50` … `--amb-gray-900` | Light grays | Inverted dark grays |
| `--amb-primary-50` … `--amb-primary-900` | Blue-based | Light-blue-based |
| `color-scheme` | `light` | `dark` |

The light theme file is `amb-light.module.css` and the dark theme file is `amb-dark.module.css`, both located under `styles/themes/`.

### Using theme variables in custom CSS

```css
.my-component {
  color: var(--amb-text-color);
  background: var(--amb-surface-50);
  border: 1px solid var(--amb-surface-200);
  border-radius: var(--amb-content-border-radius);
}

.my-button {
  background: var(--amb-primary-color);
  color: var(--amb-primary-contrast-color);
}
```

---

## TypeScript

Every component, prop interface, and token type is fully typed. Key exported types:

```ts
import type {
  TypographyVariant,   // 'display' | 'heading' | 'title' | 'body' | 'label' | 'caption'
  FontSizeKey,         // 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl'
  FontWeightKey,       // 'normal' | 'medium' | 'semibold' | 'bold'
  LetterSpacingKey,    // 'tight' | 'normal' | 'wide'
  SpacingKey,          // 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  MaxWidthKey,         // 'narrow' | 'content' | 'page' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  RadiusKey,           // 'sm' | 'md' | 'lg'
  BreakpointKey,       // 'sm' | 'md' | 'lg' | 'xl'
} from 'amb-ui-lib';
```

---

## Peer Dependencies

| Package | Version |
|---|---|
| `react` | `^19.0.0` |
| `react-dom` | `^19.0.0` |

---

## License

MIT
