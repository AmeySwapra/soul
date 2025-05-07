import { Box, Container, Icon, Image } from "@chakra-ui/react";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";

const SpaGallery = () => {
  const [galleryItems] = useState([
    {
      id: 1,
      src: "https://soulessencespa.in/wp-content/uploads/2023/04/Spa-1-scaled.jpeg",
      alt: "Gallery 01",
      width: 1920,
      height: 1277,
      colSpan: 2,
      rowSpan: 2
    },
    {
      id: 2,
      src: "https://soulessencespa.in/wp-content/uploads/2024/02/IMG-20220905-WA0036.jpg",
      alt: "Gallery 01",
      width: 1600,
      height: 1200,
      colSpan: 1,
      rowSpan: 1
    },
    {
      id: 3,
      src: "https://soulessencespa.in/wp-content/uploads/2023/04/305802259_130489526392508_1479029337558961719_n.jpg",
      alt: "Gallery 02",
      width: 1440,
      height: 980,
      colSpan: 2,
      rowSpan: 1
    },
    {
      id: 4,
      src: "https://soulessencespa.in/wp-content/uploads/2024/02/makeup.jpg",
      alt: "Gallery 03",
      width: 1080,
      height: 1578,
      colSpan: 1,
      rowSpan: 2
    },
    {
      id: 5,
      src: "https://soulessencespa.in/wp-content/uploads/2024/02/Spa-6.jpg",
      alt: "spa",
      width: 1920,
      height: 1276,
      colSpan: 1,
      rowSpan: 1
    },
    {
      id: 6,
      src: "https://soulessencespa.in/wp-content/uploads/2024/02/Spa-5.jpg",
      alt: "spa",
      width: 1920,
      height: 1271,
      colSpan: 1,
      rowSpan: 1
    },
    {
      id: 7,
      src: "https://soulessencespa.in/wp-content/uploads/2024/02/Spa-3.jpg",
      alt: "spa",
      width: 1920,
      height: 1289,
      colSpan: 2,
      rowSpan: 1
    },
    {
      id: 8,
      src: "https://soulessencespa.in/wp-content/uploads/2023/10/240_F_30339433_Jpgo3dzrKtAxfXsWU3VutILluR1vwLh5.jpg",
      alt: "",
      width: 160,
      height: 240,
      colSpan: 1,
      rowSpan: 1
    },
    {
      id: 9,
      src: "https://soulessencespa.in/wp-content/uploads/2024/02/Spa-9.jpg",
      alt: "",
      width: 1920,
      height: 1277,
      colSpan: 1,
      rowSpan: 1
    },
    {
      id: 10,
      src: "https://soulessencespa.in/wp-content/uploads/2024/02/Spa-10.jpg",
      alt: "Caption",
      width: 1920,
      height: 1276,
      colSpan: 1,
      rowSpan: 1
    }
  ]);

  return (
    <Box as="section" py={16}>
      <Container maxW="container.xl" px={{ base: 4, md: 8 }}>
        {/* Gallery Grid */}
        <Box
          display="grid"
          gridTemplateColumns={{
            base: "repeat(2, 1fr)",
            md: "repeat(4, 1fr)"
          }}
          gridAutoRows="200px"
          gap={{ base: 4, md: 6 }}
        >
          {galleryItems.map((item) => (
            <Box
              key={item.id}
              position="relative"
              gridColumnEnd={`span ${item.colSpan}`}
              gridRowEnd={`span ${item.rowSpan}`}
              overflow="hidden"
              borderRadius="lg"
              _hover={{
                "& .gallery-overlay": {
                  opacity: 1
                },
                "& img": {
                  transform: "scale(1.05)"
                }
              }}
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.3s ease"
                }}
              />
              
              {/* Overlay with plus icon */}
              <Box
                className="gallery-overlay"
                position="absolute"
                top={0}
                left={0}
                right={0}
                bottom={0}
                bg="blackAlpha.600"
                opacity={0}
                transition="opacity 0.3s ease"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Icon
                  as={FaPlus}
                  boxSize={8}
                  color="white"
                />
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default SpaGallery;