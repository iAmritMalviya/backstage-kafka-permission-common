import { createPermission } from '@backstage/plugin-permission-common';

export const regionCreatePermission = createPermission({
  name: 'kafka.region.entity.create',
  attributes: { action: 'create' },
});

export const regionReadPermission = createPermission({
  name: 'kafka.region.entity.read',
  attributes: { action:'read' },
});

export const regionDeletePermission = createPermission({
  name: 'kafka.region.entity.delete',
  attributes: { action: 'delete' },
});

export const regionUpdatePermission = createPermission({
  name: 'kafka.region.entity.update',
  attributes: { action: 'update' },
});

export const regionEntityPermissions = {
  regionCreatePermission,
  regionReadPermission,
  regionDeletePermission,
  regionUpdatePermission,
};
