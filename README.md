# Lendi Software Engineer (React) Technical Assessment

Technical test has already been precompiled and can be run locally using either of the below methods. 

##### Setup
Before running either of the below methods you will need to create a .env file with the credentials to mail-gun. You can use the included .env.sample.
```sh
    cp .env.sample .env
```

##### Docker (containerize)
```ssh
    docker build . -t lendi-test
    docker run -p 3000:3000 lendi-test
```
   

##### NPM
```ssh
    npm install
    npm run serve
```

## Solution
The solution is fully responsive, achieves 100% marks in Lighthouse for Accessibility, Best Practices & SEO

List of depenancies and use in solution.
| Depdancy | Usage | Url |
| ------ | ------ | ------ |
| React | Frontend framework |https://reactjs.org |
| NodeJs | Backend | https://nodejs.org |
| Express | Backend framework | https://expressjs.com |
| dotenv | Used to access .env in Node |https://github.com/motdotla/dotenv |
| Tailwindcss | Extreamly lightweight frontend css framework | https://tailwindcss.com |
| Craco | Used with Tailwindcss to override the default react-react-app settings  | https://github.com/gsoft-inc/craco |
| validatorjs | Used to provide both frontend and backend data validation | https://github.com/mikeerickson/validatorjs |
| mailgun-js | SDK used to send email | https://www.mailgun.com |

