import { createPermission } from '@backstage/plugin-permission-common';

export const topicCreatePermission = createPermission({
  name: 'kafka.topic.entity.create',
  attributes: { action: 'create' },
});

export const topicReadPermission = createPermission({
  name: 'kafka.topic.entity.read',
  attributes: { action:'read' },
});

export const topicDeletePermission = createPermission({
  name: 'kafka.topic.entity.delete',
  attributes: { action: 'delete' },
});

export const topicUpdatePermission = createPermission({
  name: 'kafka.topic.entity.update',
  attributes: { action: 'update' },
});

export const topicPromotePermission = createPermission({
  name: 'kafka.topic.entity.promote',
  attributes: { action: 'update' },
});

export const topicConfigUpdatePermission = createPermission({
  name: 'kafka.topic.entity.config.update',
  attributes: { action: 'update' },
});

export const topicUpdateStatusPermission = createPermission({
  name: 'kafka.topic.entity.update-status',
  attributes: { action: 'update' },
});

