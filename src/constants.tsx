export const UserState = {
    Current: 'CURRENT',
    Follow: 'FOLLOW',
    None: 'NONE',
} as const

export const LikeState = {
    Like: 'LIKE',
    None: 'NONE',
} as const

export const ProviderID = {
    EmailAuthProvider: 'password',
    FacebookAuthProvider: 'facebook.com',
    GithubAuthProvider: 'github.com',
    GoogleAuthProvider: 'google.com',
    PhoneAuthProvider: 'phone',
    TwitterAuthProvider: 'twitter.com',
} as const
