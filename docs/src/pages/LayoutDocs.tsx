import { Container, Heading, Page, Row, Section, Stack, Text, csx } from '@amb-ui';
import { LiveExample, PropTable } from '../components/DocComponents';
import styles from '../../../styles/utils/utils.module.css';

const stackProps = [
  { name: 'gap', type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'", description: 'Spacing between items.', default: "'md'" },
  { name: 'align', type: "'start' | 'center' | 'end' | 'stretch'", description: 'Cross-axis alignment.', default: "'start'" },
];

const rowProps = [
  { name: 'gap', type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'", description: 'Spacing between items.', default: "'md'" },
  { name: 'align', type: "'start' | 'center' | 'end' | 'stretch'", description: 'Cross-axis alignment (vertical).', default: "'start'" },
  { name: 'justify', type: "'start' | 'center' | 'end' | 'between'", description: 'Main-axis alignment (horizontal).', default: "'start'" },
];

const containerProps = [
  { name: 'maxWidth', type: "'narrow' | 'content' | 'page' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'", description: 'Maximum width of the container.', default: "'page'" },
  { name: 'padding', type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'", description: 'Horizontal padding.', default: "'lg'" },
  { name: 'center', type: 'boolean', description: 'Whether to center the container horizontally.', default: 'true' },
];

const sectionProps = [
  { name: 'padding', type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'", description: 'All-around padding for the section.', default: "'lg'" },
  { name: 'as', type: 'ElementType', description: 'The HTML element to render.', default: "'section'" },
];

export default function LayoutDocs() {
  return (
    <Page>
      <Page.Header>
        <div className="section-header">
          <Heading level={1}>Layout</Heading>
          <Text size="lg">
            Essential primitives for managing spacing, alignment, and distribution.
          </Text>
        </div>
      </Page.Header>

      <Page.Body>
        <Stack gap="xl">
          <Section>
            <Heading level={2}>Stack</Heading>
            <Text>
              The <code>Stack</code> component is used to lay out items vertically with consistent spacing.
            </Text>
            <LiveExample code={`<Stack gap="md">
  <div className={styles.p3 + ' ' + styles.bgSurface50 + ' ' + styles.roundedLg}>Item 1</div>
  <div className={styles.p3 + ' ' + styles.bgSurface50 + ' ' + styles.roundedLg}>Item 2</div>
  <div className={styles.p3 + ' ' + styles.bgSurface50 + ' ' + styles.roundedLg}>Item 3</div>
</Stack>`}>
              <Stack gap="md" className={styles.wFull}>
                <div className={csx(styles.p3, styles.bgSurface50, styles.roundedLg)}>Item 1</div>
                <div className={csx(styles.p3, styles.bgSurface50, styles.roundedLg)}>Item 2</div>
                <div className={csx(styles.p3, styles.bgSurface50, styles.roundedLg)}>Item 3</div>
              </Stack>
            </LiveExample>
            <PropTable props={stackProps} />
          </Section>

          <Section>
            <Heading level={2}>Row</Heading>
            <Text>
              The <code>Row</code> component is used to lay out items horizontally with consistent spacing and alignment options.
            </Text>
            <LiveExample code={`<Row gap="lg" align="center" justify="between">
  <div className={styles.p3 + ' ' + styles.bgSurface50 + ' ' + styles.roundedLg}>Left</div>
  <div className={styles.p3 + ' ' + styles.bgSurface50 + ' ' + styles.roundedLg}>Right</div>
</Row>`}>
              <Row gap="lg" align="center" justify="between" className={styles.wFull}>
                <div className={csx(styles.p3, styles.bgSurface50, styles.roundedLg)}>Left</div>
                <div className={csx(styles.p3, styles.bgSurface50, styles.roundedLg)}>Right</div>
              </Row>
            </LiveExample>
            <PropTable props={rowProps} />
          </Section>

          <Section>
            <Heading level={2}>Utility CSS Module</Heading>
            <Text>
              In addition to layout primitives, you can use the library's CSS utility module for class-based grid and spacing helpers.
            </Text>
            <pre className="example-code">
              <code>{`import styles from 'amb-ui-lib/styles/utils.module.css';

function Example() {
  return (
    <div className={styles.grid}>
      <div className={styles.col}>Column 1</div>
      <div className={styles.col}>Column 2</div>
    </div>
  );
}`}</code>
            </pre>
            <Text>
              This is useful for quick structural layouts where you want the benefits of utility classes without adding additional style definitions.
            </Text>
          </Section>

          <Section>
            <Heading level={2}>Container</Heading>
            <Text>
              The <code>Container</code> centers your content horizontally and limits its maximum width.
            </Text>
            <LiveExample code={`<Container maxWidth="md" padding="md">
  <div className={styles.p6 + ' ' + styles.bgSurface50 + ' ' + styles.borderDashed + ' ' + styles.border200 + ' ' + styles.roundedLg}>
    Container content
  </div>
</Container>`}>
              <Container maxWidth="md" padding="md" className={csx(styles.borderSolid, styles.border200, styles.roundedLg)}>
                <div className={csx(styles.p6, styles.bgSurface50, styles.borderDashed, styles.border200, styles.textCenter)}>
                  Container content
                </div>
              </Container>
            </LiveExample>
            <PropTable props={containerProps} />
          </Section>

          <Section>
            <Heading level={2}>Section</Heading>
            <Text>
              A simple block-level container with consistent padding. Useful for dividing pages into logical parts.
            </Text>
            <LiveExample code={`<Section padding="xl" className={styles.bgSurface50}>
  <Heading level={3}>Section Title</Heading>
  <Text>Section content with generous XL padding.</Text>
</Section>`}>
              <Section padding="xl" className={csx(styles.bgSurface50, styles.wFull, styles.borderSolid, styles.border200, styles.roundedLg)}>
                <Heading level={3}>Section Title</Heading>
                <Text>Section content with generous XL padding.</Text>
              </Section>
            </LiveExample>
            <PropTable props={sectionProps} />
          </Section>
        </Stack>
      </Page.Body>
    </Page>
  );
}
