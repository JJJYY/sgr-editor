// @flow

export function noop () { /* empty */ }

export const exec = (command: string, value: string | null = null) => document.execCommand(command, false, value)
