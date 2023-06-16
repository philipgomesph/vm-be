export enum DOTW {
  MONDAY = 'Segunda-feira',
  TUESDAY = 'Terça-feira',
  WEDNESDAY = 'Quarta-feira',
  THURSDAY = 'Quinta-feira',
  FRIDAY = 'Sexta-feira',
  SATURDAY = 'Sábado',
  SUNDAY = 'Domingo',
}

export const DOTWTypeEnumMap = new Map<DOTW, string>([
  [DOTW.MONDAY, 'Segunda-feira'],
  [DOTW.TUESDAY, 'Terça-feira'],
  [DOTW.WEDNESDAY, 'Quarta-feira'],
  [DOTW.THURSDAY, 'Quinta-feira'],
  [DOTW.FRIDAY, 'Sexta-feira'],
  [DOTW.SATURDAY, 'Sábado'],
  [DOTW.SUNDAY, 'Domingo'],
]);

export const typeDOTWEnumMap = new Map<string, DOTW>([
  ['Segunda-feira', DOTW.MONDAY],
  ['Terça-feira', DOTW.TUESDAY],
  ['Quarta-feira', DOTW.WEDNESDAY],
  ['Quinta-feira', DOTW.THURSDAY],
  ['Sexta-feira', DOTW.FRIDAY],
  ['Sábado', DOTW.SATURDAY],
  ['Domingo', DOTW.SUNDAY],
]);
