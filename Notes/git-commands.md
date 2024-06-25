# git basic commands

```bash

# initialize an empty repository
# this will create a metadata directory named .git
> git init

# check the status of working directory
> git status

# check the short status of working directory
> git status -s
# ??: untracked file (once)
# A : the file is present (added) in the staging area
#  M: the file is modified and present in working directory
# M : the file is modified and present in staging area
#

# add the file(s) to staging area
> git add <file(s)>

# add all the changes present in the current directory
> git add .

# add the file to the repository
> git commit -m <message>

# get the difference between the current version with respect to the last committed version
> git diff

# get all the logs from repository
> git log

# get all the logs from repository
# --oneline: short description
# --graph: show the hierarchy of commits
# --color: used color while showing graph
> git log --oneline --graph --color

# remove the changes made since last version
# restore the last version from repository
> git checkout <file name>

# soft reset:
# remove the changes from staging area
# or move the changes from stating are to working directory
> git reset

# hard reset:
# remove all the changes from staging area as well as from working directory
# NOTE: execute this command on your own risk
> git reset --hard

```
