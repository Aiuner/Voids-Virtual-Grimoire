import React from 'react';
import { Link } from 'react-router-dom';
import discordIcon from '../assets/discordIcon.png';
import githubIcon from '../assets/githubIconRecolour.png'


function Footer() {

  return (
    <>
      <footer>
        <img src={discordIcon} alt="discord" className="discordIcon icon" />
        <h4 className="discord-handle">﴾ Ṿ☼ЇƉ ﴿ [they/them]#9441</h4>

        <img src={githubIcon} alt="github" className="githubIcon icon"/>
        <h4><Link to="https://github.com/Aiuner" className="github-link">@Aiuner</Link></h4>

      </footer>
    </>
  )
}

export default Footer;