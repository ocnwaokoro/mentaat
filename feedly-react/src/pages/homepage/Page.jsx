import './styles.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

export default function Page() {
  return (
    <div id="__next">
      <div className="app_site--homepage__E5h5V app_loggedOut__HHvfJ">
        <div className="Flex_flex___mzvZ Flex_direction--column__TTxLV Flex_justify--space-between__LdB4V Layout_layout__u6BrU">
          <div className="Flex_flex___mzvZ Flex_direction--column__TTxLV Flex_justify--start__vk9Tl Layout_content__q1d4E">
            <Header />
            <Main />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  )
}
