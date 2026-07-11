# BlockCraft AI

An Expo Android app prototype that creates Minecraft build guides, captures a photo of the intended build area, shows material lists, and presents instructions one step at a time. It also opens matching YouTube tutorial results.

## Run on a phone

1. Install Node.js 20+.
2. In this folder run `npm install` and `npx expo start`.
3. Install Expo Go on Android and scan the QR code.

## Build an APK with GitHub Artifacts

1. Create a new GitHub repository.
2. Upload everything inside this `BlockCraftAI` folder to the repository root.
3. Commit to the `main` branch.
4. Open the repository's **Actions** tab.
5. Select **Build Android APK** and click **Run workflow**. A push that changes app files also starts it automatically.
6. When the workflow is green, open that run and download **BlockCraftAI-Android-APK** under **Artifacts**.
7. Extract `BlockCraftAI-v1.0.0.apk` from the downloaded ZIP and install it on Android.

The GitHub Actions build does not need an Expo account, EAS project ID, Android Studio, signing secret, or paid runner. The generated release APK uses Android's default debug signing supplied by the generated Expo native project, which is suitable for direct testing but not Play Store publication.

### Local preview

Run `npm install`, then `npx expo start`, and scan the QR code with Expo Go.

## Free AI

The app works without a key using local templates and an offline generic planner. For custom AI plans and photo analysis, create an OpenRouter key and paste it under Settings. The app selects `openrouter/free`, so availability depends on the free models currently routed by OpenRouter. Do not embed a personal key in a public APK.

## Production gaps

This is a functional MVP, not yet a Play Store-ready product. Before publishing, add authentication, a small server-side AI proxy, usage limits, privacy policy/consent for photo uploads, analytics/crash reporting, and licensed/curated tutorial content rather than relying only on YouTube search.
