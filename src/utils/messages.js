import localizeFilter from '@/filters/localize.filter'

export default {
  'logout': localizeFilter('You logout'),
  'login': localizeFilter('Please SingIn'),
  'auth/user-not-found': localizeFilter('User with this email not register'),
  'auth/wrong-password': localizeFilter('Wrong password or email'),
  'auth/email-already-in-use': localizeFilter('This email has already use')
}
