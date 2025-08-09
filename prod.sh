adddate() {
    while IFS= read -r line; do
        printf '%s %s\n' "$(date)" "$line";
    done
}

git pull

# pkill -n npm

npm run build
sudo cp -r /home/ssda/git/web_afrita/public/ /var/www/ifritah/
sudo cp -r /home/ssda/git/web_afrita/.next/* /var/www/ifritah/
sudo chmod -R 755 /var/www/ifritah/
npm run start | adddate
