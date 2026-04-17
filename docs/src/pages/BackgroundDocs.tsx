import { Heading, Page, Section, Stack, Text, csx } from '@amb-ui';
import { LiveExample } from '../components/DocComponents';
import styles from '../../../styles/utils/utils.module.css';

export default function BackgroundDocs() {
  return (
    <Page>
      <Page.Header>
        <div className="section-header">
          <Heading level={1}>Background</Heading>
          <Text size="lg">Background and surface utilities let you layer color and convey meaning.</Text>
        </div>
      </Page.Header>

      <Page.Body>
        <Stack gap="xl">
          <Section>
            <Heading level={2}>Surface utilities</Heading>
            <Text>Use surface helpers for cards, sections, and page backgrounds.</Text>
            <ul>
              <li><code>surface-ground</code> — page background.</li>
              <li><code>surface-section</code> — section background.</li>
              <li><code>surface-card</code> — card background.</li>
              <li><code>surface-overlay</code> — overlay surfaces.</li>
            </ul>
          </Section>

          <Section>
            <Heading level={2}>Color utilities</Heading>
            <Text>Apply theme-aware background and text color helpers.</Text>
            <ul>
              <li><code>bg-primary</code>, <code>bg-primary-500</code></li>
              <li><code>bg-surface-50</code>, <code>bg-surface-200</code></li>
              <li><code>text-blue-500</code>, <code>text-surface-800</code></li>
            </ul>
          </Section>

          <Section>
            <Heading level={2}>Example</Heading>
            <LiveExample code={`<div className={styles.bgSurface50 + ' ' + styles.p4 + ' ' + styles.roundedLg}>Surface section</div>`}>
              <div className={csx(styles.bgSurface50, styles.p4, styles.roundedLg, styles.border200, styles.borderSolid)}>
                <div className={csx(styles.bgPrimary, styles.p3, styles.roundedLg, styles.textWhite)}>Primary surface</div>
              </div>
            </LiveExample>
          </Section>
        </Stack>
      </Page.Body>
    </Page>
  );
}
