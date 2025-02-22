adddate() {
    while IFS= read -r line; do
        printf '%s %s\n' "$(date)" "$line";
    done
}

git pull

pkill -n npm
npm run dev | adddate >> log 2>> log &
