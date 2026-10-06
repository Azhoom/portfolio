import usesBackgroundPlaceholder from '~/assets/uses-background-placeholder.jpg';
import usesBackground from '~/assets/uses-background.mp4';
import { Footer } from '~/components/footer';
import { Link } from '~/components/link';
import { List, ListItem } from '~/components/list';
import { Table, TableBody, TableCell, TableHeadCell, TableRow } from '~/components/table';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { baseMeta } from '~/utils/meta';
import styles from './uses.module.css';

export const meta = () => {
  return baseMeta({
    title: 'Gear & Tools',
    description: 'The production gear, software, and audio systems Adham Hamed uses for live esports broadcasts',
  });
};

export const Uses = () => {
  return (
    <>
      <ProjectContainer className={styles.uses}>
        <ProjectBackground
          src={usesBackground}
          placeholder={usesBackgroundPlaceholder}
          opacity={0.7}
        />
        <ProjectHeader
          title="Gear & Tools"
          description="A comprehensive breakdown of the broadcast software, audio engineering setups, video switching hardware, and production workflow I utilize daily for mid to large-scale esports and live broadcasts."
        />
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Broadcast & Streaming Software</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    <Link href="https://www.vmix.com/">vMix</Link> is my core live production powerhouse. I use it for complex multi-input live switching, NDI network routing, dynamic replay systems, multi-camera esports coverage, and direct SRT/RTMP stream encoding.
                  </ListItem>
                  <ListItem>
                    <Link href="https://obsproject.com/">OBS Studio</Link> & XSplit are essential in my broadcast stack for scene composition, hardware encoding redundancy, in-game observer feeds, and isolated screen capture feeds.
                  </ListItem>
                  <ListItem>
                    <Link href="https://vb-audio.com/Voicemeeter/">Voicemeeter (Banana & Potato)</Link> provides advanced software-level virtual ASIO routing, multi-channel sound bussing, and latency-free mix-minus configurations for remote commentators and tournament analysts.
                  </ListItem>
                  <ListItem>
                    GT Title Designer is used for building high-impact, real-time animated tournament graphics, automated lower-thirds, sponsor ticker overlays, and dynamic scoreboards.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Audio & Sound Engineering</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    Professional digital & analog sound mixers configured for multi-participant LAN tournaments, live caster desks, and stage arena sound reinforcement.
                  </ListItem>
                  <ListItem>
                    High-end audio interfaces ensuring ultra-low latency analog-to-digital signal conversion with clean preamp gain for broadcast voice clarity.
                  </ListItem>
                  <ListItem>
                    Wired and wireless microphone ecosystems, including frequency-agile wireless receivers, bodypack transmitters, and lapel/headset microphones for casters and stage hosts.
                  </ListItem>
                  <ListItem>
                    Multi-guest audio routing and balancing for 8+ simultaneous on-air commentators, remote guests, and in-game comms without crosstalk, feedback, or clipping.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Production & Content Creation</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    <Link href="https://www.adobe.com/products/premiere.html">Adobe Premiere Pro</Link> for rapid tournament highlights packaging, pre-recorded interview edits, countdown intros, and post-event recap videos.
                  </ListItem>
                  <ListItem>
                    <Link href="https://www.adobe.com/products/photoshop.html">Adobe Photoshop</Link> for creating on-air brand assets, bracket graphics, stage backdrops, and social announcements.
                  </ListItem>
                  <ListItem>
                    CapCut for rapid mobile formatting, social clipping, and high-engagement vertical reels during live tournaments.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow stretch width="m">
              <ProjectSectionHeading>Technical Specs & Profile</ProjectSectionHeading>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableHeadCell>Specialization</TableHeadCell>
                    <TableCell>Live Streaming Technical Director & Operator</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Experience</TableHeadCell>
                    <TableCell>Nearly 6 Years (15K–20K Peak Viewers, 40K+ Total Views)</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Key Software</TableHeadCell>
                    <TableCell>vMix, OBS Studio, XSplit, Voicemeeter, GT Title Designer</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Creative Suite</TableHeadCell>
                    <TableCell>Adobe Premiere Pro, Adobe Photoshop, CapCut</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Audio Engineering</TableHeadCell>
                    <TableCell>Digital/Analog Mixers, Audio Interfaces, Wireless Lapels, 8+ Mix-Minus</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Event Titles</TableHeadCell>
                    <TableCell>PUBG, Honor of Kings, Tekken, eFootball, LoL, Monster Energy</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Spoken Languages</TableHeadCell>
                    <TableCell>English (Fluent), Arabic (Native)</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Education</TableHeadCell>
                    <TableCell>Bachelor of Business Administration – Ain Shams University (2021)</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Location</TableHeadCell>
                    <TableCell>Cairo, Egypt</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </>
  );
};
