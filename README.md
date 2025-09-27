# Technological Trends - School Newsletter

A modern, accessible, and interactive school newsletter website focused on technology trends, powered by Decap CMS (formerly Netlify CMS).

## Features

- **Responsive Design**: Works on all device sizes
- **Accessibility**: Built with WCAG guidelines in mind
- **Interactive Elements**: Custom cursor effects and hover states
- **Modern UI**: Clean and engaging user interface
- **Content Management**: Powered by Decap CMS with GitHub backend
- **Git-based Workflow**: All content changes are tracked in Git
- **Secure Authentication**: OAuth with GitHub
- **Media Management**: Built-in image upload and management

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm (v7 or higher)
- GitHub account
- (Optional) Custom domain (if not using GitHub Pages)

### 🛠️ Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ThatGuyWhoAsked/technological-trends.git
   cd technological-trends
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file based on the example:
   ```bash
   cp .env.example .env
   ```

4. Set up GitHub OAuth App:
   - Go to [GitHub Developer Settings](https://github.com/settings/developers)
   - Click "New OAuth App"
   - Fill in:
     - **Application name**: Your Site Name
     - **Homepage URL**: `https://your-username.github.io/technological-trends` (or your custom domain)
     - **Authorization callback URL**: `https://api.decapcms.org/auth/done`
   - Copy the Client ID and generate a Client Secret
   - Update your `.env` file with these credentials

5. Start the development server:
   ```bash
   npm start
   ```

6. Open your browser and navigate to `http://localhost:3000`

### 🔧 Building for Production

1. Build the project:
   ```bash
   npm run build
   ```

2. Preview the production build locally:
   ```bash
   npm run preview
   ```

3. Deploy to GitHub Pages:
   ```bash
   npm run deploy
   ```
   This will build the project and deploy it to the `gh-pages` branch.

## 🔒 Security Notes

- Never commit your `.env` file
- The GitHub OAuth Client Secret should remain private
- The `public` directory is automatically generated - do not commit it

## 🛠 Development

### Available Scripts

- `npm start` - Start the development server with live reload
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run deploy` - Build and deploy to GitHub Pages
- `npm run lint` - Run linter
- `npm run format` - Format code using Prettier

## Deployment

This project is configured for deployment on Netlify. To deploy:

1. Push your code to a GitHub repository
2. Connect the repository to Netlify
3. Configure environment variables in Netlify's dashboard
4. Deploy!

## 🛠 Built With

- HTML5
- CSS3 (with CSS Variables)
- JavaScript (ES6+)
- [Decap CMS](https://decapcms.org/) (formerly Netlify CMS)
- GitHub API
- GitHub Pages

## Accessibility

This project follows WCAG 2.1 AA standards and includes:

- Semantic HTML5
- Keyboard navigation
- Skip links
- ARIA labels where necessary
- Color contrast ratios that meet WCAG standards

## Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Decap CMS](https://decapcms.org/) for the amazing headless CMS
- [GitHub](https://github.com/) for hosting and version control
- [Unsplash](https://unsplash.com/) for placeholder images
- [Google Fonts](https://fonts.google.com/) for typography
