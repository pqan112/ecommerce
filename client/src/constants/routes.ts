export const ROUTES = {
  home: '/',
  auth: {
    signin: '/auth/signin',
    signup: '/auth/signup',
    forgotPassword: '/auth/forgot-password',
    resetPassword: '/auth/reset-password',
    verifyEmail: '/auth/verify-email',
  },
  product: {
    catalog: '/product/catalog',
  },
} as const
