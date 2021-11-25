function tseamAccount(arr) {
    let index = 0;
    let account = arr.shift().split(' ');
    let inputData = arr[index++];

    while (inputData !== 'Play!') {
        inputData = inputData.split(' ');
        
        for (let i = 0; i < inputData.length; i++){
            let command = inputData[i];
            let gameName = inputData[i+1];
            
            switch(command){
                case 'Install':
                    if(!account.includes(gameName)){
                        account.push(gameName)
                    }
                break;
                case 'Uninstall':
                    if(account.includes(gameName)){
                        let position = account.indexOf(gameName);
                        account.splice(position,1);
                    }
                break;
                case 'Update':
                    if(account.includes(gameName)){
                        let position = account.indexOf(gameName);
                        let updatedGame = account.splice(position,1);
                        updatedGame = updatedGame.join('')
                        account.push(updatedGame)
                    }
                break;
                case 'Expansion':
                    gameName = gameName.split('-');
                    let ex = gameName.pop();
                    gameName = gameName.toString()
                    let expr = null;
                    if(account.includes(gameName)){
                        expr = `${gameName}:${ex}`
                        let position = account.indexOf(gameName);
                        account.splice((position+1),0,expr);
                    }
                break;
                
            }
            break;
        }
            inputData = arr[index++];
    }
    console.log(account.join(' '));
}
tseamAccount(
    ['CS WoW Diablo',
'Install LoL',
'Uninstall WoW',
'Update Diablo',
'Expansion CS-Go',
'Play!']

)