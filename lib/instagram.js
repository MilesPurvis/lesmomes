// Instagram Basic Display API integration
import axios from 'axios';

const INSTAGRAM_API_BASE_URL = 'https://graph.instagram.com';

/**
 * Fetch Instagram media (photos/videos) for the authenticated user
 * @param {string} accessToken - Instagram access token
 * @param {number} limit - Number of media items to fetch (max 25)
 * @returns {Promise<Array>} Array of media objects
 */
export async function fetchInstagramMedia(accessToken, limit = 6) {
  try {
    const response = await axios.get(`${INSTAGRAM_API_BASE_URL}/me/media`, {
      params: {
        fields: 'id,media_type,media_url,thumbnail_url,permalink,caption',
        access_token: accessToken,
        limit: limit
      }
    });

    // Filter for images only and format for our component
    const mediaItems = response.data.data.filter(item => item.media_type === 'IMAGE');
    
    return mediaItems.map(item => ({
      id: item.id,
      image: item.media_url,
      caption: item.caption || '',
      permalink: item.permalink,
      likes: Math.floor(Math.random() * 300) + 50 // Instagram API doesn't provide likes count in Basic Display
    }));
  } catch (error) {
    console.error('Error fetching Instagram media:', error.response?.data || error.message);
    throw new Error('Failed to fetch Instagram media');
  }
}

/**
 * Refresh Instagram access token (tokens expire after 60 days)
 * @param {string} accessToken - Current access token
 * @returns {Promise<string>} New access token
 */
export async function refreshInstagramToken(accessToken) {
  try {
    const response = await axios.get(`${INSTAGRAM_API_BASE_URL}/refresh_access_token`, {
      params: {
        grant_type: 'ig_refresh_token',
        access_token: accessToken
      }
    });

    return response.data.access_token;
  } catch (error) {
    console.error('Error refreshing Instagram token:', error.response?.data || error.message);
    throw new Error('Failed to refresh Instagram token');
  }
}