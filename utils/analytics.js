import ReactGA from "react-ga";

export const initGA = env => {
  if (env === "production") {
    ReactGA.initialize("UA-xxxxxxxxx-1");
  } else {
    console.log("GA init");
  }
};

export const logPageView = evn => {
  if (evn === "production") {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
  } else {
    console.log(`Logging pageview for ${window.location.pathname}`);
  }
};

// export const logEvent = (category = "", action = "") => {

//   if (category && action) {
//     ReactGA.event({ category, action });
//   }
// };

// export const logException = (description = "", fatal = false) => {
//   if (description) {
//     ReactGA.exception({ description, fatal });
//   }
// };
