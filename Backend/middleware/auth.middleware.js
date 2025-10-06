// Simple authentication middleware (expand with JWT if needed)
const authenticateUser = (req, res, next) => {
  // For now, we'll use a simple session-based approach
  // In production, implement JWT tokens
  const authHeader = req.headers.authorization;
  
  if (!authHeader) {
    return res.status(401).json({
      success: false,
      error: 'No authorization token provided'
    });
  }

  // Add user info to request if needed
  req.user = {
    authenticated: true
  };

  next();
};

module.exports = {
  authenticateUser
};