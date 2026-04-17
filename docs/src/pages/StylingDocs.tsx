import { Heading, Page, Section, Stack, Text, Caption } from '@amb-ui';
import { Note } from '../components/DocComponents';

export default function StylingDocs() {
  return (
    <Page>
      <Page.Header>
        <div className="section-header">
          <Heading level={1}>Styling Guide</Heading>
          <Text size="lg">
            Learn how to use utility CSS, design tokens, and theming together in amb-ui-lib.
          </Text>
        </div>
      </Page.Header>

      <Page.Body>
        <Stack gap="xl">
          <Section>
            <Heading level={2}>Overview</Heading>
            <Text>
              amb-ui-lib combines CSS Modules-based utilities with design tokens so you can build flexible layouts and consistent visual styles without writing custom CSS.
            </Text>
            <Note title="Core idea">
              Use utilities for structure and quick styling, and use design tokens for exact values and theme-aware color access.
            </Note>
          </Section>

          <Section>
            <Heading level={2}>Importing the Utility Module</Heading>
            <Text>
              The utility CSS bundle is published as a CSS Module at <code>styles/utils.module.css</code>. Import it once in your component and use the exported class names.
            </Text>
            <pre className="example-code">
              <code>{`import styles from 'amb-ui-lib/styles/utils.module.css';

function Layout() {
  return (
    <div className={styles.grid}>
      <div className={styles.col12}>
        <header className={styles.p3}>Header</header>
      </div>
      <div className={styles.col4}>Sidebar</div>
      <div className={styles.col8}>Main Content</div>
    </div>
  );
}`}</code>
            </pre>
          </Section>

          <Section>
            <Heading level={2}>How CSS Modules Export Utilities</Heading>
            <Text>
              Utility class names are defined with dashes in CSS, but the module exports them in camelCase for JavaScript usage.
            </Text>
            <pre className="example-code">
              <code>{`// CSS class: bg-surface-200
// JS access: styles.bgSurface200

<div className={styles.bgSurface200}>Surface background</div>`}</code>
            </pre>
          </Section>

          <Section>
            <Heading level={2}>Composing class names</Heading>
            <Text>
              Use the <code>csx</code> helper to compose CSS module class names cleanly and avoid manual string concatenation.
            </Text>
            <pre className="example-code">
              <code>{`import { csx, styles } from 'amb-ui-lib';

<button className={csx(
  styles.button,
  styles.variant,
  styles.roundedLg
)}>
  Click me
</button>`}</code>
            </pre>
          </Section>

          <Section>
            <Heading level={2}>Utility Categories</Heading>
            <Text>
              The utility module is organized around common patterns for layout, spacing, typography, color, and responsive behavior.
            </Text>
            <ul>
              <li><strong>Layout:</strong> <code>grid</code>, <code>col</code>, <code>flex</code>, <code>justifyBetween</code>, <code>itemsCenter</code></li>
              <li><strong>Spacing:</strong> <code>p3</code>, <code>px2</code>, <code>mb4</code>, <code>mt1</code>, <code>mx3</code>, <code>py2</code></li>
              <li><strong>Typography:</strong> <code>textBlue500</code>, <code>textSurface800</code>, <code>fontBold</code>, <code>textCenter</code></li>
              <li><strong>Backgrounds:</strong> <code>bgSurface50</code>, <code>bgSurface200</code>, <code>surfaceCard</code>, <code>surfaceSection</code></li>
              <li><strong>Borders:</strong> <code>border200</code>, <code>borderPrimary</code>, <code>roundedLg</code></li>
              <li><strong>Responsive:</strong> <code>smCol6</code>, <code>mdPx4</code>, <code>lgTextBlue500</code>, <code>xlGrid</code></li>
            </ul>
          </Section>

          <Section>
            <Heading level={2}>Spacing Utilities</Heading>
            <Text>
              Use the spacing scale to apply margin and padding. The naming pattern is <code>[property][side]-[size]</code>.
            </Text>
            <ul>
              <li><code>p</code> = padding</li>
              <li><code>m</code> = margin</li>
              <li><code>t</code>, <code>b</code>, <code>l</code>, <code>r</code> = top, bottom, left, right</li>
              <li><code>x</code>, <code>y</code> = horizontal, vertical</li>
            </ul>
            <pre className="example-code">
              <code>{`<div className={styles.mb4}>Margin bottom</div>
<div className={styles.px2}>Horizontal padding</div>
<div className={styles.pt1}>Top padding</div>`}</code>
            </pre>
          </Section>

          <Section>
            <Heading level={2}>Color & Surface Utilities</Heading>
            <Text>
              Use color utilities and surface helpers to style backgrounds, borders, and text in a theme-aware way.
            </Text>
            <pre className="example-code">
              <code>{`<div className={styles.bgSurface50}>Surface background</div>
<div className={styles.textBlue500}>Primary blue text</div>
<div className={styles.border200}>Subtle border</div>`}</code>
            </pre>
            <Text>
              For common surface patterns, use helpers like <code>surfaceCard</code>, <code>surfaceSection</code>, and <code>surfaceGround</code>.
            </Text>
            <pre className="example-code">
              <code>{`<div className={styles.surfaceCard}>Card surface</div>
<div className={styles.surfaceSection}>Section surface</div>
<div className={styles.surfaceGround}>Page surface</div>`}</code>
            </pre>
          </Section>

          <Section>
            <Heading level={2}>Responsive Utilities</Heading>
            <Text>
              Prefix utilities with breakpoint names to apply them only at specific screen sizes.
            </Text>
            <ul>
              <li><code>sm</code> = small screens</li>
              <li><code>md</code> = medium screens</li>
              <li><code>lg</code> = large screens</li>
              <li><code>xl</code> = extra-large screens</li>
            </ul>
            <pre className="example-code">
              <code>{`<div className={styles.smCol12}>Full width on small screens</div>
<div className={styles.mdCol6}>Half width on medium screens</div>`}</code>
            </pre>
          </Section>

          <Section>
            <Heading level={2}>Theming</Heading>
            <Text>
              Switch the visual theme by applying theme module styles at the app root.
            </Text>
            <pre className="example-code">
              <code>{`import lightTheme from 'amb-ui-lib/styles/themes/amb-light.module.css';
import darkTheme from 'amb-ui-lib/styles/themes/amb-dark.module.css';

function App({ isDark }) {
  return (
    <div className={isDark ? darkTheme.root : lightTheme.root}>
      {/* app content */}
    </div>
  );
}`}</code>
            </pre>
          </Section>

          <Section>
            <Heading level={2}>Design Tokens</Heading>
            <Text>
              Use design tokens when you need explicit values in JavaScript or when you want to build custom styles with consistent palette values.
            </Text>
            <pre className="example-code">
              <code>{`import { spacing, color, breakpoints } from 'amb-ui-lib';

console.log(color.blue500); // #3b82f6
console.log(spacing.md);    // 16`}</code>
            </pre>
            <Text>
              Tokens are the source of truth for your colors, spacing, typography, and layout breakpoints.
            </Text>
          </Section>
        </Stack>
      </Page.Body>
    </Page>
  );
}
