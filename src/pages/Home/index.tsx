import React from 'react'
import styled from 'styled-components'
import HelloTile from 'pages/Home/Tiles/Hello'
import ProfileTile from 'pages/Home/Tiles/Profile'
import SocialTile from 'pages/Home/Tiles/Social'
import SkillsTile from 'pages/Home/Tiles/Skills'
import ExperienceTile from 'pages/Home/Tiles/Experience'

const Home: React.FC = () => {
  return (
    <Wrapper>
      <HelloTile />
      <ProfileTile />
      <SocialTile />
      <SkillsTile />
      <ExperienceTile />
    </Wrapper>
  )
}

const Wrapper = styled.div(({ theme }) => `
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: ${theme.gap.l};
`)

export default Home
