import * as _backstage_plugin_permission_common from '@backstage/plugin-permission-common';

// cluster permissions
declare const clusterCreatePermission: _backstage_plugin_permission_common.BasicPermission;
declare const clusterDeletePermission: _backstage_plugin_permission_common.BasicPermission;
declare const clusterUpdatePermission: _backstage_plugin_permission_common.BasicPermission;
declare const clusterReadPermission: _backstage_plugin_permission_common.BasicPermission;

// Environment permissions
declare const environmentCreatePermission: _backstage_plugin_permission_common.BasicPermission
declare const environmentDeletePermission: _backstage_plugin_permission_common.BasicPermission;
declare const environmentUpdatePermission: _backstage_plugin_permission_common.BasicPermission;
declare const environmentReadPermission: _backstage_plugin_permission_common.BasicPermission;

// Platform Permissions
declare const platformCreatePermission: _backstage_plugin_permission_common.BasicPermission;
declare const platformDeletePermission: _backstage_plugin_permission_common.BasicPermission;
declare const platformUpdatePermission: _backstage_plugin_permission_common.BasicPermission;
declare const platformReadPermission: _backstage_plugin_permission_common.BasicPermission;

// Region Permissions
declare const regionCreatePermission: _backstage_plugin_permission_common.BasicPermission;
declare const regionDeletePermission: _backstage_plugin_permission_common.BasicPermission;
declare const regionUpdatePermission: _backstage_plugin_permission_common.BasicPermission;
declare const regionReadPermission: _backstage_plugin_permission_common.BasicPermission;

// Topic Permissions
declare const topicCreatePermission: _backstage_plugin_permission_common.BasicPermission;
declare const topicDeletePermission: _backstage_plugin_permission_common.BasicPermission;
declare const topicUpdatePermission: _backstage_plugin_permission_common.BasicPermission;
declare const topicReadPermission: _backstage_plugin_permission_common.BasicPermission;
declare const topicUpdateStatusPermission: _backstage_plugin_permission_common.BasicPermission;
declare const topicPromotePermission: _backstage_plugin_permission_common.BasicPermission;


declare const kafkaEntityPermissions: {
    clusterCreatePermission: _backstage_plugin_permission_common.BasicPermission;
    clusterDeletePermission: _backstage_plugin_permission_common.BasicPermission;
    clusterUpdatePermission: _backstage_plugin_permission_common.BasicPermission;
};



export { clusterCreatePermission, clusterDeletePermission, clusterUpdatePermission, clusterReadPermission,
        environmentCreatePermission, environmentDeletePermission, environmentReadPermission, environmentUpdatePermission,
        platformCreatePermission, platformDeletePermission, platformUpdatePermission, platformReadPermission,
        regionCreatePermission, regionDeletePermission, regionUpdatePermission, regionReadPermission,
        topicCreatePermission, topicDeletePermission, topicUpdatePermission, topicReadPermission, topicUpdateStatusPermission, topicPromotePermission,
     }