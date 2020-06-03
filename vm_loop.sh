
i=0
echo "case : ${i}"
i=$((i+1))
echo '$ vagrant up'
vagrant up
sleep 70
echo '$ vagrant ssh -c "cd /vagrant; yarn test:chrome; exit"'
vagrant ssh -c "cd /vagrant; yarn test:chrome; exit"
sleep 10
echo '$ vagrant halt'
vagrant halt
sleep 50

# while :
# do
#     echo "case : ${i}"
#     i=$((i+1))
#     echo '$ vagrant up'
#     vagrant up
#     sleep 60
#     echo '$ vagrant ssh -c "cd /vagrant; yarn test:chrome; exit"'
#     vagrant ssh -c "cd /vagrant; yarn test:chrome; exit"
#     sleep 10
#     echo '$ vagrant halt'
#     vagrant halt
#     sleep 50
# done