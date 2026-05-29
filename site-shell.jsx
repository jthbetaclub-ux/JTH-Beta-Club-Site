// site-shell.jsx — JTH Beta Club, shell + nav + footer + shared data
// Direction B (playful & energetic). Real content sourced from
// hoggardbetaclub.weebly.com.

const NAV = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'signup', label: 'Event Sign Up' },
  { id: 'volunteers', label: 'Request Volunteers' },
  { id: 'info', label: 'Info' },
  { id: 'contact', label: 'Contact' },
];

const STATS = [
  { value: 50, prefix: '', suffix: '+', label: 'Organizations served' },
  { value: 3000, prefix: '', suffix: '', label: 'Hours volunteered / yr' },
  { value: 4000, prefix: '$', suffix: '', label: 'Raised for charity / yr' },
];

const PILLARS = [
  { n: '01', t: 'Service', d: 'Demonstrating our motto: Let Us Lead by Serving Others.' },
  { n: '02', t: 'Leadership', d: 'Developing the leaders of tomorrow.' },
  { n: '03', t: 'Character', d: 'Preparing young people for life and empowering them to be successful.' },
  { n: '04', t: 'Achievement', d: 'Recognizing and honoring high academic achievement.' },
];

const ADVISORS = [
  { name: 'Hunter Moody', role: 'Advisor', email: 'hunter.moody@nhcs.net' },
  { name: 'Lori Roy', role: 'Advisor', email: 'lori.roy@nhcs.net' },
  { name: 'Ainsley Kovanda', role: 'Advisor', email: 'ainsley.kovanda@nhcs.net' },
];

const OFFICERS = [
  { name: 'Perry Thompson', title: 'President' },
  { name: 'Greyson Clymer', title: 'Vice-President' },
  { name: 'Cassidy Freeman', title: 'Secretary' },
  { name: 'Meghan Zylich', title: 'Event Coordinator' },
  { name: 'Laura Beth Jenkins', title: 'Event Coordinator' },
  { name: 'Liza Bullock', title: 'Event Coordinator' },
  { name: 'Lily Danielsen', title: 'Social Media Coordinator' },
  { name: 'Eve Berger', title: 'Upper-Classmen Representative' },
  { name: 'Cambell Nay', title: 'Lower-Classmen Representative' },
  { name: 'Stella McCorcle', title: 'Community Outreach Coordinator' },
  { name: 'Bodey Thompson', title: 'Community Outreach Coordinator' },
  { name: 'Cailyn Freeman', title: 'Historian' },
  { name: "Aubree O'Rourke", title: 'Historian' },
];

const INFO_TILES = [
  {
    id: 'leadership',
    icon: '★',
    title: 'Current Leadership',
    sub: 'Meet your officers, committee chairs, and advisors for 2025–26.',
  },
  {
    id: 'requirements',
    icon: '✓',
    title: 'Member Requirements',
    sub: 'GPA, hours, events, and log deadlines — by grade level.',
  },
  {
    id: 'slides',
    icon: '▶',
    title: 'Meeting Presentations',
    sub: 'Slides from every meeting. Missed one? Catch up here.',
  },
  {
    id: 'applications',
    icon: '↗',
    title: 'Applications',
    sub: 'General membership and officer applications.',
    subItems: ['General Application', 'Officer Application'],
  },
];

const UPCOMING_EVENTS = [
  { date: 'Apr 18', mo: 'APR', day: '18', title: 'Sleep In Heavenly Peace Bed Build', detail: 'Building beds for kids in Wilmington who don\'t have one.', spots: '25 / 30', signature: true },
  { date: 'Mar 22', mo: 'MAR', day: '22', title: 'Wilmington Food Bank Sort', detail: 'Sorting and packing donations · 9am–12pm.', spots: '8 / 12', signature: false },
  { date: 'Apr 5', mo: 'APR', day: '05', title: 'Spring Beach Sweep', detail: 'Wrightsville Beach cleanup with Keep NHC Beautiful.', spots: '14 / 20', signature: false },
  { date: 'Apr 26', mo: 'APR', day: '26', title: 'Blanket Drive Sort', detail: 'Sorting donations for the annual blanket drive.', spots: '6 / 10', signature: false },
];

