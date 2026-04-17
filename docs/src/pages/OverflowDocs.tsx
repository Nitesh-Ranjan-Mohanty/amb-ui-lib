import { Heading, Page, Section, Stack, Text } from '@amb-ui';
import { LiveExample } from '../components/DocComponents';
import styles from '../../../styles/utils/utils.module.css';

export default function OverflowDocs() {
  return (
    <Page>
      <Page.Header>
        <div className="section-header">
          <Heading level={1}>Overflow Utilities</Heading>
          <Text size="lg">Control scrolling and clipping behavior with overflow helpers.</Text>
        </div>
      </Page.Header>

      <Page.Body>
        <Stack gap="xl">
          <Section>
            <Heading level={2}>Overflow Modes</Heading>
            <Text>
              Use overflow utilities to control whether hidden content is clipped or scrollable on the x and y axes.
            </Text>
            <ul>
              <li><code>overflow-auto</code> — shows scrollbars when content overflows.</li>
              <li><code>overflow-hidden</code> — clips overflowing content.</li>
              <li><code>overflow-visible</code> — allows overflow to be visible.</li>
              <li><code>overflow-scroll</code> — always shows scrollbars.</li>
            </ul>
            <Text>
              You can also target individual axes using <code>overflow-x-*</code> and <code>overflow-y-*</code> helpers.
            </Text>
          </Section>

          <Section>
            <Heading level={2}>Usage Example</Heading>
            <Text>
              The example below shows how overflow utilities behave for vertically and horizontally overflowing content.
            </Text>
            <LiveExample code={`<div className={styles.overflowAuto} style={{ maxHeight: '100px' }}>
  <div style={{ minHeight: '220px', padding: '16px' }}>Scrollable vertical content</div>
</div>

<div className={styles.overflowHidden} style={{ maxHeight: '100px', marginTop: '16px' }}>
  <div style={{ minHeight: '220px', padding: '16px' }}>Hidden vertical content</div>
</div>

<div className={styles.overflowXScroll} style={{ whiteSpace: 'nowrap', marginTop: '16px' }}>
  <span style={{ display: 'inline-block', width: '320px', padding: '16px' }}>Scrollable horizontal item</span>
  <span style={{ display: 'inline-block', width: '320px', padding: '16px' }}>Another item</span>
</div>`}>
              <div className={styles.overflowAuto} style={{ maxHeight: '100px', border: '1px solid #cbd5e1', borderRadius: '12px' }}>
                <div style={{ minHeight: '220px', padding: '16px' }}>Scrollable vertical content</div>
              </div>
              <div className={styles.overflowHidden} style={{ maxHeight: '100px', marginTop: '16px', border: '1px solid #cbd5e1', borderRadius: '12px' }}>
                <div style={{ minHeight: '220px', padding: '16px' }}>Hidden vertical content</div>
              </div>
              <div className={styles.overflowXScroll} style={{ whiteSpace: 'nowrap', marginTop: '16px', border: '1px solid #cbd5e1', borderRadius: '12px' }}>
                <span style={{ display: 'inline-block', width: '320px', padding: '16px' }}>Scrollable horizontal item</span>
                <span style={{ display: 'inline-block', width: '320px', padding: '16px' }}>Another item</span>
              </div>
            </LiveExample>
          </Section>
        </Stack>
      </Page.Body>
    </Page>
  );
}
