import { NativeBaseProvider, extendTheme } from "native-base";

export const theme = extendTheme({
  colors: {
    // Add new color
    primary: {
      50:  "#ffe9e9",
      100: "#f0c4c4",
      200: "#e19d9e",
      300: "#d47878",
      400: "#c65252",
      500: "#ad3939",
      600: "#872b2b",
      700: "#621e1f",
      800: "#3c1112",
      900: "#1b0202",
    },
  },
  fontConfig: {
    Roboto: {
      100: {
        normal: "Roboto_100Thin",
        italic: "Roboto_100Thin_Italic",
      },
      300: {
        normal: "Roboto_300Light",
        italic: "Roboto_300Light_Italic",
      },
      400: {
        normal: "Roboto_400Regular",
        italic: "Roboto_400Regular_Italic",
      },
      500: {
        normal: "Roboto_500Medium",
        italic: "Roboto_500Medium_Italic",
      },
      600: {
        normal: "RobotoMono_600SemiBold",
        italic: "RobotoMono_600SemiBold_Italic",
      },
      700: {
        normal: "Roboto_700Bold",
        italic: "Roboto_700Bold_Italic",
      },
      900: {
        normal: "Roboto_900Black",
        italic: "Roboto_900Black_Italic",
      },
    },
  },
  // Make sure values below matches any of the keys in `fontConfig`
  fonts: {
    heading: "RobotoMono_600SemiBold",
    body: "Roboto_500Medium",
    mono: "Roboto_400Regular",
  },
  fontSizes: {
    "2xs": 10,
    "xs": 12,
    "sm": 14,
    "md": 16,
    "lg": 18,
    "xl": 20,
    "2xl": 24,
    "3xl": 30,
    "4xl": 36,
    "5xl": 48,
    "6xl": 60,
    "7xl": 72,
    "8xl": 96,
    "9xl": 128,
  },

  config: {
    useSystemColorMode: false,
    initialColorMode: "light",
  },
  components: {
    FormControl: {
      baseStyle: () => {
        return {
          marginBottom: 5,
        };
      },
    },
    FormControlLabel: {
      defaultProps: {
        _text: {
          color: "light.900",
        },
      },
      baseStyle: () => {
        return {
          flexDirection: "row",
          justifyContent: "flex-start",
          _text: {
            fontSize: "md",
            fontFamily: "Roboto_700Bold",
          },
        };
      },
    },
    Input: {
      defaultProps: {
        size: "md",
      },

      baseStyle: () => {
        return {
          fontSize: 20,
          paddingTop: 3,
          paddingBottom: 3,
        };
      },
    },
  },
});
