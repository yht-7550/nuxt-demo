interface DateReturnType {
  date: ComputedRef<string>
  time: ComputedRef<string>
  day: ComputedRef<string>
}

// https://vueuse.org/shared/useDateFormat

export const useDateTime = (): DateReturnType => {
  const nowDate = computed(() => useNow())

  const formatDate = (dataTime: Ref<Date, Date>, formatStr: MaybeRefOrGetter<string> = 'YYYY-MM-DD') => {
    const nowDateTime = useDateFormat(dataTime, formatStr)
    return nowDateTime.value
  }

  const date = computed(() => formatDate(nowDate.value, 'YYYY-MM-DD'))
  const time = computed(() => formatDate(nowDate.value, 'HH:mm:ss'))
  const day = computed(() => formatDate(nowDate.value, 'dddd'))

  return {
    date,
    time,
    day,
  }
}
