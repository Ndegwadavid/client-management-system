// lib/constants.ts
export const COMPANY_NAME = 'OptiPlus';
export const COMPANY_TAGLINE = 'Eyecare Services';

export const ROUTES = {
  RECEPTION: {
    DASHBOARD: '/reception',
    NEW_CLIENT: '/reception/new-client',
    SEARCH: '/reception/search',
    QUEUE: '/reception/queue',
  },
  EXAMINATION: {
    QUEUE: '/examination/queue',
    CLIENT: (id: string) => `/examination/${id}`,
    HISTORY: '/examination/history',
  },
  SALES: {
    QUEUE: '/sales/queue',
    CLIENT: (id: string) => `/sales/${id}`,
    HISTORY: '/sales/history',
  },
  ADMIN: {
    DASHBOARD: '/admin/dashboard',
    USERS: '/admin/users',
    SETTINGS: '/admin/settings',
  },
} as const;