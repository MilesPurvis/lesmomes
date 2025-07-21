# Instagram Basic Display API Setup Guide

## Step 1: Create Facebook App
1. Go to [Facebook Developers](https://developers.facebook.com/)
2. Click "My Apps" → "Create App"
3. Choose "Consumer" app type
4. Fill in app details (name: "Les Momes Website")

## Step 2: Add Instagram Basic Display Product
1. In your app dashboard, click "+ Add Product"
2. Find "Instagram Basic Display" and click "Set Up"
3. Click "Create New App" if prompted

## Step 3: Configure Instagram Basic Display
1. Go to Instagram Basic Display → Basic Display
2. Add Instagram Test User:
   - Click "Add or Remove Instagram Testers"
   - Add the Instagram account: @lesmomesmtl
   - The account owner must accept the invitation

## Step 4: Get Access Token
1. In Basic Display settings, note your:
   - Instagram App ID
   - Instagram App Secret
   - Valid OAuth Redirect URIs (add: https://localhost:3000)

2. Generate User Access Token:
   ```
   https://api.instagram.com/oauth/authorize
     ?client_id={app-id}
     &redirect_uri=https://localhost:3000
     &scope=user_profile,user_media
     &response_type=code
   ```

3. After authorization, exchange code for token:
   ```
   curl -X POST https://api.instagram.com/oauth/access_token
     -F client_id={app-id}
     -F client_secret={app-secret}
     -F grant_type=authorization_code
     -F redirect_uri=https://localhost:3000
     -F code={authorization-code}
   ```

## Step 5: Update Environment Variables
Update `.env.local` with your credentials:
```
NEXT_PUBLIC_INSTAGRAM_APP_ID=your_actual_app_id
INSTAGRAM_APP_SECRET=your_actual_app_secret
NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN=your_actual_access_token
```

## Step 6: Test Integration
1. Restart your Next.js development server
2. Visit the Gallery section
3. You should see live Instagram photos from @lesmomesmtl

## Important Notes:
- Access tokens expire after 60 days (refresh automatically handled in code)
- Instagram must approve your app for production use
- Test users can view private posts, regular users only see public posts
- Rate limits: 200 requests per hour per user

## Troubleshooting:
- Make sure @lesmomesmtl account accepts the test invitation
- Verify redirect URIs match exactly
- Check browser console for error messages
- Ensure the Instagram account has public posts