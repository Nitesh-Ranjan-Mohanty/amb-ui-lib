import { Heading, Page, Section, Stack, Text, csx } from '@amb-ui';
import { LiveExample } from '../components/DocComponents';
import styles from '../../../styles/utils/utils.module.css';

export default function WidthDocs() {
  return (
    <Page>
      <Page.Header>
        <div className="section-header">
          <Heading level={1}>Width</Heading>
          <Text size="lg">Control element width with fluid, fixed, and responsive utilities.</Text>
        </div>
      </Page.Header>

      <Page.Body>
        <Stack gap="xl">
          <Section>
            <Heading level={2}>Fluid width</Heading>
            <Text>Use percentage width helpers to size elements in a 12-column fluid grid.</Text>
            <ul>
              <li><code>w-full</code> — full width.</li>
              <li><code>w-1</code> through <code>w-12</code> — fractional widths based on 12 columns.</li>
              <li><code>w-auto</code> — auto width.</li>
            </ul>
          </Section>

          <Section>
            <Heading level={2}>Fixed width</Heading>
            <Text>Use rem-based utilities for precise fixed widths.</Text>
            <ul>
              <li><code>w-6rem</code> — 6rem width.</li>
              <li><code>w-12rem</code> — 12rem width.</li>
              <li><code>w-24rem</code> — 24rem width.</li>
            </ul>
          </Section>

          <Section>
            <Heading level={2}>Example</Heading>
            <LiveExample code={`<div className={styles.flex}>\n  <div className={styles.w12 + ' ' + styles.p3 + ' ' + styles.bgSurface50}>w-12</div>\n  <div className={styles.w6rem + ' ' + styles.p3 + ' ' + styles.bgSurface50}>w-6rem</div>\n</div>`}>
              <div className={csx(styles.flex, styles.gap4)} style={{ flexWrap: 'wrap' }}>
                <div className={csx(styles.w12, styles.p4, styles.bgSurface50, styles.border200, styles.borderSolid, styles.roundedLg)}>
                  w-12
                </div>
                <div className={csx(styles.w6rem, styles.p4, styles.bgSurface50, styles.border200, styles.borderSolid, styles.roundedLg)}>
                  w-6rem
                </div>
                <div className={csx(styles.wAuto, styles.p4, styles.bgSurface50, styles.border200, styles.borderSolid, styles.roundedLg)}>
                  w-auto
                </div>
              </div>
            </LiveExample>
          </Section>

          <Section>
            <Heading level={2}>Responsive widths</Heading>
            <Text>Combine responsive prefixes with width utilities.</Text>
            <pre className="example-code">
              <code>{`<div className={styles.wFull + ' ' + styles.mdW6}>Responsive width</div>`}</code>
            </pre>
          </Section>
        </Stack>
      </Page.Body>
    </Page>
  );
}
