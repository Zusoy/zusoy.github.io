import React from 'react'
import Tile from 'widgets/Tile'
import Tag from 'widgets/Tag'
import styled from 'styled-components'
import theme from 'app/theme'
import { FaAngular, FaDocker, FaJs, FaPhp, FaReact, FaSymfony } from 'react-icons/fa'
import { SiMysql } from 'react-icons/si'
import { DiDoctrine } from 'react-icons/di'
import { GiJesterHat } from 'react-icons/gi'

interface Skill {
  name: string
  icon?: React.ReactNode
}

const skills: Skill[] = [
  {
    name: 'Symfony',
    icon: <FaSymfony />
  },
  {
    name: 'React',
    icon: <FaReact />
  },
  {
    name: 'MySQL',
    icon: <SiMysql />,
  },
  {
    name: 'PHP',
    icon: <FaPhp />
  },
  {
    name: 'Doctrine ORM',
    icon: <DiDoctrine />
  },
  {
    name: 'PHPSpec'
  },
  {
    name: 'Docker',
    icon: <FaDocker />
  },
  {
    name: 'Angular',
    icon: <FaAngular />
  },
  {
    name: 'Jest',
    icon: <GiJesterHat />
  },
  {
    name: 'JavaScript',
    icon: <FaJs />
  },
  {
    name: 'Hexagonal Architecture'
  },
  {
    name: 'PHPUnit'
  },
  {
    name: 'Domain Driven Development'
  },
  {
    name: 'Behat'
  },
]

const Skills: React.FC = () =>
  <Tile width={ 300 } index={ 5 } background={ theme.colors.green }>
    <h2>Skills ✍</h2>
    <SkillsTileContentWrapper>
      { skills.map(skill =>
        <Tag
          key={ skill.name }
        >
          { skill.name }
          { skill.icon ? skill.icon : null }
        </Tag>) }
    </SkillsTileContentWrapper>
  </Tile>

const SkillsTileContentWrapper = styled.div(({ theme }) => `
  display: flex;
  gap: ${theme.gap.sm};
  flex-wrap: wrap;
`)

export default Skills
