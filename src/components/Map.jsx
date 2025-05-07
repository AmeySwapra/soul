import { AspectRatio, Box } from '@chakra-ui/react'
import React from 'react'

function Map() {
  return (
    <>
       <Box py={8}>
        <AspectRatio ratio={16 / 6}>
          <iframe
            title="Soul Essence Spa Location"
            src="https://maps.google.com/maps?q=Soul%20Essence%20-%20The%20Family%20Spa%20Solaris%20Sports%20World%20128%2F2%2C%20Mayur%20Colony%2C%20Kothrud%2C%20Pune%2C%20Maharashtra%20411038&t=m&z=13&output=embed&iwloc=near"
            allowFullScreen
          />
        </AspectRatio>
      </Box>
    </>
  )
}

export default Map