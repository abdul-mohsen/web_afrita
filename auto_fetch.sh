#!/bin/bash

# Store the current commit hash
CURRENT_COMMIT=$(git rev-parse HEAD)

while true; do
    # Fetch the latest changes from the remote repository
    git fetch origin

    # Get the latest commit hash from the current branch
    LATEST_COMMIT=$(git rev-parse origin/$(git rev-parse --abbrev-ref HEAD))

    # Check if the current commit is different from the latest commit
    if [ "$CURRENT_COMMIT" != "$LATEST_COMMIT" ]; then
        echo "New changes detected. Pulling the latest changes..."

        # Pull the latest changes
        git pull origin $(git rev-parse --abbrev-ref HEAD)

        # Update the current commit hash
        CURRENT_COMMIT=$LATEST_COMMIT
    fi

    # Wait for 5 seconds before checking again
    sleep 5
done
