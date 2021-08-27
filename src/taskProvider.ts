import * as vscode from 'vscode';

export const customTaskProvider = vscode.tasks.registerTaskProvider(
    'custom',
    {
        provideTasks: () => {
            const definition = new CustomTaskDefinition(
                'echo',
                ['hello', 'theia'],
                'custom',
            );
            return [
                new vscode.Task(
                    definition,
                    vscode.TaskScope.Workspace,
                    definition.executable,
                    definition.kind,
                    new vscode.ShellExecution(`${definition.executable} ${definition.arguments.join(" ")}`)
                )
            ];
        },
        resolveTask(task: vscode.Task): vscode.Task | undefined {
            vscode.window.showErrorMessage('entered resolveTask()');
            return new vscode.Task(
                task.definition,
                vscode.TaskScope.Workspace,
                task.name ? task.name : task.definition.executable,
                'custom',
                new vscode.ShellExecution(task.definition.executable + " " + task.definition.arguments.join(" "))
            );
        }
    }
);

class CustomTaskDefinition implements vscode.TaskDefinition {
    readonly type: string;
    executable: string;
    arguments: string[];
    kind: string;

    constructor(executable: string, arg: string[], kind: string) {
        this.type = 'custom';
        this.executable = executable;
        this.arguments = arg;

        this.kind = kind;
    }
}