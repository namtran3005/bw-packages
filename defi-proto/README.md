# defi-proto

## Getting started
- Install buf (https://docs.buf.build/installation)
- Install go `brew install golang`
- Run `pnpm install` in root directory
- Recommended node version: v14.x

## How to develop
- proto definitions should be implemented according to the [Google style guide](https://developers.google.com/protocol-buffers/docs/style) and also keeping in mind the [Buf style guidelines](https://docs.buf.build/best-practices/style-guide) (since we use this for linting)
- syntax version should be `proto3`
- to mitigate the issue mentioned in the next section (`How to build`), non-primitive types should be marked required if they are intended to be required, as in the following example 
```
message GetAccountResponse {
  Account account = 1;  // @required
}
```
- this is not necessary for primitive types
- optional fields should be marked as `optional` in the standard proto3 way 
```
message ListOrdersRequest {
  string bvdh_entity_id = 1;
  OrderListPagination pagination = 2; // @required
  optional OrderListFilter filter = 3;
}
```

## How to build
- compiling the proto definitions into typescript is done within `src/scripts/compile.go` by leveraging the `grpc_tools_node_protoc` tool
- furthermore this golang script does some important changes to the created ts files, as a sort of after compilation step, to patch certain declarations that cannot be influenced through `grpc_tools_node_protoc` flags
- for instance it replaces `...ServiceService` within vars by just `Service` and also automatically creates `src/index.ts`
- one major caveat of current proto defintion compilers, including the one which is currently used in this repo, is the lack of required non-primitive types (i.e. sub-messages) which get transpiled into optional types  at the typescript stubs
- to mitigate this "flaw" the build script (`src/scripts/compile.go`) parses each ts stub file (within `src/compiled_proto`) and removes optionals from types where the previous line is marked by a `"/** @required */"` comment, so e.g. 
```
availableBalance?: Balance; --> availableBalance: Balance;
```
- the patterns used for parsing and modifying these files are customized to the output of the `grpc_tools_node_protoc` at version `5.3.0`, thus its recommended to be very careful when trying to update this dependency to a newer version
- after adding changes to `src/scripts/compile.go` a new binary should be created; this can be done by 
```
pnpm build:go
```

- Running the build script is done via
```
pnpm build
```

## How to publish

- Depending on the changes made, update the package version in the package.json file based on [semver](https://semver.org/).
- Make sure your Access token has the `packages:write` scope. You can double check [here](https://github.bitwa.la/settings/tokens/). Your valid token should be stored in `~/.npmrc` in order to be authenticated with the Github npm registry.
- Run `pnpm publish` and check the output to confirm that it worked correctly.

## Recommended VS-Code Extension
- `zxh404.vscode-proto3`
- after installing the extension add the following to your settings.json:
```
"protoc": {
    "path": "/usr/local/bin/protoc",
    "compile_on_save": true,
    "options": [
      "--proto_path=${workspaceRoot}/src/proto/",
    ]
  }
```
