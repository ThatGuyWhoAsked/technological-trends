import CMS from 'netlify-cms-app';
import uploadcare from 'netlify-cms-media-library-uploadcare';
import cloudinary from 'netlify-cms-media-library-cloudinary';

// Import the CMS styles
import 'netlify-cms/dist/cms.css';

// Register media libraries
CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

// Check if we're in local development
const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';

// Configuration
const config = {
  // For local development
  ...(isLocal && {
    local_backend: true,
    backend: {
      name: 'git-gateway',
      branch: 'main',
      site_domain: 'http://localhost:3000'
    }
  }),
  
  // For production
  ...(!isLocal && {
    backend: {
      name: 'github',
      repo: 'ThatGuyWhoAsked/technological-trends',
      branch: 'main',
      site_domain: 'https://thatguywhoasked.github.io/technological-trends',
      auth_endpoint: 'https://api.decapcms.org/auth'
    }
  }),
  
  // Common settings
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

// Initialize the CMS
CMS.init({ config });
