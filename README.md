<div align="center"> 
<img <img src="https://static-00.iconduck.com/assets.00/cypress-icon-2048x2045-rgul477b.png" width="80"/>
<img <img src="https://brandslogos.com/wp-content/uploads/images/cucumber-logo.png" width="70"/>

 <h1>Cypress-framework+Cucumber</h1>
</div>

## ⚡️ Object for testing

Web site - [telnyx.com](https://telnyx.com/)

## 📦 Setup

1. Install [node.js](https://nodejs.org/en/) - JavaScript runtime environment
2. Clone git repository `git clone https://github.com/OleksandrBaior/Cypress_framework_TS_cucumber.git`
3. Install project dependencies specified in the package.json `npm install`

## ⚙️ Running Tests

To open the cypress tool use command:

```
npm run open:cypress
```

To run test in chrome browser:

```
npm run e2e:chrome:Macbook16
```

To run test in edge browser:

```
npm run e2e:edge:Macbook16
```

To run test in electron browser:

```
npm run e2e:electron:Macbook16
```

To run the specific spec:

```
npm run e2e:chrome:Macbook16 -- --spec "cypress/e2e/my-spec.feature"
```

To run the specific spec marked by tag:

```
npx cypress run --env tags="@[tag]" --browser chrome
```

## 📝 Cloud cypress report

Learn more about Cypress Cloud at - [Documentation](https://docs.cypress.io/guides/overview/why-cypress)

To open cloud cypress report - [Cloud reports](https://cloud.cypress.io/projects/paqboc/runs?branches=%5B%5D&committers=%5B%5D&flaky=%5B%5D&page=1&status=%5B%5D&tags=%5B%5D&tagsMatch=ANY&timeRange=%7B%22startDate%22%3A%222023-05-10%22%2C%22endDate%22%3A%222024-05-09%22%7D)

## 📜 Cypress HTML report

To open HTML cypress report - [html report](https://oleksandrbaior.github.io/Cypress_framework_TS_cucumber/)

## 🔑 License

[MIT](https://github.com/OleksandrBaior/Cypress_TS_cucumber?tab=MIT-1-ov-file)
