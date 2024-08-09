import { createPermission } from '@backstage/plugin-permission-common';

export const platformCreatePermission = createPermission({
  name: 'kafka.platform.entity.create',
  attributes: { action: 'create' },
});

export const platformReadPermission = createPermission({
  name: 'kafka.platform.entity.read',
  attributes: { action:'read' },
});

export const platformDeletePermission = createPermission({
  name: 'kafka.platform.entity.delete',
  attributes: { action: 'delete' },
});

export const platformUpdatePermission = createPermission({
  name: 'kafka.platform.entity.update',
  attributes: { action: 'update' },
});