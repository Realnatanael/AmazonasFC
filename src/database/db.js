import mongoose from "mongoose";

const connectDatabase = () => {
    console.log("Wait connecting to the database");

    mongoose
    .connect( process.env.MONGODB_URI ,
        //{useNewUrlParser: true, useUnifiedTopology: true}//isso aqui não é mais necessário mas eu vou deixar pra caso dê algum erro kk
    )
    .then(() => console.log("MongoDB Atlas Connected"))
    .catch((error) => console.log(error)) //Como estou usando um código assícrono vou usar o then (caso funcionar) e o catch (caso não funcione)
};

export default connectDatabase;