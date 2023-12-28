 import { createRealmContext } from "@realm/react";
import Realm from "realm";
 

export class Todo extends Realm.Object {
    _id!:Realm.BSON.ObjectId
    description?:string
    completed!:boolean
    createdAt!:Date

    static schema = {
        name:'Todo',
        properties:{
            _id:'objectId',
            description:'string',
            completed:{type:'bool',default:false},
            createdAt:'date'
        },
    };

 }

export const todoContext = createRealmContext({
    schema:[Todo as any],
    onFirstOpen(realm){
        // realm.write(()=>{
            realm.create('Todo',{
                _id:new Realm.BSON.ObjectId,
                description:'learn Realm',
                completed:false,
                createAt:new Date()
            }),
            realm.create('Todo',{
                _id:new Realm.BSON.ObjectId,
                description:'data Of Two',
                completed:false,
                createAt:new Date()
            })
        // })
    }
 })
