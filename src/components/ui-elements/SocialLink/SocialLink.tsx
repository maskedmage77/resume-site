import { ActionIcon } from "@mantine/core";

interface Props {
  children: React.ReactNode;
  href: string;
}

export default function SocialLink ({
  children,
  href,
}: Props) {
  return (
    <ActionIcon 
      variant="outline" 
      size="xl" 
      radius='50%' 
      component="a"
      href={href}
      >
      {children}
    </ActionIcon>
  );
};
