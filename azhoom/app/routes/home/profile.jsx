import adhamContact from '~/assets/adham-contact.jpg';
import profileImgPlaceholder from '~/assets/profile-placeholder.jpg';
import { Button } from '~/components/button';
import { DecoderText } from '~/components/decoder-text';
import { Divider } from '~/components/divider';
import { Heading } from '~/components/heading';
import { Image } from '~/components/image';
import { Link } from '~/components/link';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';
import { Fragment, useState } from 'react';
import { media } from '~/utils/style';
import katakana from './katakana.svg';
import styles from './profile.module.css';

const ProfileText = ({ visible, titleId }) => (
  <Fragment>
    <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
      <DecoderText text="About Adham" start={visible} delay={500} />
    </Heading>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      I’m Adham Hamed, a Live Streaming Technical Director & Operator based in Cairo, Egypt with nearly 6 years of experience delivering mid to large-scale esports and live event broadcasts across regional and international platforms. Currently leading stream production at <Link href="https://arabhardware.net">Arabhardware</Link>, I direct live visuals, manage broadcast flow, and coordinate multidisciplinary crews of 5+ members.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      Over my career across Arabhardware and Gamers Lounge, I’ve managed end-to-end production for flagship events including the Esports World Cup, PUBG Mobile National Championship (15K–20K peak viewership), Honor of Kings KIC World Finals, and Intel Arabian Cup. I specialize in vMix, OBS, complex multi-guest audio routing (8+ simultaneous live feeds), and live troubleshooting under high-stakes conditions. Check out the gear and systems I use on my <Link href="/uses">gear page</Link>.
    </Text>
  </Fragment>
);

export const Profile = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.profile}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible || focused} timeout={0}>
        {({ visible, nodeRef }) => (
          <div className={styles.content} ref={nodeRef}>
            <div className={styles.column}>
              <ProfileText visible={visible} titleId={titleId} />
              <Button
                secondary
                className={styles.button}
                data-visible={visible}
                href="/contact"
                icon="send"
              >
                Send me a message
              </Button>
            </div>
            <div className={styles.column}>
              <div className={styles.tag} aria-hidden>
                <Divider
                  notchWidth="64px"
                  notchHeight="8px"
                  collapsed={!visible}
                  collapseDelay={1000}
                />
                <div className={styles.tagText} data-visible={visible}>
                  Experience
                </div>
              </div>
              <div className={styles.image}>
                <Image
                  reveal
                  delay={100}
                  placeholder={profileImgPlaceholder}
                  srcSet={`${adhamContact} 480w, ${adhamContact} 960w`}
                  width={960}
                  height={1280}
                  sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                  alt="Adham Hamed - Live Streaming Technical Director"
                />
                <svg className={styles.svg} data-visible={visible} viewBox="0 0 136 766">
                  <use href={`${katakana}#katakana-profile`} />
                </svg>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
