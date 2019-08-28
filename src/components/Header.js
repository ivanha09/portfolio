import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Wrapper = styled.div`
  background: url("${props => props.theme.bgPattern}") #000;
  display: flex;
  position: relative;
`

const Content = styled.div`
  max-width: ${props => props.theme.maxWidths.general};
  padding: 2rem 0 3rem 1.0875rem;
  color: ${props => props.theme.colors.secondary};
  text-align: center;
  height: 300px;
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    height: 300px;
  }
`

const Avatar = styled.div`
  height: 125px;
  width: 125px;
  margin: 0 auto;
  image-rendering: -moz-crisp-edges;
  image-rendering: -o-crisp-edges;
  image-rendering: -webkit-optimize-contrast;
  -ms-interpolation-mode: nearest-neighbor;

  img {
    border-radius: 0%;
  }
`

const Header = ({ avatar }) => (
  <Wrapper>
    <Content>
      <Avatar>
        <img src={avatar} alt={name} />
      </Avatar>
    </Content>
  </Wrapper>
)

export default Header

Header.propTypes = {
  avatar: PropTypes.string.isRequired
}
