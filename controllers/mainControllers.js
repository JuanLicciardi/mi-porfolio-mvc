module.exports = {
    home: (req,res) => {
        return res.render('index')

    } ,
    about: (req,res) =>{
        return res.render('about')
    }
}