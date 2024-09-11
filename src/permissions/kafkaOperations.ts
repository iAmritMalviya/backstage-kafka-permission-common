import { createPermission } from '@backstage/plugin-permission-common';

export const kafkaAdmin = createPermission({
  name: 'kafka.entity.admin',
  attributes: { action: 'create' },
});