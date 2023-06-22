import { Box, Title, Group, Stack, Text, Image, useMantineTheme } from "@mantine/core";
import { IconBrandGithub, IconBrandLinkedin, IconMail } from "@tabler/icons-react";
import SocialLink from "../../ui-elements/SocialLink";
import headshot from '/headshot.jpg';
import { useMediaQuery } from "@mantine/hooks";

export default function NameSection () {

  const theme = useMantineTheme();
  const mobile = useMediaQuery('(max-width: 692px)'); 
  
  return (
    <Box
      py={mobile ? 80 : 360}
      px={24}
      sx={(theme) => ({
        backgroundColor: theme.colors.dark[8],
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        gap: 64,
      })}
    >

      <Group
        spacing={mobile ? 16: 64}
        sx={{
          maxWidth: 700,
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Image 
          width={182}
          height={182}
          src={headshot}
          radius='50%'
        />
        <Stack
          sx={{
            maxWidth: 400,
            textAlign: mobile ? 'center' : 'left',
          }}
        >
          <Title sx={{ 
            fontSize: mobile ? 48 : 64,
          }}>
            Jacob
            <span style={{
              color: theme.colors.green[6],
            }}>
              {" "}
              Hines
            </span>
          </Title>
          <Text size={"lg"}>
            I'm a software developer who loves to learn and create software to better the lives of others.
          </Text>
        </Stack>
      </Group>

      <Group>

        <SocialLink href={"https://www.linkedin.com/in/jacob-hines-a04677201/"}>
          <IconBrandLinkedin />
        </SocialLink>

        <SocialLink href="https://github.com/maskedmage77">
          <IconBrandGithub />
        </SocialLink>

        <SocialLink href="mailto:jacob7hines@gmail.com">
          <IconMail />
        </SocialLink>

      </Group>
      
    </Box>
  );
};