// ------- helpers
function PhotoSlot({ ratio = '4 / 3', label = 'photo', style }) {
  return (
    <div
      style={{
        aspectRatio: ratio,
        width: '100%',
        background:
          'repeating-linear-gradient(135deg, rgba(4,41,78,.06) 0 8px, rgba(4,41,78,.02) 8px 16px)',
        border: '1.5px dashed rgba(4,41,78,.25)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'rgba(4,41,78,.55)',
        fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
        fontSize: 12,
        letterSpacing: '.04em',
        textTransform: 'uppercase',
        position: 'relative',
        overflow: 'hidden',
        ...style,
      }}
    >
      <span>{label}</span>
    </div>
  );
}

// animate=true: yellow highlight sweeps left→right on mount (jthSweep keyframe from Shell)
function MarkerHighlight({ children, rotate = -1.5, color, animate = false }) {
  const yellow = color || '#FFD140';
  return (
    <span style={{ position: 'relative', display: 'inline-block', whiteSpace: 'nowrap' }}>
      <span
        aria-hidden
        style={{
          position: 'absolute',
          inset: '8% -2% 14% -2%',
          background: yellow,
          zIndex: 0,
          ...(animate ? {
            transformOrigin: 'left center',
            animation: 'jthSweep 0.55s cubic-bezier(.25,.46,.45,.94) both',
          } : {
            transform: `rotate(${rotate}deg)`,
          }),
        }}
      />
      <span style={{ position: 'relative', zIndex: 1 }}>{children}</span>
    </span>
  );
}

function Sticker({ children, rotate = 4, bg = '#fff', shadow = '#04294e', style }) {
  return (
    <div style={{
      background: bg,
      border: '2.5px solid #04294e',
      padding: '12px 18px',
      transform: `rotate(${rotate}deg)`,
      boxShadow: `5px 5px 0 ${shadow}`,
      display: 'inline-block',
      ...style,
    }}>
      {children}
    </div>
  );
}

// ------- mobile detection
function useIsMobile(bp = 768) {
  const [m, setM] = React.useState(() => window.innerWidth < bp);
  React.useEffect(() => {
    const h = () => setM(window.innerWidth < bp);
    window.addEventListener('resize', h);
    return () => window.removeEventListener('resize', h);
  }, [bp]);
  return m;
}

const MobileCtx = React.createContext(false);
function useMobile() { return React.useContext(MobileCtx); }

// Back button shared by sub-pages
function BackButton({ label, to, setPage, yellow = '#FFD140' }) {
  const navy = '#04294e';
  return (
    <button
      onClick={() => setPage(to)}
      style={{
        all: 'unset', cursor: 'pointer',
        display: 'inline-flex', alignItems: 'center', gap: 8,
        fontSize: 13, fontWeight: 700, textTransform: 'uppercase',
        letterSpacing: '.06em', color: navy,
        padding: '10px 16px', border: `2px solid ${navy}`,
        background: yellow, boxShadow: `3px 3px 0 ${navy}`,
        marginBottom: 40,
      }}
    >
      ← {label}
    </button>
  );
}

