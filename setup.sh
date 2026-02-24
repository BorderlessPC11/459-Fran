#!/bin/bash

# Setup script for React Native Project
echo "🚀 Setting up React Native Project..."

# Check if Node is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 16 or higher."
    exit 1
fi

echo "✅ Node.js found: $(node --version)"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Create .env file from .env.example if it doesn't exist
if [ ! -f .env ]; then
    cp .env.example .env
    echo "✅ Created .env file from .env.example"
fi

echo "✅ Setup complete!"
echo ""
echo "📱 To run the app:"
echo "  - iOS: npm run ios"
echo "  - Android: npm run android"
echo "  - Start Metro: npm start"
