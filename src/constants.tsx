export const UserState = {
    Current: 'CURRENT',
    Followed: 'FOLLOWED',
    Unfollowed: 'UNFOLLOWED', // UNFOLLOWED -> NONE
} as const

export const LikeState = {
    Liked: 'LIKED',
    Unliked: 'UNLIKED',  // UNLIKED -> NONE
} as const

export const ProviderID = {
    EmailAuthProvider: 'password',
    FacebookAuthProvider: 'facebook.com',
    GithubAuthProvider: 'github.com',
    GoogleAuthProvider: 'google.com',
    PhoneAuthProvider: 'phone',
    TwitterAuthProvider: 'twitter.com',
} as const
