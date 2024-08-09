import { createPermission } from '@backstage/plugin-permission-common';

export const environmentCreatePermission = createPermission({
  name: 'kafka.environment.entity.create',
  attributes: { action: 'create' },
});

export const environmentReadPermission = createPermission({
  name: 'kafka.environment.entity.read',
  attributes: { action:'read' },
});

export const environmentDeletePermission = createPermission({
  name: 'kafka.environment.entity.delete',
  attributes: { action: 'delete' },
});

export const environmentUpdatePermission = createPermission({
  name: 'kafka.environment.entity.update',
  attributes: { action: 'update' },
});
