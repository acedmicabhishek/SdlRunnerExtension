const vscode = require('vscode');

function activate(context) {
    let disposable = vscode.commands.registerCommand('sdlrunner.runMakeAndExecute', () => {
        const terminal = vscode.window.createTerminal('SDL Runner');
        terminal.show();
        terminal.sendText('mingw32-make');
        terminal.sendText('./main_c.c');
    });

    context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
};
