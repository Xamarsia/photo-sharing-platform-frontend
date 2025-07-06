<h1 align="center">
  <p> Photo Sharing Platform Frontend (SPSP Frontend)</p>
  <h4 align="left">Demo: https://spspdemo.online/</h4>

  This project is a frontend of [SPSP](https://github.com/Xamarsia/spsp-deployment) project. It implemented using Next.js ( React ) framework and Typescript for static type checking.
</h1>

## Table Of Content

- [Description](#description)
- [Related Projects](#related-projects)
- [Development Stack](#development-stack)
- [Project Features](#project-features)
- [UI Prototype](#ui-prototype)
  - [UI Prototype V 1.0](#ui-prototype-v-10)
  - [UI Prototype V 2.0](#ui-prototype-v-20)
- [Screenshots](#screenshots)
  - [Desktop](#desktop)
  - [Mobile](#mobile)
- [Environment Setup](#environment-setup)
- [Build & Run](#build--run)
  - [Useful Commands](#useful-commands)
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

## Related Projects

- [`simple-photo-sharing-platform`](https://github.com/Xamarsia/simple-photo-sharing-platform): backend of the SPSP project.

     It is implemented using Spring framework and implemented as REST API.

- [`spsp-deployment`](https://github.com/Xamarsia/spsp-deployment): main repository of SPSP project.

## Development Stack

- `Next.js` ( React ) - React framework that enables client and server rendering, advanced routing, nested layouts, data fetching.
- `TypeScript` for static type checking.
- `Tailwind CSS` for CSS styling.
- `ESLint` for code linting.
- `Zod` for forms validation.
- `Firebase Auth` for providing security authentication.
- `Docker` - helps create and manage an isolated environment for building, sharing, and running applications.

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
- __Form Validation:__ Server-side validation for user inputs and data integrity.
  - Display validation errors on the input fields when it fails.
- __Alerts:__ Display an alert when the request fails.
- __Device Compatibility:__ Compatible with various devices to ensure a smooth user experience.
  - Web platform with responsive design which adapts the layout and content to various screen sizes
- __Responsive design:__ Adaptive user interfaces that adjust seamlessly from smartphone to laptop screen sizes.
  - The UI adapts on smartphone views for screens with widths ranging from 320px (20rem) to 448px (28rem).
  - The UI adapts on laptop views for screens wider than 448px (28rem).

## UI Prototype

This frontend application was designed in Figma prior to development, resulting in a clear and visually appealing user interface.

The design process in Figma ensured that the layout, color schemes, typography, and overall aesthetics aligned with the project goals.

Although some changes were made during the final stages of development, the prototype still retains its core functionality and visual design.

### UI Prototype V 1.0

This initial prototype was created on a smartphone without any special styles. The main goal was to understand the consistency of the components and the layout of the pages.

[SPSP Prototype V 1.0 Smartphone](https://www.figma.com/design/QdF9eraM5d03OU5veQ9Eno/SPSP-Prototype-1.0-Smartphone?t=zIo7kOkAvCnF3ZwC-1)

<p align="center">
  <img alt="SignIn" width="24%" src="https://github.com/user-attachments/assets/0ba6abe7-1e91-43d6-90c4-f245e2c8bec8" />
  <img alt="SignIn" width="24%" src="https://github.com/user-attachments/assets/4ae31493-8985-49da-8aa8-895f748a79aa" />
  <img alt="SignIn" width="24%" src="https://github.com/user-attachments/assets/2b9b7467-514a-41cd-9ac5-60741c16b983" />
  <img alt="SignIn" width="24%" src="https://github.com/user-attachments/assets/1eb3d9ab-13c1-49af-87dc-21e0230979ed" />
</p>

### UI Prototype V 2.0

The second prototype was created primarily to focus on styles and layout sizes.

[SPSP Prototype V 2.0](https://www.figma.com/design/JE4wZvS2xRHong3E1sXi5x/SPSP-Prototype-2.0?node-id=0-1&t=dz18uLli4jOSue5b-1)

<p align="center">
  <img alt="SignUp" width="48%" src="https://github.com/user-attachments/assets/c3adef97-4737-483c-b60d-28b83fe54feb" />
  <img alt="SignIn" width="48%" src="https://github.com/user-attachments/assets/5304f46c-1773-4673-93c1-2654f4eca187" />
  <img alt="SignIn" width="48%" src="https://github.com/user-attachments/assets/e1bc8d6b-1e58-4ad2-86fd-1bdc9cd11eee" />
  <img alt="SignIn" width="48%" src="https://github.com/user-attachments/assets/86aaacfa-ec99-4c30-95f8-1c01abb69033" />
  <img alt="SignIn" width="48%" src="https://github.com/user-attachments/assets/3e2f80fd-f329-4886-8448-114ef69aa49a" />
  <img alt="SignIn" width="48%" src="https://github.com/user-attachments/assets/fd833466-fc7b-4e07-864d-3160e9ab1242" />
</p>

## Environment Setup

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
5. Open <http://localhost:3000> with your browser to see the result.

### Useful Commands

- `pnpm run build` - Builds project.
- `pnpm run dev` - Builds and runs project for development.
- `pnpm run lint` - Runs lint.
- `pnpm run start` - starts project if build exists.

## Screenshots

### Desktop

<p align="center">
 <img alt="SignIn" width="48%" src="https://github.com/user-attachments/assets/35eeea74-511f-405d-9b65-aa4b9803629d" />
 <img alt="SignUp" width="48%" src="https://github.com/user-attachments/assets/27a10ca6-831a-45f3-a32b-df4ad08381ef" />
 <img alt="ResetPassword" width="48%" src="https://github.com/user-attachments/assets/3c73e039-9f68-4447-ba0c-5c71b4021b43" />
 <img alt="News" width="48%" src="https://github.com/user-attachments/assets/2573bf9a-ad2d-4926-af4d-7d8e31d5b5e1" />
 <img alt="Profile" width="48%" src="https://github.com/user-attachments/assets/b10dbd00-fa57-438c-b513-8129e9359097" />
 <img alt="Followings" width="48%" src="https://github.com/user-attachments/assets/182bd39f-e35f-4b87-82de-5de9eb2c3760" />
 <img alt="Settings" width="48%" src="https://github.com/user-attachments/assets/4f81634e-ca56-454c-b7ed-281386323182" />
 <img alt="Post" width="48%" src="https://github.com/user-attachments/assets/fdb8fc10-4528-4d7d-90a7-c1c0b1505c48" />
 <img alt="DeletePost" width="48%" src="https://github.com/user-attachments/assets/ecc554a4-4350-483c-8b14-f713851d8b7b" />
 <img alt="EditPost" width="48%" src="https://github.com/user-attachments/assets/73e05985-683a-490d-b7f4-9c60deaf98c7" />
 <img alt="Likes" width="48%" src="https://github.com/user-attachments/assets/50077b41-d936-4951-be6d-64d94aef399d" />
 <img alt="Search" width="48%" src="https://github.com/user-attachments/assets/3647542b-982d-454b-8f61-9ab1505e9f4b" />
</p>

### Mobile

<p align="center">
 <img alt="News 01" width="32%" src="https://github.com/user-attachments/assets/1c772289-6dd2-427a-9b9b-34f927aa639b" />
  <img alt="News 02" width="32%" src="https://github.com/user-attachments/assets/2c530d42-dd51-4314-b3fb-96c730ca6328" />
 <img alt="Profile 01" width="32%" src="https://github.com/user-attachments/assets/98bcc6e7-f957-421a-9401-719afd61b703" />
 <img alt="Followings" width="32%" src="https://github.com/user-attachments/assets/fe77d928-523f-4579-9147-cc8da607200f" />
  <img alt="Settings Menu" width="32%" src="https://github.com/user-attachments/assets/0100d252-210b-47d6-9f47-a917c98c83b8" />
 <img alt="Settings" width="32%" src="https://github.com/user-attachments/assets/04d37530-3517-401b-8170-c167da4b409a" />
 <img alt="Search" width="32%" src="https://github.com/user-attachments/assets/9b1db0a1-e22f-46a5-a009-e23cc739290b" />
 <img alt="Profile 02" width="32%" src="https://github.com/user-attachments/assets/5e2a0ccd-1c12-4e0b-8205-d1ab48a49951" />
 <img alt="Post 01" width="32%" src="https://github.com/user-attachments/assets/e729564f-5d8a-42b6-a4fd-0aca8000634d" />
</p>

## Future Enhancements

- [ ] Adding functionality for comments and tags.
- [ ] Increase test coverage.

## License

Licensed under the MIT License. See [LICENSE](./LICENSE) file for more details.
