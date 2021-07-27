class GeneroDAO{

    constructor(db){
        this.db = db
    }
    getAllGenero(){
        return new Promise((resolve, reject) =>{
            this.db.all("SELECT * FROM GENERO", (err, rows) =>{
                if(err){
                    reject(err)
                }else{
                    resolve(rows)
                }
            })
        })
    }}
    module.exports = GeneroDAO

