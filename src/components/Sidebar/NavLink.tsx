import { ElementType } from "react";

import { Icon, Text, Box } from "@chakra-ui/react";

import { ActiveLink } from "../ActiveLink";

interface NavLinkProps {
  icon: ElementType;
  children: string;
  href: string;
}

export function NavLink({ icon, children, href }: NavLinkProps) {
  return (
    <ActiveLink href={href} passHref>
      <Box
        display="flex"
        alignItems="center"
        _hover={{ textDecoration: "underline" }}
      >
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">
          {children}
        </Text>
      </Box>
    </ActiveLink>
  );
}
