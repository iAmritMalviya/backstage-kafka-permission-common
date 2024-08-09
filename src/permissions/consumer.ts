import { createPermission } from '@backstage/plugin-permission-common';

export const consumerCreatePermission = createPermission({
  name: 'kafka.consumer.entity.create',
  attributes: { action: 'create' },
});

