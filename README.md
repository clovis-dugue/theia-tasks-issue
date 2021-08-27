# issue-theia-tasks

This project can (and should) be used as a starting point for developing any SIDE plugin.

## Warning

Before developing a plug-in, the developer should check that theia does indeed implement this part of VS Code's API.  
The link below provides a list but should not be the only source of trust as it may not be maintained.  
https://che-incubator.github.io/vscode-theia-comparator/status.html  

## Features

Once cloned, this project is a simple VSCode plugin that contributes a "issue-theia-tasks: Run" command.  
It is packed using webpack.

## Notes

- The `package.json` contains fields that must be manually changed by the developer for every project, such as `repository`
- If the build does not yield any error but the extension does not start, check that every recommanded extension is installed and that the watch task did not output any warning (it will only boot if it packs successfully)
