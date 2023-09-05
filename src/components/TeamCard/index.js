import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamCardDetails} = props
  const {name, id, teamImageUrl} = teamCardDetails

  return (
    <Link to={`/team-matches/${id}`}>
      <li className="each-team-card-container">
        <div className="teams-logo-container">
          <img src={teamImageUrl} className="team-logo" alt={name} />
        </div>
        <div>
          <p className="team-name"> {name} </p>
        </div>
      </li>
    </Link>
  )
}

export default TeamCard
