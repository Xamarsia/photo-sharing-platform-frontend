<h1 align="center">
  <p> Photo Sharing Platform Frontend (SPSP Frontend)</p>
  <h4 align="left">Demo: https://spspdemo.online/</h4>

  This project is a frontend of [SPSP](https://github.com/Xamarsia/spsp-deployment) project. It implemented using Next.js ( React ) framework and Typescript for static type checking.
</h1>

## Table Of Content

- [Links](#links)
- [Development stack](#development-stack)
  - [Frontend](#frontend)
  - [General](#general)
- [Environment setup](#environment-setup)
- [Build & Run](#build--run)
  - [Useful commands](#useful-commands)
- [Future Enhancements](#future-enhancements)
- [License](#license)

## Description

Photo Sharing Platform Frontend project is a frontend of [SPSP](https://github.com/Xamarsia/spsp-deployment) project.

The application is designed to foster user interaction and content sharing through posts.

A post consists of an image and an optional description. SPSP offers an intuitive interface that allows users to create, update, and delete posts effortlessly.

Users can create customizable profiles that reflect their personality through profile picture, bios, and a collection of their posts. The platform encourages social connectivity with follow and unfollow functionalities.

This application is designed on Figma (see UI Prototipe) and developed using Next.js.

It is web-based and built to be compatible with various devices. The frontend components are stateless.

The application is written in TypeScript, providing strong typing and enhanced developer experience through improved code quality and maintainability.

## UI Prototype

This frontend application was designed in Figma prior to development, resulting in a clear and visually appealing user interface.

The design process in Figma ensured that the layout, color schemes, typography, and overall aesthetics aligned with the project goals.

Although some changes were made during the final stages of development, the prototype still retains its core functionality and visual design.

...View UI prototype here...

## Screenshots

...Screenshots from main SPSP here...

## Project Features

- __User Authentication:__ Sign In, Sign Up, and Sign Out functionalities are provided, along with an option for Password Reset.
  - Authentication using email addresses and passwords or popular identity provider Google.
  - Authentication is implemented using Firebase Authentication because it leverages industry standards such as OAuth 2.0.
- __Unauthorized Preview:__ Non-authenticated users can view a news feed, posts, and other users' profiles.
- __User Profiles:__ Customizable profiles with profile picture, bios and posts.
  - Users also have the option to delete their profiles.
- __User Interaction:__  Follow and unfollow functionality.
  - Only authorized users are permitted to follow or unfollow users.
  - All users can view the list of followers or followings.
- __User Search:__ Search for users by username or full name.
- __Content Sharing:__ Intuitive interface for viewing, creating, updating, or deleting posts.
  - Post previews are displayed on their author's profile in order from newest to oldest.
- __Content Interaction:__ Like and dislike feature for posts to enhance user engagement.
  - Only authorized users are permitted to like or dislike posts.
  - All users can view the list of users who liked a post.
- __News Page:__ News feed of posts is displayed for all users.
  - Infinite scrolling implemented.
- __Not Found:__ Not found page for incorrect routing.
  - The UI adapts on laptop views for screens wider than 448px (28rem).
- __Form Validation:__ Server-side validation for user inputs and data integrity.
  - Display validation errors on the input fields when it fails.
- __Alerts:__ Display an alert when the request fails.

- __Device Compatibility:__ Compatible with various devices to ensure a smooth user experience.
  - Web platform with responsive design which adapts the layout and content to various screen sizes
- __Responsive design:__ Adaptive user interfaces that adjust seamlessly from smartphone to laptop screen sizes.
  - The UI adapts on smartphone views for screens with widths ranging from 320px (20rem) to 448px (28rem).

## Related Projects

- [`simple-photo-sharing-platform`](https://github.com/Xamarsia/simple-photo-sharing-platform): backend of the SPSP project.

     It is implemented using Spring framework and implemented as REST API.

- [`spsp-deployment`](https://github.com/Xamarsia/spsp-deployment): main repository of SPSP project.

## Development stack

- `Next.js` ( React ) - React framework that enables client and server rendering, advanced routing, nested layouts, data fetching.
- `TypeScript` for static type checking.
- `Tailwind CSS` for CSS styling.
- `ESLint` for code linting.
- `Zod` for forms validation.
- `Firebase Auth` for providing security authentication.
- `Docker` - helps create and manage an isolated environment for building, sharing, and running applications.

<!-- # Setup -->

## Environment setup

1. Install Visual Studio Code (`ms-vscode-remote.remote-containers` extension).
2. Install Docker Engine  [Install Docker Engine on Ubuntu](https://docs.docker.com/engine/install/ubuntu/#install-using-the-repository) and  [Linux post-installation steps for Docker Engine](https://docs.docker.com/engine/install/linux-postinstall/).
3. Docker network `microservice_network` required for further communication with the backend.

   Execute the following command to create the network if it has not been created previously:

    ```bash
    docker network create microservice_network
    ```

4. Clone project.
5. Setup the environment variables by creating `.env` file in the root of the project directory with the following content (see [`.env.template`](.env.template)):

     ```ini
     # .env

     NEXT_PUBLIC_FIREBASE_API_KEY="Firebase API key"
     NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN="Firebase Auth Domain"
     NEXT_PUBLIC_FIREBASE_PROJECT_ID="Firebase Project Id"
     NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET="Firebase Storage Bucket"
     NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID="Firebase Messaging Sender Id"
     NEXT_PUBLIC_FIREBASE_APP_ID="Firebase App Id"

     BACKEND_URL="http://server-api:8080" # URL to backend

     # date format for Intl.DateTimeFormat
     LOCALE = "en-US"
     TIME_ZONE = "Canada/Eastern"
     ```

     Refer to the [Firebase setup](https://github.com/Xamarsia/spsp-deployment/tree/main#setup-firebase) article to understand about the source of the `NEXT_PUBLIC_FIREBASE_*` variables.

## Build & Run

1. Open project in VS Code.
2. [Reopen project in Dev Container](https://code.visualstudio.com/docs/devcontainers/containers).
3. To run application, open the terminal and execute the following command:

    ```bash
    pnpm run dev
    ```

    This will trigger the build process and then will run it.

4. [Setup environment](https://github.com/Xamarsia/simple-photo-sharing-platform/tree/main#environment-setup) for backend and [Run](https://github.com/Xamarsia/simple-photo-sharing-platform/tree/main#build--run) it.
5. Open http://localhost:3000 with your browser to see the result.

### Useful commands

- `pnpm run build` - Builds project.
- `pnpm run dev` - Builds and runs project for development.
- `pnpm run lint` - Runs lint.
- `pnpm run start` - starts project if build exists.

## Future Enhancements

- [ ] Adding functionality for comments and tags.
- [ ] Increase test coverage.

## License

Licensed under the MIT License. See [LICENSE](./LICENSE) file for more details.
