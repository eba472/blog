This is Eba's personal blog. You can visit [here](https://enkhbaatar.vercel.app/projects).

### commands:
- **npm run dev**: Starts the development server.
- **npm run build**: Builds the app for production.
- **npm start**: Runs the built app in production mode.
- **npx next -v**: Check next version


Got initial boost from: [Learn Next.js](https://nextjs.org/learn).

```bash
mkdir ~/.vercel-eba472
vercel login --global-config ~/.vercel-eba472
alias vercel-eba472="vercel --global-config ~/.vercel-eba472"
vercel-eba472 link
vercel-eba472 --prod

vercel-eba472 env pull .env.vercel.backup
vercel-eba472 env ls
vercel-eba472 env ls production \
  | awk 'NR>3 && $1!="name" && $1!="" {print $1}' \
  | while read -r key; do
      vercel-eba472 env rm "$key" production --yes
    done

git config --local --list
git config user.name "eba472"
git config user.email "enkhbaatar472@gmail.com"


For global: git config --global user.name
```