import { config } from '@onflow/fcl';
import { ACCESS_NODE_API, DISCOVERY_WALLET } from './constants';

config({
  //   'accessNode.api': 'https://access-testnet.onflow.org',
  'accessNode.api': ACCESS_NODE_API,
  //   'discovery.wallet': 'https://fcl-discovery.onflow.org/testnet/authn',
  'discovery.wallet': DISCOVERY_WALLET,
});
