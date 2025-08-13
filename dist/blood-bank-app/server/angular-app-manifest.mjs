
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/homepage",
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/homepage"
  },
  {
    "renderMode": 2,
    "route": "/homepage/admin-login"
  },
  {
    "renderMode": 2,
    "route": "/donor"
  },
  {
    "renderMode": 2,
    "route": "/acceptor"
  },
  {
    "renderMode": 2,
    "route": "/dashboard"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 496, hash: '9c030ef80fd7dd590f5524a659de7c6988d79cb78f102f98c1f946dad1bfd323', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1009, hash: '87229cf68ba9bec9e88bfdcf26da5754add26e16e264208d0d14ef741e76464d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'homepage/admin-login/index.html': {size: 5795, hash: 'e434576dba3c441ec1c74a896c1cb2b6bb916e159b6471ddf45e67b9f31c0b85', text: () => import('./assets-chunks/homepage_admin-login_index_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 7095, hash: 'f71720d35cd4c3c579294f21fc68a5816c0e9ff9ca8889ade7237a138c00657d', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'donor/index.html': {size: 12216, hash: '5c8e66c6dd2a706272d639de4a8ef4f8f6a73583bb1058b5bd90ff13734366db', text: () => import('./assets-chunks/donor_index_html.mjs').then(m => m.default)},
    'homepage/index.html': {size: 10448, hash: '95d7432de0c9cbb038474183c8a9e4dc15b959998132ac41ca4eb0b32de46fd9', text: () => import('./assets-chunks/homepage_index_html.mjs').then(m => m.default)},
    'acceptor/index.html': {size: 12342, hash: '9f4f8d2da996a2a2616306bd31c524f5c42674baa038b49b703351ec44ad5451', text: () => import('./assets-chunks/acceptor_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
