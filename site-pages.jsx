// site-pages.jsx — All pages for the JTH Beta Club site.

// Counts from 0 to `to` with a cubic ease-out over `duration` ms
function CountUp({ to, prefix = '', suffix = '', duration = 1200 }) {
  const [val, setVal] = React.useState(0);
  React.useEffect(() => {
    let raf;
    const start = performance.now();
    const step = (now) => {
      const t = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - t, 3);
      setVal(Math.round(ease * to));
      if (t < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [to, duration]);
  return <>{prefix}{val.toLocaleString()}{suffix}</>;
}

// =============================================================== HOME
function HomePage({ fonts, setPage }) {
  const navy = '#04294e';
  const yellow = '#FFD140';
  const mobile = useMobile();

  return (
    <main>
      {/* HERO */}
      <section style={{ position: 'relative', padding: mobile ? '48px 20px 40px' : '80px 48px 64px', borderBottom: `2px solid ${navy}` }}>
        <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : '1.4fr 1fr', gap: mobile ? 32 : 56, alignItems: 'start' }}>
          <div>
            <h1 style={{
              fontFamily: fonts.head, fontWeight: 900,
              fontSize: 'clamp(60px, 14vw, 156px)',
              lineHeight: .88, letterSpacing: '-.02em',
              margin: mobile ? '0 0 20px' : '0 0 32px',
              textTransform: 'uppercase',
            }}>
              Beta is<br/>
              <MarkerHighlight animate={true}>service.</MarkerHighlight>
            </h1>
            <p style={{ fontSize: mobile ? 17 : 22, lineHeight: 1.45, maxWidth: 640, margin: 0, fontWeight: 500 }}>
              We're the largest student-led organization at Hoggard. We strive to give back to the community and make the world a better place.
            </p>
          </div>

          {/* CTA SQUARE + STICKER */}
          <div style={{ position: 'relative', paddingTop: mobile ? 20 : 28 }}>
            <Sticker rotate={4} shadow={navy} style={{ position: 'absolute', top: -8, right: mobile ? 0 : -8, maxWidth: mobile ? 190 : 240, zIndex: 2 }}>
              <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', color: navy, marginBottom: 4, letterSpacing: '.06em' }}>✦ Up next</div>
              <div style={{ fontSize: mobile ? 12 : 14, lineHeight: 1.35, color: navy, fontWeight: 600 }}>Sleep In Heavenly Peace Bed Build · April 18</div>
            </Sticker>
            <div style={{
              background: yellow, border: `2.5px solid ${navy}`,
              boxShadow: `10px 10px 0 ${navy}`,
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              gap: 16, padding: mobile ? 28 : 32, textAlign: 'center',
              ...(mobile ? {} : { aspectRatio: '1 / 1' }),
            }}>
              <div style={{ fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.1em', color: navy }}>Ready to volunteer?</div>
              <div style={{ fontFamily: fonts.head, fontWeight: 900, fontSize: 'clamp(32px, 5vw, 56px)', lineHeight: .9, letterSpacing: '-.03em', textTransform: 'uppercase', color: navy }}>
                Sign up<br/>for an event.
              </div>
              <button onClick={() => setPage('signup')} style={{
                all: 'unset', cursor: 'pointer',
                background: navy, color: yellow,
                padding: mobile ? '14px 24px' : '18px 32px',
                fontFamily: fonts.head, fontWeight: 900, fontSize: mobile ? 15 : 18,
                textTransform: 'uppercase', letterSpacing: '.02em',
                border: `2.5px solid ${navy}`, boxShadow: `5px 5px 0 #fff`, marginTop: 8,
              }}>
                Event sign up →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={{ background: yellow, borderBottom: `2px solid ${navy}` }}>
        <div style={{ display: 'grid', gridTemplateColumns: mobile ? 'repeat(3, 1fr)' : 'repeat(3, 1fr)' }}>
          {STATS.map((s, i) => (
            <div key={i} style={{
              padding: mobile ? '24px 16px' : '40px 32px',
              borderRight: i === STATS.length - 1 ? 'none' : `2px solid ${navy}`,
            }}>
              <div style={{ fontFamily: fonts.head, fontWeight: 900, fontSize: mobile ? 'clamp(32px, 8vw, 52px)' : 'clamp(48px, 6vw, 80px)', lineHeight: 1, letterSpacing: '-.04em', color: navy }}>
                <CountUp to={s.value} prefix={s.prefix} suffix={s.suffix} />
              </div>
              <div style={{ fontSize: 12, marginTop: 8, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.04em', color: navy }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED EVENT */}
      <section style={{ padding: mobile ? '48px 20px' : '88px 48px', borderBottom: `2px solid ${navy}` }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: mobile ? 20 : 32, flexWrap: 'wrap' }}>
          <div style={{ fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.1em' }}>Signature event</div>
          {!mobile && <div style={{ flex: 1, height: 2, background: navy }} />}
          <div style={{ fontSize: 13, fontWeight: 700, textTransform: 'uppercase' }}>April 18</div>
        </div>
        <h2 style={{ fontFamily: fonts.head, fontWeight: 900, fontSize: 'clamp(36px, 7vw, 96px)', letterSpacing: '-.035em', textTransform: 'uppercase', lineHeight: .92, margin: mobile ? '0 0 20px' : '0 0 32px' }}>
          Sleep In Heavenly<br/>Peace Bed Build.
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : '1.2fr 1fr', gap: 0, border: `2.5px solid ${navy}` }}>
          <div style={{ padding: 8, borderRight: mobile ? 'none' : `2.5px solid ${navy}`, borderBottom: mobile ? `2.5px solid ${navy}` : 'none' }}>
            <PhotoSlot ratio="4/3" label="bed build · spring '25" />
          </div>
          <div style={{ padding: mobile ? 24 : 36, background: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <p style={{ fontSize: mobile ? 15 : 17, lineHeight: 1.55, fontWeight: 500, margin: '0 0 16px' }}>
                After raising over $5,000 in monetary and bedding donations last spring, Hoggard Beta sponsored a Bed Build with Sleep In Heavenly Peace — a local nonprofit that builds and delivers beds to kids in Wilmington who don't have one.
              </p>
              <p style={{ fontSize: mobile ? 15 : 17, lineHeight: 1.55, fontWeight: 500, margin: 0 }}>
                Hoggard Betas worked alongside community members to build <strong>25 beds for kids in our town</strong>. We're doing it again this spring.
              </p>
            </div>
            <button onClick={() => setPage('signup')} style={{
              all: 'unset', cursor: 'pointer', marginTop: 20,
              background: navy, color: yellow,
              padding: '14px 22px', fontFamily: fonts.head, fontWeight: 900, fontSize: 15,
              textTransform: 'uppercase', alignSelf: 'flex-start',
              boxShadow: `4px 4px 0 ${yellow}`,
            }}>Sign up for April 18 →</button>
          </div>
        </div>
      </section>

      {/* FOUR PILLARS */}
      <section style={{ padding: mobile ? '48px 20px' : '64px 48px' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: mobile ? 24 : 40, flexWrap: 'wrap' }}>
          <h2 style={{ fontFamily: fonts.head, fontWeight: 900, fontSize: 'clamp(32px, 6vw, 72px)', margin: 0, letterSpacing: '-.03em', textTransform: 'uppercase', lineHeight: .95 }}>The four pillars</h2>
          {!mobile && <div style={{ flex: 1, height: 2, background: navy, marginBottom: 14 }} />}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: mobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)', gap: 0, border: `2.5px solid ${navy}` }}>
          {PILLARS.map((c, i) => (
            <div key={i} style={{
              background: i % 2 === 0 ? '#fff' : yellow,
              padding: mobile ? 20 : 28,
              borderRight: mobile ? (i % 2 === 0 ? `2.5px solid ${navy}` : 'none') : (i === PILLARS.length - 1 ? 'none' : `2.5px solid ${navy}`),
              borderBottom: mobile && i < 2 ? `2.5px solid ${navy}` : 'none',
              display: 'flex', flexDirection: 'column', gap: 10, minHeight: mobile ? 200 : 260,
            }}>
              <div style={{ fontFamily: fonts.head, fontWeight: 900, fontSize: mobile ? 28 : 40, color: navy, lineHeight: 1, letterSpacing: '-.03em' }}>{c.n}</div>
              <div style={{ fontFamily: fonts.head, fontWeight: 900, fontSize: mobile ? 22 : 32, letterSpacing: '-.02em', textTransform: 'uppercase', lineHeight: 1, marginTop: 'auto' }}>{c.t}</div>
              <p style={{ fontSize: 13, lineHeight: 1.5, margin: 0, fontWeight: 500 }}>{c.d}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

// =============================================================== ABOUT
function AboutPage({ fonts, setPage }) {
  const navy = '#04294e';
  const yellow = '#FFD140';
  const mobile = useMobile();

  return (
    <main>
      <section style={{ padding: mobile ? '40px 20px 32px' : '64px 48px 56px', borderBottom: `2px solid ${navy}` }}>
        <div style={{ fontSize: 14, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 20 }}>About the chapter</div>
        <h1 style={{ fontFamily: fonts.head, fontWeight: 900, fontSize: 'clamp(56px, 10vw, 140px)', lineHeight: .9, letterSpacing: '-.04em', margin: 0, textTransform: 'uppercase' }}>
          Started in<br/><MarkerHighlight animate={true}>1991.</MarkerHighlight>{' '}Still going.
        </h1>
      </section>

      <section style={{ padding: mobile ? '40px 20px' : '64px 48px', display: 'grid', gridTemplateColumns: mobile ? '1fr' : '1.4fr 1fr', gap: mobile ? 40 : 64, borderBottom: `2px solid ${navy}` }}>
        <div>
          <div style={{ fontFamily: fonts.head, fontWeight: 900, fontSize: mobile ? 28 : 40, letterSpacing: '-.02em', textTransform: 'uppercase', marginBottom: 16, lineHeight: 1 }}>Who we are</div>
          <p style={{ fontSize: mobile ? 16 : 19, lineHeight: 1.55, margin: '0 0 16px', fontWeight: 500 }}>
            Welcome to the largest student-led organization at John T. Hoggard High School, and the largest student service club in Southeastern North Carolina. Our chapter of the National Beta Club was started in 1991 and is built on the core pillars of service, character, leadership, and achievement.
          </p>
          <p style={{ fontSize: 15, lineHeight: 1.6, color: 'rgba(4,41,78,.75)', margin: '0 0 14px' }}>
            As part of a nationwide network, we uphold the National Beta Club's mission of promoting academic achievement and community involvement. But more than that, Hoggard Beta is a student-driven club, run by a dedicated team of officers who manage events, volunteer opportunities, competitions, and this website.
          </p>
          <p style={{ fontSize: 15, lineHeight: 1.6, color: 'rgba(4,41,78,.75)', margin: 0 }}>
            Membership isn't just about earning service hours — it's about being an engaged leader and making a difference in both our school and community. We encourage every member to stay active, take initiative, and represent the values that define Beta.
          </p>
        </div>
        <div style={{ position: 'relative', paddingBottom: mobile ? 0 : 18 }}>
          <PhotoSlot ratio="4/5" label="officer team · 2025–26" />
          <Sticker rotate={4} shadow={navy} bg={yellow} style={{ position: 'absolute', bottom: mobile ? 8 : -18, right: mobile ? 8 : -18, fontFamily: fonts.head, fontWeight: 900, fontSize: mobile ? 12 : 15, textTransform: 'uppercase' }}>
            ✦ Largest service club in SE NC
          </Sticker>
        </div>
      </section>

      <section style={{ padding: mobile ? '40px 20px' : '64px 48px', borderBottom: `2px solid ${navy}` }}>
        <div style={{ fontFamily: fonts.head, fontWeight: 900, fontSize: mobile ? 28 : 40, letterSpacing: '-.02em', textTransform: 'uppercase', marginBottom: 8, lineHeight: 1 }}>Our mission</div>
        <p style={{ fontSize: mobile ? 18 : 22, lineHeight: 1.45, maxWidth: 880, fontWeight: 500, margin: '0 0 10px' }}>
          To promote the ideals of academic achievement, character, service, and leadership among students.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: mobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)', gap: 0, border: `2.5px solid ${navy}`, marginTop: mobile ? 28 : 40 }}>
          {PILLARS.map((c, i) => (
            <div key={i} style={{
              background: i % 2 === 0 ? '#fff' : yellow, padding: mobile ? 20 : 28,
              borderRight: mobile ? (i % 2 === 0 ? `2.5px solid ${navy}` : 'none') : (i === PILLARS.length - 1 ? 'none' : `2.5px solid ${navy}`),
              borderBottom: mobile && i < 2 ? `2.5px solid ${navy}` : 'none',
              minHeight: mobile ? 180 : 220,
            }}>
              <div style={{ fontFamily: fonts.head, fontWeight: 900, fontSize: mobile ? 28 : 36, color: navy, lineHeight: 1, letterSpacing: '-.03em' }}>{c.n}</div>
              <div style={{ fontFamily: fonts.head, fontWeight: 900, fontSize: mobile ? 20 : 26, letterSpacing: '-.02em', textTransform: 'uppercase', marginTop: 10 }}>{c.t}</div>
              <p style={{ fontSize: 13, lineHeight: 1.5, margin: '8px 0 0', fontWeight: 500 }}>{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: navy, color: '#fff', padding: mobile ? '40px 20px' : '56px 48px', display: 'flex', alignItems: mobile ? 'flex-start' : 'center', justifyContent: 'space-between', flexDirection: mobile ? 'column' : 'row', gap: 24 }}>
        <div style={{ fontFamily: fonts.head, fontWeight: 900, fontSize: 'clamp(32px, 5vw, 56px)', letterSpacing: '-.03em', textTransform: 'uppercase', lineHeight: .95 }}>Want in? Apply.</div>
        <button onClick={() => setPage('info')} style={{ all: 'unset', cursor: 'pointer', background: yellow, color: navy, padding: '18px 28px', fontFamily: fonts.head, fontWeight: 900, fontSize: 18, textTransform: 'uppercase', border: `2.5px solid ${yellow}`, boxShadow: `5px 5px 0 #fff` }}>
          See applications →
        </button>
      </section>
    </main>
  );
}

// =============================================================== EVENT SIGN UP
function SignupPage({ fonts }) {
  const navy = '#04294e';
  const yellow = '#FFD140';
  const mobile = useMobile();

  return (
    <main style={{ padding: mobile ? '40px 20px' : '64px 48px' }}>
      <div style={{ fontSize: 14, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 16 }}>Event sign up</div>
      <h1 style={{ fontFamily: fonts.head, fontWeight: 900, fontSize: 'clamp(52px, 10vw, 128px)', letterSpacing: '-.04em', textTransform: 'uppercase', lineHeight: .9, margin: mobile ? '0 0 16px' : '0 0 24px' }}>
        Pick an event.<br/><MarkerHighlight animate={true}>Show up.</MarkerHighlight>
      </h1>
      <p style={{ fontSize: mobile ? 16 : 19, lineHeight: 1.5, maxWidth: 760, margin: '0 0 28px', fontWeight: 500 }}>
        All Beta-sponsored events for the semester. Hours from these count toward your requirement. Sign up below, and add the events to your log within one week of the event.
      </p>

      {/* HOUR LOG DUE DATES */}
      <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : 'repeat(3, 1fr)', gap: 0, border: `2.5px solid ${navy}`, marginBottom: mobile ? 36 : 56 }}>
        {[
          { l: 'Fall semester log', d: 'Jan 7, 2026', sub: 'All grades' },
          { l: 'Spring log · Seniors', d: 'May 1, 2026', sub: 'Earlier deadline' },
          { l: 'Spring log · Sophomores & Juniors', d: 'May 25, 2026', sub: 'Standard deadline' },
        ].map((d, i) => (
          <div key={i} style={{
            padding: '22px 24px',
            background: i === 1 ? yellow : '#fff',
            borderRight: mobile ? 'none' : (i === 2 ? 'none' : `2.5px solid ${navy}`),
            borderBottom: mobile && i < 2 ? `2.5px solid ${navy}` : 'none',
          }}>
            <div style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.06em', color: navy, opacity: .75 }}>{d.l}</div>
            <div style={{ fontFamily: fonts.head, fontWeight: 900, fontSize: mobile ? 28 : 36, lineHeight: 1, letterSpacing: '-.025em', color: navy, marginTop: 8, textTransform: 'uppercase' }}>{d.d}</div>
            <div style={{ fontSize: 13, marginTop: 8, fontWeight: 600, color: navy, opacity: .7 }}>{d.sub}</div>
          </div>
        ))}
      </div>

      {/* EVENT LIST */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 0, border: `2.5px solid ${navy}` }}>
        {UPCOMING_EVENTS.map((e, i) => (
          <div key={i} style={{
            background: '#fff',
            borderBottom: i === UPCOMING_EVENTS.length - 1 ? 'none' : `2px solid ${navy}`,
            ...(mobile ? { padding: 20, display: 'flex', flexDirection: 'column', gap: 10 } : { display: 'grid', gridTemplateColumns: '120px 1fr auto', alignItems: 'center', gap: 32, padding: '28px 32px' }),
          }}>
            <div style={mobile ? { display: 'flex', alignItems: 'baseline', gap: 10 } : {}}>
              <div style={{ fontFamily: fonts.head, fontWeight: 900, fontSize: mobile ? 40 : 56, lineHeight: .9, letterSpacing: '-.04em', color: navy }}>{e.day}</div>
              <div style={{ fontFamily: fonts.head, fontWeight: 900, fontSize: mobile ? 12 : 14, letterSpacing: '.04em', textTransform: 'uppercase', color: navy }}>{e.mo}</div>
            </div>
            <div>
              <div style={{ marginBottom: 4 }}>
                <div style={{ fontFamily: fonts.head, fontWeight: 900, fontSize: mobile ? 18 : 24, letterSpacing: '-.015em', textTransform: 'uppercase' }}>{e.title}</div>
              </div>
              <div style={{ fontSize: 14, color: navy, opacity: .8, fontWeight: 500 }}>{e.detail}</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: mobile ? 'flex-start' : 'flex-end', gap: 8 }}>
              {e.spots && (
                <div style={{ fontSize: 13, fontWeight: 700, color: navy, textAlign: mobile ? 'left' : 'right' }}>
                  {e.spots} <span style={{ fontSize: 11, opacity: .7, textTransform: 'uppercase', letterSpacing: '.04em' }}>Slots</span>
                </div>
              )}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6, alignItems: mobile ? 'flex-start' : 'flex-end' }}>
                {e.url ? (
                  <a href={e.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'inline-block', background: navy, color: yellow, padding: '12px 22px', fontFamily: fonts.head, fontWeight: 900, fontSize: 14, textTransform: 'uppercase', boxShadow: `3px 3px 0 ${yellow}`, whiteSpace: 'nowrap' }}>Sign up here first →</a>
                ) : !e.url2 ? (
                  <span style={{ display: 'inline-block', background: 'rgba(4,41,78,.15)', color: 'rgba(4,41,78,.4)', padding: '12px 22px', fontFamily: fonts.head, fontWeight: 900, fontSize: 14, textTransform: 'uppercase' }}>Sign up →</span>
                ) : null}
                {e.url2 && (
                  <a href={e.url2} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'inline-block', background: yellow, color: navy, padding: '10px 22px', fontFamily: fonts.head, fontWeight: 900, fontSize: 13, textTransform: 'uppercase', border: `2px solid ${navy}`, boxShadow: `3px 3px 0 ${navy}`, whiteSpace: 'nowrap' }}>Also register →</a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

// =============================================================== REQUEST VOLUNTEERS
function VolunteersPage({ fonts }) {
  const navy = '#04294e';
  const yellow = '#FFD140';
  const mobile = useMobile();

  return (
    <main style={{ padding: mobile ? '40px 20px' : '64px 48px' }}>
      <div style={{ fontSize: 14, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 16 }}>For community partners</div>
      <h1 style={{ fontFamily: fonts.head, fontWeight: 900, fontSize: 'clamp(52px, 10vw, 128px)', letterSpacing: '-.04em', textTransform: 'uppercase', lineHeight: .9, margin: mobile ? '0 0 16px' : '0 0 24px' }}>
        Need <MarkerHighlight animate={true}>hands?</MarkerHighlight><br/>We've got 'em.
      </h1>
      <p style={{ fontSize: mobile ? 16 : 19, lineHeight: 1.5, maxWidth: 760, margin: mobile ? '0 0 36px' : '0 0 56px', fontWeight: 500 }}>
        Nonprofits, schools, and community orgs across the Wilmington area — tell us what you need and our community outreach coordinators will be in touch within 24–72 hours.
      </p>

      <div style={{ border: `2.5px solid ${navy}`, background: '#fff', boxShadow: `10px 10px 0 ${yellow}` }}>
        <div style={{ background: navy, color: '#fff', padding: '18px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13 }}>
            <span style={{ width: 12, height: 12, background: yellow, display: 'inline-block', flexShrink: 0 }} />
            Volunteer Request Form
          </div>
          <span style={{ fontSize: 12, color: 'rgba(255,255,255,.6)' }}>jthbetaclub</span>
        </div>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeiIjMm_tRkNV-Ak9WYhaMa4jMCpkzHAT9syvjynOtwctoBQw/viewform?embedded=true" height="900" frameBorder="0" style={{ display: 'block', width: '100%', border: 0 }}>Loading…</iframe>
      </div>
    </main>
  );
}

// =============================================================== INFO
function InfoPage({ fonts, setPage }) {
  const navy = '#04294e';
  const yellow = '#FFD140';
  const mobile = useMobile();
  const tileBgs = ['#fff', yellow, navy, '#fff'];

  return (
    <main style={{ padding: mobile ? '40px 20px' : '64px 48px' }}>
      <div style={{ fontSize: 14, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 16 }}>Info</div>
      <h1 style={{ fontFamily: fonts.head, fontWeight: 900, fontSize: 'clamp(52px, 10vw, 128px)', letterSpacing: '-.04em', textTransform: 'uppercase', lineHeight: .9, margin: mobile ? '0 0 12px' : '0 0 16px' }}>
        Member<br/><MarkerHighlight animate={true}>resources.</MarkerHighlight>
      </h1>
      <p style={{ fontSize: mobile ? 16 : 18, lineHeight: 1.5, maxWidth: 600, margin: mobile ? '0 0 36px' : '0 0 56px', fontWeight: 500 }}>
        Bookmark this page. Everything you need to be a member lives here.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : '1fr 1fr', gap: 0, border: `2.5px solid ${navy}` }}>
        {INFO_TILES.map((t, i) => {
          const bg = tileBgs[i];
          const isDark = bg === navy;
          const isWhite = bg === '#fff';
          return (
            <a key={t.id} href="#" onClick={(e) => { e.preventDefault(); setPage(t.id); }} style={{
              textDecoration: 'none', background: bg, color: isDark ? '#fff' : navy,
              padding: mobile ? 28 : 40,
              borderRight: mobile ? 'none' : (i % 2 === 0 ? `2.5px solid ${navy}` : 'none'),
              borderBottom: mobile ? (i < INFO_TILES.length - 1 ? `2.5px solid ${navy}` : 'none') : (i < 2 ? `2.5px solid ${navy}` : 'none'),
              minHeight: mobile ? 220 : 300,
              display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden',
            }}>
              <div style={{ width: 56, height: 56, background: isWhite ? yellow : (isDark ? yellow : navy), color: isDark || isWhite ? navy : yellow, border: `2.5px solid ${navy}`, display: 'grid', placeItems: 'center', fontFamily: fonts.head, fontWeight: 900, fontSize: 26, marginBottom: 20, transform: 'rotate(-4deg)', boxShadow: `4px 4px 0 ${isDark ? yellow : navy}` }}>
                {t.icon}
              </div>
              <div style={{ fontFamily: fonts.head, fontWeight: 900, fontSize: mobile ? 28 : 36, letterSpacing: '-.02em', textTransform: 'uppercase', lineHeight: .95, marginTop: 'auto', marginBottom: 10 }}>{t.title}</div>
              <div style={{ fontSize: 14, lineHeight: 1.5, fontWeight: 500, opacity: isDark ? .85 : .75 }}>{t.sub}</div>
              {t.subItems && (
                <div style={{ marginTop: 12, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {t.subItems.map((s) => (
                    <span key={s} style={{ fontSize: 11, fontWeight: 700, padding: '6px 10px', background: isDark ? 'rgba(255,255,255,.12)' : 'rgba(4,41,78,.08)', textTransform: 'uppercase', letterSpacing: '.04em' }}>{s}</span>
                  ))}
                </div>
              )}
              <div style={{ marginTop: 16, fontFamily: fonts.head, fontWeight: 900, fontSize: 14, textTransform: 'uppercase', color: isDark ? yellow : navy }}>Open →</div>
            </a>
          );
        })}
      </div>

      {/* Quick glance requirements */}
      <section style={{ marginTop: mobile ? 40 : 64 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 24, flexWrap: 'wrap' }}>
          <h2 style={{ fontFamily: fonts.head, fontWeight: 900, fontSize: 'clamp(28px, 4vw, 56px)', margin: 0, letterSpacing: '-.025em', textTransform: 'uppercase', lineHeight: .95 }}>Quick glance: requirements</h2>
          {!mobile && <div style={{ flex: 1, height: 2, background: navy, marginBottom: 10 }} />}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : 'repeat(3, 1fr)', gap: 0, border: `2.5px solid ${navy}` }}>
          {[
            { g: 'Sophomores', hrs: '20', events: '2', gpa: '3.6 / 3.8', logDue: 'May 25' },
            { g: 'Juniors', hrs: '20', events: '2', gpa: '3.6 / 3.8', logDue: 'May 25' },
            { g: 'Seniors', hrs: '20', events: '2', gpa: '3.6 / 3.8', logDue: 'May 1' },
          ].map((r, i) => (
            <div key={i} style={{ padding: 22, background: i % 2 === 0 ? '#fff' : yellow, borderRight: mobile ? 'none' : (i === 2 ? 'none' : `2px solid ${navy}`), borderBottom: mobile && i < 2 ? `2px solid ${navy}` : 'none' }}>
              <div style={{ fontFamily: fonts.head, fontWeight: 900, fontSize: 20, textTransform: 'uppercase', letterSpacing: '-.01em', marginBottom: 12 }}>{r.g}</div>
              {[['Hours / yr', r.hrs], ['Events / sem', r.events], ['GPA (unwt / wt)', r.gpa], ['Spring log due', r.logDue]].map(([k, v], j) => (
                <div key={j} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: j < 3 ? '1px solid rgba(4,41,78,.15)' : 'none', fontSize: 13 }}>
                  <span style={{ opacity: .7 }}>{k}</span>
                  <span style={{ fontWeight: 700 }}>{v}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
        <p style={{ fontSize: 13, color: 'rgba(4,41,78,.65)', marginTop: 14 }}>
          Note: Only 2 hours per semester may come from item drives (Blanket Drive, Operation Christmas Child, etc). 5 hours over the fall requirement roll over to spring.
        </p>
      </section>
    </main>
  );
}

// =============================================================== CONTACT
function ContactPage({ fonts }) {
  const navy = '#04294e';
  const yellow = '#FFD140';
  const mobile = useMobile();

  return (
    <main style={{ padding: mobile ? '40px 20px' : '64px 48px' }}>
      <div style={{ fontSize: 14, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 16 }}>Contact</div>
      <h1 style={{ fontFamily: fonts.head, fontWeight: 900, fontSize: 'clamp(52px, 10vw, 128px)', letterSpacing: '-.04em', textTransform: 'uppercase', lineHeight: .9, margin: mobile ? '0 0 16px' : '0 0 24px' }}>
        Say<br/><MarkerHighlight animate={true}>hello.</MarkerHighlight>
      </h1>
      <p style={{ fontSize: mobile ? 16 : 19, lineHeight: 1.5, maxWidth: 720, margin: mobile ? '0 0 32px' : '0 0 48px', fontWeight: 500 }}>
        Questions about membership, applications, or partnering on a service event? Email is the fastest way. For club issues, talk to an officer or one of our advisors directly.
      </p>

      <div style={{ marginBottom: mobile ? 32 : 48 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 18, flexWrap: 'wrap' }}>
          <h2 style={{ fontFamily: fonts.head, fontWeight: 900, fontSize: mobile ? 26 : 36, margin: 0, letterSpacing: '-.02em', textTransform: 'uppercase', lineHeight: 1 }}>Our advisors</h2>
          {!mobile && <div style={{ flex: 1, height: 2, background: navy, marginBottom: 8 }} />}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : 'repeat(3, 1fr)', gap: 0, border: `2.5px solid ${navy}` }}>
          {ADVISORS.map((a, i) => (
            <div key={i} style={{ padding: mobile ? 24 : 28, background: i === 1 ? yellow : '#fff', borderRight: mobile ? 'none' : (i === 2 ? 'none' : `2.5px solid ${navy}`), borderBottom: mobile && i < 2 ? `2.5px solid ${navy}` : 'none' }}>
              <div style={{ fontFamily: fonts.head, fontWeight: 900, fontSize: mobile ? 20 : 26, letterSpacing: '-.015em', textTransform: 'uppercase' }}>{a.name}</div>
              <div style={{ fontSize: 13, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.04em', marginTop: 4, opacity: .7 }}>{a.role}</div>
              <div style={{ fontFamily: 'ui-monospace, Menlo, monospace', fontSize: mobile ? 13 : 14, marginTop: 14, fontWeight: 600 }}>{a.email}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : '1fr 1fr', gap: 0, border: `2.5px solid ${navy}` }}>
        <div style={{ padding: mobile ? 28 : 36, borderRight: mobile ? 'none' : `2.5px solid ${navy}`, borderBottom: mobile ? `2.5px solid ${navy}` : 'none', background: '#fff' }}>
          <div style={{ width: 52, height: 52, background: yellow, border: `2.5px solid ${navy}`, display: 'grid', placeItems: 'center', fontFamily: fonts.head, fontWeight: 900, fontSize: 22, marginBottom: 18, transform: 'rotate(-4deg)', boxShadow: `4px 4px 0 ${navy}` }}>@</div>
          <div style={{ fontFamily: fonts.head, fontWeight: 900, fontSize: mobile ? 22 : 28, textTransform: 'uppercase', letterSpacing: '-.02em', marginBottom: 8 }}>Email the club</div>
          <p style={{ fontSize: 15, lineHeight: 1.55, margin: '0 0 16px', fontWeight: 500 }}>Officers and advisors check this together. Expect a reply within a couple school days.</p>
          <div style={{ fontFamily: 'ui-monospace, Menlo, monospace', fontSize: mobile ? 14 : 16, color: navy, fontWeight: 700, wordBreak: 'break-all' }}>jthbetaclub@gmail.com</div>
        </div>
        <div style={{ padding: mobile ? 28 : 36, background: yellow }}>
          <div style={{ width: 52, height: 52, background: '#fff', border: `2.5px solid ${navy}`, display: 'grid', placeItems: 'center', fontFamily: fonts.head, fontWeight: 900, fontSize: 22, marginBottom: 18, transform: 'rotate(4deg)', boxShadow: `4px 4px 0 ${navy}` }}>★</div>
          <div style={{ fontFamily: fonts.head, fontWeight: 900, fontSize: mobile ? 22 : 28, textTransform: 'uppercase', letterSpacing: '-.02em', marginBottom: 8 }}>Stop by</div>
          <p style={{ fontSize: 15, lineHeight: 1.55, margin: '0 0 16px', fontWeight: 500 }}>Meetings happen during the school year. Check the Info page for the current schedule.</p>
          <div style={{ fontSize: 15, color: navy, lineHeight: 1.6, fontWeight: 600 }}>John T. Hoggard High School<br/>4305 Shipyard Blvd<br/>Wilmington, NC 28403</div>
        </div>
      </div>
    </main>
  );
}

// =============================================================== LEADERSHIP
function LeadershipPage({ fonts, setPage }) {
  const navy = '#04294e';
  const yellow = '#FFD140';
  const mobile = useMobile();
  const cols = mobile ? 2 : 4;
  const totalRows = Math.ceil(OFFICERS.length / cols);

  return (
    <main style={{ padding: mobile ? '40px 20px' : '64px 48px' }}>
      <BackButton label="Info" to="info" setPage={setPage} yellow={yellow} />

      <div style={{ fontSize: 14, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 16 }}>2025–26</div>
      <h1 style={{ fontFamily: fonts.head, fontWeight: 900, fontSize: 'clamp(52px, 10vw, 128px)', letterSpacing: '-.04em', textTransform: 'uppercase', lineHeight: .9, margin: '0 0 48px' }}>
        Current<br/><MarkerHighlight animate={true}>Leadership.</MarkerHighlight>
      </h1>

      {/* Officer grid */}
      <div style={{ display: 'grid', gridTemplateColumns: mobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)', border: `2.5px solid ${navy}` }}>
        {OFFICERS.map((o, i) => {
          const row = Math.floor(i / cols);
          const col = i % cols;
          const isRowEnd = col === cols - 1 || i === OFFICERS.length - 1;
          const isLastRow = row === totalRows - 1;
          const bg = (row + col) % 2 === 0 ? '#fff' : yellow;

          return (
            <div key={i} style={{
              background: bg,
              padding: mobile ? '20px 16px' : 28,
              borderRight: isRowEnd ? 'none' : `2.5px solid ${navy}`,
              borderBottom: isLastRow ? 'none' : `2.5px solid ${navy}`,
              display: 'flex', flexDirection: 'column',
            }}>
              <PhotoSlot ratio="1/1" label={o.name.split(' ')[0].toLowerCase()} style={{ marginBottom: 14 }} />
              <div style={{ fontFamily: fonts.head, fontWeight: 900, fontSize: mobile ? 14 : 17, textTransform: 'uppercase', letterSpacing: '-.01em', lineHeight: 1.1, marginBottom: 4 }}>
                {o.name}
              </div>
              <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.04em', color: navy, opacity: .6 }}>
                {o.title}
              </div>
            </div>
          );
        })}
      </div>

      {/* Advisors */}
      <section style={{ marginTop: mobile ? 48 : 72 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 20, flexWrap: 'wrap' }}>
          <h2 style={{ fontFamily: fonts.head, fontWeight: 900, fontSize: mobile ? 26 : 36, margin: 0, letterSpacing: '-.02em', textTransform: 'uppercase' }}>Faculty Advisors</h2>
          {!mobile && <div style={{ flex: 1, height: 2, background: navy }} />}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : 'repeat(3, 1fr)', border: `2.5px solid ${navy}` }}>
          {ADVISORS.map((a, i) => (
            <div key={i} style={{ padding: mobile ? 20 : 28, background: i === 1 ? yellow : '#fff', borderRight: mobile ? 'none' : (i === 2 ? 'none' : `2.5px solid ${navy}`), borderBottom: mobile && i < 2 ? `2.5px solid ${navy}` : 'none' }}>
              <div style={{ fontFamily: fonts.head, fontWeight: 900, fontSize: mobile ? 20 : 24, textTransform: 'uppercase', letterSpacing: '-.01em' }}>{a.name}</div>
              <div style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.04em', marginTop: 4, opacity: .6 }}>{a.role}</div>
              <div style={{ fontFamily: 'ui-monospace, Menlo, monospace', fontSize: 13, marginTop: 12, fontWeight: 600 }}>{a.email}</div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

// =============================================================== MEMBER REQUIREMENTS
function RequirementsPage({ fonts, setPage }) {
  const navy = '#04294e';
  const yellow = '#FFD140';
  const mobile = useMobile();

  const grades = [
    { g: 'Sophomores', hrs: '20', events: '2 / semester', gpa: '3.6 unweighted\n3.8 weighted', fallDue: 'Jan 7, 2026', springDue: 'May 25, 2026' },
    { g: 'Juniors', hrs: '20', events: '2 / semester', gpa: '3.6 unweighted\n3.8 weighted', fallDue: 'Jan 7, 2026', springDue: 'May 25, 2026' },
    { g: 'Seniors', hrs: '20', events: '2 / semester', gpa: '3.6 unweighted\n3.8 weighted', fallDue: 'Jan 7, 2026', springDue: 'May 1, 2026' },
  ];

  const notes = [
    { icon: '⏱', title: 'Item Drive Hours', body: 'Only 2 hours per semester may come from item drives (Blanket Drive, Operation Christmas Child, etc.). These events are valuable, but can\'t be the majority of your hours.' },
    { icon: '→', title: 'Hour Rollover', body: 'If you earn more than 10 hours in the fall semester, up to 5 extra hours carry over to your spring requirement. Complete your log on time to take advantage of this.' },
    { icon: '✓', title: 'Attendance', body: 'You must attend at least 2 Beta-sponsored service events per semester. Logging outside volunteer hours counts toward your total, but events matter separately.' },
    { icon: '!', title: 'Log Completion', body: 'Complete your hour log by the deadline for your grade. Late logs may not be accepted. Contact an advisor if you have an extenuating circumstance before the deadline.' },
  ];

  return (
    <main style={{ padding: mobile ? '40px 20px' : '64px 48px' }}>
      <BackButton label="Info" to="info" setPage={setPage} yellow={yellow} />

      <div style={{ fontSize: 14, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 16 }}>2025–26</div>
      <h1 style={{ fontFamily: fonts.head, fontWeight: 900, fontSize: 'clamp(44px, 9vw, 120px)', letterSpacing: '-.04em', textTransform: 'uppercase', lineHeight: .9, margin: '0 0 20px' }}>
        Member<br/><MarkerHighlight animate={true}>Requirements.</MarkerHighlight>
      </h1>
      <p style={{ fontSize: mobile ? 15 : 18, lineHeight: 1.5, maxWidth: 720, margin: mobile ? '0 0 36px' : '0 0 56px', fontWeight: 500 }}>
        To remain an active member in good standing, you must meet the following requirements each school year. Check your grade level below.
      </p>

      {/* Grade table */}
      <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : 'repeat(3, 1fr)', gap: 0, border: `2.5px solid ${navy}`, marginBottom: mobile ? 36 : 56 }}>
        {grades.map((r, i) => (
          <div key={i} style={{ padding: mobile ? 24 : 28, background: i === 1 ? yellow : '#fff', borderRight: mobile ? 'none' : (i === 2 ? 'none' : `2px solid ${navy}`), borderBottom: mobile && i < 2 ? `2px solid ${navy}` : 'none' }}>
            <div style={{ fontFamily: fonts.head, fontWeight: 900, fontSize: mobile ? 22 : 26, textTransform: 'uppercase', letterSpacing: '-.01em', marginBottom: 18, paddingBottom: 12, borderBottom: `2px solid ${navy}` }}>{r.g}</div>
            {[
              ['Annual hours', r.hrs],
              ['Events', r.events],
              ['GPA', r.gpa],
              ['Fall log due', r.fallDue],
              ['Spring log due', r.springDue],
            ].map(([k, v], j) => (
              <div key={j} style={{ padding: '8px 0', borderBottom: j < 4 ? '1px solid rgba(4,41,78,.12)' : 'none' }}>
                <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.05em', opacity: .6, marginBottom: 2 }}>{k}</div>
                <div style={{ fontSize: 15, fontWeight: 700, whiteSpace: 'pre-line' }}>{v}</div>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Notes grid */}
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 24, flexWrap: 'wrap' }}>
        <h2 style={{ fontFamily: fonts.head, fontWeight: 900, fontSize: mobile ? 26 : 36, margin: 0, letterSpacing: '-.02em', textTransform: 'uppercase' }}>Important notes</h2>
        {!mobile && <div style={{ flex: 1, height: 2, background: navy }} />}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : 'repeat(2, 1fr)', gap: 0, border: `2.5px solid ${navy}` }}>
        {notes.map((n, i) => {
          const row = Math.floor(i / 2);
          const col = i % 2;
          const isLastRow = row === Math.ceil(notes.length / 2) - 1;
          return (
            <div key={i} style={{
              padding: mobile ? 24 : 32,
              background: (mobile ? i % 2 : (row + col) % 2) === 0 ? '#fff' : yellow,
              borderRight: mobile ? 'none' : (col === 0 ? `2.5px solid ${navy}` : 'none'),
              borderBottom: mobile ? (i < notes.length - 1 ? `2.5px solid ${navy}` : 'none') : (isLastRow ? 'none' : `2.5px solid ${navy}`),
            }}>
              <div style={{ fontFamily: fonts.head, fontWeight: 900, fontSize: 28, marginBottom: 10 }}>{n.icon}</div>
              <div style={{ fontFamily: fonts.head, fontWeight: 900, fontSize: 20, textTransform: 'uppercase', letterSpacing: '-.01em', marginBottom: 8 }}>{n.title}</div>
              <p style={{ fontSize: 14, lineHeight: 1.6, margin: 0, fontWeight: 500 }}>{n.body}</p>
            </div>
          );
        })}
      </div>
    </main>
  );
}

// =============================================================== MEETING PRESENTATIONS
function SlidesPage({ fonts, setPage }) {
  const navy = '#04294e';
  const yellow = '#FFD140';
  const mobile = useMobile();

  return (
    <main style={{ padding: mobile ? '40px 20px' : '64px 48px' }}>
      <BackButton label="Info" to="info" setPage={setPage} yellow={yellow} />

      <div style={{ fontSize: 14, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 16 }}>2025–26</div>
      <h1 style={{ fontFamily: fonts.head, fontWeight: 900, fontSize: 'clamp(44px, 9vw, 120px)', letterSpacing: '-.04em', textTransform: 'uppercase', lineHeight: .9, margin: '0 0 20px' }}>
        Meeting<br/><MarkerHighlight animate={true}>Presentations.</MarkerHighlight>
      </h1>
      <p style={{ fontSize: mobile ? 15 : 18, lineHeight: 1.5, maxWidth: 720, margin: mobile ? '0 0 36px' : '0 0 56px', fontWeight: 500 }}>
        Presentations from our meetings will be posted here when available.
      </p>

      <div style={{ border: `2.5px solid ${navy}`, padding: mobile ? '48px 24px' : '72px 48px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 16, textAlign: 'center', background: '#fff' }}>
        <div style={{ width: 64, height: 64, background: yellow, border: `2.5px solid ${navy}`, display: 'grid', placeItems: 'center', fontFamily: fonts.head, fontWeight: 900, fontSize: 28, transform: 'rotate(-4deg)', boxShadow: `4px 4px 0 ${navy}`, flexShrink: 0 }}>▶</div>
        <div style={{ fontFamily: fonts.head, fontWeight: 900, fontSize: mobile ? 22 : 28, textTransform: 'uppercase', letterSpacing: '-.02em', lineHeight: 1 }}>No presentations yet</div>
        <p style={{ fontSize: 15, lineHeight: 1.6, margin: 0, fontWeight: 500, maxWidth: 480, color: 'rgba(4,41,78,.7)' }}>
          Check back after meetings — slides will be added here when they're ready.
        </p>
      </div>
    </main>
  );
}

// =============================================================== APPLICATIONS
function ApplicationsPage({ fonts, setPage }) {
  const navy = '#04294e';
  const yellow = '#FFD140';
  const mobile = useMobile();

  const apps = [
    {
      key: 'general',
      icon: '✓',
      title: 'General Membership Application',
      sub: 'For students interested in joining JTH Beta Club. Acceptance is based on GPA, teacher recommendations, and a brief essay.',
      badge: 'New members',
      bg: '#fff',
    },
    {
      key: 'officer',
      icon: '★',
      title: 'Officer Application',
      sub: 'For current members who want to run for a leadership position. Open to Sophomores, Juniors, and Seniors in good standing.',
      badge: 'Current members',
      bg: yellow,
    },
  ];

  return (
    <main style={{ padding: mobile ? '40px 20px' : '64px 48px' }}>
      <BackButton label="Info" to="info" setPage={setPage} yellow={yellow} />

      <div style={{ fontSize: 14, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 16 }}>2025–26</div>
      <h1 style={{ fontFamily: fonts.head, fontWeight: 900, fontSize: 'clamp(44px, 9vw, 120px)', letterSpacing: '-.04em', textTransform: 'uppercase', lineHeight: .9, margin: '0 0 20px' }}>
        <MarkerHighlight animate={true}>Applications.</MarkerHighlight>
      </h1>

      <div style={{ border: `2.5px solid ${navy}`, background: yellow, padding: mobile ? '24px 24px' : '28px 36px', marginBottom: mobile ? 36 : 56, display: 'flex', alignItems: mobile ? 'flex-start' : 'center', gap: 16, flexDirection: mobile ? 'column' : 'row', boxShadow: `6px 6px 0 ${navy}` }}>
        <div style={{ fontFamily: fonts.head, fontWeight: 900, fontSize: 28, lineHeight: 1, flexShrink: 0 }}>✕</div>
        <div>
          <div style={{ fontFamily: fonts.head, fontWeight: 900, fontSize: mobile ? 20 : 24, textTransform: 'uppercase', letterSpacing: '-.01em', lineHeight: 1, marginBottom: 6 }}>Applications are closed for 2025–2026</div>
          <p style={{ fontSize: 15, lineHeight: 1.55, margin: 0, fontWeight: 500 }}>The application window for the current school year has passed. Check back in the fall when new membership applications open.</p>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: mobile ? 32 : 48, opacity: .45, pointerEvents: 'none' }}>
        {apps.map((a) => (
          <div key={a.key} style={{ border: `2.5px solid ${navy}`, boxShadow: `8px 8px 0 ${a.bg === '#fff' ? yellow : navy}` }}>
            <div style={{ background: navy, color: '#fff', padding: mobile ? '20px 24px' : '24px 32px', display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
              <div style={{ width: 48, height: 48, background: yellow, border: `2px solid rgba(255,255,255,.2)`, display: 'grid', placeItems: 'center', fontFamily: fonts.head, fontWeight: 900, fontSize: 22, flexShrink: 0 }}>
                {a.icon}
              </div>
              <div>
                <div style={{ fontFamily: fonts.head, fontWeight: 900, fontSize: mobile ? 20 : 24, textTransform: 'uppercase', letterSpacing: '-.01em' }}>{a.title}</div>
                <div style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.05em', color: yellow, marginTop: 2 }}>{a.badge}</div>
              </div>
            </div>
            <div style={{ padding: mobile ? '20px 24px' : '24px 32px', background: a.bg }}>
              <p style={{ fontSize: 15, lineHeight: 1.6, margin: 0, fontWeight: 500 }}>{a.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

Object.assign(window, {
  HomePage, AboutPage, SignupPage, VolunteersPage, InfoPage, ContactPage,
  LeadershipPage, RequirementsPage, SlidesPage, ApplicationsPage,
});
