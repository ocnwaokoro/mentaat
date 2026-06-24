import { Link } from 'react-router-dom'

export default function Header() {
  const btnClass =
    'BaseButton_button__S8cdB BaseButton_size--large__dpOfr BaseButton_importance--tertiary__kESF6 MarketingHeaderAction_action__avqex hideUnder--xlarge FocusRing_focusRing__izyZU'
  const btnSecondary =
    'BaseButton_button__S8cdB BaseButton_size--large__dpOfr BaseButton_importance--secondary__qMmu3 MarketingLinkButton_marketingLinkButton__n8FI4 BaseButton_color--accent-main__KBIuP FocusRing_focusRing__izyZU'

  return (
    <>
      <header
        className="MarketingHeader_header--mobile__ciox2 MarketingHeader_header__EUCkb hideOver--xlarge sf-hidden"
        aria-hidden
      />
      <header className="MarketingHeader_header__EUCkb hideUnder--xlarge">
        <div className="Flex_flex___mzvZ Flex_align--center__9VuNC Flex_direction--row__W6CGY Flex_justify--space-between__LdB4V Flex_gap--s__0656J">
          <div className="Flex_flex___mzvZ Flex_align--center__9VuNC Flex_direction--row__W6CGY Flex_justify--center__xip_Y Flex_gap--l__lrJk4">
            <div className="Flex_flex___mzvZ Flex_align--center__9VuNC Flex_direction--row__W6CGY Flex_justify--start__vk9Tl Flex_gap--s__0656J">
              <a className="TextFocusRing_textFocusRing__ikoTB" href="https://feedly.com/homepage">
                <img alt="Feedly" loading="lazy" width={94} height={32} decoding="async" className="MarketingHeaderLabel_logo--tablet__UXfR7 hideOver--xlarge sf-hidden" src="" />
                <img alt="Feedly" loading="lazy" width={94} height={32} decoding="async" className="hideUnder--xlarge" src="/assets/asset-5.webp" />
              </a>
            </div>
            <div className="Flex_flex___mzvZ Flex_align--center__9VuNC Flex_direction--row__W6CGY Flex_justify--start__vk9Tl hideUnder--large hideOver--xlarge sf-hidden" />
            <div className="Flex_flex___mzvZ Flex_align--center__9VuNC Flex_direction--row__W6CGY Flex_justify--start__vk9Tl hideUnder--large hideUnder--xlarge Flex_gap--xs__8bU5_">
              <Link to="/threat-intel" className={btnClass}>
                <span>Threat Intelligence</span>
              </Link>
              <Link to="/market-intel" className={btnClass}>
                <span>Market Intelligence</span>
              </Link>
              <Link to="/news-reader" className={btnClass}>
                <span>News Reader</span>
              </Link>
            </div>
          </div>
          <div className="hideOver--large sf-hidden" />
          <div className="Flex_flex___mzvZ Flex_align--center__9VuNC Flex_direction--row__W6CGY Flex_justify--start__vk9Tl hideUnder--large Flex_gap--l__lrJk4">
            <div className="Flex_flex___mzvZ Flex_align--center__9VuNC Flex_direction--row__W6CGY Flex_justify--start__vk9Tl Flex_gap--xs__8bU5_" />
            <div className="Flex_flex___mzvZ Flex_align--center__9VuNC Flex_direction--row__W6CGY Flex_justify--start__vk9Tl ButtonRow_buttonRow__hs7qV Flex_gap--s__0656J">
              <div className="hideOver--xlarge sf-hidden" />
              <div className="hideUnder--xlarge">
                <Link to="/sign-in" className={btnSecondary}>
                  <span>Log in</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
