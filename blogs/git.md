## Working with multiple origins
git remote -v
git pull another-origin master
g pull origin-gertech dev
g push origin-gertech

## Add Your SSH Key to the SSH-Agent:
- Start the ssh-agent in the background: 
eval "$(ssh-agent -s)".
- Add your SSH private key to the ssh-agent: 
ssh-add ~/.ssh/linus

## Naming branches and commit messages
- Example commit message: 	
chore: setup eslint, prettier, pre-commit
- Example branch name
chore/setuo

## Stash
git stash save -u "my_stash_name"
git stash list
git stash apply stash@{0}
- -u flag will save newly created files

## Create new branch from dev
git branch feature-branch origin/dev

## Abort git merge
git merge --abort