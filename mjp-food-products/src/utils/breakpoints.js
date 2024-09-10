// import resolveConfig from 'tailwindcss/resolveConfig';
// import tailwindConfig from '../../tailwind.config'; // Fix the path

// const fullConfig = resolveConfig(tailwindConfig);

// export const breakpoint = (n) => `@media (min-width: ${fullConfig.theme.screens[n]})`

const renderSwitch = (param) => {
  switch (param) {
    case "xxs":
      return "400px";
    case "xs":
      return "425px";
    case "sm":
      return "640px";
    case "md":
      return "768px";
    case "lg":
      return "1024px";
    case "xl":
      return "1280px";
    case "2xl":
      return "1536px";
    case "3xl":
      return "1720px";
    case "4xl":
      return "2560px";
    case "5xl":
      return "3840px";

    default:
      return "1024px";
  }
};

export const breakpoint = (n) => `@media (min-width: ${renderSwitch(n)})`;
