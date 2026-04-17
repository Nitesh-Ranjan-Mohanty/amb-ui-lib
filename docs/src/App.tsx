import { useState } from 'react';
import ButtonDocs from './pages/ButtonDocs';
import CardDocs from './pages/CardDocs';
import Home from './pages/Home';
import GridDocs from './pages/GridDocs';
import LayoutDocs from './pages/LayoutDocs';
import PageDocs from './pages/PageDocs';
import TypographyDocs from './pages/TypographyDocs';
import DesignTokens from './pages/DesignTokens';
import StylingDocs from './pages/StylingDocs';
import ThemingDocs from './pages/ThemingDocs';
import DisplayDocs from './pages/DisplayDocs';
import OverflowDocs from './pages/OverflowDocs';
import PositionDocs from './pages/PositionDocs';
import PlacementDocs from './pages/PlacementDocs';
import ZIndexDocs from './pages/ZIndexDocs';
import FormDocs from './pages/FormDocs';
import InstallationDocs from './pages/InstallationDocs';
import FlexDocs from './pages/FlexDocs';
import ElevationDocs from './pages/ElevationDocs';
import WidthDocs from './pages/WidthDocs';
import OpacityDocs from './pages/OpacityDocs';
import SpacingDocs from './pages/SpacingDocs';
import BackgroundDocs from './pages/BackgroundDocs';
import BorderDocs from './pages/BorderDocs';

const pageMap = {
  home: {
    title: 'Introduction',
    group: 'Getting Started',
    component: Home
  },
  installation: {
    title: 'Installation',
    group: 'Getting Started',
    component: InstallationDocs
  },
  styling: {
    title: 'Styling Guide',
    group: 'Getting Started',
    component: StylingDocs
  },
  page: {
    title: 'Page',
    group: 'Layout Primitives',
    component: PageDocs
  },
  layout: {
    title: 'Layout',
    group: 'Layout Primitives',
    component: LayoutDocs
  },
  grid: {
    title: 'Grid',
    group: 'Layout Primitives',
    component: GridDocs
  },
  card: {
    title: 'Card',
    group: 'Layout Primitives',
    component: CardDocs
  },
  button: {
    title: 'Button',
    group: 'Components',
    component: ButtonDocs
  },
  form: {
    title: 'Forms',
    group: 'Components',
    component: FormDocs
  },
  display: {
    title: 'Display',
    group: 'Utility Helpers',
    component: DisplayDocs
  },
  overflow: {
    title: 'Overflow',
    group: 'Utility Helpers',
    component: OverflowDocs
  },
  position: {
    title: 'Position',
    group: 'Utility Helpers',
    component: PositionDocs
  },
  placement: {
    title: 'Placement',
    group: 'Utility Helpers',
    component: PlacementDocs
  },
  zindex: {
    title: 'Z-Index',
    group: 'Utility Helpers',
    component: ZIndexDocs
  },
  spacing: {
    title: 'Spacing',
    group: 'PrimeFlex Reference',
    component: SpacingDocs
  },
  flex: {
    title: 'Flex',
    group: 'PrimeFlex Reference',
    component: FlexDocs
  },
  elevation: {
    title: 'Elevation',
    group: 'PrimeFlex Reference',
    component: ElevationDocs
  },
  width: {
    title: 'Width',
    group: 'PrimeFlex Reference',
    component: WidthDocs
  },
  opacity: {
    title: 'Opacity',
    group: 'PrimeFlex Reference',
    component: OpacityDocs
  },
  background: {
    title: 'Background',
    group: 'PrimeFlex Reference',
    component: BackgroundDocs
  },
  borders: {
    title: 'Borders',
    group: 'PrimeFlex Reference',
    component: BorderDocs
  },
  typography: {
    title: 'Typography',
    group: 'Tokens & Primitives',
    component: TypographyDocs
  },
  theming: {
    title: 'Theming',
    group: 'Tokens & Primitives',
    component: ThemingDocs
  },
  tokens: {
    title: 'Design Tokens',
    group: 'Tokens & Primitives',
    component: DesignTokens
  }
} as const;

type PageKey = keyof typeof pageMap;

export default function App() {
  const [activePage, setActivePage] = useState<PageKey>('home');
  const PageComponent = pageMap[activePage].component;

  const groups = Array.from(new Set(Object.values(pageMap).map(p => p.group)));

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          amb/ui-lib
        </div>
        
        <nav>
          {groups.map(group => (
            <div key={group} className="nav-group">
              <div className="nav-label">{group}</div>
              {Object.entries(pageMap)
                .filter(([_, item]) => item.group === group)
                .map(([key, item]) => (
                  <button
                    key={key}
                    className={activePage === key ? 'nav-button active' : 'nav-button'}
                    onClick={() => setActivePage(key as PageKey)}
                  >
                    {item.title}
                  </button>
                ))}
            </div>
          ))}
        </nav>
      </aside>

      <div className="content-wrapper">
        <main className="content">
          <PageComponent />
        </main>
      </div>
    </div>
  );
}
