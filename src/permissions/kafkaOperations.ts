import { createPermission } from '@backstage/plugin-permission-common';

export const kafkaAdmin = createPermission({
  name: 'kafka.entity.admin',
  attributes: { action: 'create' },
});

export const kafkaReadPermission = createPermission({
  name: 'kafka.entity.read',
  attributes: { action:'read' },
});

export const kafkaCreatePermission = createPermission({
  name: 'kafka.entity.create',
  attributes: { action:'create' },
});


export const kafkaUpdatePermission = createPermission({
  name: 'kafka.entity.update',
  attributes: { action:'update' },
});

export const kafkaDeletePermission = createPermission({
  name: 'kafka.entity.delete',
  attributes: { action:'delete' },
});