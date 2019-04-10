SSCCE for a Flow issue with optional type arguments for generic classes.

# How to test:

1. Install dependencies with `yarn`

2. Open folder with VSCode & [flow-for-vscode](https://github.com/flowtype/flow-for-vscode) plugin
or query Flow's LSP server using some other method

3. Open index.js and Flow plugin's output or the LSP server's log file in
"_/tmp/flow/something-flow-poly-t-issue.log_"

4. Attempt to invoke "go to definition" LSP command for `this.foo()` in
method `bar` 

4. The following error should appear to the plugin's output and/or to the log file

```text
[Error - ] Request textDocument/definition failed.
  Message: (Failure
   "(Failure \"cannot instantiate non-class type PolyT\")\
  \nRaised at file \"pervasives.ml\", line 32, characters 17-33\
  \nCalled from file \"src/typing/members.ml\", line 372, characters 19-42\
  \nCalled from file \"src/common/utils/utils_js.ml\", line 81, characters 21-26\
  \nCalled from file \"src/typing/members.ml\", line 548, characters 8-48\
  \nCalled from file \"src/typing/members.ml\", line 484, characters 25-81\
  \nCalled from file \"src/server/command_handler/getDef_js.ml\", line 76, characters 22-47\
  \nCalled from file \"src/server/command_handler/getDef_js.ml\", line 113, characters 13-47\
  \nCalled from file \"src/server/command_handler/getDef_js.ml\", line 182, characters 8-37\
  \nCalled from file \"src/server/command_handler/getDef_js.ml\", line 211, characters 42-91\
  \nCalled from file \"src/core/lwt.ml\", line 2101, characters 16-20\
  \n")
  Code: -32001
```
