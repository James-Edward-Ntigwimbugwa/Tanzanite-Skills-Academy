
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Tanzanite-Skills-Academy/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Tanzanite-Skills-Academy"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 471, hash: '6cd59ce97da42e169b7a4c6449008a91c238d3aa627e4cd7280b3bd012e920a0', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 984, hash: '3f2855f8d6d9390b4a9776b614293e8779220d767ef3c5a8f977a49de8671df5', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 37125, hash: 'b6c7ba7e999b32d4159ef63f4f6d59cce1f3df4ef16a73aa385afb2de8bebf89', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
