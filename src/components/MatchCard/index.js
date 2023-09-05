import './index.css'

const MatchCard = props => {
  const {recentMatchDetails} = props
  let matchStatusColor = null
  if (recentMatchDetails.matchStatus === 'Won') {
    matchStatusColor = '#18ed66'
  } else {
    matchStatusColor = '#e31a1a'
  }

  // Define a style object for the text color
  const statusStyle = {
    color: matchStatusColor,
  }

  return (
    <li className="recent-match-card-container">
      <div>
        <img
          src={recentMatchDetails.competingTeamLogo}
          className="competing-teams-logo"
          alt={`Competing team ${recentMatchDetails.competingTeam}`}
        />
      </div>
      <div>
        <p className="recent-match-competing-team-name">
          {recentMatchDetails.competingTeam}
        </p>
      </div>
      <div>
        <p className="recent-match-match-result">{recentMatchDetails.result}</p>
      </div>
      <div>
        <p className="recent-match-match-status" style={statusStyle}>
          {recentMatchDetails.matchStatus}
        </p>
      </div>
    </li>
  )
}

export default MatchCard
