import { createPermission } from '@backstage/plugin-permission-common';

export const producerCreatePermission = createPermission({
  name: 'kafka.producer.entity.create',
  attributes: { action: 'create' },
});

