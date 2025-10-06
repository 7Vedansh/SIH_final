const { successResponse, errorResponse } = require('../utils/responses');

// Mock users database (replace with real database in production)
const users = {
  tribal_officer: { 
    password: "tribal123", 
    role: "tribal_officer", 
    state: "MP" 
  },
  forest_officer: { 
    password: "forest123", 
    role: "forest_officer", 
    state: "Odisha" 
  },
  ngo_coordinator: { 
    password: "ngo123", 
    role: "ngo", 
    state: "Telangana" 
  },
  district_admin: { 
    password: "admin123", 
    role: "admin", 
    state: "Tripura" 
  },
  policy_maker: { 
    password: "policy123", 
    role: "policy_maker", 
    state: "MP" 
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return errorResponse(res, 'Username and password are required', 400);
    }

    const user = users[username];

    if (!user || user.password !== password) {
      return errorResponse(res, 'Invalid credentials', 401);
    }

    const responseData = {
      success: true,
      role: user.role,
      username: username,
      state: user.state || 'All'
    };

    return successResponse(res, responseData, 'Login successful', 200);
  } catch (error) {
    console.error('Login error:', error);
    return errorResponse(res, error, 500);
  }
};

module.exports = {
  login
};