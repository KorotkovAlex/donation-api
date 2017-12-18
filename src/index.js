//geth --datadir ./ init CustomGeneris.json
//geth --identity "myTestNode" --datadir ./ --networkid 1999 --rpcport 8545 --rpcaddr 127.0.0.1 --port 30303 --rpc --rpcapi="db,eth,net,web3,personal" --nodiscover --rpccorsdomain "*" --ipcpath ~/Library/Ethereum/geth.ipc  console
import { app } from './app';

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
