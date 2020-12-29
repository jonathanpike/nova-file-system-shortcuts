nova.commands.register("file-system-shortcuts.deleteFile", (workspace) => {
    var currentPath = workspace.activeTextEditor.document.path
    nova.fs.remove(currentPath)
});

nova.commands.register("file-system-shortcuts.renameFile", (workspace) => {
    var currentPath = workspace.activeTextEditor.document.path
    var currentDir = nova.path.dirname(currentPath)
    var currentBaseName = nova.path.basename(currentPath)
    
    var options = {
      "label": "New file name",
      "placeholder": currentBaseName
    }
    
    nova.workspace.showInputPanel("Enter a new name for the file:", options, function(result) {
        if (result) {
            var newPath = nova.path.join(currentDir, result)
            nova.fs.move(currentPath, newPath)
            workspace.openFile(newPath)
        }
    });
});

