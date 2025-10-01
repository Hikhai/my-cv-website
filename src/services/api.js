// API service để gọi backend
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// API helper function
const apiRequest = async (endpoint, options = {}) => {
  const url = `${API_BASE_URL}${endpoint}`;
  
  const config = {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  };

  try {
    const response = await fetch(url, config);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || `HTTP error! status: ${response.status}`);
    }

    return data;
  } catch (error) {
    console.error('API request error:', error);
    throw error;
  }
};

// CV Data API
export const cvAPI = {
  // Get all CV data
  getCVData: () => apiRequest('/cv'),
  
  // Get view statistics
  getStats: () => apiRequest('/cv/stats'),
};

// Contact API
export const contactAPI = {
  // Send contact form
  sendMessage: (contactData) => 
    apiRequest('/contact', {
      method: 'POST',
      body: JSON.stringify(contactData),
    }),
};

// Health check
export const healthCheck = () => apiRequest('/health');

export default {
  cv: cvAPI,
  contact: contactAPI,
  healthCheck,
};