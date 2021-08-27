# HOWTO Reproduce

1. Open this project in VS Code and run the extension in the development host (F5)
2. Run the `issue-theia-tasks: Run` and observe the task running a simple echo
3. Close VS Code and the dev host
4. Open the project inside Theia's development host
5. Run the command again

When running inside Theia, the code will enter the `resolveTask` method from our provider

## Noteworthy environment details

The extension is developped in TypeScript, and packaged using Webpack ; all from VSCode's generator using `yo code` and specifying this environement. The same issue occurs even when not using Webpack
