
i=0
while :
do
    echo "case : ${i}"
    i++
    yarn test:chrome
    sleep 30
done