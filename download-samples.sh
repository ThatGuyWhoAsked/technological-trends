#!/bin/bash

# Create samples directory if it doesn't exist
mkdir -p static/images/samples

# Download sample images with proper URL encoding
curl -o "static/images/samples/ai-education.jpg" "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&auto=format&fit=crop&q=80"
curl -o "static/images/samples/quantum-computing.jpg" "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&auto=format&fit=crop&q=80"
curl -o "static/images/samples/blockchain.jpg" "https://images.unsplash.com/photo-1639762681057-1e71eab2f5b5?w=800&auto=format&fit=crop&q=80"

echo "Sample images downloaded successfully!"
