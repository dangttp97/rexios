# react-native-rexios

Pure JS Redux, Axios and TanStack Query inspired network service

## Installation

```sh
npm install react-native-rexios
```

## Usage

```js
import {
  NetworkProvider,
  configureClient,
  useRequestClient,
} from 'react-native-rexios';

// 1. Create a client (optionally pass baseURL, headers, middlewares, etc.).
const client = configureClient({ baseURL: 'https://example.com' });

// 2. Use the provider to make the client available via context.
const App = () => (
  <NetworkProvider client={client}>
    <Root />
  </NetworkProvider>
);

// 3. Access the client anywhere below the provider.
const Root = () => {
  const requestClient = useRequestClient();

  const fetchTodos = async () => {
    const { data } = await requestClient.request('/todos', {
      method: 'GET',
    });
    console.log(data);
  };

  // ...
};
```

## Contributing

- [Development workflow](CONTRIBUTING.md#development-workflow)
- [Sending a pull request](CONTRIBUTING.md#sending-a-pull-request)
- [Code of conduct](CODE_OF_CONDUCT.md)

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
