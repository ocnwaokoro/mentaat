const linkClass = 'Link_link__0RTCn Link_underline-hover__zn1zx TextFocusRing_textFocusRing__ikoTB'
const liClass = 'Text_text__4F9CK Text_color--secondary__oRE1u Text_size--body--01__aiSyT Text_deprecatedMargin--none__sZLCS'
const smallClass = 'Text_text__4F9CK Text_color--secondary__oRE1u Text_size--body--04__2p_2C Text_deprecatedMargin--none__sZLCS'
const headingClass = 'Heading_heading__me6NI Heading_heading--05__4gkI8 FooterLinkGroup_heading__5jZNJ Heading_align--left__hNEzl'
const ulClass = 'Flex_flex___mzvZ Flex_align--start__Nb_Sy Flex_direction--column__TTxLV Flex_justify--start__vk9Tl FooterLinkGroup_linkList__3azu2 Flex_gap--s__0656J'

export default function Footer() {
  return (
    <div className="Layout_footer__VyzYq">
      <footer className="BaseFooter_footer__dvw0z">
        <div className="BaseFooter_container__g4K3d">
          <div className="Flex_flex___mzvZ Flex_align--start__Nb_Sy Flex_direction--row__W6CGY Flex_justify--space-between__LdB4V MarketingFooter_content__i6ZbT Flex_gap--l__lrJk4">
            <div>
              <img alt="Feedly logo" loading="lazy" width={93} height={32} decoding="async" src="/assets/asset-24.svg" />
              <p className="MarketingFooter_subTitle__Ms_Y7 Text_text__4F9CK Text_color--secondary__oRE1u Text_size--body--02__HVmZN Text_deprecatedMargin--bottom__5dH2o">
                Stay ahead of the curve
              </p>
            </div>
            <div className="Flex_flex___mzvZ Flex_align--start__Nb_Sy Flex_direction--row__W6CGY Flex_justify--start__vk9Tl MarketingFooter_columns__m1vZ1 Flex_gap--xl__fJPTT Flex_wrap__fR1jo">
              <div className="Flex_flex___mzvZ Flex_align--start__Nb_Sy Flex_direction--row__W6CGY Flex_justify--start__vk9Tl MarketingFooter_column__Ql8Vk Flex_gap--xl__fJPTT">
                <nav aria-labelledby="footer-products" className="FooterLinkGroup_nav__RxRQ6">
                  <h2 id="footer-products" className={headingClass}>Products</h2>
                  <ul className={ulClass}>
                    <li className={liClass}><a className={linkClass} href="https://feedly.com/market-intelligence">Market Intelligence</a></li>
                    <li className={liClass}><a className={linkClass} href="https://feedly.com/threat-intelligence">Threat Intelligence</a></li>
                    <li className={liClass}><a className={linkClass} href="https://feedly.com/news-reader">News Reader</a></li>
                  </ul>
                </nav>
                <nav aria-labelledby="footer-resources" className="FooterLinkGroup_nav__RxRQ6">
                  <h2 id="footer-resources" className={headingClass}>Resources</h2>
                  <ul className={ulClass}>
                    <li className={liClass}><a className={linkClass} href="https://feedly.com/changelog">Changelog</a></li>
                    <li className={liClass}><a className={linkClass} href="https://feedly.com/ai">AI Library</a></li>
                    <li className={liClass}><a className={linkClass} href="https://feedly.com/customers">Case Studies</a></li>
                    <li className={liClass}><a className={linkClass} href="https://feedly.com/cve">CVE Insights Cards</a></li>
                    <li className={liClass}><a className={linkClass} href="https://feedly.com/ti-essentials">TI Essentials</a></li>
                    <li className={liClass}><a className={linkClass} href="https://feedly.com/resources">Blog</a></li>
                    <li className={liClass}><a className={linkClass} href="https://docs.feedly.com/">Documentation</a></li>
                    <li className={liClass}><a className={linkClass} href="https://feedly.com/slack">Slack Community</a></li>
                  </ul>
                </nav>
              </div>
              <div className="Flex_flex___mzvZ Flex_align--start__Nb_Sy Flex_direction--row__W6CGY Flex_justify--start__vk9Tl MarketingFooter_column__Ql8Vk Flex_gap--xl__fJPTT">
                <nav aria-labelledby="footer-downloads" className="FooterLinkGroup_nav__RxRQ6">
                  <h2 id="footer-downloads" className={headingClass}>Downloads</h2>
                  <ul className={ulClass}>
                    <li className={liClass}><a className={linkClass} href="https://itunes.apple.com/app/id396069556">iOS</a></li>
                    <li className={liClass}><a className={linkClass} href="https://play.google.com/store/apps/details?id=com.devhd.feedly">Android</a></li>
                    <li className={liClass}><a className={linkClass} href="https://chromewebstore.google.com/detail/feedly-mini/ndhinffkekpekljifjkkkkkhopnjodja">Chrome extension</a></li>
                    <li className={liClass}><a className={linkClass} href="https://addons.mozilla.org/en-US/firefox/addon/feedly_mini/">Firefox extension</a></li>
                  </ul>
                </nav>
                <nav aria-labelledby="footer-learn" className="FooterLinkGroup_nav__RxRQ6">
                  <h2 id="footer-learn" className={headingClass}>Learn More</h2>
                  <ul className={ulClass}>
                    <li className={liClass}><a className={linkClass} href="https://discover.buysellads.com/tech/feedly">Advertise on Feedly</a></li>
                    <li className={liClass}><a className={linkClass} href="https://feedly.com/i/top">Discover Top Blogs</a></li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <div className="Flex_flex___mzvZ Flex_align--center__9VuNC Flex_direction--row__W6CGY Flex_justify--space-between__LdB4V MarketingFooter_terms__G_N3M">
            <div className="Flex_flex___mzvZ Flex_align--center__9VuNC Flex_direction--row__W6CGY Flex_justify--start__vk9Tl Flex_gap--m__j4Ha1">
              <p className={smallClass}>© 2026</p>
              <p className={smallClass}>•</p>
              <a className={linkClass} href="https://feedly.com/legal/privacy">
                <p className={smallClass}>Privacy</p>
              </a>
              <p className={smallClass}>•</p>
              <a className={linkClass} href="https://feedly.com/legal">
                <p className={smallClass}>Terms</p>
              </a>
            </div>
            <div className="Flex_flex___mzvZ Flex_align--center__9VuNC Flex_direction--row__W6CGY Flex_justify--start__vk9Tl">
              <a target="_self" rel="noreferrer" href="https://twitter.com/feedly" aria-label="Visit Feedly on Twitter" className="BaseButton_button__S8cdB BaseButton_size--large__dpOfr BaseButton_importance--tertiary__kESF6 BaseButton_iconAlign--only__0zAe_ BaseButton_iconOnlySize--large__OkC6m FocusRing_focusRing__izyZU">
                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 28 28" aria-hidden className="icon__B4xp9 icon color--tertiary__JGhS2 BaseButtonIcon_icon__suLC5">
                  <path fill="currentColor" fillRule="evenodd" d="M22.626 4.291a.5.5 0 0 1 .046.706l-6.564 7.478 7.63 10.566a.5.5 0 0 1-.405.792h-5.185a.5.5 0 0 1-.405-.207l-5.25-7.27-6.413 7.307a.5.5 0 0 1-.752-.66l6.564-7.478L4.262 4.96a.5.5 0 0 1 .405-.793h5.185a.5.5 0 0 1 .405.207l5.25 7.27 6.414-7.307a.5.5 0 0 1 .705-.046m-16.981.876 12.759 17.666h3.951L9.596 5.167z" clipRule="evenodd" />
                </svg>
              </a>
              <a target="_self" rel="noreferrer" href="https://www.linkedin.com/company/feedly" aria-label="Visit Feedly on LinkedIn" className="BaseButton_button__S8cdB BaseButton_size--large__dpOfr BaseButton_importance--tertiary__kESF6 BaseButton_iconAlign--only__0zAe_ BaseButton_iconOnlySize--large__OkC6m FocusRing_focusRing__izyZU">
                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 32 32" aria-hidden className="icon__B4xp9 icon color--tertiary__JGhS2 BaseButtonIcon_icon__suLC5">
                  <path fill="currentColor" fillRule="evenodd" d="M29.632 0H2.36C1.058 0 0 1.033 0 2.307v27.384C0 30.965 1.058 32 2.36 32h27.272c1.305 0 2.367-1.035 2.367-2.31V2.308C32 1.033 30.937 0 29.632 0M4.742 11.997h4.75v15.27h-4.75zm2.376-7.592a2.753 2.753 0 1 1-.004 5.506 2.753 2.753 0 0 1 .004-5.506m9.901 7.591h-4.55v15.271h4.741v-7.553c0-1.992.377-3.922 2.846-3.922 2.436 0 2.467 2.278 2.467 4.05v7.425h4.745v-8.375c0-4.112-.888-7.274-5.693-7.274-2.31 0-3.858 1.266-4.49 2.466h-.066z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
