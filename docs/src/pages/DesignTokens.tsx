import { Heading, Page, Section, Stack, Text, Row, Caption } from '@amb-ui';
import { spacing, colors, radii, breakpoints } from '@amb-ui';
import { fontSizes, lineHeights, fontWeights, letterSpacings, fonts } from '@amb-ui';

export default function DesignTokens() {
  return (
    <Page containerPadding="lg">
      <Page.Header>
        <div className="section-header" style={{ marginBottom: '16px', paddingBottom: '16px' }}>
          <Heading level={1}>Design Tokens</Heading>
          <Text size="lg">
            The fundamental variables that power our design system's visual language.
          </Text>
        </div>
      </Page.Header>

      <Page.Body>
        <Stack gap="lg">
          <Section padding="none">
            <Heading level={2} style={{ marginBottom: '16px' }}>Colors</Heading>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', 
              gap: '12px' 
            }}>
              {Object.entries(colors).map(([name, value]) => (
                <div key={name} style={{ background: 'white', padding: '8px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                  <div style={{ background: value, height: '64px', borderRadius: '6px', marginBottom: '8px', border: '1px solid #e2e8f0' }} />
                  <div style={{ fontWeight: 600, fontSize: '13px' }}>{name}</div>
                  <div style={{ fontSize: '11px', color: '#64748b', fontFamily: 'monospace' }}>{value}</div>
                </div>
              ))}
            </div>
          </Section>

          <Section padding="none">
            <Heading level={2} style={{ marginBottom: '12px' }}>Spacing</Heading>
            <table className="prop-table" style={{ margin: 0 }}>
              <thead>
                <tr>
                  <th>Token</th>
                  <th>Value</th>
                  <th>Preview</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(spacing).map(([name, value]) => (
                  <tr key={name}>
                    <td className="prop-name" style={{ padding: '8px 16px' }}>{name}</td>
                    <td style={{ padding: '8px 16px' }}>{value}px</td>
                    <td style={{ padding: '8px 16px' }}><div style={{ background: '#3b82f6', height: '12px', width: `${value}px` }} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Section>

          <Section padding="none">
            <Heading level={2} style={{ marginBottom: '12px' }}>Typography</Heading>
            <Stack gap="md">
              <div>
                <Heading level={3} style={{ fontSize: '1rem', marginBottom: '8px' }}>Font Families</Heading>
                <div style={{ background: 'white', padding: '16px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                  <Stack gap="sm">
                    {Object.entries(fonts).map(([name, value]) => (
                      <div key={name}>
                        <Caption>{name}</Caption>
                        <div style={{ fontFamily: value, fontSize: '14px', marginTop: '4px' }}>{value}</div>
                      </div>
                    ))}
                  </Stack>
                </div>
              </div>

              <div>
                <Heading level={3} style={{ fontSize: '1rem', marginBottom: '8px' }}>Sizes & Weights</Heading>
                <Row gap="lg" style={{ flexWrap: 'wrap', alignItems: 'flex-start' }}>
                  <div style={{ flex: 1, minWidth: '280px' }}>
                    <table className="prop-table" style={{ margin: 0 }}>
                      <thead>
                        <tr>
                          <th>Size</th>
                          <th>PX</th>
                        </tr>
                      </thead>
                      <tbody>
                        {Object.entries(fontSizes).map(([name, value]) => (
                          <tr key={name}>
                            <td className="prop-name" style={{ padding: '6px 16px' }}>{name}</td>
                            <td style={{ padding: '6px 16px' }}>{value}px</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div style={{ flex: 1, minWidth: '280px' }}>
                    <table className="prop-table" style={{ margin: 0 }}>
                      <thead>
                        <tr>
                          <th>Weight</th>
                          <th>Value</th>
                        </tr>
                      </thead>
                      <tbody>
                        {Object.entries(fontWeights).map(([name, value]) => (
                          <tr key={name}>
                            <td className="prop-name" style={{ padding: '6px 16px' }}>{name}</td>
                            <td style={{ padding: '6px 16px' }}>{value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </Row>
              </div>

              <div>
                <Heading level={3} style={{ fontSize: '1rem', marginBottom: '8px' }}>Line Heights & Letter Spacing</Heading>
                <Row gap="lg" style={{ flexWrap: 'wrap', alignItems: 'flex-start' }}>
                  <div style={{ flex: 1, minWidth: '280px' }}>
                    <table className="prop-table" style={{ margin: 0 }}>
                      <thead>
                        <tr>
                          <th>Role</th>
                          <th>Multiplier</th>
                        </tr>
                      </thead>
                      <tbody>
                        {Object.entries(lineHeights).map(([name, value]) => (
                          <tr key={name}>
                            <td className="prop-name" style={{ padding: '6px 16px' }}>{name}</td>
                            <td style={{ padding: '6px 16px' }}>{value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div style={{ flex: 1, minWidth: '280px' }}>
                    <table className="prop-table" style={{ margin: 0 }}>
                      <thead>
                        <tr>
                          <th>Spacing</th>
                          <th>Value</th>
                        </tr>
                      </thead>
                      <tbody>
                        {Object.entries(letterSpacings).map(([name, value]) => (
                          <tr key={name}>
                            <td className="prop-name" style={{ padding: '6px 16px' }}>{name}</td>
                            <td style={{ padding: '6px 16px' }}>{value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </Row>
              </div>
            </Stack>
          </Section>

          <Section padding="none">
            <Heading level={2} style={{ marginBottom: '12px' }}>Radius & Breakpoints</Heading>
            <Row gap="lg" style={{ flexWrap: 'wrap' }}>
              <div style={{ flex: 1, minWidth: '280px' }}>
                <Heading level={3} style={{ fontSize: '1rem', marginBottom: '8px' }}>Border Radius</Heading>
                <div style={{ background: 'white', padding: '16px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                  <Row gap="md">
                    {Object.entries(radii).map(([name, value]) => (
                      <div key={name} style={{ textAlign: 'center' }}>
                        <div style={{ width: '48px', height: '48px', background: 'white', border: '2px solid #3b82f6', borderRadius: `${value}px`, marginBottom: '4px' }} />
                        <Text size="sm" weight="medium">{name}</Text>
                        <Caption>{value}px</Caption>
                      </div>
                    ))}
                  </Row>
                </div>
              </div>
              <div style={{ flex: 1, minWidth: '280px' }}>
                <Heading level={3} style={{ fontSize: '1rem', marginBottom: '8px' }}>Breakpoints</Heading>
                <table className="prop-table" style={{ margin: 0 }}>
                  <thead>
                    <tr>
                      <th>Token</th>
                      <th>Width</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.entries(breakpoints).map(([name, value]) => (
                      <tr key={name}>
                        <td className="prop-name" style={{ padding: '6px 16px' }}>{name}</td>
                        <td style={{ padding: '6px 16px' }}>{value}px</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Row>
          </Section>
        </Stack>
      </Page.Body>
    </Page>
  );
}