// ------- shell
function Shell({ children, page, setPage, fonts, yellow = '#FFD140' }) {
  const navy = '#04294e';
  const mobile = useIsMobile();
  const [menuOpen, setMenuOpen] = React.useState(false);

  // Inject animation CSS once
  React.useEffect(() => {
    if (document.getElementById('jth-anim')) return;
    const s = document.createElement('style');
    s.id = 'jth-anim';
    s.textContent = `
      html, body { overflow-x: hidden; }
      @keyframes jthSweep {
        from { transform: rotate(-1.5deg) scaleX(0); }
        to   { transform: rotate(-1.5deg) scaleX(1); }
      }
      .jth-nav-hl { transform-origin: left center; }
      .jth-nav-btn:not(.jth-nav-active):hover .jth-nav-hl {
        animation: jthSweep 0.25s cubic-bezier(.25,.46,.45,.94) forwards;
      }
      nav:has(.jth-nav-btn:not(.jth-nav-active):hover) .jth-nav-active .jth-nav-hl {
        transform: rotate(-1.5deg) scaleX(0) !important;
        transition: transform 0.15s ease;
      }
    `;
    document.head.appendChild(s);
  }, []);

  React.useEffect(() => { setMenuOpen(false); }, [page]);

  return (
    <MobileCtx.Provider value={mobile}>
      <div style={{ fontFamily: fonts.body, color: navy, background: 'var(--bg)', minHeight: '100vh', position: 'relative' }}>

        {/* ---- HEADER ---- */}
        <header style={{
          padding: mobile ? '14px 20px' : '24px 48px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          borderBottom: `2px solid ${navy}`,
          position: 'sticky', top: 0, background: 'var(--bg)', zIndex: 50,
        }}>
          <button onClick={() => setPage('home')} style={{ all: 'unset', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{
              width: mobile ? 40 : 52, height: mobile ? 40 : 52,
              background: yellow, border: `2.5px solid ${navy}`,
              transform: 'rotate(-6deg)', display: 'grid', placeItems: 'center',
              fontFamily: fonts.head, fontWeight: 900, fontSize: mobile ? 22 : 30,
              lineHeight: 1, boxShadow: `4px 4px 0 ${navy}`, flexShrink: 0,
            }}>β</span>
            <span style={{ fontFamily: fonts.head, fontWeight: 900, fontSize: mobile ? 16 : 22, letterSpacing: '-.02em', textTransform: 'uppercase' }}>
              JTH Beta Club
            </span>
          </button>

          {/* Desktop nav */}
          {!mobile && (
            <nav style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
              {NAV.map((n) => (
                <button
                  key={n.id}
                  onClick={() => setPage(n.id)}
                  className={`jth-nav-btn${page === n.id ? ' jth-nav-active' : ''}`}
                  style={{
                    all: 'unset', cursor: 'pointer',
                    padding: '10px 14px', fontSize: 14, fontWeight: 700,
                    color: navy, textTransform: 'uppercase', letterSpacing: '.02em',
                    position: 'relative',
                  }}
                >
                  <span
                    aria-hidden
                    className="jth-nav-hl"
                    style={{
                      position: 'absolute', inset: '6px -2px',
                      background: yellow, zIndex: -1,
                      transform: `rotate(-1.5deg) scaleX(${page === n.id ? 1 : 0})`,
                    }}
                  />
                  {n.label}
                </button>
              ))}
            </nav>
          )}

          {/* Mobile hamburger */}
          {mobile && (
            <button
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              style={{
                all: 'unset', cursor: 'pointer',
                width: 44, height: 44,
                background: menuOpen ? navy : yellow,
                border: `2.5px solid ${navy}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: `3px 3px 0 ${navy}`, flexShrink: 0,
              }}
            >
              {menuOpen ? (
                <span style={{ fontSize: 18, lineHeight: 1, color: yellow, fontWeight: 900, userSelect: 'none' }}>✕</span>
              ) : (
                <span style={{ display: 'flex', flexDirection: 'column', gap: 5, width: 20, pointerEvents: 'none' }}>
                  <span style={{ display: 'block', height: 2.5, background: navy }} />
                  <span style={{ display: 'block', height: 2.5, background: navy }} />
                  <span style={{ display: 'block', height: 2.5, background: navy, width: '70%' }} />
                </span>
              )}
            </button>
          )}
        </header>

        {/* Mobile full-screen nav overlay */}
        {mobile && menuOpen && (
          <div style={{
            position: 'fixed', inset: 0, background: navy,
            zIndex: 45, display: 'flex', flexDirection: 'column',
            padding: '88px 28px 40px', overflowY: 'auto',
          }}>
            {NAV.map((n, i) => (
              <button
                key={n.id}
                onClick={() => { setPage(n.id); setMenuOpen(false); }}
                style={{
                  all: 'unset', cursor: 'pointer',
                  fontFamily: fonts.head, fontWeight: 900,
                  fontSize: 'clamp(28px, 8vw, 44px)',
                  textTransform: 'uppercase',
                  color: page === n.id ? yellow : '#fff',
                  letterSpacing: '-.025em',
                  padding: '16px 0',
                  borderBottom: i < NAV.length - 1 ? '1px solid rgba(255,255,255,.15)' : 'none',
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                }}
              >
                {n.label}
                {page === n.id && <span style={{ color: yellow, fontSize: 18 }}>★</span>}
              </button>
            ))}
            <div style={{ marginTop: 'auto', paddingTop: 32, fontSize: 13, color: 'rgba(255,255,255,.4)', fontStyle: 'italic' }}>
              "Let Us Lead by Serving Others."
            </div>
          </div>
        )}

        {children}

        {/* ---- FOOTER ---- */}
        <footer style={{
          marginTop: mobile ? 64 : 96,
          background: navy, color: '#fff',
          padding: mobile ? '40px 20px 24px' : '56px 48px 32px',
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: mobile ? '1fr 1fr' : 'repeat(4, 1fr)',
            gap: mobile ? 20 : 32,
            borderTop: '1px solid rgba(255,255,255,.18)',
            paddingTop: 32,
          }}>
            <div style={{ gridColumn: mobile ? 'span 2' : 'span 1' }}>
              <div style={{ fontFamily: fonts.head, fontWeight: 900, fontSize: 16, textTransform: 'uppercase', marginBottom: 10 }}>JTH Beta Club</div>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,.7)', lineHeight: 1.55, margin: 0, maxWidth: 280 }}>
                The largest student-led organization at John T. Hoggard High School. Chartered 1991.
              </p>
            </div>
            <div>
              <div style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase', color: yellow, marginBottom: 10 }}>Pages</div>
              {NAV.slice(0, 3).map((n) => (
                <button key={n.id} onClick={() => setPage(n.id)} style={{ all: 'unset', display: 'block', cursor: 'pointer', fontSize: 13, padding: '3px 0', color: 'rgba(255,255,255,.85)' }}>{n.label}</button>
              ))}
            </div>
            <div>
              <div style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase', color: yellow, marginBottom: 10 }}>More</div>
              {NAV.slice(3).map((n) => (
                <button key={n.id} onClick={() => setPage(n.id)} style={{ all: 'unset', display: 'block', cursor: 'pointer', fontSize: 13, padding: '3px 0', color: 'rgba(255,255,255,.85)' }}>{n.label}</button>
              ))}
            </div>
            <div style={{ gridColumn: mobile ? 'span 2' : 'span 1' }}>
              <div style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase', color: yellow, marginBottom: 10 }}>Find us</div>
              <div style={{ fontSize: 13, lineHeight: 1.7, color: 'rgba(255,255,255,.85)' }}>
                Hoggard High School<br/>
                4305 Shipyard Blvd<br/>
                Wilmington, NC 28403
              </div>
            </div>
          </div>
          <div style={{
            marginTop: 32, paddingTop: 20,
            borderTop: '1px solid rgba(255,255,255,.12)',
            display: 'flex', flexDirection: mobile ? 'column' : 'row',
            gap: mobile ? 6 : 0,
            justifyContent: 'space-between',
            fontSize: 12, color: 'rgba(255,255,255,.5)',
          }}>
            <span>© {new Date().getFullYear()} JTH Beta Club · National Beta Chapter</span>
            <span>Site by Beta officers</span>
          </div>
        </footer>
      </div>
    </MobileCtx.Provider>
  );
}

Object.assign(window, {
  NAV, STATS, PILLARS, ADVISORS, OFFICERS, INFO_TILES, UPCOMING_EVENTS,
  PhotoSlot, MarkerHighlight, Sticker, BackButton, Shell, useMobile,
});
