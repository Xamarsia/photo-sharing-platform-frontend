<h1 align="center">
  <p> Photo Sharing Platform Frontend (SPSP Frontend)</p>
  <h4 align="left">Demo: https://spspdemo.online/</h4>

  This projeect is a frontend of [SPSP](https://github.com/Xamarsia/spsp-deployment) project. It implemented using Next.js ( React ) framework and Typescript for static type checking. Frontend components are stateless.
</h1>

## Links

- [`simple-photo-sharing-platform`](https://github.com/Xamarsia/simple-photo-sharing-platform): backend of the SPSP project.

It is implemented using Spring framework.

- [`spsp-deployment`](https://github.com/Xamarsia/spsp-deployment): main repository of SPSP project.

## Development stack

### Frontend

- `Next.js` ( React ) - React framework that enables client and server rendering, advanced routing, nested layouts, data fetching.
- `TypeScript` for static type checking.
- `Tailwind CSS` for CSS styling.
- `Zod` for forms validation.
- `Firebase Auth` for providing security authentication.

### General

- `Docker` - helps create and manage an isolated environment for building, sharing, and running applications.
- `Visual Studio Code` provide customizeble development environment.
- `Jira` for project management and task tracking.
- `Figma` for project prototyping.
- `GitHub` (`Git`) - for code storage, sharing, and management.

<!-- # Setup -->

## Development

### Setup environment

1. Install Visual Studio Code (`ms-vscode-remote.remote-containers` extension).
2. Install Docker Engine  [Install Docker Engine on Ubuntu](https://docs.docker.com/engine/install/ubuntu/#install-using-the-repository) and  [Linux post-installation steps for Docker Engine](https://docs.docker.com/engine/install/linux-postinstall/).
3. Create docker network.

`microservice_network` are required for further communication with the backend. Execute the following command to create the network if it has not been created previously:

```bash
docker network create microservice_network
```

4. Clone project.

### Setup environment variables

Create `.env` file in the root of the project with following content from `.env.template` file.

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

Refer to the [Firebase setup](https://github.com/Xamarsia/spsp-deployment/tree/main#setup-firebase) article to understand about the source of the NEXT_PUBLIC_FIREBASE_* variables.

### Run

1. Open project in VS Code.
2. [Reopen project in Dev Container](https://code.visualstudio.com/docs/devcontainers/containers)
3. To run project, open the terminal and execute the following command:

```bash
pnpm run dev
```

4. [Run backend](https://github.com/Xamarsia/simple-photo-sharing-platform/tree/main#run).
5. Open http://localhost:3000 with your browser to see the result.

## Future Enhancements

- [ ] Adding functionality for comments and tags.
- [ ] Increase test coverage.

## License

Licensed under the MIT License. See [LICENSE](./LICENSE) file for more details.
