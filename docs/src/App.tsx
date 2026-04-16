import { useState } from 'react';
import ButtonDocs from './pages/ButtonDocs';
import CardDocs from './pages/CardDocs';
import Home from './pages/Home';
import GridDocs from './pages/GridDocs';
import PageDocs from './pages/PageDocs';
import TypographyDocs from './pages/TypographyDocs';

const pageMap = {
  home: {
    title: 'Introduction',
    group: 'Getting Started',
    component: Home
  },
  page: {
    title: 'Page',
    group: 'Layout Primitives',
    component: PageDocs
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
  typography: {
    title: 'Typography',
    group: 'Tokens & Primitives',
    component: TypographyDocs
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
          @amb/ui-lib
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
