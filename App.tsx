/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';



import { todoContext } from './app/realm';
import { TodoList } from './app/TodoList';
const {RealmProvider} = todoContext;


function App(): React.JSX.Element {

  return (
    <SafeAreaView>
      <TodoList/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

});

const AppWrapper = ()=>{
  return(
    <RealmProvider>
      <App/>
    </RealmProvider>
  )
}

export default AppWrapper;
