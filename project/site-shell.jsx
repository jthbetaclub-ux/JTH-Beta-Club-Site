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
  { n: '40+', label: 'Organizations served' },
  { n: '4,200', label: 'Hours volunteered / yr' },
  { n: '$8,500', label: 'Raised for charity / yr' },
  { n: '1991', label: 'Chapter chartered' },
];

const PILLARS = [
  { n: '01', t: 'Service', d: 'Demonstrating our motto: Let Us Lead by Serving Others.' },
  { n: '02', t: 'Leadership', d: 'Developing the leaders of tomorrow.' },
  { n: '03', t: 'Character', d: 'Preparing young people for life and empowering them to be successful.' },
  { n: '04', t: 'Achievement', d: 'Recognizing and honoring high academic achievement.' },
];

const ADVISORS = [
  { name: 'Mr. Hunter Moody', role: 'Advisor', email: 'hunter.moody@nhcs.net' },
  { name: 'Ms. Lori Roy', role: 'Advisor', email: 'lori.roy@nhcs.net' },
  { name: 'Mrs. Ainsley Kovanda', role: 'Advisor', email: 'ainsley.kovanda@nhcs.net' },
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

function MarkerHighlight({ children, rotate = -1.5, color }) {
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
          transform: `rotate(${rotate}deg)`,
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

// ------- shell
function Shell({ children, page, setPage, fonts, yellow = '#FFD140' }) {
  const navy = '#04294e';
  return (
    <div
      style={{
        fontFamily: fonts.body,
        color: navy,
        background: 'var(--bg)',
        minHeight: '100vh',
        position: 'relative',
      }}
    >
      <header
        style={{
          padding: '24px 48px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: `2px solid ${navy}`,
          position: 'sticky',
          top: 0,
          background: 'var(--bg)',
          zIndex: 50,
        }}
      >
        <button
          onClick={() => setPage('home')}
          style={{
            all: 'unset',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: 14,
          }}
        >
          <span
            style={{
              width: 52,
              height: 52,
              background: yellow,
              border: `2.5px solid ${navy}`,
              transform: 'rotate(-6deg)',
              display: 'grid',
              placeItems: 'center',
              fontFamily: fonts.head,
              fontWeight: 900,
              fontSize: 30,
              lineHeight: 1,
              boxShadow: `4px 4px 0 ${navy}`,
            }}
          >
            β
          </span>
          <span style={{ fontFamily: fonts.head, fontWeight: 900, fontSize: 22, letterSpacing: '-.02em', textTransform: 'uppercase' }}>
            JTH Beta Club
          </span>
        </button>
        <nav style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
          {NAV.map((n) => (
            <button
              key={n.id}
              onClick={() => setPage(n.id)}
              style={{
                all: 'unset',
                cursor: 'pointer',
                padding: '10px 14px',
                fontSize: 14,
                fontWeight: 700,
                color: navy,
                textTransform: 'uppercase',
                letterSpacing: '.02em',
                position: 'relative',
              }}
            >
              {page === n.id && (
                <span
                  aria-hidden
                  style={{
                    position: 'absolute',
                    inset: '6px -2px',
                    background: yellow,
                    zIndex: -1,
                    transform: 'rotate(-1.5deg)',
                  }}
                />
              )}
              {n.label}
            </button>
          ))}
        </nav>
      </header>

      {children}

      <footer
        style={{
          marginTop: 96,
          background: navy,
          color: '#fff',
          padding: '56px 48px 32px',
        }}
      >
        <div style={{
          fontFamily: fonts.head, fontWeight: 900, fontSize: 'clamp(64px, 12vw, 140px)', lineHeight: 1.0,
          color: yellow, letterSpacing: '-.04em',
          margin: '0 0 48px',
          textTransform: 'uppercase',
        }}>
          Beta is Service.
        </div>
        <div style={{ fontSize: 14, fontStyle: 'italic', color: 'rgba(255,255,255,.7)', marginBottom: 36, maxWidth: 480 }}>
          “Let Us Lead by Serving Others.” — Our motto.
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32, borderTop: '1px solid rgba(255,255,255,.18)', paddingTop: 32 }}>
          <div>
            <div style={{ fontFamily: fonts.head, fontWeight: 900, fontSize: 16, textTransform: 'uppercase', marginBottom: 10 }}>JTH Beta Club</div>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,.7)', lineHeight: 1.55, margin: 0, maxWidth: 240 }}>
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
          <div>
            <div style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase', color: yellow, marginBottom: 10 }}>Find us</div>
            <div style={{ fontSize: 13, lineHeight: 1.7, color: 'rgba(255,255,255,.85)' }}>
              Hoggard High School<br/>
              4305 Shipyard Blvd<br/>
              Wilmington, NC 28403
            </div>
          </div>
        </div>
        <div style={{ marginTop: 32, paddingTop: 20, borderTop: '1px solid rgba(255,255,255,.12)', display: 'flex', justifyContent: 'space-between', fontSize: 12, color: 'rgba(255,255,255,.5)' }}>
          <span>© {new Date().getFullYear()} JTH Beta Club · National Beta Chapter</span>
          <span>Site by Beta officers</span>
        </div>
      </footer>
    </div>
  );
}

Object.assign(window, {
  NAV, STATS, PILLARS, ADVISORS, INFO_TILES, UPCOMING_EVENTS,
  PhotoSlot, MarkerHighlight, Sticker, Shell,
});
