let http = require('http');
let fs = require('fs');
let formidable = require('formidable');

http.createServer((req,res) => {

    if (req.url == '/fileupload') {
        let form = new formidable.IncomingForm();
        form.parse(req , (err,fields,files) => {
            let oldpath = //Your Old Path
            let newpath =  // Your New Path
            fs.rename(oldpath, newpath , (err) => {
                if (err) throw err;
                res.write('File Upload and moved');
                res.end()
            })
        })
    }else {
        res.writeHead(200 , {'Content-Type' : 'text/html'});
        res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
        res.write('<input type="file" name="fileupload"><br>');
        res.write('<input type="submit">');
        res.write('</form>');
        return res.end();
    }
}).listen(2000);
