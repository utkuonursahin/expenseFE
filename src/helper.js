const random = () => {
  return Math.random().toString(36).slice(-8);
}

export {
  random
}