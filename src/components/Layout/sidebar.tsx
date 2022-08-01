import {
  Box,
  Center,
  Divider,
  Drawer,
  DrawerContent,
  HStack,
  Image,
  Link,
  VStack,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import Logo from "assets/images/logo.png";
import { ChakraHeading, ChakraText } from "components/Typography";
import useActiveWeb3React from "hooks/useActiveWeb3React";
import { Fragment } from "react";
import { Link as ReactRouterLink, useLocation } from "react-router-dom";
import { SidebarNavItems } from "utils/constants";
import { shortenAddress } from "utils/functions";
import { SidebarItemProps, SidebarProps } from "utils/interface";
import theme from "utils/theme";

const ProfilePreviewBox = styled(HStack)`
  background: ${theme.colors.bg.account};
  box-sizing: border-box;
  border: 2px solid transparent;
  background-clip: padding-box;
  position: relative;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    margin: -2px;
    border-radius: inherit;
    background-image: linear-gradient(
      to right top,
      rgba(171, 69, 231, 0.04),
      rgba(171, 69, 231, 1)
    );
  }
`;

const NavItem = (props: SidebarItemProps) => {
  const { href, icon, name } = props;
  const { pathname } = useLocation();
  const isActive = pathname === href;

  return (
    <Link
      as={ReactRouterLink}
      to={href}
      borderLeft="6px solid transparent"
      textDecoration="none"
      width="100%"
      color={isActive ? theme.colors.text.primary : theme.colors.text.tertiary}
      bg={isActive ? theme.colors.other.sidebar.nav_active : "transparent"}
      borderColor={isActive ? theme.colors.primary : "transparent"}
      _focus={{
        boxShadow: "none",
        color: theme.colors.bg.hover,
      }}
      _hover={{
        color: theme.colors.bg.hover,
      }}
    >
      <HStack align="center" pl={9} py={3.5} spacing={3.5}>
        {icon()}
        <ChakraText
          color="unset"
          size="small"
          fontWeight={isActive ? 600 : 400}
        >
          {name}
        </ChakraText>
      </HStack>
    </Link>
  );
};

const SidebarContent = (props: SidebarProps) => {
  const { onClose, ...rest } = props;
  const { account } = useActiveWeb3React();

  return (
    <Box
      as="aside"
      bg={theme.colors.bg.secondary}
      pos="fixed"
      transition="3s ease"
      width={64}
      height="100%"
      {...rest}
    >
      <Center p={6} width="100%">
        <Image src={Logo} alt="logo" />
      </Center>
      <Divider borderColor={theme.colors.border.primary} py={0.5} />
      {account && (
        <ProfilePreviewBox
          align="center"
          borderRadius="2xl"
          boxShadow={theme.colors.boxShadow.account}
          m={5}
          padding={4}
          spacing={3}
        >
          <Box borderRadius="xl">
            <Image
              src={`https://avatars.dicebear.com/api/micah/${account.toLowerCase()}.png`}
              alt="default avatar icon"
              width={16}
              height={16}
            />
          </Box>
          <VStack align="flex-start" spacing={1.5}>
            <ChakraHeading type="h6" fontWeight={700} lineHeight={6}>
              {shortenAddress(account.toLowerCase())}
            </ChakraHeading>
            <Link
              as={ReactRouterLink}
              to="/profile"
              textDecoration="underline"
              color={theme.colors.text.link}
            >
              <ChakraText size="xsmall" type="link" fontWeight={500}>
                View Profile
              </ChakraText>
            </Link>
          </VStack>
        </ProfilePreviewBox>
      )}
      <VStack spacing={4}>
        {SidebarNavItems.map((link) => (
          <NavItem
            key={link.name}
            icon={link.icon}
            name={link.name}
            href={link.href}
          />
        ))}
      </VStack>
    </Box>
  );
};

function Sidebar(props: SidebarProps) {
  const { isOpen = false, onClose } = props;
  return (
    <Fragment>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", lg: "block" }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
      >
        <DrawerContent maxWidth={64}>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
    </Fragment>
  );
}

export default Sidebar;
