import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faAngular,
  faHtml5,
  faCss3,
  faReact,
  faJsSquare,
  faGitAlt,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <div>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I'm very ambicious frontend developer looking for a role in
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <p>
            I.m quietly confident, naturally curious and perpetually working on
            improving my chops one design problem at a time.
          </p>
          <p>
            If I need to define myself in one sentence that should be a
            enthusiastic person always ready to learn more and more with the
            ongoing challenges!!!
          </p>
        </div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon
                className="angular"
                icon={faAngular}
                color="#DD0031"
              />
            </div>
            <div className="face2">
              <FontAwesomeIcon
                className="html"
                icon={faHtml5}
                color="#F06529"
              />
            </div>
            <div className="face3">
              <FontAwesomeIcon className="css" icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon
                className="react"
                icon={faReact}
                color="#5ED4F4"
              />
            </div>
            <div className="face5">
              <FontAwesomeIcon
                className="jssquare"
                icon={faJsSquare}
                color="#EFD81D"
              />
            </div>
            <div className="face6">
              <FontAwesomeIcon
                className="gitalt"
                icon={faGitAlt}
                color="#EC4D28"
              />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </div>
  )
}

export default About
