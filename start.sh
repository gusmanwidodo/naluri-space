#!/bin/bash

buildServerDependencies() {
  echo "Installing server dependencies..."
  cd server && npm i && cd ..
}

buildClientDependencies() {
  echo "Installing client dependencies..."
  cd client && npm i && cd ..
}

buildServerDependencies
buildClientDependencies

echo "Running container..."
docker-compose up -d
