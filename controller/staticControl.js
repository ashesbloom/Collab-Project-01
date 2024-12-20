
async function GetHomepage(req, res){
    return res.render('home');
};


module.exports = {
    GetHomepage,
}