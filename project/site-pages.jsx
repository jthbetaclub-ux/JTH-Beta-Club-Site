// site-pages.jsx — All 6 pages for the JTH Beta Club site.

// =============================================================== HOME
function HomePage({ fonts, setPage }) {
  const navy = '#04294e';
  const yellow = '#FFD140';
  return (
    <main>
      {/* HERO */}
      <section style={{ position: 'relative', padding: '80px 48px 64px', borderBottom: `2px solid ${navy}` }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 56, alignItems: 'start' }}>
          <div>
            <h1 style={{
              fontFamily: fonts.head, fontWeight: 900, fontSize: 'clamp(72px, 11vw, 156px)',
              lineHeight: .88, letterSpacing: '-.045em',
              margin: '0 0 32px',
              textTransform: 'uppercase',
            }}>
              Beta is<br/>
              <MarkerHighlight>service.</MarkerHighlight>
            </h1>
            <p style={{ fontSize: 22, lineHeight: 1.45, maxWidth: 640, margin: 0, fontWeight: 500 }}>
              We're the largest student-led organization at Hoggard. We strive to give back to the community and make the world a better place.
            </p>
          </div>

          {/* CTA SQUARE + STICKER */}
          <div style={{ position: 'relative', paddingTop: 28 }}>
            <Sticker
              rotate={4}
              shadow={navy}
              style={{ position: 'absolute', top: -8, right: -8, maxWidth: 240, zIndex: 2 }}
            >
              <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', color: navy, marginBottom: 4, letterSpacing: '.06em' }}>
                ✦ Up next
              </div>
              <div style={{ fontSize: 14, lineHeight: 1.35, color: navy, fontWeight: 600 }}>
                Sleep In Heavenly Peace Bed Build · April 18
              </div>
            </Sticker>
            <div
              style={{
                aspectRatio: '1 / 1',
                background: yellow,
                border: `2.5px solid ${navy}`,
                boxShadow: `10px 10px 0 ${navy}`,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 18,
                padding: 32,
                textAlign: 'center',
              }}
            >
              <div style={{ fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.1em', color: navy }}>
                Ready to volunteer?
              </div>
              <div style={{ fontFamily: fonts.head, fontWeight: 900, fontSize: 'clamp(40px, 4vw, 56px)', lineHeight: .9, letterSpacing: '-.03em', textTransform: 'uppercase', color: navy }}>
                Sign up<br/>for an event.
              </div>
              <button
                onClick={() => setPage('signup')}
                style={{
                  all: 'unset', cursor: 'pointer',
                  background: navy, color: yellow,
                  padding: '18px 32px',
                  fontFamily: fonts.head, fontWeight: 900, fontSize: 18,
                  textTransform: 'uppercase', letterSpacing: '.02em',
                  border: `2.5px solid ${navy}`,
                  boxShadow: `5px 5px 0 #fff`,
                  marginTop: 8,
                }}
              >
                Event sign up →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={{ background: yellow, borderBottom: `2px solid ${navy}` }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
          {STATS.map((s, i) => (
            <div key={i} style={{
              padding: '40px 32px',
              borderRight: i === STATS.length - 1 ? 'none' : `2px solid ${navy}`,
            }}>
              <div style={{
                fontFamily: fonts.head, fontWeight: 900, fontSize: 'clamp(48px, 6vw, 80px)',
                lineHeight: 1, letterSpacing: '-.04em', color: navy,
              }}>{s.n}</div>
              <div style={{ fontSize: 14, marginTop: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.04em', color: navy }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED EVENT — Sleep In Heavenly Peace */}
      <section style={{ padding: '88px 48px', borderBottom: `2px solid ${navy}` }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 24, marginBottom: 32 }}>
          <div style={{ fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.1em' }}>Signature event</div>
          <div style={{ flex: 1, height: 2, background: navy }} />
          <div style={{ fontSize: 13, fontWeight: 700, textTransform: 'uppercase' }}>April 18</div>
        </div>
        <h2 style={{ fontFamily: fonts.head, fontWeight: 900, fontSize: 'clamp(48px, 7vw, 96px)', letterSpacing: '-.035em', textTransform: 'uppercase', lineHeight: .92, margin: '0 0 32px' }}>
          Sleep In Heavenly<br/>Peace Bed Build.
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 0, border: `2.5px solid ${navy}` }}>
          <div style={{ padding: 8, borderRight: `2.5px solid ${navy}` }}>
            <PhotoSlot ratio="4/3" label="bed build · spring '25" />
          </div>
          <div style={{ padding: 36, background: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <p style={{ fontSize: 17, lineHeight: 1.55, fontWeight: 500, margin: '0 0 20px' }}>
                After raising over $5,000 in monetary and bedding donations last spring, Hoggard Beta sponsored a Bed Build with Sleep In Heavenly Peace — a local nonprofit that builds and delivers beds to kids in Wilmington who don't have one.
              </p>
              <p style={{ fontSize: 17, lineHeight: 1.55, fontWeight: 500, margin: 0 }}>
                Hoggard Betas worked alongside community members to build <strong>25 beds for kids in our town</strong>. We're doing it again this spring.
              </p>
            </div>
            <button onClick={() => setPage('signup')} style={{
              all: 'unset', cursor: 'pointer',
              marginTop: 24, background: navy, color: yellow,
              padding: '14px 22px', fontFamily: fonts.head, fontWeight: 900, fontSize: 15,
              textTransform: 'uppercase', alignSelf: 'flex-start',
              boxShadow: `4px 4px 0 ${yellow}`,
            }}>
              Sign up for April 18 →
            </button>
          </div>
        </div>
      </section>

      {/* FOUR PILLARS */}
      <section style={{ padding: '88px 48px' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 24, marginBottom: 40 }}>
          <h2 style={{ fontFamily: fonts.head, fontWeight: 900, fontSize: 'clamp(40px, 6vw, 72px)', margin: 0, letterSpacing: '-.03em', textTransform: 'uppercase', lineHeight: .95 }}>
            The four pillars
          </h2>
          <div style={{ flex: 1, height: 2, background: navy, marginBottom: 14 }} />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, border: `2.5px solid ${navy}` }}>
          {PILLARS.map((c, i) => (
            <div key={i} style={{
              background: i % 2 === 0 ? '#fff' : yellow,
              padding: 28,
              borderRight: i === PILLARS.length - 1 ? 'none' : `2.5px solid ${navy}`,
              display: 'flex', flexDirection: 'column', gap: 12, minHeight: 260,
            }}>
              <div style={{ fontFamily: fonts.head, fontWeight: 900, fontSize: 40, color: navy, lineHeight: 1, letterSpacing: '-.03em' }}>{c.n}</div>
              <div style={{ fontFamily: fonts.head, fontWeight: 900, fontSize: 32, letterSpacing: '-.02em', textTransform: 'uppercase', lineHeight: 1, marginTop: 'auto' }}>{c.t}</div>
              <p style={{ fontSize: 14, lineHeight: 1.5, margin: 0, fontWeight: 500 }}>{c.d}</p>
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
  return (
    <main>
      <section style={{ padding: '64px 48px 56px', borderBottom: `2px solid ${navy}` }}>
        <div style={{ fontSize: 14, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 20 }}>About the chapter</div>
        <h1 style={{ fontFamily: fonts.head, fontWeight: 900, fontSize: 'clamp(64px, 10vw, 140px)', lineHeight: .9, letterSpacing: '-.04em', margin: 0, textTransform: 'uppercase' }}>
          Started in<br/>
          <MarkerHighlight>1991.</MarkerHighlight>{' '}
          Still going.
        </h1>
      </section>

      <section style={{ padding: '64px 48px', display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 64, borderBottom: `2px solid ${navy}` }}>
        <div>
          <div style={{ fontFamily: fonts.head, fontWeight: 900, fontSize: 40, letterSpacing: '-.02em', textTransform: 'uppercase', marginBottom: 20, lineHeight: 1 }}>Who we are</div>
          <p style={{ fontSize: 19, lineHeight: 1.55, margin: '0 0 20px', fontWeight: 500 }}>
            Welcome to the largest student-led organization at John T. Hoggard High School, and the largest student service club in Southeastern North Carolina. Our chapter of the National Beta Club was started in 1991 and is built on the core pillars of service, character, leadership, and achievement.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.6, color: 'rgba(4,41,78,.75)', margin: '0 0 16px' }}>
            As part of a nationwide network, we uphold the National Beta Club's mission of promoting academic achievement and community involvement. But more than that, Hoggard Beta is a student-driven club, run by a dedicated team of officers who manage events, volunteer opportunities, competitions, and this website.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.6, color: 'rgba(4,41,78,.75)', margin: 0 }}>
            Membership isn't just about earning service hours — it's about being an engaged leader and making a difference in both our school and community. We encourage every member to stay active, take initiative, and represent the values that define Beta.
          </p>
        </div>
        <div style={{ position: 'relative' }}>
          <PhotoSlot ratio="4/5" label="officer team · 2025–26" />
          <Sticker
            rotate={4}
            shadow={navy}
            bg={yellow}
            style={{ position: 'absolute', bottom: -18, right: -18, fontFamily: fonts.head, fontWeight: 900, fontSize: 15, textTransform: 'uppercase' }}
          >
            ✦ Largest service club in SE NC
          </Sticker>
        </div>
      </section>

      {/* MISSION + PILLARS */}
      <section style={{ padding: '64px 48px', borderBottom: `2px solid ${navy}` }}>
        <div style={{ fontFamily: fonts.head, fontWeight: 900, fontSize: 40, letterSpacing: '-.02em', textTransform: 'uppercase', marginBottom: 8, lineHeight: 1 }}>Our mission</div>
        <p style={{ fontSize: 22, lineHeight: 1.45, maxWidth: 880, fontWeight: 500, margin: '0 0 12px' }}>
          To promote the ideals of academic achievement, character, service, and leadership among students.
        </p>
        <p style={{ fontSize: 16, fontStyle: 'italic', color: 'rgba(4,41,78,.7)', margin: '0 0 40px' }}>
          Motto: “Let Us Lead by Serving Others.”
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, border: `2.5px solid ${navy}` }}>
          {PILLARS.map((c, i) => (
            <div key={i} style={{
              background: i % 2 === 0 ? '#fff' : yellow,
              padding: 28,
              borderRight: i === PILLARS.length - 1 ? 'none' : `2.5px solid ${navy}`,
              minHeight: 220,
            }}>
              <div style={{ fontFamily: fonts.head, fontWeight: 900, fontSize: 36, color: navy, lineHeight: 1, letterSpacing: '-.03em' }}>{c.n}</div>
              <div style={{ fontFamily: fonts.head, fontWeight: 900, fontSize: 26, letterSpacing: '-.02em', textTransform: 'uppercase', marginTop: 12 }}>{c.t}</div>
              <p style={{ fontSize: 14, lineHeight: 1.5, margin: '10px 0 0', fontWeight: 500 }}>{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: navy, color: '#fff', padding: '56px 48px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 32, flexWrap: 'wrap' }}>
        <div style={{ fontFamily: fonts.head, fontWeight: 900, fontSize: 'clamp(36px, 5vw, 56px)', letterSpacing: '-.03em', textTransform: 'uppercase', lineHeight: .95 }}>
          Want in? Apply.
        </div>
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
  return (
    <main style={{ padding: '64px 48px' }}>
      <div style={{ fontSize: 14, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 16 }}>Event sign up</div>
      <h1 style={{ fontFamily: fonts.head, fontWeight: 900, fontSize: 'clamp(64px, 10vw, 128px)', letterSpacing: '-.04em', textTransform: 'uppercase', lineHeight: .9, margin: '0 0 24px' }}>
        Pick an event.<br/>
        <MarkerHighlight>Show up.</MarkerHighlight>
      </h1>
      <p style={{ fontSize: 19, lineHeight: 1.5, maxWidth: 760, margin: '0 0 32px', fontWeight: 500 }}>
        All Beta-sponsored events for the semester. Hours from these count toward your requirement. Sign up below, then submit your log at the end of the semester.
      </p>

      {/* HOUR LOG DUE DATES */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0, border: `2.5px solid ${navy}`, marginBottom: 56 }}>
        {[
          { l: 'Fall semester log', d: 'Jan 7, 2026', sub: 'All grades' },
          { l: 'Spring log · Seniors', d: 'May 1, 2026', sub: 'Earlier deadline' },
          { l: 'Spring log · Soph & Jr', d: 'May 25, 2026', sub: 'Standard deadline' },
        ].map((d, i) => (
          <div key={i} style={{
            padding: '24px 28px',
            background: i === 1 ? yellow : '#fff',
            borderRight: i === 2 ? 'none' : `2.5px solid ${navy}`,
          }}>
            <div style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.06em', color: navy, opacity: .75 }}>{d.l}</div>
            <div style={{ fontFamily: fonts.head, fontWeight: 900, fontSize: 36, lineHeight: 1, letterSpacing: '-.025em', color: navy, marginTop: 8, textTransform: 'uppercase' }}>{d.d}</div>
            <div style={{ fontSize: 13, marginTop: 8, fontWeight: 600, color: navy, opacity: .7 }}>{d.sub}</div>
          </div>
        ))}
      </div>

      {/* EVENT LIST */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 0, border: `2.5px solid ${navy}` }}>
        {UPCOMING_EVENTS.map((e, i) => (
          <div key={i} style={{
            display: 'grid',
            gridTemplateColumns: '120px 1fr auto',
            alignItems: 'center',
            gap: 32,
            padding: '28px 32px',
            background: e.signature ? yellow : '#fff',
            borderBottom: i === UPCOMING_EVENTS.length - 1 ? 'none' : `2px solid ${navy}`,
          }}>
            <div>
              <div style={{ fontFamily: fonts.head, fontWeight: 900, fontSize: 14, letterSpacing: '.04em', textTransform: 'uppercase', color: navy }}>{e.mo}</div>
              <div style={{ fontFamily: fonts.head, fontWeight: 900, fontSize: 56, lineHeight: .9, letterSpacing: '-.04em', color: navy }}>{e.day}</div>
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                <div style={{ fontFamily: fonts.head, fontWeight: 900, fontSize: 24, letterSpacing: '-.015em', textTransform: 'uppercase' }}>{e.title}</div>
                {e.signature && (
                  <span style={{ fontSize: 11, fontWeight: 700, padding: '4px 8px', background: navy, color: yellow, textTransform: 'uppercase', letterSpacing: '.04em' }}>Signature</span>
                )}
              </div>
              <div style={{ fontSize: 14, color: navy, opacity: .8, fontWeight: 500 }}>{e.detail}</div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: navy, textAlign: 'right' }}>
                <div>{e.spots}</div>
                <div style={{ fontSize: 11, opacity: .7, textTransform: 'uppercase', letterSpacing: '.04em' }}>Signed up</div>
              </div>
              <button style={{
                all: 'unset', cursor: 'pointer',
                background: navy, color: yellow,
                padding: '12px 22px',
                fontFamily: fonts.head, fontWeight: 900, fontSize: 14,
                textTransform: 'uppercase',
                boxShadow: e.signature ? `3px 3px 0 #fff` : `3px 3px 0 ${yellow}`,
              }}>Sign up →</button>
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
  return (
    <main style={{ padding: '64px 48px' }}>
      <div style={{ fontSize: 14, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 16 }}>For community partners</div>
      <h1 style={{ fontFamily: fonts.head, fontWeight: 900, fontSize: 'clamp(64px, 10vw, 128px)', letterSpacing: '-.04em', textTransform: 'uppercase', lineHeight: .9, margin: '0 0 24px' }}>
        Need <MarkerHighlight>hands?</MarkerHighlight><br/>
        We've got 'em.
      </h1>
      <p style={{ fontSize: 19, lineHeight: 1.5, maxWidth: 760, margin: '0 0 56px', fontWeight: 500 }}>
        Nonprofits, schools, and community orgs across New Hanover County — tell us what you need and our service chair will be in touch within a few days.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 0, border: `2.5px solid ${navy}`, marginBottom: 48 }}>
        {[
          { n: '24–72h', l: 'Typical response' },
          { n: '3–25', l: 'Volunteers per event' },
        ].map((s, i) => (
          <div key={i} style={{
            padding: '32px 28px',
            background: i === 1 ? yellow : '#fff',
            borderRight: i === 1 ? 'none' : `2.5px solid ${navy}`,
          }}>
            <div style={{ fontFamily: fonts.head, fontWeight: 900, fontSize: 'clamp(40px, 5vw, 64px)', lineHeight: 1, letterSpacing: '-.04em', color: navy, textTransform: 'uppercase' }}>{s.n}</div>
            <div style={{ fontSize: 14, marginTop: 10, fontWeight: 700, textTransform: 'uppercase' }}>{s.l}</div>
          </div>
        ))}
      </div>

      {/* GOOGLE FORM EMBED SLOT */}
      <div style={{ border: `2.5px solid ${navy}`, background: '#fff', boxShadow: `10px 10px 0 ${yellow}` }}>
        <div style={{ background: navy, color: '#fff', padding: '18px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13 }}>
            <span style={{ width: 12, height: 12, background: yellow, display: 'inline-block' }} />
            Google Form · Volunteer Request (embed)
          </div>
          <span style={{ fontSize: 12, color: 'rgba(255,255,255,.6)' }}>hoggardbetaclub</span>
        </div>
        <div style={{
          padding: 64,
          minHeight: 540,
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          gap: 18, textAlign: 'center',
          background:
            'repeating-linear-gradient(135deg, rgba(4,41,78,.04) 0 10px, rgba(4,41,78,.01) 10px 20px)',
        }}>
          <div style={{
            padding: '8px 14px', background: yellow, border: `2px solid ${navy}`,
            fontFamily: fonts.head, fontWeight: 900, fontSize: 12, textTransform: 'uppercase', letterSpacing: '.06em',
          }}>
            ✦ Google Form goes here
          </div>
          <div style={{ fontFamily: fonts.head, fontWeight: 900, fontSize: 32, letterSpacing: '-.02em', textTransform: 'uppercase', lineHeight: 1 }}>
            Volunteer request form
          </div>
          <p style={{ fontFamily: 'ui-monospace, Menlo, monospace', fontSize: 13, color: 'rgba(4,41,78,.6)', maxWidth: 520, margin: 0, lineHeight: 1.6 }}>
            Paste your Google Form embed iframe here. Recommended height ~ 900px so the form renders without scrolling.
          </p>
        </div>
      </div>
    </main>
  );
}

// =============================================================== INFO
function InfoPage({ fonts, setPage }) {
  const navy = '#04294e';
  const yellow = '#FFD140';
  const tileBgs = ['#fff', yellow, navy, '#fff'];
  return (
    <main style={{ padding: '64px 48px' }}>
      <div style={{ fontSize: 14, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 16 }}>Info</div>
      <h1 style={{ fontFamily: fonts.head, fontWeight: 900, fontSize: 'clamp(64px, 10vw, 128px)', letterSpacing: '-.04em', textTransform: 'uppercase', lineHeight: .9, margin: '0 0 16px' }}>
        Member<br/>
        <MarkerHighlight>resources.</MarkerHighlight>
      </h1>
      <p style={{ fontSize: 18, lineHeight: 1.5, maxWidth: 600, margin: '0 0 56px', fontWeight: 500 }}>
        Bookmark this page. Everything you need to be a member lives here.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, border: `2.5px solid ${navy}` }}>
        {INFO_TILES.map((t, i) => {
          const bg = tileBgs[i];
          const isDark = bg === navy;
          const isWhite = bg === '#fff';
          return (
            <a
              key={t.id}
              href="#"
              onClick={(e) => e.preventDefault()}
              style={{
                textDecoration: 'none',
                background: bg,
                color: isDark ? '#fff' : navy,
                padding: 40,
                borderRight: i % 2 === 0 ? `2.5px solid ${navy}` : 'none',
                borderBottom: i < 2 ? `2.5px solid ${navy}` : 'none',
                minHeight: 300,
                display: 'flex', flexDirection: 'column',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div style={{
                width: 64, height: 64,
                background: isWhite ? yellow : (isDark ? yellow : navy),
                color: isDark || isWhite ? navy : yellow,
                border: `2.5px solid ${navy}`,
                display: 'grid', placeItems: 'center',
                fontFamily: fonts.head, fontWeight: 900, fontSize: 30,
                marginBottom: 24,
                transform: 'rotate(-4deg)',
                boxShadow: `4px 4px 0 ${isDark ? yellow : navy}`,
              }}>
                {t.icon}
              </div>
              <div style={{ fontFamily: fonts.head, fontWeight: 900, fontSize: 36, letterSpacing: '-.02em', textTransform: 'uppercase', lineHeight: .95, marginTop: 'auto', marginBottom: 10 }}>
                {t.title}
              </div>
              <div style={{ fontSize: 15, lineHeight: 1.5, fontWeight: 500, opacity: isDark ? .85 : .75 }}>{t.sub}</div>
              {t.subItems && (
                <div style={{ marginTop: 14, display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                  {t.subItems.map((s) => (
                    <span key={s} style={{
                      fontSize: 11, fontWeight: 700, padding: '6px 10px',
                      background: isDark ? 'rgba(255,255,255,.12)' : 'rgba(4,41,78,.08)',
                      textTransform: 'uppercase', letterSpacing: '.04em',
                    }}>{s}</span>
                  ))}
                </div>
              )}
              <div style={{ marginTop: 18, fontFamily: fonts.head, fontWeight: 900, fontSize: 14, textTransform: 'uppercase', color: isDark ? yellow : navy }}>Open →</div>
            </a>
          );
        })}
      </div>

      {/* MEMBER REQUIREMENTS QUICK GLANCE */}
      <section style={{ marginTop: 64 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 24, marginBottom: 28 }}>
          <h2 style={{ fontFamily: fonts.head, fontWeight: 900, fontSize: 'clamp(36px, 4vw, 56px)', margin: 0, letterSpacing: '-.025em', textTransform: 'uppercase', lineHeight: .95 }}>
            Quick glance: requirements
          </h2>
          <div style={{ flex: 1, height: 2, background: navy, marginBottom: 10 }} />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0, border: `2.5px solid ${navy}` }}>
          {[
            { g: 'Sophomores', hrs: '20', events: '2', gpa: '3.6 / 3.8', logDue: 'May 25' },
            { g: 'Juniors', hrs: '20', events: '2', gpa: '3.6 / 3.8', logDue: 'May 25' },
            { g: 'Seniors', hrs: '20', events: '2', gpa: '3.6 / 3.8', logDue: 'May 1' },
          ].map((r, i) => (
            <div key={i} style={{
              padding: 24,
              background: i % 2 === 0 ? '#fff' : yellow,
              borderRight: i === 2 ? 'none' : `2px solid ${navy}`,
            }}>
              <div style={{ fontFamily: fonts.head, fontWeight: 900, fontSize: 22, textTransform: 'uppercase', letterSpacing: '-.01em', marginBottom: 14 }}>{r.g}</div>
              {[
                ['Hours / yr', r.hrs],
                ['Events / sem', r.events],
                ['GPA (unwt / wt)', r.gpa],
                ['Spring log due', r.logDue],
              ].map(([k, v], j) => (
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
  return (
    <main style={{ padding: '64px 48px' }}>
      <div style={{ fontSize: 14, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 16 }}>Contact</div>
      <h1 style={{ fontFamily: fonts.head, fontWeight: 900, fontSize: 'clamp(64px, 10vw, 128px)', letterSpacing: '-.04em', textTransform: 'uppercase', lineHeight: .9, margin: '0 0 24px' }}>
        Say<br/>
        <MarkerHighlight>hello.</MarkerHighlight>
      </h1>
      <p style={{ fontSize: 19, lineHeight: 1.5, maxWidth: 720, margin: '0 0 48px', fontWeight: 500 }}>
        Questions about membership, applications, or partnering on a service event? Email is the fastest way. For club issues, talk to an officer or one of our advisors directly.
      </p>

      {/* Advisors */}
      <div style={{ marginBottom: 48 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 24, marginBottom: 20 }}>
          <h2 style={{ fontFamily: fonts.head, fontWeight: 900, fontSize: 36, margin: 0, letterSpacing: '-.02em', textTransform: 'uppercase', lineHeight: 1 }}>
            Our advisors
          </h2>
          <div style={{ flex: 1, height: 2, background: navy, marginBottom: 8 }} />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0, border: `2.5px solid ${navy}` }}>
          {ADVISORS.map((a, i) => (
            <div key={i} style={{
              padding: 28,
              background: i === 1 ? yellow : '#fff',
              borderRight: i === 2 ? 'none' : `2.5px solid ${navy}`,
            }}>
              <div style={{ fontFamily: fonts.head, fontWeight: 900, fontSize: 26, letterSpacing: '-.015em', textTransform: 'uppercase' }}>{a.name}</div>
              <div style={{ fontSize: 13, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.04em', marginTop: 4, opacity: .7 }}>{a.role}</div>
              <div style={{ fontFamily: 'ui-monospace, Menlo, monospace', fontSize: 14, marginTop: 16, fontWeight: 600 }}>{a.email}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Email + visit */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, border: `2.5px solid ${navy}` }}>
        <div style={{ padding: 36, borderRight: `2.5px solid ${navy}`, background: '#fff' }}>
          <div style={{
            width: 56, height: 56, background: yellow, border: `2.5px solid ${navy}`,
            display: 'grid', placeItems: 'center', fontFamily: fonts.head, fontWeight: 900, fontSize: 24,
            marginBottom: 20, transform: 'rotate(-4deg)', boxShadow: `4px 4px 0 ${navy}`,
          }}>@</div>
          <div style={{ fontFamily: fonts.head, fontWeight: 900, fontSize: 28, textTransform: 'uppercase', letterSpacing: '-.02em', marginBottom: 8 }}>Email the club</div>
          <p style={{ fontSize: 15, lineHeight: 1.55, margin: '0 0 18px', fontWeight: 500 }}>
            Officers and advisors check this together. Expect a reply within a couple school days.
          </p>
          <div style={{ fontFamily: 'ui-monospace, Menlo, monospace', fontSize: 16, color: navy, fontWeight: 700 }}>hoggardbetaclub@gmail.com</div>
        </div>
        <div style={{ padding: 36, background: yellow }}>
          <div style={{
            width: 56, height: 56, background: '#fff', border: `2.5px solid ${navy}`,
            display: 'grid', placeItems: 'center', fontFamily: fonts.head, fontWeight: 900, fontSize: 24,
            marginBottom: 20, transform: 'rotate(4deg)', boxShadow: `4px 4px 0 ${navy}`,
          }}>★</div>
          <div style={{ fontFamily: fonts.head, fontWeight: 900, fontSize: 28, textTransform: 'uppercase', letterSpacing: '-.02em', marginBottom: 8 }}>Stop by</div>
          <p style={{ fontSize: 15, lineHeight: 1.55, margin: '0 0 18px', fontWeight: 500 }}>
            Meetings happen during the school year. Check the Info page for the current schedule.
          </p>
          <div style={{ fontSize: 15, color: navy, lineHeight: 1.6, fontWeight: 600 }}>
            John T. Hoggard High School<br/>
            4305 Shipyard Blvd<br/>
            Wilmington, NC 28403
          </div>
        </div>
      </div>
    </main>
  );
}

Object.assign(window, {
  HomePage, AboutPage, SignupPage, VolunteersPage, InfoPage, ContactPage,
});
