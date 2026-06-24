import './styles.css'
import { pageHtml } from './pageHtml'

export default function Page() {
  return (
    <div className="sign-in-page">
      <div dangerouslySetInnerHTML={{ __html: pageHtml }} />
    </div>
  )
}
