# eslint-plugin-sequelize

This is a repo to track some [Sequelize](https://www.npmjs.com/package/sequelize)
linting that we needed to do.

## Installation

`npm install --save-dev github:tebriel/eslint-plugin-sequelize`

## Configuration

```json
{
  "extends": [],
  "rules": {
    "sequelize/create-indexes-concurrently": "error"
  },
  "env": {},
  "plugins": [
    "sequelize"
  ]
}
```

## rules

### create-indexes-concurrently

If you're using Postgres, often you want to require that indexes are created
concurrently to avoid blocking new writes while they're calculated.

## Contributing

Please add new rules and then write a corresponding test harness in `/test`.
