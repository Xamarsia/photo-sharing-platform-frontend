
# Description

[SPSP](https://github.com/Xamarsia/spsp-deployment) frontend, implemented using Next.js ( React ) framework. 

Links:
- Backend: https://github.com/Xamarsia/simple-photo-sharing-platform
- Main repository: https://github.com/Xamarsia/spsp-deployment


# Setup

### Create `.env` file in the root of the project with following content from `.env.template` file.
- `NEXT_PUBLIC_FIREBASE_API_KEY` - Firebase API key (from [Firebase setup](https://github.com/Xamarsia/spsp-deployment/tree/main#setup-firebase) article).
- `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN` -  Firebase Auth Domain (from [Firebase setup](https://github.com/Xamarsia/spsp-deployment/tree/main#setup-firebase) article).
- `NEXT_PUBLIC_FIREBASE_PROJECT_ID` - Firebase Project Id (from [Firebase setup](https://github.com/Xamarsia/spsp-deployment/tree/main#setup-firebase) article).
- `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET` - Firebase Storage Bucket (from [Firebase setup](https://github.com/Xamarsia/spsp-deployment/tree/main#setup-firebase) article).
- `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID` - Firebase Messaging Sender Id (from [Firebase setup](https://github.com/Xamarsia/spsp-deployment/tree/main#setup-firebase) article).
- `NEXT_PUBLIC_FIREBASE_APP_ID`-  Firebase App Id (from [Firebase setup](https://github.com/Xamarsia/spsp-deployment/tree/main#setup-firebase) article).
- `LOCALE` - time zone Locale for Intl.DateTimeFormat.
- `TIME_ZONE` - time zone for Intl.DateTimeFormat. 
- `BACKEND_URL` - URL to backend.


# Run front-end locally 

1. Open project in VS Code.
2.  [Reopen project in Dev Container](https://code.visualstudio.com/docs/devcontainers/containers)
3. To run project, open the terminal and use the following command:
    ```bash
    pnpm run dev
    ```
4. [Run backend locally](https://github.com/Xamarsia/simple-photo-sharing-platform/tree/main#run-back-end-locally).
5. Open http://localhost:3000 with your browser to see the result.
