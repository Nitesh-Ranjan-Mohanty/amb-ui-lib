import { Heading, Page, Section, Stack, Text, Caption, csx } from '@amb-ui';
import { spacing, colors, color, radii, breakpoints } from '@amb-ui';
import { fontSizes, fontWeights, fonts } from '@amb-ui';
import styles from '../../../styles/utils/utils.module.css';

export default function DesignTokens() {
  return (
    <Page>
      <Page.Header>
        <div className="section-header">
          <Heading level={1}>Design Tokens</Heading>
          <Text size="lg">
            The primitive values that keep styles consistent across amb-ui-lib.
          </Text>
        </div>
      </Page.Header>

      <Page.Body>
        <Stack gap="xl">
          <Section>
            <Heading level={2}>Color Tokens</Heading>
            <Text style={{ marginBottom: '16px' }}>
              There are two ways to consume color tokens:
            </Text>
            <ul>
              <li><strong><code>colors</code></strong> — semantic palette names such as <code>colors.primary</code> and <code>colors.background</code>.</li>
              <li><strong><code>color</code></strong> — full shade access like <code>color.blue500</code> and <code>color.surface200</code>.</li>
            </ul>
            <pre className="example-code">
              <code>{`import { colors, color } from 'amb-ui-lib';

console.log(colors.primary); // #2563eb
console.log(color.blue500); // #3b82f6
console.log(color.surface200); // #EEEEEE`}</code>
            </pre>
          </Section>

          <Section>
            <Heading level={2}>Color Reference</Heading>
            <Text style={{ marginBottom: '16px' }}>
              The semantic palette includes the colors most commonly used in UI components.
            </Text>
            <div className={csx(styles.grid, styles['gap-5'], styles['grid-cols-1'], styles['md:grid-cols-2'], styles['xl:grid-cols-3'])}>
              {Object.entries(colors).map(([name, value]) => (
                <div key={name} className={csx('role-card', styles.p3)}>
                  <div className={csx(styles.roundedLg, styles.mb3, styles.borderSolid, styles.border200)} style={{ background: value, height: '100px' }} />
                  <Stack gap="xs">
                    <Text weight="semibold" className={styles.capitalize}>{name}</Text>
                    <Caption className={styles.fontMono} style={{ color: 'var(--text-secondary)' }}>{value}</Caption>
                  </Stack>
                </div>
              ))}
            </div>
          </Section>

          <Section>
            <Heading level={2}>Typography Tokens</Heading>
            <Text style={{ marginBottom: '16px' }}>
              Use these tokens to keep font sizes, weights, and families consistent.
            </Text>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
              <div>
                <Heading level={3} style={{ fontSize: '1.1rem', marginBottom: '12px' }}>Font Sizes</Heading>
                <table className="prop-table" style={{ margin: 0 }}>
                  <thead>
                    <tr>
                      <th>Token</th>
                      <th>Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.entries(fontSizes).map(([name, value]) => (
                      <tr key={name}>
                        <td className="prop-name">{name}</td>
                        <td>{value}px</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div>
                <Heading level={3} style={{ fontSize: '1.1rem', marginBottom: '12px' }}>Font Weights</Heading>
                <table className="prop-table" style={{ margin: 0 }}>
                  <thead>
                    <tr>
                      <th>Token</th>
                      <th>Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.entries(fontWeights).map(([name, value]) => (
                      <tr key={name}>
                        <td className="prop-name">{name}</td>
                        <td>{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Section>

          <Section>
            <Heading level={2}>Font Families</Heading>
            <Text style={{ marginBottom: '16px' }}>
              The library exposes the primary and accent font families used across components.
            </Text>
            <div style={{ display: 'grid', gap: '16px' }}>
              {Object.entries(fonts).map(([name, value]) => (
                <div key={name} className="role-card" style={{ padding: '12px' }}>
                  <Caption style={{ marginBottom: '8px', display: 'block' }}>{name.toUpperCase()}</Caption>
                  <Text style={{ fontFamily: value, fontSize: '1rem' }}>{value}</Text>
                </div>
              ))}
            </div>
          </Section>

          <Section>
            <Heading level={2}>Spacing & Layout Tokens</Heading>
            <Text style={{ marginBottom: '16px' }}>
              Use these tokens to build consistent spacing and layout systems.
            </Text>
            <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '32px' }}>
              <div>
                <Heading level={3} style={{ fontSize: '1.1rem', marginBottom: '12px' }}>Spacing</Heading>
                <table className="prop-table" style={{ margin: 0 }}>
                  <thead>
                    <tr>
                      <th>Token</th>
                      <th>Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.entries(spacing).map(([name, value]) => (
                      <tr key={name}>
                        <td className="prop-name">{name}</td>
                        <td>{value}px</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div>
                <Heading level={3} style={{ fontSize: '1.1rem', marginBottom: '12px' }}>Border Radius</Heading>
                <table className="prop-table" style={{ margin: 0 }}>
                  <thead>
                    <tr>
                      <th>Token</th>
                      <th>Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.entries(radii).map(([name, value]) => (
                      <tr key={name}>
                        <td className="prop-name">{name}</td>
                        <td>{value}px</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Section>

          <Section>
            <Heading level={2}>Breakpoints</Heading>
            <Text style={{ marginBottom: '16px' }}>
              Responsive tokens define the screen widths used across the system.
            </Text>
            <table className="prop-table">
              <thead>
                <tr>
                  <th>Token</th>
                  <th>Width</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(breakpoints).map(([name, value]) => (
                  <tr key={name}>
                    <td className="prop-name">{name}</td>
                    <td>{value}px</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Section>

          <Section>
            <Heading level={2}>Using Tokens with Utility CSS</Heading>
            <Text style={{ marginBottom: '16px' }}>
              Combine design tokens with utility classes for the cleanest result.
            </Text>
            <pre className="example-code">
              <code>{`import styles from 'amb-ui-lib/styles/utils.module.css';
import { color } from 'amb-ui-lib';

function Example() {
  return (
    <div className={styles.bgSurface200 + ' ' + styles.p4 + ' ' + styles.borderSolid} style={{ borderColor: color.border }}>
      <p className={styles.textBlue500}>Primary blue text</p>
      <p style={{ color: color.blue500 }}>Color token blue500</p>
    </div>
  );
}`}</code>
            </pre>
          </Section>
        </Stack>
      </Page.Body>
    </Page>
  );
}
