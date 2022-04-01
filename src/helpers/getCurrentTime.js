export  const getCurrentTime = time => {
  const date = new Date(time * 1000).toLocaleDateString()
  const localTime = new Date(time * 1000).toLocaleTimeString()
  return date.concat(' ',localTime)

}
