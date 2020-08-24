import styled from '@emotion/styled'
import React, { useRef } from 'react'
import AttributionSDK from '.'
import { GifOverlayProps } from '../gif'
const Background = styled.div`
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(18, 18, 18, 0.6));
    cursor: default;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 75px;
    pointer-events: none;
`

const Attribution = styled(AttributionSDK)`
    position: absolute;
    bottom: 10px;
    left: 10px;
    right: 10px;
`

const Container = styled.div`
    transition: opacity 150ms ease-in;
`

const AttributionOverlay = ({ gif, isHovered }: GifOverlayProps) => {
    const hasHovered = useRef(isHovered)
    if (isHovered) {
        // not rendering to avoid loading the avatar until hover
        hasHovered.current = true
    }
    return gif.user && hasHovered.current ? (
        <Container style={{ opacity: isHovered ? 1 : 0 }}>
            <Background />
            <Attribution gif={gif} />
        </Container>
    ) : null
}

export default AttributionOverlay
