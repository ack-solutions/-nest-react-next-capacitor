import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.mobile',
  appName: 'mobile',
  webDir: '../../dist/apps/admin',
  bundledWebRuntime: false,
  server: {
    androidScheme: 'https',
  },
};

export default config;
