What PID is using 5173 port
`lsof -i :5173`

Kill the PID
`kill -9 83051`



eval "$(ssh-agent -s)"
ssh-add ~/.ssh/linus
