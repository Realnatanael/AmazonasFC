const mongoose = require(`mongoose`);

const connectDatabase = () => {
    console.log("Wait connecting to the database");

    mongoose
    .connect(
        "mongodb+srv://Realnatanael:Amazonas123@cluster0.smsmd7l.mongodb.net/?retryWrites=true&w=majority",
        //{useNewUrlParser: true, useUnifiedTopology: true}//isso aqui não é mais necessário mas eu vou deixar pra caso dê algum erro kk
    )
    .then(() => console.log("MongoDB Atlas Connected"))
    .catch((error) => console.log(error)) //Como estou usando um código assícrono vou usar o then (caso funcionar) e o catch (caso não funcione)
};

module.exports = connectDatabase;