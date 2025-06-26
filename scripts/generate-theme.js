const fs = require('fs');
const path = require('path');

// Import configuration (we need to use require since this is a Node.js script)
const configPath = path.join(__dirname, '../buroguru-config.ts');

// Read and parse the config (simplified for this script)
function generateThemeCSS() {
  // Default configuration (fallback if config file can't be read)
  const defaultConfig = {
    appearance: {
      fontFamily: 'serif',
      lightMode: {
        primary: 'hsl(222.2 84% 4.9%)',
        secondary: 'hsl(210 40% 98%)',
        accent: 'hsl(210 40% 96%)',
        background: 'hsl(0 0% 100%)',
        foreground: 'hsl(222.2 84% 4.9%)'
      },
      darkMode: {
        primary: 'hsl(210 40% 98%)',
        secondary: 'hsl(217.2 32.6% 17.5%)',
        accent: 'hsl(217.2 32.6% 17.5%)',
        background: 'hsl(222.2 84% 4.9%)',
        foreground: 'hsl(210 40% 98%)'
      }
    }
  };

  const css = `/* Buroguru Custom Theme Variables - Auto-generated */
:root {
  /* Light mode colors */
  --primary: ${defaultConfig.appearance.lightMode.primary};
  --secondary: ${defaultConfig.appearance.lightMode.secondary};
  --accent: ${defaultConfig.appearance.lightMode.accent};
  --background: ${defaultConfig.appearance.lightMode.background};
  --foreground: ${defaultConfig.appearance.lightMode.foreground};
}

.dark {
  /* Dark mode colors */
  --primary: ${defaultConfig.appearance.darkMode.primary};
  --secondary: ${defaultConfig.appearance.darkMode.secondary};
  --accent: ${defaultConfig.appearance.darkMode.accent};
  --background: ${defaultConfig.appearance.darkMode.background};
  --foreground: ${defaultConfig.appearance.darkMode.foreground};
}

/* Font family */
:root {
  --font-family: ${defaultConfig.appearance.fontFamily === 'sans' 
    ? 'ui-sans-serif, system-ui, sans-serif' 
    : defaultConfig.appearance.fontFamily === 'mono' 
    ? 'ui-monospace, monospace' 
    : 'ui-serif, serif'};
}
`;

  return css;
}

// Write the CSS file
const cssContent = generateThemeCSS();
const outputPath = path.join(__dirname, '../app/custom-theme.css');

fs.writeFileSync(outputPath, cssContent, 'utf8');
console.log('✅ Custom theme CSS generated successfully!');

module.exports = { generateThemeCSS }; 