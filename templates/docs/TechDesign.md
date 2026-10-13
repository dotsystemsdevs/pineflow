# Tech Design: [App name]

One heading per layer, one line each: the tool and why. Leave none open, or the agent picks for you.

## App

Expo + Expo Router, SDK [version]: one codebase for iPhone and Android.

## Look

StyleSheet with one theme file (colors, fonts, spacing, radius), light and dark.

## Data

[On the phone (expo-sqlite or AsyncStorage) / Supabase] and why.
Supabase? Row Level Security on every table, and only the publishable (anon) key in the app.

## Payments

[RevenueCat / none] and why.

## Builds

EAS: development build while you build, production build for the stores.
