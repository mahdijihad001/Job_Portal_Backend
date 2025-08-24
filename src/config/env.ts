interface IEnv{
    MONGO_URI : string,
    PORT : string,
    NODE_ENVIRONMENT : string
};


const lodaEnvironmentVariables = () : IEnv =>{
    const requiredEnv = ["MONGO_URI" , "PORT" , "NODE_ENVIRONMENT"];

    requiredEnv.forEach((key) =>{
        if(!process.env[key]){
            throw new Error(`Required Environment missing : ${key}`);
        }
    });

    return {
        MONGO_URI : process.env.MONGO_URI as string,
        PORT : process.env.PORT as string,
        NODE_ENVIRONMENT : process.env.NODE_ENVIRONMENT as string
    }
};

export const envVars = lodaEnvironmentVariables();