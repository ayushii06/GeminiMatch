import {NextAuthOptions} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions:NextAuthOptions = {
    providers:[CredentialsProvider({
        name:"Credentials",
        credentials:{
            email: {label:"Email",type:"text"},
            password:{label:"Password",type:"text"},
            firstName:{label:"FirstName",type:"text"},
            lastName:{label:"LastName",type:"text"},
        },
        async authorize(credentials){
            if(!credentials?.email || !credentials?.password){
                throw new Error("Missing email or password");
            }

            try {
                
            } catch (error) {
                
            }
        }
    })],

    callbacks:{
        async jwt(){},

        async session({session,token}){
            if(session.user){
                
            }
        }
    },
    session:{
        strategy:"jwt"
    }
}