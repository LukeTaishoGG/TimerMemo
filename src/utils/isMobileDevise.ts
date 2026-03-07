export const isMobileDevice = (): boolean => {
  const ua = navigator.userAgent
  return /iPhone|Android.*Mobile/.test(ua)
}
//iPhoneかAndroidを判定
