import Command from './Command'

export default new Command(() => {
  const arr: string[] = []
  for (const [ name, { disabled } ] of connections.entries()) {
    arr.push(disabled ? ('~~`' + name + '`~~') : ('`' + name + '`'))
  }
  return {
    embed: {
      title: 'Connections:',
      description: arr.join('\n')
    }
  }
})
