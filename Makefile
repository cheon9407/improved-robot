# cluster:
# 		ansible-playbook playbook.kubecluster.yml -i inventory.ini

# clean:
# 		ansible-playbook playbook.deletecluster.yml -i inventory.ini

setup:
		ansible-playbook playbook/web.yml -i inventory.ini

master:
		ansible-playbook playbook/master.playbook.yml -i inventory.ini
		
node:
		ansible-playbook playbook/node.playbook.yml -i inventory.ini