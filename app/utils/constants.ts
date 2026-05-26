export const DESIGN_TOKENS = {
  colors: {
    brand: {
      logoPink: "#e31e66",
      logoPurple: "#552976",
      logoBlue: "#2e98ed",
    },
    canvas: {
      background: "#FBFBFA",
      surface: "#F4F4F2",
    },
    structure: {
      primary: "#140E1B",
      secondary: "#4A4453",
      border: "#E5E3E0",
    },
    accent: {
      calm: "#1C7ECB",
      energy: "#D21256",
    },
  },

  typography: {
    fontFamilies: {
      heading: "var(--font-plus-jakarta)",
      body: "var(--font-inter)",
      editorial: "var(--font-cormorant)",
    },
    // Fluid typographic sizing for perfect museum-scale look across devices
    fontSize: {
      xs: "text-xs md:text-sm",
      sm: "text-sm md:text-base",
      base: "text-base md:text-lg",
      lg: "text-lg md:text-xl font-medium tracking-tight",
      xl: "text-xl md:text-2xl font-medium tracking-tight",
      displaySm: "text-3xl md:text-4xl font-light tracking-tight",
      displayMd: "text-4xl md:text-6xl font-light tracking-tight",
      displayLg:
        "text-5xl md:text-7xl lg:text-8xl font-extralight tracking-tighter",
    },
    letterSpacing: {
      tight: "-0.04em",
      normal: "0em",
      relaxed: "0.02em",
      loose: "0.08em",
    },
  },

  // Elevation rules to give that architectural layering look
  elevation: {
    flat: "shadow-none border border-[#E5E3E0]",
    sunken: "shadow-inner bg-[#F4F4F2]",
    premium: "shadow-[0_8px_30px_rgb(20,14,27,0.02)] border border-[#E5E3E0]",
    overlay: "shadow-[0_32px_64px_rgba(20,14,27,0.06)] backdrop-blur-md",
  },

  // Geometric styling consistency (Museum corners are sharp or ultra-subtle)
  radii: {
    none: "rounded-none",
    button: "rounded-full", // Circular buttons look incredibly modern and premium
    card: "rounded-xl", // Balanced, slight softening for interactive container elements
    input: "rounded-md", // Sharp, clinical look for form fields
  },

  // Animation easing values for signature, organic micro-interactions
  transitions: {
    perf: "transition-all duration-300 ease-[0.25,0.1,0.25,1]", // Custom slow-in ease
    dramatic: "transition-all duration-700 cubic-bezier(0.16, 1, 0.3, 1)", // Ultra-premium glide
  },

  layout: {
    sectionPadding: "py-24 md:py-32 lg:py-40",
    containerMaxWidth: "max-w-7xl px-6 lg:px-8",
    headerHeight: "h-20 md:h-24",
  },
} as const;

export type DesignTokens = typeof DESIGN_TOKENS;
