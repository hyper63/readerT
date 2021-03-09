<h1 align="center">readerT</h1>
<p align="center">ReaderR is a Transformer Type that takes a Monad and allows the caller to embed
context that can be accessed during the transformation pipeline. This gives you the ability to
inject dependencies or configuration information at runtime.</a>
</p>
<p align="center">
  <a href="https://github.com/hyper63/readerT/tags/"><img src="https://img.shields.io/github/tag/hyper63/readerT" alt="Current Version" /></a>
  <img src="https://github.com/hyper63/readerT/workflows/.github/workflows/deno.yml/badge.svg" />

</p>

---

## Table of Contents

- [Getting Started](#getting-started)
- [Installation](#installation)
- [Features](#features)
- [Methods](#methods)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

see mod_test.ts

```ts
```

## Installation

This is a Deno module available to import from https://nest.land/package/readerT

deps.js

```
export { default as ReaderT } from 'https://x.nest.land/readerT@0.0.1/mod.js'
```

## Features

- runWith - inject config or dependencies in pipeline
- ask - during pipeline ask for dependencies
- lift - lift a monad into ReaderT

## Contributing

Pull Requests are welcome

## License

MIT

## Acknowledgements

This library was inspired by `Crocks` ReaderT implementation -
https://crocks.dev/docs/crocks/ReaderT.html
