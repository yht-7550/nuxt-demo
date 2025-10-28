export const useThemeStore = defineStore('theme', () => {
  const appConfig = useAppConfig()
  const themeColor = ref('')
  const themeRadius = ref('')
  const ifRoot = ref(false)
  const headFun = ref()

  themeColor.value === '' && (themeColor.value = appConfig.ui.colors.primary)
  themeRadius.value === '' && (themeRadius.value = appConfig.ui.radius)

  /**
   * 修改主题颜色
   * @param color 颜色
   * @param root 是否根节点变量
   */
  const changeTheme = (color: string, root: boolean = false) => {
    if (ifRoot.value !== root) {
      useHead({
        style: [{
          id: 'themeMode',
          innerHTML: ':root {}',
        }],
      })
    }
    ifRoot.value = root
    if (root) {
      import.meta.client && document.documentElement.style.setProperty('--ui-primary', color)
    }
    else {
      import.meta.client && document.documentElement.style.removeProperty('--ui-primary')
      const appConfig = useAppConfig()
      appConfig.ui.colors.primary = color
    }

    themeColor.value = color
  }

  /**
   * 修改 BorderRadius
   * @param radius 半径值
   */
  const changeRaduis = (radius: string) => {
    themeRadius.value = radius
    document.documentElement.style.setProperty('--ui-radius', `${radius}rem`)
  }

  /** 初始化主题 */
  const initTheme = () => {
    useHead({ style: [{ id: 'ui-radius', innerHTML: `:root { --ui-radius: ${themeRadius.value}rem; }` }] })
    if (ifRoot.value) {
      useHead({
        style: [{
          id: 'themeMode',
          innerHTML: `:root { --ui-primary: black; } .dark { --ui-primary: white; }`,
        }],
      })
    }
    else {
      changeTheme(themeColor.value, ifRoot.value)
    }
  }

  return { themeColor, themeRadius, ifRoot, headFun, changeRaduis, changeTheme, initTheme }
}, {
  persist: true,
})
