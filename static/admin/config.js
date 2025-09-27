// Store configuration in a global variable for access after CMS loads
const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';

window.CMS_CONFIGURATION = {
  // For local development
  ...(isLocal ? {
    backend: {
      name: 'git-gateway',
      branch: 'main',
      site_domain: 'http://localhost:3000'
    },
    local_backend: true
  } : 
  // For production
  {
    backend: {
      name: 'github',
      repo: 'ThatGuyWhoAsked/technological-trends',
      branch: 'main',
      base_url: 'https://thatguywhoasked.github.io/technological-trends',
      site_domain: 'https://thatguywhoasked.github.io/technological-trends',
      auth_endpoint: 'https://api.decapcms.org/auth'
    }
  }),
  media_folder: 'static/images/uploads',
  public_folder: '/images/uploads',
  collections: [
    {
      name: 'posts',
      label: 'Posts',
      folder: 'content/posts',
      create: true,
      slug: '{{year}}-{{month}}-{{day}}-{{slug}}',
      editor: {
        preview: false
      },
      fields: [
        {
          label: 'Title',
          name: 'title',
          widget: 'string',
          required: true
        },
        {
          label: 'Publish Date',
          name: 'date',
          widget: 'datetime',
          required: true
        },
        {
          label: 'Body',
          name: 'body',
          widget: 'markdown',
          required: true
        }
      ]
    }
  ]
};

// Only initialize if we're not in an iframe (CMS loads in an iframe)
if (window.self === window.top) {
  document.addEventListener('DOMContentLoaded', function() {
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js';
    script.async = true;
    script.onload = function() {
      if (window.CMS) {
        CMS.init({ config: window.CMS_CONFIGURATION });
      }
    };
    document.head.appendChild(script);
  });
}
