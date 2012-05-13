var storage = require('blaast/simple-data');

app.message(function(client, action, param) {
    console.log('request ini dari client dengan id-> ' + client.id);
    console.log('request ini dari client dengan user id-> ' + client.user.id);
    console.log('action=> ' + action);
    
    if (action === 'kirimText') {
        console.log('parameter yang di kirim: ');
        console.dir(param);
        storage.set(param.key, {data: param.text}, function(err, oldData) {
            console.log('Error -> ' + err);
            console.log('Old Data:');
            console.dir(oldData);
        });
        
        client.msg('hasil', {pesan: 'Simpan data Sukses'});
    }
});