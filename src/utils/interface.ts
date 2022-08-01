import { BoxProps, HeadingProps, LinkProps, TextProps } from "@chakra-ui/react"
import { AbstractConnector } from "@web3-react/abstract-connector"
import { CustomArrowProps } from "react-slick"

export interface ChakraHeadingProps extends HeadingProps {
  type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
}
export interface ChakraTextProps extends TextProps {
  size: "regular" | "small" | "xsmall" | "tiny"
  type?: string
}

export interface NavbarProps {
  onOpen: () => void
}
export interface SidebarProps extends BoxProps {
  isOpen?: boolean
  onClose: () => void;
}
export interface SidebarItemProps extends LinkProps {
  icon: () => JSX.Element;
  name: string;
  href: string;
}
export interface WalletModalProps {
  isOpen: boolean
  onClose: () => void
  onClick: (connector: | (() => Promise<AbstractConnector>)
    | AbstractConnector
    | undefined, name: string) => Promise<void>
}

export interface DropdownMenuProps {
  account: string
  logout: () => void
}

export interface SlideContainerProps {
  is_group?: boolean
  title: string
  data: any[]
}

export interface SlideArrowProps extends CustomArrowProps {
  dir: string
  isDisabled: boolean
}
export interface User {
  avatar: string
  name: string
}
export interface Video {
  cover: string
  title: string
  artist: User
  likes: number
}

export interface Genres {
  cover: string
  title: string
  likes: number
  total: number
}

export interface VideoCardProps extends BoxProps {
  is_group?: boolean
  data: any
}

export interface CurrencyRate {
  ethereum: number
  matic: number
}