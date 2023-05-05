import React from 'react'
import Tile from 'widgets/Tile'
import styled from 'styled-components'
import device from 'app/device'

const Profile: React.FC = () =>
  <Tile width={ 900 } index={ 3 } duration={ 1 }>
    <ProfileTileContentWrapper>
      <ProfilePicture src='assets/img/me.jpeg' />
      <ProfileText>
        <h2>Who am I ?</h2>
        <hr />
        <p>
          Passionate about development, I like to invest myself in the creation of a computer tool.
          I like to be versatile when building, through infrastructure configuration via docker, docker-compose, to production release, including integration testing, end to end and specifications.
          Supporter of the Domain Driven Development (DDD) method, I like to make the links between the domain and the tech.
        </p>
      </ProfileText>
    </ProfileTileContentWrapper>
  </Tile>

const ProfileTileContentWrapper = styled.div(({ theme }) => `
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: ${theme.gap.m};
  justify-content: center;
  align-items: center;

  @media ${device.laptop} {
    flex-wrap: nowrap;
  }
`)

const ProfileText = styled.div(({ theme }) => `
  display: flex;
  flex-direction: column;
`)

const ProfilePicture = styled.img`
  border-radius: 100px;
  width: 300px;
  height: 300px
`

export default Profile
