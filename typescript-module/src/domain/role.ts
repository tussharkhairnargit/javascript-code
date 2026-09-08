export const roles:string[] = [ 'ADMIN', 'USER', 'GUEST' ]

export function isValidRole(role:string):boolean {
  return roles.includes(role)
}