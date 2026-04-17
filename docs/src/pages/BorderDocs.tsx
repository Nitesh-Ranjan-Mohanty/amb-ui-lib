import { Heading, Page, Section, Stack, Text, csx } from '@amb-ui';
import { LiveExample, Note } from '../components/DocComponents';
import styles from '../../../styles/utils/utils.module.css';

export default function BorderDocs() {
  return (
    <Page>
      <Page.Header>
        <div className="section-header">
          <Heading level={1}>Borders</Heading>
          <Text size="lg">Border utilities help define structure, separation, and emphasis.</Text>
        </div>
      </Page.Header>

      <Page.Body>
        <Stack gap="xl">
          <Section>
            <Heading level={2}>Border width</Heading>
            <Text>Apply standard border widths using simple helpers.</Text>
            <ul>
              <li><code>border-none</code> — no border.</li>
              <li><code>border-1</code> — thin border.</li>
            </ul>
          </Section>

          <Section>
            <Heading level={2}>Border style</Heading>
            <Text>Choose solid or dashed borders for visual tone.</Text>
            <ul>
              <li><code>border-solid</code></li>
              <li><code>border-dashed</code></li>
            </ul>
          </Section>

          <Section>
            <Heading level={2}>Corner radius</Heading>
            <Text>Use rounding utilities for soft edges.</Text>
            <ul>
              <li><code>rounded-sm</code></li>
              <li><code>rounded-lg</code></li>
              <li><code>rounded-full</code></li>
            </ul>
            <Note title="Border colors">
              Use color utilities like <code>border-200</code> and theme-aware <code>border-primary</code> to style borders consistently.
            </Note>
          </Section>

          <Section>
            <Heading level={2}>Example</Heading>
            <LiveExample code={`<div className={styles.border1 + ' ' + styles.borderSolid + ' ' + styles.border200 + ' ' + styles.roundedLg + ' ' + styles.p4}>Border example</div>`}>
              <div className={csx(styles.border1, styles.borderSolid, styles.border200, styles.roundedLg, styles.p4, styles.bgSurface0)}>
                Bordered box
              </div>
            </LiveExample>
          </Section>
        </Stack>
      </Page.Body>
    </Page>
  );
}
