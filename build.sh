adddate() {
    while IFS= read -r line; do
        printf '%s %s\n' "$(date)" "$line";
    done
}

git pull

pkill -n npm

npm run build
npm run start | adddate
 # npm run dev | adddate 
