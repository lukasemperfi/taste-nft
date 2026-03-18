import { ref, watch } from 'vue'

const isAuth = ref(false)

function initAuth() {
  const stored = localStorage.getItem('isAuth')
  isAuth.value = stored === 'true'

  localStorage.setItem('isAuth', String(isAuth.value))
}

watch(isAuth, (value) => {
  localStorage.setItem('isAuth', String(value))
})

export function useAuth() {
  return {
    isAuth,
    initAuth,
    login: () => {
      isAuth.value = true
    },
    logout: () => {
      isAuth.value = false
    },
  }
}
