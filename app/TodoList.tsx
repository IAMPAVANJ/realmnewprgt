import { ScrollView, Pressable, StyleSheet, Text, TextInput, View, Touchable, TouchableOpacity } from "react-native"
import { todoContext,Todo } from "./realm";
import TodoData from "./Todo";
import Realm from "realm";
import { useCallback, useState } from "react";
const {useQuery,useRealm} = todoContext;
interface ItemInterface {
    completed : boolean,
    description : string,
    createdAt :string
    _id :string
   };
   
export const TodoList = ()=>{
    const todos = useQuery(Todo);
    const realm = useRealm();
    console.log(todos,"todos");
    const [newTodoText,setNewTodoText] = useState<string>('');
    const  addTodo = useCallback(()=>{
        if(newTodoText !==""){
            realm.write(()=>{
                realm.create('Todo',{
                    _id:new Realm.BSON.ObjectId,
                    description:newTodoText,
                    completed:false,
                    createdAt:new Date()
                })
            })
        setNewTodoText('');
        }else{
            return;
        }
        setNewTodoText('');
    },[realm,newTodoText])

    const handleDelete = (id:any)=>{

    }   
    
    return(
        <ScrollView>
            <Text style={styles?.textStyle}>Came in Todo List</Text>
            <View style={{
                display:'flex',
                flexDirection:'row',
                alignItems:'center'
            }}>
                <TextInput style={styles.textInput} placeholder='Add Todo'
                value={newTodoText}
                keyboardType="default"
                onChangeText={(text)=>{setNewTodoText(text)}}
                />
                <Pressable onPress={addTodo}>
                    <Text style={{
                        fontSize: 40,
                        padding:10,
                        marginLeft:20,
                        backgroundColor:'green',
                        borderRadius:50
                    }}>+</Text>
                </Pressable>
            </View>


        {todos.length > 0 && todos.map((item,index)=>{
            return(
                <View key={index} style={{
                    flexDirection:'row',
                    justifyContent:'space-around'
                }}>
                        <Text 
                        style={styles.text}
                        >{item.description}</Text>
                        <TouchableOpacity onPress={()=>handleDelete(item._id)}>
                            <Text>Del</Text>
                        </TouchableOpacity>
                    </View>
            )
        })}

        </ScrollView>
    )
}


const styles = StyleSheet.create({
    
    textStyle:{
        fontSize:20
    },
    text:{
        fontSize:20
    },
    textInput:{
        width:"80%",
        borderColor:'green',
        borderWidth:2
    }
})
