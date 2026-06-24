import Tile from './Tile'
import LogoSection from './LogoSection'

export default function Main() {
  return (
    <main className="Layout_main__nbmiJ index_layout__cD6cr">
      <div className="Flex_flex___mzvZ Flex_align--center__9VuNC Flex_direction--row__W6CGY Flex_justify--start__vk9Tl index_container__9GuY8 Flex_gap--m__j4Ha1">
        <Tile
          badge="Team"
          title={<>Threat<br />Intelligence</>}
          description="Collect, analyze, and share actionable open source threat intelligence faster"
          primaryHref="https://feedly.com/signup?gate=%2Fhomepage&workEmail=false"
          primaryLabel="Get Started for Free"
          secondaryHref="https://feedly.com/threat-intelligence"
          secondaryLabel="Learn More"
          imageSrc="/assets/asset-6.webp"
          imageAlt="Illustration of an article about cyberattacks and ransomware. AI has identified a CVSS score of 8.5, 8 IoCs, and 6 TTPs."
          theme="dark"
        />
        <Tile
          badge="Team"
          title={<>Market<br />Intelligence</>}
          description="Find, synthesize, and share industry and competitive intelligence faster"
          primaryHref="https://feedly.com/market-intelligence/request-trial?gate=%2Fhomepage"
          primaryLabel="Get Started for Free"
          secondaryHref="https://feedly.com/market-intelligence"
          secondaryLabel="Learn More"
          imageSrc="/assets/asset-7.webp"
          imageAlt="Illustration of an article about a product launch in the finance industry. A tooltip points out an AI Summary and an icon to “save to board”"
          theme="light"
        />
        <Tile
          badge="Personal"
          title={<>News<br />Reader</>}
          description="Read all your favorite blogs, news sites, and newsletters in one place"
          primaryHref="https://feedly.com/i/newAccountSetup?accountType=Personal&gate=%2Fhomepage"
          primaryLabel="Get Started for Free"
          secondaryHref="https://feedly.com/news-reader"
          secondaryLabel="Learn More"
          imageSrc="/assets/asset-8.webp"
          imageAlt="A screenshot of the Feedly news reader interface showing the “Today” page and a list of articles."
          theme="white"
        />
      </div>
      <LogoSection />
    </main>
  )
}
