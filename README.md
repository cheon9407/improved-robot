$ pip3 install virtualenv
$ virtualenv -p python3 env
$ source env/bin/activate
```
In the virtual environment, run

```
$ pip install -r requirements.txt
```
Install ansible roles.
```
$ ansible-galaxy install -r requirements.yml -p roles/
```