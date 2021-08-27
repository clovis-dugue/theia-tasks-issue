import * as vscode from 'vscode';
import { customTaskProvider } from './taskProvider';

export function activate(context: vscode.ExtensionContext): void {
    console.log('Congratulations, your extension "issue-theia-tasks" is now active!');

    const disposable = vscode.commands.registerCommand('issue-theia-tasks.run', async () => {
        (await vscode.tasks.fetchTasks()).forEach((task) => {
            if (task.source === 'custom') {
                vscode.window.showInformationMessage(`Running task "${task.name}"`);
                vscode.tasks.executeTask(task);
            }
        });
    });

    context.subscriptions.push(disposable);
}

export function deactivate(): void {
    if (customTaskProvider) {
        customTaskProvider.dispose();
    }
}
