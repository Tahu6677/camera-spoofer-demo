import { NativeScriptConfig } from '@nativescript/core';

export default {
  id: 'org.nativescript.cameraspoofer',
  appPath: 'app',
  appResourcesPath: 'app/App_Resources',
  android: {
    v8Flags: '--expose_gc',
    markingMode: 'none',
    minSdkVersion: 24,
    targetSdkVersion: 33,
    compileSdkVersion: 33
  },
  appResourcesPath: 'app/App_Resources'
} as NativeScriptConfig;