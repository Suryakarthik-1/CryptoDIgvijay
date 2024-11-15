import { Link } from 'react-router-dom'
import ArrowRightImg from '../../../assets/images/icon/arrow-right.svg'

function ServiceCard({ service }) {
  // Add default value for service to prevent undefined errors
  if (!service) return null

  const { title, description, icon, link = '' } = service

  // Only check for external link if we have a link value
  const isExternalLink = link && link.startsWith('http')

  return (
    <div className="aximo-iconbox-wrap">
      <div className="aximo-iconbox-icon">
        <i className={`${icon}`}></i>
      </div>
      <div className="aximo-iconbox-data">
        <h3>{title}</h3>
        <p>{description}</p>
        {link &&
          (isExternalLink ? (
            <a href={link} target="_blank" rel="noopener noreferrer">
              <img src={ArrowRightImg} alt="arrow right" />
            </a>
          ) : (
            <Link to={link}>
              <img src={ArrowRightImg} alt="arrow right" />
            </Link>
          ))}
      </div>
    </div>
  )
}

export default ServiceCard
