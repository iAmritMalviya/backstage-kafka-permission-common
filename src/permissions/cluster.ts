import { createPermission } from '@backstage/plugin-permission-common';

export const clusterCreatePermission = createPermission({
  name: 'kafka.cluster.entity.create',
  attributes: { action: 'create' },
});

export const clusterReadPermission = createPermission({
  name: 'kafka.cluster.entity.read',
  attributes: { action: 'read' },
});

export const clusterDeletePermission = createPermission({
  name: 'kafka.cluster.entity.delete',
  attributes: { action: 'delete' },
});

export const clusterUpdatePermission = createPermission({
  name: 'kafka.cluster.entity.update',
  attributes: { action: 'update' },
});

// export const clusterManagePermission = createPermission({
//   name: 'kafka.cluster.entity.manage',
//   attributes: { action: 'manage' },
// })