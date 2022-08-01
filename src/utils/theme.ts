import { extendTheme, ThemeConfig } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

export const fonts = {
  heading: {
    h1: {
      fontSize: '48px',
      lineHeight: '64px',
      fontFamily: 'Manrope'
    },
    h2: {
      fontSize: '36px',
      lineHeight: '48px',
      fontFamily: 'Manrope'
    },
    h3: {
      fontSize: '24px',
      lineHeight: '33px',
      fontFamily: 'Manrope'
    },
    h4: {
      fontSize: '20px',
      lineHeight: '28px',
      fontFamily: 'Manrope'
    },
    h5: {
      fontSize: '18px',
      lineHeight: '25px',
      fontWeight: 700,
      fontFamily: 'Manrope'
    },
    h6: {
      fontSize: '18px',
      lineHeight: '20px',
      fontWeight: 600,
      fontFamily: 'Manrope'
    },
  },
  text: {
    regular: {
      fontSize: '16px',
      lineHeight: '24px',
      fontFamily: 'Manrope'
    },
    small: {
      fontSize: '14px',
      lineHeight: '22px',
      fontFamily: 'Manrope'
    },
    xsmall: {
      fontSize: '12px',
      lineHeight: '16px',
      fontFamily: 'Manrope'
    },
    tiny: {
      fontSize: '10px',
      lineHeight: '12px',
      fontFamily: 'Manrope'
    },

  }
}

const breakpoints = createBreakpoints({
  xs: '414px',
  sm: '540px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  default: '1366px',
  xxl: '1440px',
  xxxl: '1920px',
  el: '2560px',
  exl: '3440px'
})

const colors = {
  primary: {
    200: '#B148EA',
    500: '#331545'
  },
  secondary: '#5B04C5',
  gray: {
    300: 'rgba(255, 255, 255, 0.05)',
    500: "#38373C",
  },
  blackAlpha: {
    200: '#181818',
  },
  bg: {
    primary: '#0C0B10',
    secondary: 'rgba(70, 70, 70, 0.2)',
    tertiary: '#222126',
    input: '#28272B',
    wallet: 'linear-gradient(147.25deg, rgba(171, 69, 231, 0.3) -1.63%, rgba(120, 48, 162, 0.3) 44.97%, rgba(86, 35, 116, 0.3) 100%)',
    account: 'linear-gradient(228.07deg, #AB45E7 -21.09%, #2F2E33 30.72%)',
    video_card: 'linear-gradient(220.47deg, #181818 -20.14%, #181818 30.92%)',
    profile_cover: 'linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))',
    grey: '#38373C',
  },
  border: {
    primary: 'rgba(196, 196, 196, 0.15)',
    secondary: '#3C3C3C',
    video_card: 'linear-gradient(to left bottom, rgba(255, 116, 73, 0.5), rgba(171, 69, 231, 0.5))'
  },
  boxShadow: {
    account: '0px 15px 20px rgba(0, 0, 0, 0.35)',
    video_card: '0px 18.022px 24.0293px rgba(0, 0, 0, 0.35)'
  },
  button: {
    primary: {
      bg: '#AB45E7',
    },
    secondary: {
      bg: 'linear-gradient(93.69deg, #AB45E7 0%, #8937B9 100%)'
    }
  },
  text: {
    primary: "#FFFFFF",
    secondary: '#F1F0F3',
    tertiary: 'rgba(255,255,255,0.6)',
    black: '#000000',
    link: '#D080F3',
    button: '#AB45E7'
  },
  func: {
    error: "#FF5656",
  },
  twitter: {
    500: '#005677'
  },
  instagram: {
    500: '#49171A'
  },
  other: {
    sidebar: {
      nav_active: 'linear-gradient(90deg, rgba(171, 69, 231, 0.24) 0%, rgba(171, 69, 231, 0) 146.65%)'
    }
  }
}

export const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const styles = {
  global: (props: any) => ({
    body: {
      background: colors.bg.primary,
      fontFamily: 'Manrope',
    },
    ".slick-slide > div": {
      margin: "0 10px"
    },
    ".slick-list": {
      margin: "0 -10px"
    },
    ".slick-track": {
      marginLeft: 0,
      marginRight: 0
    }
  }),
}

const theme = extendTheme({
  breakpoints,
  colors,
  config,
  styles,
  components: {
    Button: {
      sizes: {
        small: {
          p: 2.5,
          h: "46px",
          borderRadius: "10px",
          fontSize: "15px",
          lineHeight: "20.49px",
          fontWeight: 600
        },
        medium: {
          px: 3.5,
          py: "18px",
          h: "54px",
          borderRadius: "12px",
          fontSize: "16.82px",
          lineHeight: "22.98px",
          fontWeight: 600
        },
        large: {
          px: 8,
          h: "70px",
          fontSize: "30px",
          borderRadius: "10px",
        },
      },
      variants: {
        primary: {
          bg: "#AB45E7",
          color: "#fff",
          _hover: {
            color: "#fff",
            bg: "secondary",
          },
        },
        primaryOpacity: {
          bg: 'rgba(171, 69, 231, 0.25)',
          color: '#fff'
        },
        secondary: {
          bg: "secondary",
          color: "#fff",
        },
        primarySolid: {
          bg: "teal",
          color: "#fff",
        },
        ghost: {
          bg: "transparent",
          // border: "1px solid red",
        },
      },
    },
  }
})

export default theme
