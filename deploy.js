var FtpDeploy = require("ftp-deploy");
var ftpDeploy = new FtpDeploy();
 
var config = {
    user: "3t4n@abcoseguros.com",
    // Password optional, prompted if none given
    password: "Abco#2020",
    host: "ftp.abcoseguros.com",
    port: 21,
    localRoot: __dirname + "/www",
    remoteRoot: "/public_html/",
     include: ["*", "**/*"],      // this would upload everything except dot files
    // e.g. exclude sourcemaps, and ALL files in node_modules (including dot files)
    exclude: ["dist/**/*.map", "node_modules/**", "node_modules/**/.*", ".git/**"],
    // delete ALL existing files at destination before uploading, if true
    deleteRemote: false,
    // Passive mode is forced (EPSV command is not sent)
    forcePasv: true
};
 

// use with callback
ftpDeploy.deploy(config, function(err, res) {
    if (err) console.log(err);
    else console.log("finished:", res);
});