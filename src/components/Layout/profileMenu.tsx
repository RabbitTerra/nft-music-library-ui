import {
  Button,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { DropdownMenuProps } from "utils/interface";
import { shortenAddress } from "utils/functions";

export function DesktopDropdownMenu(props: DropdownMenuProps) {
  const { account, logout } = props;
  return (
    <Menu>
      <MenuButton
        aria-label="menu"
        as={Button}
        variant="primaryOpacity"
        size="small"
        leftIcon={
          <Image
            src={`https://avatars.dicebear.com/api/micah/${account.toLowerCase()}.png`}
            alt="default avatar icon"
            width={8}
            height={8}
          />
        }
        _focus={{ outline: "none" }}
      >
        {shortenAddress(account.toLowerCase())}
      </MenuButton>
      <MenuList
        zIndex={10}
        padding={4}
        borderRadius={1.5}
        borderWidth={1.4}
        top={6}
        right={6}
      >
        <MenuItem as={ReactRouterLink} to="/profile" width="100%">
          Profile
        </MenuItem>
        <MenuItem width="100%" onClick={logout}>
          Disconnect
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
