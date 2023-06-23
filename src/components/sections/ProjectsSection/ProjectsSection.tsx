import { Carousel } from "@mantine/carousel";
import { Box, Container, Title } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

export default function ProjectsSection () {

  const mobile = useMediaQuery('(max-width: 692px)'); 

  return (
    <Container py={mobile ? 44 : 198}>
      
      <Title sx={{
        fontSize: mobile ? 32 : 48,
      }}>
        Portfolio
      </Title>

      <Carousel
        pt={mobile ? 32 : 64}
        maw={'100%'}
        mx="auto"
        withIndicators
        withControls={false}
        height={500}
        slideSize="75%"
        slideGap="md"
        breakpoints={[
          { maxWidth: 692, slideSize: '100%', slideGap: 0 },
        ]}
      >
      <Carousel.Slide>
        <Box sx={{
          backgroundColor: 'red',
        }}>
        1 
        </Box>
      </Carousel.Slide>
      <Carousel.Slide>
      <Box sx={{
          backgroundColor: 'red',
        }}>
        2
        </Box>
      </Carousel.Slide>
      <Carousel.Slide>
        <Box sx={{
          backgroundColor: 'red',
        }}>
        3
        </Box>
      </Carousel.Slide>
      {/* ...other slides */}
    </Carousel>

    </Container>
  );
};
