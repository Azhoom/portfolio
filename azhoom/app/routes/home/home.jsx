import ewcBroadcastLarge from '~/assets/ewc-broadcast-large.jpg';
import ewcBroadcastPlaceholder from '~/assets/ewc-broadcast-placeholder.jpg';
import hokBroadcastPhone1Large from '~/assets/hok-broadcast-phone1-large.jpg';
import hokBroadcastPhone1Placeholder from '~/assets/hok-broadcast-phone1-placeholder.jpg';
import hokBroadcastPhone2Large from '~/assets/hok-broadcast-phone2-large.jpg';
import hokBroadcastPhone2Placeholder from '~/assets/hok-broadcast-phone2-placeholder.jpg';
import pubgBroadcastLarge from '~/assets/pubg-broadcast-large.jpg';
import pubgBroadcastPlaceholder from '~/assets/pubg-broadcast-placeholder.jpg';
import pmgoStageLarge from '~/assets/pmgo-stage-large.jpg';
import pmgoStagePlaceholder from '~/assets/pmgo-stage-placeholder.jpg';
import { Footer } from '~/components/footer';
import { baseMeta } from '~/utils/meta';
import { Intro } from './intro';
import { Profile } from './profile';
import { ProjectSummary } from './project-summary';
import { useEffect, useRef, useState } from 'react';
import config from '~/config.json';
import styles from './home.module.css';

// Prefetch draco decoder wasm
export const links = () => {
  return [
    {
      rel: 'prefetch',
      href: '/draco/draco_wasm_wrapper.js',
      as: 'script',
      type: 'text/javascript',
      importance: 'low',
    },
    {
      rel: 'prefetch',
      href: '/draco/draco_decoder.wasm',
      as: 'fetch',
      type: 'application/wasm',
      importance: 'low',
    },
  ];
};

export const meta = () => {
  return baseMeta({
    title: 'Live Streaming Technical Director & Operator',
    description: `Portfolio of ${config.name} — Live Streaming Technical Director & Operator delivering mid to large-scale esports broadcasts, live visuals, and audio engineering across regional and international platforms.`,
  });
};

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const projectFour = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree, projectFour, details];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Intro
        id="intro"
        sectionRef={intro}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="Esports World Cup (EWC AR 26)"
        description={
          <>
            <p>
              Studio Producer for the official Arabic broadcast of the Esports World Cup in Riyadh. Managed on-air talent direction, live multilingual graphics routing, multi-camera transitions, and zero-latency instant replays across international championship stages.
            </p>
            <p>
              Orchestrated talkback communications across director, technical crew, and broadcast analysts to maintain seamless pacing and stream stability throughout the multi-week global competition.
            </p>
          </>
        }
        tags={['Arabic Studio Producer', 'Live Switching', 'Observer Sync', 'Riyadh Arena']}
        model={{
          type: 'laptop',
          alt: 'Esports World Cup official Arabic live broadcast',
          textures: [
            {
              srcSet: `${ewcBroadcastLarge} 1280w, ${ewcBroadcastLarge} 2560w`,
              placeholder: ewcBroadcastPlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="Honor of Kings: World Finals & Egypt Qualifiers"
        description={
          <>
            <p>
              Technical Broadcast Director commanding the 12-day qualifier marathon into the KIC World Finals. Directed multi-input vMix and NDI video routing across dual stages, team isolation cams, automated ban/pick telemetry, and live observer coordination.
            </p>
            <p>
              Engineered real-time spectator feeds for high-impact teamfights and macro lane rotations, pairing live graphics overlays with caster commentary under strict broadcast timelines.
            </p>
          </>
        }
        tags={['Technical Director', '12-Day Qualifier Marathon', 'vMix & NDI Matrix', 'Stage Ops']}
        model={{
          type: 'phone',
          alt: 'Honor of Kings KIC World Finals and Arab Championship live stream',
          textures: [
            {
              srcSet: `${hokBroadcastPhone1Large} 375w, ${hokBroadcastPhone1Large} 750w`,
              placeholder: hokBroadcastPhone1Placeholder,
            },
            {
              srcSet: `${hokBroadcastPhone2Large} 375w, ${hokBroadcastPhone2Large} 750w`,
              placeholder: hokBroadcastPhone2Placeholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="PUBG Mobile National Championship & Regionals"
        description={
          <>
            <p>
              Technical Broadcast Director leading live production across 5 regional qualifiers—Egypt, Morocco, UAE, Jordan & Wildcard—scaling transmission to 15K–20K peak concurrent viewers.
            </p>
            <p>
              Engineered 16-team battle royale observer switching, Dante audio mix-minus distribution for 8+ on-air talent, and multi-platform distribution across YouTube, TikTok Live, and Facebook Gaming.
            </p>
          </>
        }
        tags={['Multi-Region Director', '15K–20K Peak Viewers', '16-Team BR Observing', 'Dante Audio']}
        model={{
          type: 'laptop',
          alt: 'PUBG Mobile National Championship and PMWC live broadcast stream',
          textures: [
            {
              srcSet: `${pubgBroadcastLarge} 1280w, ${pubgBroadcastLarge} 1920w`,
              placeholder: pubgBroadcastPlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-4"
        alternate
        sectionRef={projectFour}
        visible={visibleSections.includes(projectFour.current)}
        index={4}
        title="PUBG Mobile Global Open (PMGO: Road to EWC)"
        description={
          <>
            <p>
              Lead Producer and Technical Director (TD) for the PUBG Mobile Global Open (PMGO) — Road to EWC championship studio broadcast. Held complete operational authority over live production, directing the on-air narrative flow, show rundowns, talent pacing, and multi-camera live switching from the main gallery.
            </p>
            <p>
              Engineered the broadcast studio infrastructure: programmed switcher automation, mapped live tournament telemetry to the massive stage LED display, directed multi-angle camera choreography and lighting cues, and maintained low-latency inter-departmental talkback under high-stakes international tournament conditions.
            </p>
          </>
        }
        tags={['Lead Producer & TD', 'Road to EWC', 'Studio Directing', 'Switcher Automation', 'Dante & NDI']}
        model={{
          type: 'laptop',
          alt: 'PUBG Mobile Global Open Road to EWC Broadcast Studio Stage',
          textures: [
            {
              srcSet: `${pmgoStageLarge} 1280w, ${pmgoStageLarge} 2560w`,
              placeholder: pmgoStagePlaceholder,
            },
          ],
        }}
      />
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Footer />
    </div>
  );
};
