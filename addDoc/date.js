const dateFin = function(delai, dateDeb) {
        //init variable
        var D_Deb = new Date(dateDeb);
        var D_Fin = new Date();
        //get year,month,day
        const year = D_Deb.getFullYear();
        const month = D_Deb.getMonth();
        const day = D_Deb.getDate();
        //calcul date end
        D_Fin.setYear(year);
        D_Fin.setMonth(month + delai);
        D_Fin.setDate(day);
        return D_Fin;
    }
    // const date = "2020-11-27";

// const df = dateFin(24, date);
// console.log(df)
module.exports = {
    dateFin
}