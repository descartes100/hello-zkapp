# Mina zkApp

This is a zkApp that stores a number as on-chain state and contains logic to only allow this number to be replaced by its square (e.g. 2 -> 4 -> 16...).

The [smart contract](https://berkeley.minaexplorer.com/transaction/CkpZ9JEgc4Wuaim35P7wWmo2n7GnBh7hoE5nn4wBwUH8eso7AqUk9) is published on berkeley testnet.

## How to build

```sh
npm run build
```

## How to run tests

```sh
npm run test
npm run testw # watch mode
```

## How to run coverage

```sh
npm run coverage
```

## License

[Apache-2.0](LICENSE)
