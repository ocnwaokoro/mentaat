import './styles.css'
import { pageHtml } from './pageHtml'

export default function Page() {
  return <div dangerouslySetInnerHTML={{ __html: pageHtml }} />
}
