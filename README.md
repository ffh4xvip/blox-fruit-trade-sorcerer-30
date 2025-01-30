# Blox Fruits Calculator WordPress Plugin

## Installation

1. Download the plugin zip file
2. Go to WordPress admin -> Plugins -> Add New -> Upload Plugin
3. Upload the zip file and activate the plugin
4. Use the shortcode `[blox_fruits_calculator]` on any page or post to display the calculator

## Adding New Fruits

1. Upload new fruit images to the `wp-content/uploads/fruits` directory
2. Edit the `fruits.json` file in the plugin directory to add new fruit data
3. The calculator will automatically load the new fruits

## Development

This plugin is built with React. To modify the React application:

1. Clone the repository
2. Run `npm install`
3. Make your changes
4. Run `npm run build` to create the production build
5. Copy the contents of the `dist` directory to your WordPress plugin directory

## Project info

**URL**: https://lovable.dev/projects/8da6e21c-c328-4f7d-9f4c-5571faa6f2b4

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/8da6e21c-c328-4f7d-9f4c-5571faa6f2b4) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with .

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/8da6e21c-c328-4f7d-9f4c-5571faa6f2b4) and click on Share -> Publish.

## I want to use a custom domain - is that possible?

We don't support custom domains (yet). If you want to deploy your project under your own domain then we recommend using Netlify. Visit our docs for more details: [Custom domains](https://docs.lovable.dev/tips-tricks/custom-domain/)
