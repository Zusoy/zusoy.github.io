import React from 'react'
import Tile from 'widgets/Tile'
import ExternalLink from 'widgets/ExternalLink'
import styled from 'styled-components'
import theme from 'app/theme'
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa'

const Social: React.FC = () =>
  <Tile width={ 200 } index={ 2 } background={ theme.colors.black }>
    <SocialTileContentWrapper>
      <ExternalLink href='https://github.com/Zusoy'>
        <SocialIconWrapper>
          <FaGithub fontSize={ 50 } />
        </SocialIconWrapper>
      </ExternalLink>
      <ExternalLink href='https://twitter.com/gregoire_drp'>
        <SocialIconWrapper>
          <FaTwitter fontSize={ 50 } />
        </SocialIconWrapper>
      </ExternalLink>
      <ExternalLink href='https://www.linkedin.com/in/gr%C3%A9goire-drapeau-742425123/'>
        <SocialIconWrapper>
          <FaLinkedin fontSize={ 50 } />
        </SocialIconWrapper>
      </ExternalLink>
    </SocialTileContentWrapper>
  </Tile>

const SocialTileContentWrapper = styled.div(({ theme }) => `
	display: flex;
	gap: ${theme.gap.sm};
	color: ${theme.colors.white};
	align-items: center;
	justify-content: center;
`)

const SocialIconWrapper = styled.div(({ theme }) => `
	cursor: pointer;
  transition: 0.3s;

	&:hover {
		color: ${theme.colors.green};
	}
`)

export default Social
