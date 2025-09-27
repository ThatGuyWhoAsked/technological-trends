const fs = require('fs');
const path = require('path');
require('dotenv').config();

// Ensure required environment variables are set
const requiredEnvVars = ['GITHUB_CLIENT_ID', 'GITHUB_CLIENT_SECRET', 'SITE_URL', 'REPOSITORY_NAME'];
const missingVars = requiredEnvVars.filter(varName => !process.env[varName]);

if (missingVars.length > 0) {
  console.error('Missing required environment variables:');
  missingVars.forEach(varName => console.error(`- ${varName}`));
  console.error('\nPlease check your .env file or set these environment variables.');
  process.exit(1);
}

// Create public directory if it doesn't exist
const publicDir = path.join(__dirname, 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Copy static files
function copyDir(src, dest) {
  if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
  
  const entries = fs.readdirSync(src, { withFileTypes: true });
  
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// Process config.js with environment variables
const configPath = path.join(__dirname, 'static', 'admin', 'config.js');
let configContent = fs.readFileSync(configPath, 'utf8');

// Replace environment variables in config
Object.entries(process.env).forEach(([key, value]) => {
  if (value) {
    configContent = configContent.replace(
      new RegExp(`process\.env\.${key}`, 'g'),
      JSON.stringify(value)
    );
  }
});

// Ensure public/admin directory exists
const adminDir = path.join(publicDir, 'admin');
if (!fs.existsSync(adminDir)) {
  fs.mkdirSync(adminDir, { recursive: true });
}

// Write processed config
fs.writeFileSync(path.join(adminDir, 'config.js'), configContent);

// Copy other static files
copyDir(path.join(__dirname, 'static'), publicDir);

console.log('Build completed successfully!');
