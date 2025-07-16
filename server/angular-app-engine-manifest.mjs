
export default {
  basePath: '/Tanzanite-Skills-Academy',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
