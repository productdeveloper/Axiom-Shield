#!/bin/bash

# Exit on error
set -e

echo "🚀 Building Axiom Shield Extension..."

# Define directories
EXT_SOURCE="axiom-shield"
BUILD_DIR="dist-extension"

# 1. Clean previous build
echo "🧹 Cleaning previous build..."
rm -rf "$BUILD_DIR"
mkdir -p "$BUILD_DIR"

# 2. Copy core extension files
echo "📦 Copying files..."
cp "$EXT_SOURCE/manifest.json" "$BUILD_DIR/"
cp "$EXT_SOURCE/content.js" "$BUILD_DIR/"
cp "$EXT_SOURCE/popup.html" "$BUILD_DIR/"
cp "$EXT_SOURCE/popup.js" "$BUILD_DIR/"
cp "$EXT_SOURCE/styles.css" "$BUILD_DIR/"

# 3. Copy icons
echo "🖼️ Copying icons..."
cp -r "$EXT_SOURCE/icons" "$BUILD_DIR/"

echo "✅ Build complete! Production files are in /$BUILD_DIR"
