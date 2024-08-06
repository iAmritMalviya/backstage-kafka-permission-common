import { createPermission } from '@backstage/plugin-permission-common';

const topicCreatePermission = createPermission({
  name: 'kafka.topic.entity.create',
  attributes: { action: 'create' },
});

const topicReadPermission = createPermission({
  name: 'kafka.topic.entity.read',
  attributes: { action:'read' },
});

const topicDeletePermission = createPermission({
  name: 'kafka.topic.entity.delete',
  attributes: { action: 'delete' },
});

const topicUpdatePermission = createPermission({
  name: 'kafka.topic.entity.update',
  attributes: { action: 'update' },
});

const topicPromotePermission = createPermission({
  name: 'topic.entity.promote',
  attributes: { action: 'update' },
});

const topicUpdateStatusPermission = createPermission({
  name: 'kafka.topic.entity.update-status',
  attributes: { action: 'update' },
});

export const topicPermissions = {
  topicReadPermission,
  topicCreatePermission,
  topicDeletePermission,
  topicUpdatePermission,
  topicPromotePermission,
  topicUpdateStatusPermission,
};
